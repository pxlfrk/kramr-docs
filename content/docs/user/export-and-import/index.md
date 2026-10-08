---
title: Material per CSV importieren
description: Bestehenden Bestand mit einer CSV-Datei anlegen.
audience: user
order: 47
---

# Material per CSV importieren

Der Import ist ein Werkzeug für den Einstieg: Du legst einen vorhandenen Bestand mit einer CSV-Datei an, statt jedes Material einzeln zu erfassen.
Dafür brauchst du die Rolle Staff oder Admin.

1. Öffne die Bestandsübersicht und wähle im Menü „Weitere Aktionen“ die Aktion „Material importieren (CSV)“.
2. Lade die **Vorlage** herunter. Sie legt die Spalten fest.
3. Fülle die Vorlage in einer Tabellenkalkulation aus, **eine Zeile je Material**.
4. Wähle die Datei und starte den Import.

Beachte:

- kramr liest nur die Spalten der Vorlage.
- Der Import legt **nur neue** Materialien an. Bestehende Materialien ändert er nicht.
- Nach dem Import steht eine Zusammenfassung da, zum Beispiel „12 von 14 Zeilen angelegt, 2 übersprungen“. Eine Tabelle nennt für jede übersprungene Zeile die Zeile, die Spalte und das Problem. Korrigiere diese Zeilen und importiere die Datei erneut oder lege das Material von Hand an.
- Wird die Datei gar nicht gelesen, nennt kramr das mit einer Meldung.

## Export

Bestand und Buchungen lassen sich als CSV-Datei weitergeben, etwa für eine Auskunft an eine Person.
Eine eigene Schaltfläche dafür bietet die Oberfläche derzeit nicht; der Export steht über die Schnittstelle bereit.
