---
title: Reverse Proxy
description: Was der Reverse Proxy vor kramr leisten muss – TLS, Header, Limits, Einbettungen.
audience: admin
order: 20
---

# Reverse Proxy

TLS und die öffentliche Adresse gehören an den Proxy. Wie er die Anwendung
erreicht, hängt davon ab, wo er läuft:

- **Proxy als Container (Regelfall):** im selben Docker-Netz wie der Dienst
  `app`, Ziel ist `http://app:3000`. Ein veröffentlichter Port ist dann nicht
  nötig; entferne den `ports`-Eintrag des Dienstes `app`. Liegt der Proxy in
  einem anderen Compose-Projekt, hängen beide an einem gemeinsamen externen
  Netz.
- **Proxy auf dem Host:** Der Port wird nur auf der Loopback-Adresse des
  Servers veröffentlicht, nicht im Netz. Der Proxy leitet dorthin weiter.

## Anforderungen

Jeder Proxy, der diese Punkte erfüllt, ist geeignet. Es gibt keine
festgelegte Liste unterstützter Produkte.

1. **TLS endet am Proxy.** Der Weg zur Anwendung ist Klartext und nie von
   außen erreichbar.
2. **Weitergereichte Header:** `X-Forwarded-For`, `X-Forwarded-Proto` und
   `X-Forwarded-Host` müssen stimmen. Setze dazu
   `KRAMR_SERVER_TRUST_PROXY=true`. Sonst sehen Logs und das Rate-Limit alle
   Clients unter derselben Adresse.
3. **WebSocket-Upgrade** wird durchgereicht (`Connection`, `Upgrade`).
4. **`/healthz` ohne Rate-Limit**, damit ein externer Monitor sich nicht
   selbst aussperrt.
5. **Body-Limit mindestens 11 MB.** Bild-Uploads sind bis 10 MB je Datei
   erlaubt; ein engeres Limit weist Fotos ab, bevor die Anwendung sie sieht.
6. **Anfrage-Links nicht protokollieren.** Der Link einer Buchungsanfrage
   steht im Pfad (`/embed/request/…` und `/api/public/requests/…`) und ist
   der einzige Zugang zur Anfrage. Schalte für diese Präfixe sowohl das
   Zugriffs- als auch das Fehlerprotokoll des Proxys ab.

## Einbettungen

Die Seiten unter `/embed/*` legen selbst fest, welche Websites sie einrahmen
dürfen. Der Proxy darf dafür:

- **weder `X-Frame-Options` noch eine eigene `Content-Security-Policy`**
  setzen oder die der Anwendung überschreiben, sonst wird die Einbettung
  still blockiert;
- `Referrer-Policy` und `Cache-Control` der Anwendung nicht ersetzen;
- die öffentlichen Anfragen nicht zu eng begrenzen: Eine Seite der
  eingebetteten Materialliste braucht etwa 25 Anfragen.

Die erlaubten Websites trägt ein Admin unter *Verwaltung → System →
Website-Einbindung* ein: nur Schema, Host und optional Port, zum Beispiel
`https://www.example.org`, ohne Pfad und ohne Platzhalter. Solange die Liste
leer ist, darf keine fremde Website einbetten.

Buchungsanfragen von Websites brauchen funktionierenden Mailversand, weil der
Link zur Anfrage per E-Mail verschickt wird.

## Beispiele

Die Beispiele sind Vorlagen, keine Liste unterstützter Produkte.
Sie erfüllen die Anforderungen oben und gehen von einem Proxy-Container im selben Docker-Netz aus.
Läuft der Proxy auf dem Host, ersetze `app:3000` durch die Loopback-Adresse des Hosts und den Port aus `KRAMR_PUBLISH_PORT`.

### NGINX Proxy Manager

Der Proxy übernimmt das grobe Rate-Limit am Netzrand.
Die Anwendung ergänzt ein feineres Limit auf den Anmelde-Routen.
Trage Folgendes in die erweiterte Konfiguration des Proxy-Hosts ein (*Custom Nginx Configuration*):

```nginx
# --- http-Ebene: Rate-Limit-Zonen ---
limit_req_zone $binary_remote_addr zone=kramr_auth:10m rate=10r/m;
limit_req_zone $binary_remote_addr zone=kramr_all:10m  rate=120r/m;

client_max_body_size 11m;                      # Bild-Upload bis 10 MB; JSON begrenzt die Anwendung selbst

proxy_set_header Host              $host;
proxy_set_header X-Forwarded-Host  $host;
proxy_set_header X-Forwarded-Proto $scheme;

# WebSocket-Upgrade
proxy_http_version 1.1;
proxy_set_header Upgrade    $http_upgrade;
proxy_set_header Connection $connection_upgrade;

location = /healthz {
    proxy_pass http://app:3000;                # kein limit_req
}

location /api/auth/ {
    limit_req zone=kramr_auth burst=5 nodelay;
    proxy_pass http://app:3000;
}

# Anfrage-Links: der Pfad ist ein Zugangsnachweis, nicht protokollieren
location ~* ^/(embed/request|api/public/requests)/ {
    access_log off;
    error_log  /dev/null;
    limit_req zone=kramr_all burst=40 nodelay;
    proxy_pass http://app:3000;
}

location / {
    limit_req zone=kramr_all burst=40 nodelay;
    proxy_pass http://app:3000;
}
```

`$connection_upgrade` stammt aus dem Standard-`map` des NGINX Proxy Managers (`map $http_upgrade $connection_upgrade { default upgrade; "" close; }`).
In einer nackten NGINX-Installation ergänzt du das `map` einmal auf der `http`-Ebene.

Das Grob-Limit `kramr_all` muss eine Seite der eingebetteten Materialliste mit rund 25 Anfragen tragen.
Wer enger begrenzt, sieht dessen `429` vor dem der Anwendung.

### Caddy

Caddy besorgt TLS selbst und setzt `X-Forwarded-*` sowie den WebSocket-Upgrade von sich aus:

```caddy
kramr.example.org {
    encode zstd gzip
    request_body {
        max_size 11MB         # Bild-Upload bis 10 MB; JSON begrenzt die Anwendung selbst
    }

    # /healthz ohne Rate-Limit
    @healthz path /healthz
    reverse_proxy @healthz app:3000

    # feines Limit auf den Anmelde-Routen, zusätzlich zu dem der Anwendung
    @auth path /api/auth/*
    rate_limit @auth {
        zone auth {
            key    {remote_host}
            events 10
            window 1m
        }
    }

    reverse_proxy app:3000
}
```

`rate_limit` braucht ein Caddy mit dem Modul `caddy-ratelimit`, zum Beispiel einen `xcaddy`-Build.
Ohne das Modul lässt du den `@auth`-Block weg; das Limit der Anwendung bleibt.

Caddy schreibt ein Zugriffsprotokoll nur mit der Direktive `log`; das Beispiel hat keine.
Wer `log` ergänzt, nimmt die Anfrage-Links aus (ab Caddy 2.8 `log_skip`, davor `skip_log`):

```caddy
    @requestLinks path_regexp (?i)^/(embed/request|api/public/requests)/
    log_skip @requestLinks
```

Einen Handler-Fehler, etwa ein `502` bei nicht erreichbarer Anwendung, schreibt Caddy auch ohne `log` samt Adresse in sein Standardprotokoll.
Einen Ausschluss nur für die Anfrage-Links gibt es dafür nicht.
Du erfüllst Anforderung 6, indem du diesen Logger in den globalen Optionen ausschließt (dann fehlen alle Handler-Fehler) oder das Standardprotokoll nur kurz aufbewahrst:

```caddy
{
    log default {
        exclude http.log.error
    }
}
```

### Caddy mit caddy-docker-proxy

`compose.caddy.yaml` im Projekt ist ein optionales Overlay.
Es fügt einen `caddy-docker-proxy`-Container hinzu und hängt die Regeln als Labels an den Dienst `app`:

```bash
docker compose -f compose.yaml -f compose.caddy.yaml up -d
```

Die Anforderungen oben gelten unverändert.
Das Overlay ist bewusst nicht Teil von `compose.yaml`, damit dort kein Proxy fest verdrahtet ist.

Andere Proxys wie Traefik sind zulässig, solange sie die Anforderungen erfüllen.
Dafür gibt es kein Beispiel.
