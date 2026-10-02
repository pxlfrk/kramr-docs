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
