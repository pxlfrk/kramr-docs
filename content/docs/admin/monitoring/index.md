---
title: Überwachung
description: Health-Endpunkt, Versionsabfrage und Logs von kramr.
audience: admin
order: 10
---

# Überwachung

## Health-Endpunkt

`GET /healthz` ist öffentlich erreichbar und beantwortet mit `200`:

```json
{ "status": "ok", "database": "up", "schemaVersion": "0001", "version": "1.2.1" }
```

| Feld | Bedeutung |
| --- | --- |
| `status` | `ok`, oder `degraded`, wenn die Datenbank nicht antwortet. Auch dann kommt `200`, denn der Prozess lebt; die Unterscheidung steht im Rumpf. |
| `database` | `up` oder `down`. |
| `schemaVersion` | Höchste angewandte Migration. |
| `version` | Laufende Anwendungsversion. |

Der Endpunkt ist bewusst billig (ein einfaches `SELECT 1`) und wird vom
Health-Check des Containers alle 30 Sekunden abgefragt. Ein externer Monitor
sollte auf `"status": "ok"` im Rumpf prüfen, nicht nur auf den Statuscode, und
braucht am Proxy eine Ausnahme vom Rate-Limit.

## Versionsinformation

`GET /api/system/info` liefert hinter der Anmeldung Version, Commit und
Bauzeitpunkt des Images. Alle Werte stammen aus dem Image, nie aus der
Datenbank.

## Logs

kramr schreibt strukturierte Logs auf die Standardausgabe; abrufbar mit
`docker compose logs app`. Die Detailstufe stellt `KRAMR_LOG_LEVEL` ein. Die
Anwendung schreibt keine Anfragepfade ins Log. Beachte, dass dein Proxy das
tun kann; siehe [Reverse Proxy](../installation/reverse-proxy.md).

Aufgaben im Hintergrund melden Fehler als Warnung, etwa die stündliche
Bereinigung abgelaufener Sitzungen (`Session cleanup failed`); der nächste
Lauf holt die Arbeit nach.
