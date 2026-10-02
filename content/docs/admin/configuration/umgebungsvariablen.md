---
title: Umgebungsvariablen
description: Die wichtigsten Umgebungsvariablen von kramr mit Bedeutung und Standardwert.
audience: admin
order: 20
---

# Umgebungsvariablen

Die Produktivvorlage `ops/production.env.example` im Projekt enthält alle
Variablen. Echte Werte gehören nur in die `.env` auf dem Server. Ungültige
Werte führen zu einem Startabbruch mit einer klaren Meldung.

## Pflicht im Compose-Betrieb

| Variable | Bedeutung |
| --- | --- |
| `KRAMR_DB_NAME`, `KRAMR_DB_USER`, `KRAMR_DB_PASSWORD` | Zugang zur Datenbank. Kein Standardwert: Der Stack startet lieber nicht, als mit einem eingebauten Passwort zu laufen. Setze das Passwort vor dem ersten Start; die Datenbank behält das, mit dem sie angelegt wurde. |
| `KRAMR_IMAGE_TAG` | Zu startende Version, zum Beispiel `v1.2.1`. Kein Standardwert, nie `latest`. |
| `KRAMR_SERVER_PUBLIC_URL` | Externe Adresse der Anwendung. Basis der OIDC-Rückkehradresse. |
| `KRAMR_OIDC_ISSUER_URL` | Issuer des OIDC-Anbieters, zeichengenau wie im `iss`-Claim (ein abschließender Schrägstrich bleibt erhalten). |
| `KRAMR_OIDC_CLIENT_ID`, `KRAMR_OIDC_CLIENT_SECRET` | Zugang des Clients beim Anbieter. Das Secret steht nur in der Umgebung. |

## Server

| Variable | Standard | Bedeutung |
| --- | --- | --- |
| `KRAMR_SERVER_TRUST_PROXY` | `false` (Vorlage: `true`) | `X-Forwarded-*` vertrauen. Hinter einem Proxy `true`, sonst `false`. |
| `KRAMR_SERVER_FORCE_HTTPS` | `false` | HTTP umleiten. Normalerweise Aufgabe des Proxys. |
| `KRAMR_SERVER_BODY_LIMIT` | `1mb` | Größe von JSON- und Formular-Anfragen. Bild-Uploads haben ein eigenes Limit von 10 MB je Datei. |
| `KRAMR_PUBLISH_PORT` | `3000` | Port auf der Loopback-Adresse des Hosts, nur nötig, wenn der Proxy auf dem Host läuft. |
| `KRAMR_LOG_LEVEL` | `info` | `fatal`, `error`, `warn`, `info`, `debug` oder `trace`. Wirkt nach einem Neustart des Containers. |
| `KRAMR_PATH_UPLOADS` | im Image `/app/uploads` | Ort der Material-Bilder; im Compose-Stack das Volume `uploads`. |
| `KRAMR_UPDATE_GITHUB_REPO` | Projekt-Repository | Repository, gegen dessen neuestes Release die Versionsprüfung vergleicht. Forks tragen ihr eigenes ein. |

## Anmeldung

| Variable | Standard | Bedeutung |
| --- | --- | --- |
| `KRAMR_OIDC_SCOPES` | `openid profile email` | Angeforderte Scopes. Im Gruppenmodus den Scope ergänzen, der die Gruppen liefert. |
| `KRAMR_OIDC_ROLES_SOURCE` | `local` | Quelle der Rollen: `local` oder `groups`. |
| `KRAMR_AUTH_BOOTSTRAP_ADMIN_SUBJECT` | leer | `sub` des ersten Administrators, nur für die Ersteinrichtung. |
| `KRAMR_AUTH_RATE_LIMIT` | `20` | Anfragen je Client und Zeitfenster auf den Anmelde-Routen. |
| `KRAMR_AUTH_RATE_WINDOW_SECONDS` | `60` | Länge dieses Zeitfensters. |

Die Gruppen-Variablen stehen unter [Anmeldung und Rollen](anmeldung-und-rollen.md).

## Öffentliche Anfragen (Einbettung)

| Variable | Standard | Bedeutung |
| --- | --- | --- |
| `KRAMR_PUBLIC_RATE_LIMIT_READ` | `600` | Lesende Anfragen je Client-Adresse und Zeitfenster auf `/api/public/*`. |
| `KRAMR_PUBLIC_RATE_LIMIT_WRITE` | `20` | Schreibende Anfragen je Client-Adresse und Zeitfenster, getrennt gezählt. |
| `KRAMR_PUBLIC_RATE_WINDOW_SECONDS` | `60` | Länge des Zeitfensters. |

Ohne `KRAMR_SERVER_TRUST_PROXY=true` teilen sich alle Besucher die Adresse des
Proxys und damit ein Budget.

## Startwerte fachlicher Einstellungen

Diese Variablen gelten nur, solange die Einstellung in der Oberfläche noch
nicht gespeichert wurde.

| Variable | Standard | Bedeutung |
| --- | --- | --- |
| `KRAMR_DEFAULT_REMINDER_LEAD_TIME_DAYS` | `2` | Vorlauf der Abhol-Erinnerung in Tagen. |
| `KRAMR_DEFAULT_CONTACT_INACTIVITY_PERIOD_DAYS` | `1095` | Nach so vielen Tagen ohne Buchung wird ein Kontakt zum Anonymisieren vorgeschlagen. |
| `KRAMR_DEFAULT_UPDATE_CHECK_ENABLED` | `true` | Ob die Einstellungen-Seite bei GitHub nach einem neueren Release fragen darf. `false` für Server ohne ausgehende Verbindung. |
| `KRAMR_DEFAULT_ADDRESS_FORM` | `informal` | Ob die deutschen Texte „Du“ (`informal`) oder „Sie“ (`formal`) sagen – in E-Mails, Einbettung und Anfrageseiten. |

Mail-Variablen stehen unter [Benachrichtigungen](benachrichtigungen.md).
