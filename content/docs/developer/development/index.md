---
title: Entwicklungsumgebung
description: kramr lokal einrichten, starten, prüfen und mit Demodaten füllen.
audience: developer
order: 10
---

# Entwicklungsumgebung

## Voraussetzungen

- Node 24 (die Version steht in `.nvmrc`)
- npm 9 oder neuer
- Docker mit Compose

## Einrichten

```bash
npm ci
cp .env.example .env
docker compose -f compose.dev.yaml up -d --wait
npm run build
```

`.env.example` enthält funktionierende Entwicklungswerte für die Datenbank und
einen Test-Anbieter für die Anmeldung. Verwende sie nur für die Entwicklung,
nie in Produktion. Die Produktivvorlage liegt in `ops/production.env.example`.

Die Entwicklungsabhängigkeiten umfassen PostgreSQL, Mailpit (fängt
gesendete Mails ab) und einen OIDC-Test-Anbieter.

## Starten

Backend und Frontend laufen in getrennten Terminals:

```bash
npm run dev:api
npm run dev:web
```

Der Webserver leitet `/api` und `/healthz` an das Backend weiter, der
Browser bleibt auf einer Herkunft. Öffne die Adresse, die der Vite-Server
ausgibt, wähle „Anmelden" und gib `kramr-dev` als Benutzernamen ein. Du bist
dann als `Admin` angemeldet.

## Demodaten

In eine frisch migrierte, leere Datenbank:

```bash
npm run seed:demo
```

Sie enthalten archiviertes Material, Kontakte, Buchungen in jedem Status,
eine überfällige Buchung und einen Konflikt.

## Zurücksetzen

```bash
docker compose -f compose.dev.yaml down --volumes
```

## Prüfen

| Befehl | Zweck |
| --- | --- |
| `npm run verify` | Alle blockierenden Prüfungen der CI, in derselben Reihenfolge |
| `npm run lint`, `npm run format` | ESLint, Prettier |
| `npm run build` | Alle Workspaces bauen |
| `npm run contracts` | OpenAPI-Dokument nach einer API-Änderung neu schreiben |
| `npm run setup:hooks` | Git-Hook installieren, der den `Refs:`-Verweis prüft |

`npm run verify` umfasst: Bau des gemeinsamen Pakets, Prüfung des Vertrags,
Lint, Typprüfung, Unit- und Integrationstests (echtes PostgreSQL über
Testcontainers), Prüfung auf toten Code und Prüfung der Modulgrenzen.

## Tests

- Fachregeln (Statusübergänge, Konflikt- und Mengenrechnung, Rechtematrix)
  haben tabellengetriebene Unit-Tests ohne Mocks für die Fachlogik.
- Integrationstests laufen gegen echtes PostgreSQL.
- Eine neue HTTP-Route ohne Eintrag in der Rechtematrix lässt die Prüfung
  scheitern.
- Testnamen tragen die Anforderungsnummer, zum Beispiel
  `FR-16: rejects draft -> picked_up`.
