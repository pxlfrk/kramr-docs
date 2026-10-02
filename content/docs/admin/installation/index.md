---
title: Installation
description: kramr mit Docker Compose, PostgreSQL und einem Reverse Proxy auf einem eigenen Server betreiben.
audience: admin
order: 10
---

# Installation

kramr läuft als ein Anwendungs-Container zusammen mit PostgreSQL. Davor
steht ein Reverse Proxy, der TLS beendet. Die Anwendung selbst ist nie
direkt aus dem Internet erreichbar.

## Voraussetzungen

- Ein Server mit Docker und dem Compose-Plugin
- Ein Reverse Proxy (zum Beispiel Caddy oder NGINX Proxy Manager)
- Ein DNS-Eintrag, der auf den Server zeigt
- Ein OIDC-Anbieter für die Anmeldung, siehe [Anmeldung und Rollen](../configuration/anmeldung-und-rollen.md)

## Schritte

1. **Dateien holen:** Compose-Datei und Produktivvorlage laden, ohne das
   Repository zu klonen:

   ```bash
   mkdir -p /opt/kramr && cd /opt/kramr
   curl -fsSL -o compose.yaml \
     https://raw.githubusercontent.com/pxlfrk/kramr/main/compose.yaml
   curl -fsSL -o .env \
     https://raw.githubusercontent.com/pxlfrk/kramr/main/ops/production.env.example
   ```

   Verwende die Produktivvorlage, nicht die Entwicklungsvorlage des Projekts:
   Diese enthält Werte, die hinter einem gemeinsam genutzten Proxy unsicher
   sind.

2. **Client beim OIDC-Anbieter anlegen:** Redirect-URI
   `<öffentliche-url>/api/auth/callback`, Post-Logout-URI
   `<öffentliche-url>/`, Scopes mindestens `openid profile email`.
3. **`.env` ausfüllen:** Datenbankpasswort, die drei OIDC-Werte, die
   öffentliche URL und `KRAMR_IMAGE_TAG` mit der gewünschten
   [Version](https://github.com/pxlfrk/kramr/releases). Das Tag ist immer eine
   feste Version, nie `latest`. Alle Variablen:
   [Umgebungsvariablen](../configuration/umgebungsvariablen.md).
4. **Starten:**

   ```bash
   docker compose pull
   docker compose up -d
   docker compose ps
   ```

   Der Dienst `app` muss als `healthy` erscheinen. Die Datenbank-Migrationen
   laufen automatisch, bevor die Anwendung Anfragen annimmt.
5. **Ersten Administrator festlegen:** siehe
   [Erster Administrator](../runbooks/erster-administrator.md).
6. **Reverse Proxy einrichten:** siehe [Reverse Proxy](reverse-proxy.md).
7. **Backup einrichten und die Wiederherstellung einmal proben:** siehe
   [Backup und Wiederherstellung](../backup/index.md). Ein Backup, das sich
   nicht zurückspielen lässt, ist keines.

## Eigenschaften des Images

- Läuft als Nicht-Root-Benutzer.
- Enthält nur das Kompilat, das Frontend und die Produktionsabhängigkeiten.
- Enthält keine Geheimnisse; alles Vertrauliche kommt aus der Umgebung.
- Hat einen eigenen Health-Check auf `/healthz`.
- Enthält weder Shell noch `wget`; ein `docker compose exec` mit
  Shell-Befehl in den Anwendungs-Container schlägt daher fehl.

## Netz und Volumes

Die Datenbank hat keinen veröffentlichten Port. Zwei benannte Volumes halten
den Zustand: `db-data` (Datenbank) und `uploads` (Material-Bilder). Beide
gehören ins Backup.
