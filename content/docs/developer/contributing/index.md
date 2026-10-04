---
title: Mitwirken
description: Branches, Commits, Pull Requests und die Definition of Done in kramr.
audience: developer
order: 10
---

# Mitwirken

## Sprache

- Code, Bezeichner, Kommentare, Tests, Commit-Nachrichten und Pull-Request-Text
  sind **englisch**.
- Die Dokumentation ist deutsch.
- Sichtbare Oberflächentexte sind deutsch, liegen aber in Übersetzungsdateien,
  nie direkt in Komponenten.
- Fachbegriffe haben feste englische Bezeichner (zum Beispiel Material → `Item`,
  Buchung → `Booking`, Sperre → `Block`).

## Ein Arbeitspaket, ein Branch, ein Pull Request

Branches heißen nach Zweck:

| Präfix | Verwendung |
| --- | --- |
| `feat/<slug>` | Funktion |
| `fix/<slug>` | Fehlerbehebung |
| `chore/<slug>` | Werkzeuge, Abhängigkeiten, CI |
| `docs/<slug>` | nur Dokumentation |

Halte Branches kurzlebig, möglichst unter zwei Tagen. `main` ist immer
auslieferbar; die Historie bleibt linear.

## Commits

Conventional Commits, englisch, der Bereich ist der Modulname:

```text
feat(catalog): resolve inherited parameter types along the category chain

Refs: FR-02
```

Der `Refs:`-Verweis auf die Anforderung gehört in den abschließenden Block der
Trailer. Schemaänderungen stehen im selben Commit wie der Code, der sie
braucht.

## Dokumentation

Die öffentliche Dokumentation liegt in `docs/public/` und wird wie Code per
Pull Request geändert. Wo eine Seite hingehört und wie du sie prüfst, steht in
[Dokumentation beitragen](documentation.md).

## Pull Requests

Die Beschreibung folgt der Vorlage des Repositories mit den Punkten der
Definition of Done. Der Standard ist Squash-Merge.

## Definition of Done

1. Jede Änderung geht auf eine Anforderung zurück.
2. Eine neue HTTP-Route hat einen Eintrag in der Rechtematrix.
3. Jede neue Schreiboperation auf Buchung, Material oder Nutzer erzeugt ein
   Domain-Event und einen Audit-Eintrag.
4. Eine Schemaänderung hat eine Migration im selben Commit und läuft gegen
   eine leere **und** eine befüllte Datenbank.
5. Domänencode importiert kein Framework und liest nie die Systemuhr.
6. Verfügbarkeitslogik steht nur im Modul `availability`.
7. Sichtbarer Text läuft über die Übersetzungsdateien.
8. Neue Umgebungsvariablen folgen dem Schema `KRAMR_<BEREICH>_<NAME>` und sind
   dokumentiert.
9. Eine Architekturentscheidung ist als ADR festgehalten.
10. `npm run verify` ist grün.
11. Eine für Anwender spürbare Änderung bekommt einen Satz im Changelog.

## Blockierende Prüfungen

Die CI führt dieselben Schritte aus wie `npm run verify`, in derselben
Reihenfolge, und baut danach das Image, startet den Stack und prüft
`/healthz`. Eine Architekturprüfung stellt sicher, dass beide Seiten dieselben
Schritte haben.

Die Modulgrenzen prüft `dependency-cruiser` mit drei Regeln: Domänencode
importiert kein Framework, keinen ORM und keinen Treiber; Domänencode greift
nicht auf Plattform und Adapter zu; ein Modul wird nur über seinen
Einstiegspunkt importiert.

## Releases

Ein Release wird per Workflow oder durch ein Versions-Tag `vX.Y.Z` ausgelöst
und veröffentlicht das Container-Image mit den Tags `vX.Y.Z`, `X.Y` und
`latest`. Produktiv läuft nur eine feste Version.
