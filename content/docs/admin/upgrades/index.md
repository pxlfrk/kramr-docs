---
title: Updates und Migrationen
description: Eine neue Version einspielen, Datenbankmigrationen verstehen, bei Problemen zurückgehen.
audience: admin
order: 33
---

# Updates und Migrationen

Produktiv läuft immer eine **feste Version** (`KRAMR_IMAGE_TAG`).
Welche Versionen es gibt, zeigt die [Paketübersicht des Images](https://github.com/users/pxlfrk/packages/container/package/kramr), was sich geändert hat, die Seite [Neuigkeiten](../../user/release-notes/index.md).
Admins sehen in den Einstellungen außerdem, ob eine neuere Version vorliegt.

## Image prüfen (empfohlen)

Jedes Release-Image ist signiert und trägt eine Herkunftsangabe (Repository, Commit, Workflow, Lauf).
Die Prüfung ist eine Empfehlung, keine Voraussetzung der Installation.
Sie braucht [cosign](https://docs.sigstore.dev/cosign/installation/).
`<digest>` steht in den Release-Notes der Version (`sha256:…`).

```bash
cosign verify ghcr.io/pxlfrk/kramr@<digest> \
  --certificate-identity https://github.com/pxlfrk/kramr/.github/workflows/release.yml@refs/heads/main \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com
```

```bash
cosign verify-attestation ghcr.io/pxlfrk/kramr@<digest> --type slsaprovenance1 \
  --certificate-identity https://github.com/pxlfrk/kramr/.github/workflows/release.yml@refs/heads/main \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com
```

Wurde die Version durch einen von Hand gesetzten Tag veröffentlicht, endet die Identität auf `@refs/tags/vX.Y.Z` statt auf `@refs/heads/main`.
Wer geprüft hat, setzt in der `.env` den Digest mit: `KRAMR_IMAGE_TAG=vX.Y.Z@sha256:…`, damit nicht später ein umgehängter Tag geladen wird.

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

## Wenn eine Migration an vorhandenen Daten scheitert

Die meisten Migrationen legen nur Neues an.
Stellt eine Migration eine Bedingung an eine bereits gefüllte Tabelle, etwa einen eindeutigen Namen, und verletzen vorhandene Zeilen sie, bricht die Migration ab und der Container startet nicht.
Das ist Absicht: Welche von zwei Zeilen bleibt, ist eine fachliche Entscheidung, die eine Migration nicht still treffen darf.

1. Lies die Meldung in `docker compose logs app`. Sie nennt die verletzte Bedingung.
2. Finde die betroffenen Zeilen mit einer Abfrage, die dieselbe Vergleichsregel nutzt wie die Bedingung.
3. Entscheide, welche Zeile bleibt, und führe die Zeilen zusammen. Hängen andere Tabellen an der aufzugebenden Zeile, hänge sie zuerst um, sonst verweigert der Fremdschlüssel das Löschen.
4. Starte den Container neu. Die Migration läuft erneut.

Eine Bedingung kann auch eine Höchstlänge sein: Seit Migration `0070` sind Namen von Material, Kategorien, Lagerorten, Einheiten und Parametertypen höchstens 200 Zeichen lang.
Ist ein vorhandener Name länger, nennt die Meldung Art und ID der Zeile und ihre Länge.
Kürze den Namen dann mit `psql`, zum Beispiel `UPDATE locations SET name = left(name, 200) WHERE id = '…';` (für Einheiten heißt die Spalte `label`), und starte den Container neu.

Ziehe vorher ein Backup.

## Zurückgehen

Siehe [Rollback](../runbooks/rollback.md).

Hinweis zum Archivieren von Buchungen: Die Migration `0065` ergänzt die Spalte `archived_at` an den Buchungen.
Die vorherige Version kennt sie nicht, dort sind archivierte Buchungen wieder für alle sichtbar, und das Genehmigen eines archivierten Entwurfs scheitert an einer Tabellenbedingung.
Nach einer Rückkehr auf die neue Version gilt wieder alles wie zuvor.

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
