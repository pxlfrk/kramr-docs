---
title: Bestand verwalten
description: Material anlegen und ordnen, Ansprechpersonen zuordnen, Standorte verschachteln, mehrere Materialien auf einmal ändern und den Bestand als Tabelle oder Raster ansehen.
audience: user
order: 22
---

# Bestand verwalten

Den Bestand findest du in der Hauptnavigation unter „Bestand“.
Anlegen und Ändern darf die Sachbearbeitung und die Administration, ansehen darf jede Rolle.

## Mengen- und Einzelmaterial

Ein Material wird entweder über eine Stückzahl geführt (zum Beispiel 20 Schlafsäcke) oder als einzelne Einheiten mit eigener Bezeichnung (zum Beispiel jedes Zelt für sich).
Die Art legst du beim Anlegen fest.

## Kategorien, Parameter und Bilder

Material wird nach Kategorien geordnet, mit eigenen Eigenschaften (Parametern) beschrieben und mit Fotos versehen.
Kategorien, Standorte und Parameter pflegst du unter „Verwaltung“ in der Gruppe „Stammdaten“.

In der Bestandsübersicht blendest du über **Ansicht** Parameter als zusätzliche Spalten ein.
Angeboten werden die Parameter, die beim Parameter mit dem Schalter „Spalte im Bestand“ (Gruppe „Sichtbarkeit“) gekennzeichnet sind, und von ihnen die der gewählten Kategorie, ohne Kategorie alle.
Ist kein Parameter gekennzeichnet, fehlt dieser Abschnitt im Menü.
Welche Spalte du siehst, schaltest du selbst ein.

## Ansprechperson

Zu jedem Material lässt sich festhalten, wen man bei Fragen anspricht.
Die Personen pflegt die Administration unter *Verwaltung › Organisation › Ansprechpersonen*.

- Die Zeile zeigt den Wert und, woher er kommt: „Geerbt · Kategorie Zelte“ (gestrichelt) oder „Lokal gesetzt“. Geerbtes überschreibst du mit „Überschreiben“, einen lokalen Wert änderst du mit „Ändern“ oder setzt ihn mit „Auf geerbt zurücksetzen“ zurück.
- An einer Kategorie stellst du das im Formular ein; Unterkategorien und ihr Material übernehmen den Wert.
- Am Material wirkt die Wahl sofort, in der Karte „Ansprechperson“.
- „Keine Person“ ist ein Wert wie jeder andere und lässt sich auch lokal setzen.
- Es gilt der nächste ausdrückliche Wert vom Material aufwärts über die Kategorien, zuletzt die Standardperson der Organisation; „Keine Person“ beendet die Suche.
- Bei einem lokalen Wert steht darunter, was die Ebene darüber liefern würde.
- Der Standort spielt dabei keine Rolle.
- Die Karte sehen Sachbearbeitung und Administration, Leserechte allein genügen nicht.

### Rücksprache vor der Genehmigung

Bei besonderem Material, etwa Technik oder Fahrzeugen, soll vor der Genehmigung jemand vom Fach gefragt werden.
Dafür gibt es neben der Ansprechperson die Zeile „Rücksprache vor der Genehmigung“ mit „Erforderlich“ und „Nicht erforderlich“, die sich wie die Ansprechperson vererbt und unabhängig von ihr überschreiben lässt.

- Du setzt sie an der Kategorie (mit „Speichern“) und am Material (sofort gespeichert); sie vererbt sich wie die Ansprechperson, und der nächste ausdrückliche Wert gewinnt.
- Ohne ausdrücklichen Wert gilt „nicht erforderlich“.
- Sie wirkt nur, wenn für das Material eine Ansprechperson gilt; sonst steht an der Auswahl ein Hinweis.
- Die Bestandteile eines Pflicht-Sets zählen mit ihrer eigenen Kategorie.
- Eine Sperre braucht nie eine Rücksprache, eine Ausleihe jede, auch die Eigennutzung.
- In der Einbettung steht am Materialdetail der Hinweis, dass vor der Ausgabe eine Rücksprache nötig ist und das die Bearbeitung verlängern kann; bei einem Pflicht-Set, wenn einer seiner Bestandteile sie braucht. Eine Person nennt der Hinweis nicht.
- Jede Änderung der Auswahl steht in der Historie des Materials.

## Standorte

Ein Standort lässt sich unter einen anderen hängen, etwa „Waschraum“ unter „Keller“.

- Die Bestandsübersicht zeigt und sortiert den ganzen Pfad, und der Filter nach einem Standort schließt alle Unterstandorte ein.
- Hat ein Unterstandort keine eigene Adresse, gilt die des übergeordneten; sie steht auch in der Packliste.
- Ein Standort mit Unterstandorten oder Material lässt sich nicht löschen.

## Archivieren statt löschen

Material wird nie gelöscht, sondern archiviert; die Historie bleibt erhalten.
Steckt das Material in aktiven Sets, fragt kramr vorher nach, siehe [Sets](../kits/index.md#einen-bestandteil-archivieren).

## Mehrere Materialien auf einmal ändern

In der Bestandsübersicht hakst du Materialien an und änderst dann Kategorie, Standort, Online-Sichtbarkeit oder Verleihbarkeit, oder du archivierst und reaktivierst die Auswahl.
Die Auswahl gilt für die angezeigte Seite, höchstens 100 Materialien.

- Die Änderung gilt für alle angehakten Materialien oder für keines.
- Gibt es in der neuen Kategorie schon ein Material mit demselben Namen, wird nichts gespeichert, und die Meldung nennt jedes betroffene Material.
- Gehen Werte verloren, fragt kramr vorher nach und nennt die betroffenen Materialien.
  Das betrifft Parameter, die in der neuen Kategorie nicht gelten, und den Preis eines Personenkreises, der nicht mehr ausleihen darf.
  Der bisherige Wert steht danach in der Historie des Materials.
- Machst du einen Personenkreis wieder verleihbar, bleibt der Preis leer, und leer heißt kostenlos.

## Tabelle und Raster

Neben **Ansicht** schaltest du die Bestandsübersicht von der Tabelle auf ein Raster aus Karten mit Titelbild um.
Das Raster zeigt dieselben Treffer und behält Suche und Filter.
Eine Karte nennt Kategorie, Standort, Bestand, beide Preise und, wenn ein Zeitraum gewählt ist, wie viele frei sind.
Im Raster wählst du im Menü **Ansicht** die Sortierung und die Kartengröße.
Ankreuzen, Aufklappen und die Parameter-Spalten gibt es nur in der Tabelle.

## Weiterführend

- [Verleihbarkeit und Eigennutzung](../lending-restrictions/index.md): an wen ein Material verliehen wird
- [Preise und Tarife](../pricing/index.md)
- [Sets](../kits/index.md): Material, das andere Materialien bündelt
- [Auswertung der Nutzung](../usage/index.md): wie oft und wie lange Material verliehen war
- [CSV-Import und -Export](../export-and-import/index.md): Bestand aus einer Liste anlegen
- [Globale Suche](../search/index.md)
