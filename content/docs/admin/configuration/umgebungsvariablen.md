---
title: Umgebungsvariablen
description: Die wichtigsten Umgebungsvariablen von kramr mit Bedeutung und Standardwert.
audience: admin
order: 21
---

# Umgebungsvariablen

Die [Produktivvorlage](https://pxlfrk.github.io/kramr-docs/downloads/production.env.example) enthält die
Variablen, die du für den Betrieb setzt. Diese Seite führt alle auf. Echte Werte gehören nur in die `.env` auf dem Server. Ungültige
Werte führen zu einem Startabbruch mit einer klaren Meldung.

<!-- env-registry:start - generated from ops/env-registry.yaml, do not edit -->

## Pflicht im Compose-Betrieb

| Variable | Pflicht | Standard | Bedeutung |
| --- | --- | --- | --- |
| `KRAMR_DB_NAME` | ja | - | Name der Datenbank. Kein Standardwert; der Stack startet lieber nicht, als mit einem eingebauten Namen zu laufen. |
| `KRAMR_DB_USER` | ja | - | Benutzer der Datenbank. |
| `KRAMR_DB_PASSWORD` | ja | - | Passwort der Datenbank. Kein Standardwert. Setze es vor dem ersten Start; die Datenbank behält das, mit dem sie angelegt wurde. |
| `KRAMR_IMAGE_TAG` | ja | - | Zu startende Version, zum Beispiel `v1.2.1`. Kein Standardwert, nie `latest`. |
| `KRAMR_SERVER_PUBLIC_URL` | ja (mit Compose) | - | Externe Adresse der Anwendung. Basis der OIDC-Rückkehradresse `<Adresse>/api/auth/callback`. Compose verlangt sie, damit eine vergessene Adresse den Start verhindert. |
| `KRAMR_OIDC_ISSUER_URL` | ja | - | Issuer des OIDC-Anbieters, zeichengenau wie im `iss`-Claim (ein abschließender Schrägstrich bleibt erhalten). Alle weiteren Adressen ermittelt die Anwendung per Discovery. |
| `KRAMR_OIDC_CLIENT_ID` | ja | - | Client-ID der Anwendung beim Anbieter. |
| `KRAMR_OIDC_CLIENT_SECRET` | ja | - | Client-Secret der Anwendung. Steht nur in der Umgebung, nie in der Datenbank. |

## Server

| Variable | Pflicht | Standard | Bedeutung |
| --- | --- | --- | --- |
| `KRAMR_SERVER_TRUST_PROXY` | nein | `false` (Vorlage: `true`) | `X-Forwarded-*` vertrauen. Hinter einem Proxy `true`, bei direkter Erreichbarkeit `false`, sonst kann ein Client seine Adresse und das Protokoll fälschen. |
| `KRAMR_SERVER_FORCE_HTTPS` | nein | `false` | HTTP auf die öffentliche Adresse umleiten. Normalerweise Aufgabe des Proxys. |
| `KRAMR_SERVER_BODY_LIMIT` | nein | `1mb` | Größe von JSON- und Formular-Anfragen; größere werden mit `413` abgelehnt. Bild-Uploads haben ein eigenes Limit von 10 MB je Datei. |
| `KRAMR_SERVER_PORT` | nein | `3000` | Port, auf dem die Anwendung im Container lauscht. Das Image setzt ihn; der Compose-Stack ändert ihn nicht. |
| `KRAMR_DB_URL` | ja (ohne Compose) | - | PostgreSQL-Verbindungsstring. Compose baut ihn aus `KRAMR_DB_NAME`, `KRAMR_DB_USER` und `KRAMR_DB_PASSWORD`. |
| `KRAMR_PUBLISH_PORT` | nein | `3000` | Port auf der Loopback-Adresse des Hosts, nur nötig, wenn der Proxy auf dem Host läuft. |
| `KRAMR_LOG_LEVEL` | nein | `info` | `fatal`, `error`, `warn`, `info`, `debug` oder `trace`. Wirkt nach einem Neustart des Containers. |
| `KRAMR_PATH_UPLOADS` | nein | im Image `/app/uploads` | Ort der Material-Bilder; im Compose-Stack das Volume `uploads`. Gehört ins Backup. |
| `KRAMR_UPDATE_GITHUB_REPO` | nein | Projekt-Repository | Repository (`Eigentümer/Name`), gegen dessen neuestes Release die Versionsprüfung vergleicht. Forks tragen ihr eigenes ein. |

## Anmeldung

| Variable | Pflicht | Standard | Bedeutung |
| --- | --- | --- | --- |
| `KRAMR_OIDC_SCOPES` | nein | `openid profile email` | Angeforderte Scopes. Im Gruppenmodus den Scope ergänzen, der die Gruppen liefert. |
| `KRAMR_OIDC_ROLES_SOURCE` | nein | `local` | Quelle der Rollen: `local` (eingebaute Nutzerverwaltung) oder `groups` (OIDC-Gruppen). Ein Wechsel setzt beim Start alle Rollen um und beendet alle Sitzungen. |
| `KRAMR_OIDC_ROLES_GROUPS_CLAIM` | nein | `groups` | Name des Claims im ID-Token, der die Gruppen trägt. Nur im Gruppenmodus gelesen. |
| `KRAMR_OIDC_ROLES_GROUP_ADMIN` | im Gruppenmodus | - | Name der Gruppe, die auf die Rolle Admin abgebildet wird. Groß- und Kleinschreibung zählen. |
| `KRAMR_OIDC_ROLES_GROUP_STAFF` | nein | - | Gruppe für die Rolle Staff. |
| `KRAMR_OIDC_ROLES_GROUP_READ_ONLY` | nein | - | Gruppe für die Rolle ReadOnly. Zwei Rollen auf dieselbe Gruppe brechen den Start ab; wer keine gemappte Gruppe hat, bekommt keine Rechte. |
| `KRAMR_OIDC_ROLES_REFRESH_MINUTES` | nein | `60` | Nur im Gruppenmodus. Höchstalter einer Sitzung ab Anmeldung; danach ist eine neue Anmeldung nötig. Das ist die Frist, binnen der ein Rechteentzug beim Anbieter wirkt. Ganze Zahl ab `5`. |
| `KRAMR_AUTH_BOOTSTRAP_ADMIN_SUBJECT` | nein | leer | `sub` des ersten Administrators, nur für die Ersteinrichtung. Im Gruppenmodus wirkungslos, für den Wechsel zurück auf `local` aber Pflicht. |
| `KRAMR_AUTH_RATE_LIMIT` | nein | `20` | Anfragen je Client und Zeitfenster auf den Anmelde-Routen. |
| `KRAMR_AUTH_RATE_WINDOW_SECONDS` | nein | `60` | Länge dieses Zeitfensters in Sekunden. |

Die Variablen für Rollen aus Gruppen stehen mit Beispiel unter [Anmeldung und Rollen](anmeldung-und-rollen.md).

## Öffentliche Anfragen (Einbettung)

| Variable | Pflicht | Standard | Bedeutung |
| --- | --- | --- | --- |
| `KRAMR_PUBLIC_RATE_LIMIT_READ` | nein | `600` | Lesende Anfragen je Client-Adresse und Zeitfenster auf `/api/public/*`. Eine Seite der eingebetteten Materialliste sind eine Listen-Anfrage und bis zu 24 Vorschaubilder. |
| `KRAMR_PUBLIC_RATE_LIMIT_WRITE` | nein | `20` | Schreibende Anfragen je Client-Adresse und Zeitfenster, getrennt gezählt. |
| `KRAMR_PUBLIC_RATE_WINDOW_SECONDS` | nein | `60` | Länge des Zeitfensters beider Budgets in Sekunden. |

Ohne `KRAMR_SERVER_TRUST_PROXY=true` teilen sich alle Besucher die Adresse des Proxys und damit ein Budget.

## Mail und Webhook

| Variable | Pflicht | Standard | Bedeutung |
| --- | --- | --- | --- |
| `KRAMR_NOTIFICATION_SMTP_HOST` | nein | - | Mailserver. Ohne diese Variable ist der Mailversand nicht eingerichtet; die Anwendung startet trotzdem. Die übrigen `KRAMR_NOTIFICATION_SMTP_*` wirken nur, wenn sie gesetzt ist. |
| `KRAMR_NOTIFICATION_SMTP_PORT` | nein | `587` | Port des Mailservers. |
| `KRAMR_NOTIFICATION_SMTP_SECURE` | nein | `false` | Verbindung von Anfang an verschlüsseln (üblich bei Port 465). |
| `KRAMR_NOTIFICATION_SMTP_USER` | nein | - | Benutzer am Mailserver; leer für ein Relay ohne Anmeldung. |
| `KRAMR_NOTIFICATION_SMTP_PASSWORD` | nein | - | Passwort am Mailserver. |
| `KRAMR_NOTIFICATION_SMTP_FROM` | sobald der Mailserver gesetzt ist | - | Absenderadresse jeder ausgehenden Mail. |
| `KRAMR_NOTIFICATION_WEBHOOK_ALLOWED_HOSTS` | nein | leer | Kommagetrennte Hostnamen, die der Schutz der Webhook-Adresse zulässt. Die Einstellung lehnt sonst offensichtlich interne Ziele ab; diese Variable ist die bewusste Ausnahme für ein legitimes internes Ziel, zum Beispiel einen Chat-Server im selben Compose-Netz. Keine allgemeine Freigabeliste. |

Einrichtung und Fehlersuche stehen unter [Benachrichtigungen](benachrichtigungen.md).

## Weitere Geheimnisse

| Variable | Pflicht | Standard | Bedeutung |
| --- | --- | --- | --- |
| `KRAMR_REQUEST_LINK_KEY` | nein | - | 32 Zufallsbytes, Base64 (`openssl rand -base64 32`). Mit diesem Schlüssel legt die Anwendung ausgestellte Anfrage-Links verschlüsselt ab, damit die Kontakt-Detailansicht sie erneut kopieren kann. Ohne Schlüssel startet die Anwendung wie bisher, Links sind nur einmalig sichtbar und „Link kopieren“ erscheint nicht. Ein Wert, der keine 32 Bytes ergibt, bricht den Start ab. Bei einem Wechsel lassen sich bereits abgelegte Links nicht mehr kopieren; ausgegebene Links bleiben gültig. |

## Startwerte fachlicher Einstellungen

| Variable | Pflicht | Standard | Bedeutung |
| --- | --- | --- | --- |
| `KRAMR_DEFAULT_REMINDER_LEAD_TIME_DAYS` | nein | `2` | Startwert der Einstellung `reminder.lead_time_days`. Vorlauf der Abhol-Erinnerung in Tagen. Ganze Zahl ab `0`. |
| `KRAMR_DEFAULT_CONTACT_INACTIVITY_PERIOD_DAYS` | nein | `1095` | Startwert der Einstellung `contacts.inactivity_period_days`. Nach so vielen Tagen ohne Buchung wird ein Kontakt zum Anonymisieren vorgeschlagen. Ganze Zahl ab `0`. |
| `KRAMR_DEFAULT_UPDATE_CHECK_ENABLED` | nein | `true` | Startwert der Einstellung `update_check.enabled`. Ob die Einstellungen-Seite bei GitHub nach einem neueren Release fragen darf. `false` für Server ohne ausgehende Verbindung. |
| `KRAMR_DEFAULT_ADDRESS_FORM` | nein | `informal` | Startwert der Einstellung `ui.address_form`. Ob die deutschen Texte „Du“ (`informal`) oder „Sie“ (`formal`) sagen, in E-Mails, Einbettung und Anfrageseiten. |

Diese Variablen gelten nur, solange die Einstellung in der Oberfläche noch nicht gespeichert wurde. Die Einstellungen stehen unter [Einstellungen](einstellungen.md).

## Backup-Skript

| Variable | Pflicht | Standard | Bedeutung |
| --- | --- | --- | --- |
| `KRAMR_BACKUP_DIR` | nein | `backups` im Projektverzeichnis | Verzeichnis, in das das Skript die Sicherungen schreibt. |
| `KRAMR_BACKUP_RETENTION_DAYS` | nein | `14` | Lokale Sicherungen, die älter sind, löscht das Skript. |
| `KRAMR_BACKUP_SYNC_CMD` | nein | - | Befehl, der die Sicherungen nach dem Anlegen an einen zweiten Ort kopiert, zum Beispiel mit `rclone`. |

Diese Variablen liest nur das Skript `ops/backup.sh`, nicht die Anwendung. Siehe [Backup](../backup/index.md).

<!-- env-registry:end -->
