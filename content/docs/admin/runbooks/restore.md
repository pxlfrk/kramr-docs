---
title: Backup einspielen
description: Datenbank und Bilder aus einem Backup wiederherstellen.
audience: admin
order: 32
---

# Backup einspielen

Dump und Bilder-Archiv mit **demselben Zeitstempel** gehören zusammen. Setze
das Image-Tag, unter dem der Dump entstanden ist. Die Schritte nehmen an, dass
die Variablen `KRAMR_DB_USER`, `KRAMR_DB_NAME` und `KRAMR_PUBLISH_PORT` in
deiner Shell gesetzt sind und der Proxy auf dem Host läuft.

```bash
# 1. Anwendung stoppen, Datenbank leer neu anlegen
docker compose stop app
docker compose exec -T db psql -U "$KRAMR_DB_USER" -d postgres \
  -c "DROP DATABASE IF EXISTS $KRAMR_DB_NAME WITH (FORCE)" \
  -c "CREATE DATABASE $KRAMR_DB_NAME OWNER $KRAMR_DB_USER"

# 1b. Bilder: Volume leeren und das Archiv einspielen
docker compose run --rm --no-deps -T --entrypoint sh -v uploads:/data db \
  -c 'find /data -mindepth 1 -delete && tar -xzf - -C /data' \
  < /var/backups/kramr/kramr-uploads-<Stempel>.tar.gz

# 2. Anwendung starten; die Migrationen bauen das Schema
docker compose up -d app

# 3. Zeilen einspielen
docker compose exec -T db pg_restore --data-only --disable-triggers -f - \
    < /var/backups/kramr/kramr-<Stempel>.dump \
  | sed "s|SELECT pg_catalog.set_config('search_path', '', false);|SELECT pg_catalog.set_config('search_path', 'public, pg_catalog', false);|" \
  | docker compose exec -T db psql -U "$KRAMR_DB_USER" -d "$KRAMR_DB_NAME" \
      --single-transaction -v ON_ERROR_STOP=1 -q
```

Der `sed`-Schritt setzt den von `pg_dump` leer gesetzten Suchpfad so, dass die
Suchspalten von Material und Kontakten beim Einspielen neu berechnet werden.

Prüfe danach `/healthz` (`"status": "ok"`), melde dich an und sieh Buchungen
und Materialliste durch. Die Anleitung zur Restore-Probe steht unter
[Backup](../backup/index.md).
