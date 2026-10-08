---
title: Rollback
description: Zur vorherigen Version zurückkehren, mit und ohne Schemaänderung.
audience: admin
order: 34
---

# Rollback

kramr migriert nie automatisch zurück. Ein Rollback ist:

1. Anwendung stoppen.
2. Hat die fehlerhafte Version das Schema geändert: Datenbank aus dem
   letzten Backup **vor** dem Update wiederherstellen,
   siehe [Backup einspielen](restore.md).
3. In der `.env` das **vorherige** Image-Tag eintragen.
4. Starten und den Health-Check abwarten.

Hat die fehlerhafte Version das Schema nicht geändert, genügen die Schritte 1,
3 und 4; das Backup wird nicht gebraucht. Die Regel, Schemaänderungen auf zwei
Releases zu verteilen, hält diesen einfachen Fall zum Normalfall.

Beim Wechsel der PostgreSQL-Hauptversion ist das Backup dagegen immer nötig;
siehe [Updates und Migrationen](../upgrades/index.md).
