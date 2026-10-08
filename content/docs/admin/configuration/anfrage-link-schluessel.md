---
title: Schlüssel für Anfrage-Links
description: Mit KRAMR_REQUEST_LINK_KEY können Mitarbeitende ausgestellte Anfrage-Links erneut kopieren.
audience: admin
order: 25
---

# Schlüssel für Anfrage-Links

Mitarbeitende können für einen Kontakt einen Anfrage-Link ausstellen.
Ohne Schlüssel zeigt kramr den Link nur einmal an.
Mit dem Schlüssel `KRAMR_REQUEST_LINK_KEY` legt kramr zusätzlich eine verschlüsselte Kopie ab, und die Kontakt-Detailansicht kann den Link erneut kopieren.

Der Schlüssel besteht aus 32 Zufallsbytes in Base64:

```bash
openssl rand -base64 32
```

Er schützt nur die verschlüsselte Kopie.
Ob ein Link gültig ist, prüft kramr unabhängig davon.
Ein Datenbank-Abzug ohne den Schlüssel gibt keinen Link preis.
Behandle den Schlüssel wie die übrigen Geheimnisse: nicht ins Repository und nicht in dasselbe Backup wie die Datenbank.

## Setzen

Setze den Schlüssel, bevor du Links ausstellst.
Ein Link wird mit dem Schlüssel versiegelt, der beim Ausstellen gilt.
Vorher ausgestellte Links bleiben nicht kopierbar.

## Schlüssel wechseln

Bei Verdacht auf Offenlegung oder wenn der Schlüssel verloren ging, setzt du einen neuen Wert und startest neu.
Eine Migration ist nicht nötig.

- Bisher versiegelte Links lassen sich nicht mehr kopieren; die Aktion verschwindet oder meldet, dass der Link nicht mehr angezeigt werden kann.
- Diese Links funktionieren aber unverändert weiter.
- Neu ausgestellte Links nutzen den neuen Schlüssel.

Ein Link gilt höchstens 180 Tage, daher verwächst sich der Bestand von selbst.

## Entfernen

Leere die Variable und starte neu.
Neue Links werden nicht mehr versiegelt, und „Link kopieren“ entfällt.
Vorhandene verschlüsselte Kopien bleiben ungenutzt liegen und verschwinden mit dem Ende ihres Links.
