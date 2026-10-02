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
- **Sets:** Ein Set bündelt mehrere Materialien. Ist es ein Pflichtset, wird
  beim Buchen jede Komponente mitgebucht.
- **Archivieren statt löschen:** Material wird nie gelöscht, sondern
  archiviert; die Historie bleibt erhalten.
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
- **Rückgabe:** Bei der Rückgabe wird je Position festgehalten, was in
  Ordnung, beschädigt oder verloren ist. Eine Rückgabe kann auf mehrere Tage
  verteilt sein.
- **Historie:** Jede Änderung an Buchungen und Material steht in einer
  Änderungshistorie.

## Kontakte

Ein Kontakt ist immer eine Person. Das Geburtsdatum ist freiwillig. Wer lange
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
Entwurf oder lehnt sie mit Begründung ab.
