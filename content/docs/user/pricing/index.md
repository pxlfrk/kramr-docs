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
Das gilt auch, wenn das Material inzwischen kostenlos ist: Die Karte „Bezahlung“ listet sonst nur Positionen mit Preis, eine mit geändertem Preis bleibt mit ihrem alten Betrag stehen, bis du den Preis übernimmst.
Die übrigen kostenlosen Positionen zählt eine Zeile unter der Liste.
Eine Anpassung bleibt beim Übernehmen erhalten, es sei denn, die Position verliert dabei ihren Preis.

Wechselst du die Verleihart einer Buchung vor der Abholung, schreibt kramr alle Positionen nach dem neuen Tarif neu fest und entfernt alle Anpassungen.
Die Historie nennt je Position den alten und den neuen Preis.

### Eine Position anpassen

„Bearbeiten“ an einer Position überschreibt ihre Summe mit einem Betrag ab 0,00 €.
Der Rechenweg bleibt sichtbar, ein Chip „angepasst“ kennzeichnet die Position, und „Zurücksetzen“ stellt die berechnete Summe wieder her.
Nur eine Position mit Preis lässt sich anpassen; eine kostenlose oder ein im Set enthaltener Bestandteil hat keinen Knopf.
Ändern sich später Zeitraum oder Menge, bleibt die Anpassung stehen, und der Rechenweg zeigt die neue berechnete Summe.
Bearbeiten, Zurücksetzen und Übernehmen speichern sofort und stehen in der Historie.
Bei einer stornierten Buchung sind sie gesperrt.

### Pflicht-Sets

Ein Pflicht-Set berechnet seinen **eigenen Preis für das ganze Set**; die mitreservierten Bestandteile heißen „im Set enthalten“ und tragen keinen Betrag.
Mit dem Schalter **„Bestandteile einzeln berechnen“** am Set gilt stattdessen der Preis jedes Bestandteils, und das Set selbst trägt keinen Preis.
Beim Einschalten fragt kramr nach, wenn das Set einen Preis hat, und entfernt ihn.
Bei einem losen Set wird jede Position wie jedes andere Material berechnet.

### Zusatzkosten bei Schaden, Verunreinigung und Verlust

Ab der Abholung erfasst du in der Karte „Bezahlung“ **Zusatzkosten** der Art *beschädigt*, *verunreinigt* oder *verloren*.
Eine Zusatzkosten-Position hat eine Beschreibung (ohne Personendaten, höchstens 255 Zeichen), optional einen Bezug auf eine abgeholte Position, eine Menge und einen Einzelpreis; der Betrag ist Menge × Einzelpreis.
Die Zusatzkosten gehen in die Summe ein; über der Summe stehen die Zwischensummen für die Positionen und für die Zusatzkosten.
Eine Buchung mit Zusatzkosten gilt in der Übersicht als kostenpflichtig, auch wenn alle Materialien kostenlos sind.

Du erfasst sie auf zwei Wegen:

- In der Karte „Bezahlung“ mit **Zusatzkosten erfassen**; bei mehreren Rückgaben ohne Zusatzkosten führt **Alle Zusatzkosten erfassen** nacheinander durch jede.
- Auf dem Bildschirm *Rückgabe erfassen*, im Reiter *Erfasst*: Bei einem Rückgabevorgang „beschädigt“ oder „verloren“ öffnet **Zusatzkosten vormerken** den Dialog mit Art, Bezug und Menge schon ausgefüllt.

Eine Rückgabe „beschädigt“ oder „verloren“, auf die keine Zusatzkosten verweisen, nennt die Karte „Bezahlung“ als Hinweis.
Das ist nur ein Hinweis; du musst nichts erfassen.

Ein Admin kann in den Einstellungen einen Parameter für die **Reinigungsgebühr** wählen, siehe [Einstellungen](../../admin/configuration/einstellungen.md).
Hat das Material der Position diesen Parameter, belegt kramr bei der Art *verunreinigt* den Einzelpreis damit vor.
Du kannst ihn im Dialog ändern.

Zusatzkosten lassen sich ändern und entfernen.
Nicht möglich sind sie vor der Abholung, bei einer stornierten oder archivierten Buchung, bei Eigennutzung und Sperren und bei einer Buchung mit „Erfasster Betrag (alt)“.
Solange Zusatzkosten bestehen, lässt sich die Abholung nicht zurücknehmen; entferne sie zuerst.
Wird eine Rückgabe korrigiert, bleiben die Zusatzkosten bestehen.
Anlegen, Ändern und Entfernen stehen in der Historie.

### Buchungen von früher

Eine Buchung, die bei der Einführung dieser Berechnung zurückgegeben oder storniert war und einen von Hand erfassten Betrag hatte, zeigt ihn als „Erfasster Betrag (alt)“, nur lesend und ohne Positionsbeträge.
Bei allen anderen Buchungen bekommt jede Position den damaligen Preis des Materials, und die Buchung rechnet ab da nach Positionen; der früher erfasste Betrag steht in ihrer Historie.

## Bezahlt-Status

In der Karte „Bezahlung“ wählst du den Bezahlt-Status der Summe.
Der Status steht in der Summenzeile und speichert sofort, sobald du ihn wählst.
Wählst du den Status „Erlassen“, erscheint darunter das Pflichtfeld „Grund für den Erlass“ mit einem eigenen „Speichern“.
Trage dort keine Personendaten ein.
Der Grund steht in der Karte beim Status und in der Historie der Buchung.
Wechselt der Status später wieder weg von „Erlassen“, verschwindet der Grund aus der Karte; die Historie behält ihn.
Bei einer Buchung, deren Zahlung schon vor dieser Funktion erlassen war, bleibt der Grund leer.
