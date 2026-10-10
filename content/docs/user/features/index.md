---
title: Funktionen im Überblick
description: Was kramr kann – Material, Buchungen, Kontakte, Benachrichtigungen und Anfragen.
audience: user
order: 20
---

# Funktionen im Überblick

## Material

- **Mengen- und Einzelmaterial:** Ein Material wird entweder über eine
  Stückzahl geführt (zum Beispiel 20 Schlafsäcke) oder als einzelne Einheiten
  mit eigener Bezeichnung (zum Beispiel jedes Zelt für sich).
- **Kategorien, Parameter, Bilder:** Material wird nach Kategorien geordnet,
  mit eigenen Eigenschaften beschrieben und mit Fotos versehen.
  In der Bestandsübersicht blendest du über **Ansicht** die Parameter als zusätzliche Spalten ein.
  Angeboten werden die Parameter der gewählten Kategorie, ohne Kategorie alle.
- **Sets:** Ein Set bündelt mehrere Materialien. Ist es ein Pflichtset, wird
  beim Buchen jede Komponente mitgebucht.
- **Wer darf ausleihen:** Bei jedem Material legst du fest, ob es an den
  **internen** Personenkreis (Jugendgruppen), den **externen** Personenkreis
  (Privatpersonen) oder an beide verliehen wird; Vorgabe ist beide. Ein
  Personenkreis, der das Material nicht ausleihen darf, hat dafür keinen
  Preis. Ist ein Material für keinen von beiden verleihbar, bleibt es im
  Bestand, kann aber nur für die Eigennutzung gebucht oder gesperrt werden.
  Ein Set ist nur dann verleihbar, wenn alle seine Bestandteile es sind.
- **Archivieren statt löschen:** Material wird nie gelöscht, sondern
  archiviert; die Historie bleibt erhalten.
- **Mehrere Materialien auf einmal ändern:**
  In der Bestandsübersicht haken Mitarbeitende Materialien an.
  Dann ändern sie Kategorie, Lagerort, Online-Sichtbarkeit oder Verleihbarkeit oder archivieren und reaktivieren die Auswahl.
  Die Änderung gilt für alle angehakten Materialien oder für keines.
  Ist in der neuen Kategorie schon ein Material mit demselben Namen, wird nichts gespeichert, und die Meldung nennt jedes betroffene Material.
  Gehen dabei Werte verloren, fragt die Anwendung vorher nach und nennt die betroffenen Materialien.
  Das betrifft Parameter, die in der neuen Kategorie nicht gelten, und den Preis eines Personenkreises, der nicht mehr ausleihen darf.
  Der bisherige Wert steht danach in der Historie des Materials.
  Macht man einen Personenkreis wieder verleihbar, bleibt der Preis leer, und leer heißt kostenlos.
  Die Auswahl gilt für die angezeigte Seite, höchstens 100 Materialien.
- **Suche:** Die Suche findet Material auch bei Umlauten und kleinen
  Tippfehlern.

## Buchungen

Eine Buchung ist eine **Ausleihe** (mit Kontakt) oder eine **Sperre**
(Material ist belegt, ohne dass jemand ausleiht). Beide durchlaufen:

`Entwurf → Genehmigt → Abgeholt → Zurückgegeben`

Entwurf und Genehmigt lassen sich auch **stornieren**. Jeder Schritt kann um
einen Schritt zurückgenommen werden, falls du dich verklickt hast.

- **Konflikte:** Überschneiden sich Buchungen so, dass der Bestand nicht
  reicht, markiert kramr den Konflikt. Er ist ein Hinweis, keine Sperre: Wer
  einen Entwurf trotzdem genehmigen will, bestätigt das ausdrücklich.
- **Zeiträume:** Ein Zeitraum reicht vom Abholen bis zur Rückgabe. Endet eine
  Buchung um 18 Uhr und beginnt die nächste um 18 Uhr, gibt es keinen
  Konflikt.
- **Verleihart:** Jede Ausleihe ist **intern**, **extern** oder
  **Eigennutzung**. Die Verleihart bestimmt den Tarif und welches Material
  gebucht werden darf: Eine interne oder externe Ausleihe nimmt nur Material
  auf, das für diesen Personenkreis verleihbar ist (nicht Auswählbares ist
  mit dem Grund markiert). Die Eigennutzung gilt für jedes Material, kostet
  nichts und gehört zu einem Kontakt der eigenen Organisation. Wählst du so
  einen Kontakt, steht die Verleihart fest auf Eigennutzung. Spätere
  Änderungen am Material ändern bestehende Buchungen nicht.
- **Rückgabe:** Bei der Rückgabe wird je Position festgehalten, was in
  Ordnung, beschädigt oder verloren ist. Eine Rückgabe kann auf mehrere Tage
  verteilt sein.
- **Historie:** Jede Änderung an Buchungen und Material steht in einer
  Änderungshistorie.

## Kontakte

Ein Kontakt ist immer eine Person. Das Geburtsdatum ist freiwillig. Personen
der eigenen Organisation markierst du als **Eigene Organisation**; für sie ist
die Handynummer freiwillig, die E-Mail-Adresse bleibt Pflicht, und sie leihen
nur für die Eigennutzung aus. Wer lange
nichts ausgeliehen hat, wird als Vorschlag zum **Anonymisieren** angezeigt;
das geschieht nie automatisch. Beim Anonymisieren bleibt die Buchungshistorie
erhalten, die persönlichen Daten werden entfernt.

## Benachrichtigungen

kramr verschickt Erinnerungen vor der Abholung und bei überfälligen
Rückgaben, per E-Mail und optional an einen Webhook (zum Beispiel einen Chat).
Die Prüfung läuft einmal täglich am Morgen. Was verschickt wird, stellt die
Administration ein.

## Buchungsanfragen von Websites

Mit der Einbettung können Besucher einer Vereins-Website die Materialliste
sehen und eine Buchungsanfrage stellen. Sie erhalten per E-Mail einen Link,
mit dem sie die Anfrage zusammenstellen, speichern und einreichen. Die
Sachbearbeitung prüft die Anfrage im Bereich „Anfragen" und übernimmt sie als
Entwurf oder lehnt sie mit Begründung ab. Material, das nur für einen
Personenkreis verleihbar ist, trägt in der Einbettung einen Hinweis; Material,
das an niemanden verleihbar ist, wird gezeigt, lässt sich aber nicht anfragen.
Bei der Übernahme wählt die Sachbearbeitung die Verleihart; Positionen, die
dafür nicht verleihbar sind, nennt der Dialog vorab und übernimmt sie nicht.

## Mehr dazu

- [Buchungsstatus und Übergänge](../booking-status/index.md)
- [Konflikte und Sperren](../conflicts-and-blocks/index.md)
- [Abholung und Rückgabe](../pickup-and-return/index.md)
- [Sets](../kits/index.md)
- [Verleih-Einschränkung und Eigennutzung](../lending-restrictions/index.md)
- [Preise und Tarife](../pricing/index.md)
- [Kalenderansicht](../calendar/index.md)
- [Posteingang und Benachrichtigungen](../notifications/index.md)
- [Material per CSV importieren](../export-and-import/index.md)
- [Kontakte anonymisieren](../anonymisation/index.md)
- [Rollen und Rechte](../roles/index.md)
- [Glossar](../glossary/index.md)
