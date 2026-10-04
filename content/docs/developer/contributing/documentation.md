---
title: Dokumentation beitragen
description: Wo öffentliche Dokumentation liegt, wie eine Seite aufgebaut sein muss, wie du sie lokal ansiehst und wie sie auf die Produktseite kommt.
audience: developer
order: 20
---

# Dokumentation beitragen

Die öffentliche Dokumentation hat genau eine Quelle: den Ordner `docs/public/`
im kramr-Repository. Eine Änderung an einer Seite ist ein ganz normaler Pull
Request (siehe [Mitwirken](index.md)); mit dem Merge auf `main` erscheint sie
auf der Produktseite. Das Repository der Produktseite (`kramr-docs`) wird
erzeugt und nie von Hand bearbeitet.

## Wohin gehört eine Seite?

Jede Seite hat genau eine Zielgruppe, und der oberste Ordner nennt sie:

| Ordner | Zielgruppe | Beispiele |
| --- | --- | --- |
| `docs/public/user/` | Anwender, die Material verleihen und buchen | Erste Schritte, Buchung anlegen |
| `docs/public/admin/` | Betreiber, die kramr installieren und betreiben | Installation, Anmeldung, Sicherung |
| `docs/public/developer/` | Mitwirkende, die am Code arbeiten | Architektur, Entwicklungsumgebung, API |

Darunter liegt je Thema ein Ordner mit einer `index.md`; weitere Seiten des
Themas liegen daneben. Passt ein Inhalt zu zwei Zielgruppen, schreibe zwei
Seiten, jede für ihre Leser, und verlinke sie untereinander.

## Dateinamen

Kleinbuchstaben, Ziffern und Bindestriche, Endung `.md`, zum Beispiel
`erste-schritte.md`. Umlaute, Großbuchstaben, Leerzeichen und Unterstriche
lehnt die Prüfung ab.

## Kopfdaten

Jede Seite beginnt mit einem Frontmatter-Block:

```yaml
---
title: Kurzer Seitentitel
description: Ein Satz, worum es auf der Seite geht.
audience: user # user | admin | developer, passt zum obersten Ordner
order: 10 # optional, ganze Zahl, bestimmt die Reihenfolge
---
```

`title`, `description` und `audience` sind Pflicht, andere Schlüssel sind nicht
erlaubt. Die Zielgruppe muss zum obersten Ordner passen.

## Schreiben

- Deutsch, in kurzen Sätzen, für die Zielgruppe der Seite.
- Links zeigen nur auf andere Seiten in `docs/public/` (relativ) oder ins
  Internet (absolut). Ein Link auf ein internes Dokument oder aus dem Ordner
  heraus lässt die Prüfung scheitern.
- Beispielwerte stehen als Platzhalter in spitzen Klammern
  (`<öffentliche-url>`), nie als echter Wert.
- Screenshots stammen aus den Demodaten, nie aus echten Beständen.
- Inhalte werden aus internen Unterlagen **abgeleitet und neu geschrieben**,
  nicht hineinkopiert.

Was nie auf diese Seiten gehört: Zugangsdaten und Werte aus `.env`-Dateien,
interne Adressen und Hostnamen, Berichte zu Vorfällen und Prüfungen sowie
Pläne und Entscheidungsprotokolle des Projekts.

## Prüfen

```bash
npm run public-docs:check
```

Die Prüfung gehört zu `npm run verify` und läuft in der CI. Sie kontrolliert
Aufbau, Dateinamen, Kopfdaten, Zielgruppe, Links, Muster für Geheimnisse und
interne Adressen sowie die Markdown-Regeln. Jede Verletzung steht mit Datei und
Zeile in der Ausgabe; eine Seite, die durchfällt, wird nie veröffentlicht.

## Lokal ansehen

Die Seite baut aus demselben Ordner, den du bearbeitest:

```bash
cd website
npm ci
npm run dev
```

`npm run dev` übernimmt die Seiten aus `docs/public/` und die öffentliche API
aus dem Vertrag und startet den Entwicklungsserver; die Adresse steht in der
Ausgabe. Ein vollständiger Bau mit den Prüfungen der Seite läuft mit
`npm run build`. Die Vorlage lädt beim Bauen Symbole von einem Iconify-Dienst;
ohne Internetzugang setzt du `ICONIFY_API` auf einen Spiegel.

## Wie die Veröffentlichung wirkt

1. Ein Pull Request ändert Seiten unter `docs/public/`; die CI führt die
   Prüfung aus.
2. Nach dem Merge auf `main` stellt der Sync-Workflow den Inhalt zusammen:
   nur `docs/public/**`, der öffentliche Teil des API-Vertrags und die Vorlage
   der Seite. Er prüft den Stand erneut, sucht die gesamte Auswahl nach
   Geheimnissen ab und baut die Seite zur Probe.
3. Besteht alles, ersetzt er den Inhalt von `kramr-docs` und pusht ihn;
   aus diesem Repository wird die Seite gebaut und veröffentlicht.
4. Fällt ein Schritt durch, bleibt die veröffentlichte Seite unverändert, und
   der Workflow im kramr-Repository zeigt den Fehler.

Eine Korrektur gehört deshalb immer ins kramr-Repository. Änderungen, die direkt
in `kramr-docs` landen, gehen beim nächsten Sync verloren.
