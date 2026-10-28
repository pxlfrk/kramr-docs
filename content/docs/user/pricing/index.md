---
title: Preise und Tarife
description: Wie der Preis eines Materials in zwei Tarifen geführt wird und welcher für eine Buchung gilt.
audience: user
order: 46
---

# Preise und Tarife

Der Preis ist ein optionales Feld jedes Materials.
Er gilt in **zwei Tarifen**: für die interne Ausleihe (Jugendgruppen) und für den privaten oder externen Verleih.

## Je Tarif

- **Leer** heißt kostenlos.
- **Befüllt** heißt kostenpflichtig mit dem angegebenen Betrag in Euro, zum Beispiel 12,50.
- Die **Preiseinheit** sagt, ob der Betrag pauschal gilt oder pro Tag.
- Der **Preishinweis** nennt Bedingungen, die ein Betrag nicht ausdrückt, zum Beispiel eine Kaution.

Ein Tarif, für den das Material nicht verleihbar ist, trägt keinen Preis, siehe [Verleih-Einschränkung und Eigennutzung](../lending-restrictions/index.md).

## Welcher Tarif gilt

Die [Verleihart](../lending-restrictions/index.md) der Buchung entscheidet: intern oder extern.
Die Eigennutzung hat keinen Tarif und kostet nichts.

In der Buchungsübersicht kannst du nach der Verleihart filtern, auch mit einem Klick auf ihre Kennzeichnung in einer Zeile.
Der Filter „kostenpflichtig“ oder „kostenlos“ bezieht sich auf den Betrag der Buchung, siehe [Betrag einer Buchung](#betrag-einer-buchung).

## Betrag einer Buchung

Der Betrag einer Buchung ist die **Summe ihrer Positionen**.
Die Karte „Bezahlung“ der Buchung zeigt jede Position mit ihrem Rechenweg, zum Beispiel „10 × 3 Tage × 1,50 €“ oder „2 × 12,00 € pauschal“.
Ein freies Betragsfeld gibt es nicht.

- **Pauschal:** Menge mal Preis.
- **Pro Tag:** Menge mal Preis mal die Zahl der Tage.
- **Tage** sind Kalendertage über den geplanten Zeitraum der Buchung, beide Endtage eingeschlossen: Freitag 18:00 bis Sonntag 18:00 sind 3 Tage, Samstag 10:00 bis 16:00 ist 1 Tag.
  Eine Rückgabe um genau 0:00 Uhr zählt den Vortag als letzten Tag.
  Die tatsächlichen Abhol- und Rückgabezeiten zählen nicht.
- Jede Einzeleinheit ist eine eigene Zeile mit eigenem Betrag.
- Eigennutzung und Sperren tragen keinen Betrag.

Die Buchungsübersicht zählt eine Buchung als „kostenpflichtig“, wenn ihre Summe ohne Anpassungen größer als 0 ist.

### Der Preis wird festgeschrieben

Beim Anlegen einer Position übernimmt die Buchung den Preis des Materials im Tarif der Buchung und die Preiseinheit.
Ändert sich der Preis des Materials später, bleibt die Buchung unverändert.
Die Position zeigt dann „Preis geändert: jetzt …“ mit dem Knopf „Preis übernehmen“, die Karte zusätzlich „Alle Preise übernehmen“.
Eine Anpassung bleibt beim Übernehmen erhalten, es sei denn, die Position verliert dabei ihren Preis.

Wechselst du die Verleihart einer Buchung vor der Abholung, schreibt kramr alle Positionen nach dem neuen Tarif neu fest und entfernt alle Anpassungen.
Die Historie nennt je Position den alten und den neuen Preis.

### Eine Position anpassen

„Anpassen“ überschreibt die Summe einer Position mit einem Betrag ab 0,00 €.
Der Rechenweg bleibt sichtbar, ein Chip „angepasst“ kennzeichnet die Position, und „Zurücksetzen“ stellt die berechnete Summe wieder her.
Nur eine Position mit Preis lässt sich anpassen; eine kostenlose oder ein im Set enthaltener Bestandteil hat keinen Knopf.
Ändern sich später Zeitraum oder Menge, bleibt die Anpassung stehen, und der Rechenweg zeigt die neue berechnete Summe.
Anpassen und Übernehmen speichern sofort und stehen in der Historie.
Bei einer stornierten Buchung sind sie gesperrt.

### Pflicht-Sets

Ein Pflicht-Set berechnet seinen **eigenen Preis für das ganze Set**; die mitreservierten Bestandteile heißen „im Set enthalten“ und tragen keinen Betrag.
Mit dem Schalter **„Bestandteile einzeln berechnen“** am Set gilt stattdessen der Preis jedes Bestandteils, und das Set selbst trägt keinen Preis.
Beim Einschalten fragt kramr nach, wenn das Set einen Preis hat, und entfernt ihn.
Bei einem losen Set wird jede Position wie jedes andere Material berechnet.

### Buchungen von früher

Eine Buchung, die bei der Einführung dieser Berechnung zurückgegeben oder storniert war und einen von Hand erfassten Betrag hatte, zeigt ihn als „Erfasster Betrag (alt)“, nur lesend und ohne Positionsbeträge.
Bei allen anderen Buchungen bekommt jede Position den damaligen Preis des Materials, und die Buchung rechnet ab da nach Positionen; der früher erfasste Betrag steht in ihrer Historie.

## Bezahlt-Status

In der Karte „Bezahlung“ wählst du den Bezahlt-Status der Summe.
Die Karte speichert sofort, mit ihrem eigenen „Speichern“.
Wählst du den Status „Erlassen“, erscheint darunter das Pflichtfeld „Grund für den Erlass“.
Trage dort keine Personendaten ein.
Der Grund steht in der Karte beim Status und in der Historie der Buchung.
Wechselt der Status später wieder weg von „Erlassen“, verschwindet der Grund aus der Karte; die Historie behält ihn.
Bei einer Buchung, deren Zahlung schon vor dieser Funktion erlassen war, bleibt der Grund leer.
