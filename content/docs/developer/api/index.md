---
title: API
description: Wie der HTTP-Vertrag von kramr entsteht und was die API-Referenz zeigt.
audience: developer
order: 10
---

# API

Der Vertrag zwischen Backend und Frontend liegt in `packages/shared` als
Zod-Schemas. Daraus wird das OpenAPI-Dokument `contracts/api.openapi.yaml`
**erzeugt** und eingecheckt. Eine Änderung am Vertrag erscheint damit im Diff
des Pull Requests, der sie verursacht.

```bash
npm run contracts         # Dokument neu schreiben
npm run contracts:check   # prüft, dass es zu den Schemas passt (Teil von verify)
```

Das Dokument wird nie von Hand gepflegt. Die API-Referenz dieser Seite
entsteht daraus und zeigt nur die Routen, die von außen erreichbar sind
(`/api/public/*`). Alle anderen Routen sind interne Schnittstellen zwischen
Frontend und Backend und hinter der Anmeldung.

## Rechte

Jede Route hat einen Eintrag in einer Rechtematrix, der festlegt, welche
Rolle sie nutzen darf. Ein Test bricht ab, wenn eine Route keinen Eintrag hat.
Die Rolle wird bei jeder Anfrage aus der Nutzertabelle gelesen, nicht aus der
Sitzung.

## Öffentliche Routen

Die Routen unter `/api/public/*` dienen der Einbettung und den
Buchungsanfragen von Websites. Sie sind ohne Anmeldung erreichbar, haben ein
eigenes Rate-Limit für lesende und schreibende Anfragen und liefern ihre
Antworten nie zwischengespeichert aus. Für Anfrage-Links gilt: Der Link im
Pfad ist der einzige Zugang zur Anfrage.

## Health

`GET /healthz` ist ohne Anmeldung erreichbar; siehe die Seite
[Überwachung](../../admin/monitoring/index.md).
