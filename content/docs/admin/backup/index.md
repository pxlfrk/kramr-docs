---
title: Backup und Wiederherstellung
description: Datenbank und Bilder gemeinsam sichern und beides wieder einspielen.
audience: admin
order: 10
---

# Backup und Wiederherstellung

Backup und Wiederherstellung sind Aufgabe des Betreibers, keine Funktion der
Anwendung. Auf einem einzelnen Server ohne Ausfallsicherung gilt: **Ohne
einen einmal geprobten Restore besteht das Risiko eines Totalverlusts.**
Spiele die Wiederherstellung deshalb vor dem Go-Live einmal durch, danach
vierteljährlich.

## Was gesichert wird

- **Die Datenbank** als `pg_dump` im Custom-Format.
- **Das Bilder-Volume `uploads`**: Das Original eines Bildes liegt nur dort.

Beide müssen vom **selben Zeitpunkt** stammen. Das mitgelieferte Skript
`ops/backup.sh` sichert beide in einem Lauf mit gleichem Zeitstempel
(`kramr-<Stempel>.dump` und `kramr-uploads-<Stempel>.tar.gz`) und
veröffentlicht sie nur gemeinsam. Scheitert ein Schritt, bleibt das vorige
Paar unberührt.

## Einstellungen des Skripts

| Variable | Bedeutung |
| --- | --- |
| `KRAMR_BACKUP_DIR` | Zielverzeichnis. |
| `KRAMR_BACKUP_RETENTION_DAYS` | Aufbewahrung in Tagen (Standard 14); ältere Paare werden entfernt. |
| `KRAMR_BACKUP_SYNC_CMD` | Befehl, der nach erfolgreicher Sicherung ausgeführt wird, um das Verzeichnis außerhalb des Servers abzulegen (zum Beispiel `rclone copy`). |

Das Skript kopiert nicht selbst nach außen; das Ziel ist Sache des Betreibers.
Ein nächtlicher Cron-Eintrag genügt:

```cron
15 3 * * *  KRAMR_BACKUP_DIR=/var/backups/kramr \
            KRAMR_BACKUP_SYNC_CMD='rclone copy /var/backups/kramr remote:kramr-backups' \
            /opt/kramr/ops/backup.sh >> /var/log/kramr-backup.log 2>&1
```

Der Dump enthält nur Hashes der Sitzungen, keine verwendbaren Anmeldungen.

## Wiederherstellung

Der Dump enthält **nur Daten**, kein Schema. Das Schema baut die Anwendung
beim Start aus ihren Migrationen auf. Ein Restore besteht daher aus: leere
Datenbank und leeres Bilder-Volume → Anwendung starten → Zeilen einspielen.
Verwende dabei das Image-Tag, unter dem der Dump entstanden ist. Die
einzelnen Schritte stehen im Ablauf [Backup einspielen](../runbooks/restore.md).

## Restore-Probe

1. Mit Demodaten einen bekannten Datenbestand erzeugen.
2. Das Backup-Skript laufen lassen.
3. Datenbank verwerfen und wiederherstellen.
4. Zeilenzahlen von Material, Buchungen, Kontakten und Buchungspositionen mit
   der Quelle vergleichen, anmelden, Buchungsübersicht und Materialliste
   prüfen und eine Kontaktsuche mit Umlaut-Ersatzschreibung (`mueller`)
   ausführen. Ein Treffer belegt, dass die Suchspalten neu berechnet wurden.

Halte Datum und Ergebnis der Probe fest.
