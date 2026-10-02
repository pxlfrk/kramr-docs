---
title: Updates und Migrationen
description: Eine neue Version einspielen, Datenbankmigrationen verstehen, bei Problemen zurückgehen.
audience: admin
order: 10
---

# Updates und Migrationen

Produktiv läuft immer eine **feste Version** (`KRAMR_IMAGE_TAG`). Welche
Versionen es gibt, zeigt die Seite
[Releases](https://github.com/pxlfrk/kramr/releases). Admins sehen in den
Einstellungen außerdem, ob eine neuere Version vorliegt.

## Ablauf eines Updates

1. **Backup ziehen**, siehe [Backup](../backup/index.md).
2. **Änderungen lesen:** Neuigkeiten und Hinweise der Zielversion.
3. In der `.env` `KRAMR_IMAGE_TAG` auf die neue Version setzen.
4. `docker compose pull && docker compose up -d`
5. Warten, bis `docker compose ps` den Dienst `app` als `healthy` zeigt, und
   die Version prüfen, siehe [Überwachung](../monitoring/index.md).

## Migrationen

Datenbankänderungen sind nummerierte SQL-Dateien. Sie laufen beim Start
automatisch, **bevor** die Anwendung Anfragen annimmt. Es gelten feste Regeln:

- Sie laufen **nur vorwärts**; ein automatisches Zurückmigrieren gibt es nicht.
- Sie laufen **genau einmal**: Starten mehrere Instanzen, wartet die zweite.
- Jede Migration läuft in einer Transaktion; ein Fehler hinterlässt keinen
  halben Stand.
- Eine **angewandte Migration ist unveränderlich**. Wurde sie nachträglich
  geändert, verweigert der Start mit einer eindeutigen Meldung.

Schemaänderungen laufen in zwei Releases (erst ergänzen, später entfernen).
So läuft die vorherige Version noch gegen das neue Schema, was den Rückweg
einfach hält.

## Zurückgehen

Siehe [Rollback](../runbooks/rollback.md).

## PostgreSQL-Hauptversion wechseln

Mit Produktivdaten genügt es **nicht**, das Image-Tag zu ändern; das
Datenverzeichnis einer Hauptversion ist von der nächsten nicht lesbar.

1. Backup ziehen.
2. Anwendung stoppen.
3. Daten übertragen: `pg_dump` aus dem alten und `pg_restore` in einen
   frischen Container mit dem neuen Image, oder `pg_upgrade` auf einer Kopie.
4. Tag anheben, Stack starten, Health-Check und Migrationslauf abwarten.

Ab PostgreSQL 18 erwartet das offizielle Image das Volume eine Ebene höher
eingehängt (`/var/lib/postgresql`); die mitgelieferte Compose-Datei tut das
bereits.
