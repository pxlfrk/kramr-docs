---
title: Buchungsstatus und Übergänge
description: Die Status einer Buchung, wie sie sich ändern und was in welchem Status noch bearbeitet werden kann.
audience: user
order: 40
---

# Buchungsstatus und Übergänge

Jede Buchung, ob Ausleihe oder Sperre, hat genau einen Status.

| Status | Bedeutung | Belegt Material? |
| --- | --- | --- |
| Entwurf | Die Buchung wird noch bearbeitet und ist nicht bestätigt. | Nein, sie wird aber bei der Konfliktprüfung als Vormerkung angezeigt. |
| Genehmigt | Die Buchung ist bestätigt und reserviert das Material im Zeitraum. | Ja |
| Abgeholt | Das Material ist übergeben. | Ja |
| Zurückgegeben | Das Material ist zurück. Endzustand. | Nein |
| Storniert | Die Buchung wurde abgesagt. Endzustand, sie bleibt in der Historie. | Nein |

## Der Status auf der Buchung

Oben auf der Buchung zeigt die Karte „Status“ den Verlauf: Entwurf, Genehmigt, Abgeholt, Zurückgegeben.
Der aktuelle Schritt hat den dicksten Balken, ein noch offener Schritt ist gestrichelt.
Ein Schritt heißt erst „Abgeholt“, wenn das Material übergeben wurde; bis dahin steht dort „Abholung“ mit dem geplanten Tag.
Ebenso heißt es „Rückgabe“ bis zur Rückgabe, „Genehmigung“ bis zur Genehmigung und „Zahlung“ bis zur Zahlung.
Unter „Abrechnung“ steht dahinter die Bezahlung: Sie zeigt den Betrag und, ob er offen, bezahlt oder erlassen ist.
Eine Buchung ohne Betrag zeigt „Kein Betrag“, eine stornierte Buchung „Gesperrt“.

Hinweise wie „Konflikt“, „Überfällig“ oder „Abholung unvollständig“ stehen als Stichwort an dem Schritt, zu dem sie gehören.
Ein Klick darauf springt zu der Karte, die die Einzelheiten nennt, zum Beispiel zu den Materialpositionen.

## Übergänge

`Entwurf → Genehmigt → Abgeholt → Zurückgegeben`

- **Genehmigen:** Eine Person der Sachbearbeitung bestätigt den Entwurf. Besteht bereits ein Konflikt, fragt kramr ausdrücklich nach, siehe [Konflikte und Sperren](../conflicts-and-blocks/index.md).
- **Abholen:** Nur aus Genehmigt möglich. Die Buchung wechselt mit der ersten abgeholten Position nach Abgeholt, siehe [Abholung und Rückgabe](../pickup-and-return/index.md).
- **Zurückgeben:** Erst wenn alle Positionen zurück sind. Eine noch nicht abgeholte Position holst du vorher ab oder entfernst sie.
- **Stornieren:** Aus Entwurf und Genehmigt, solange nichts abgeholt wurde, auch nach dem geplanten Abholtermin. Ein Grund ist Pflicht. Eine feste Auswahl von Gründen gibt es nicht.

Eine überfällige Buchung ist kein eigener Status.
kramr zeigt sie an, wenn eine genehmigte oder abgeholte Ausleihe ihren geplanten Rückgabetermin überschritten hat.
Eine Sperre ist nie überfällig.

## Einen Schritt zurücknehmen

Jeden Statuswechsel kannst du um einen Schritt zurücknehmen, wenn du dich verklickt hast.
Das Zurücknehmen steht in der Historie, sodass sie den Fehler und die Korrektur zeigt.
Zwei Schritte löschen erfasste Tatsachen und fragen vorher nach:

- **Abgeholt → Genehmigt** entfernt den Abholstand aller Positionen. Es geht nicht mehr, sobald eine Rückgabe erfasst ist.
- **Zurückgegeben → Abgeholt** entfernt zusätzlich alle erfassten Rückgaben und nimmt ihre Wirkung auf den Bestand zurück.

## Was sich wann bearbeiten lässt

| Status | Bearbeitbar |
| --- | --- |
| Entwurf | Alles: Material, Zeitraum, Kontakt, Bemerkung, zuständige Person, zusätzliche Empfänger. |
| Genehmigt | Zeitraum, Bemerkung, Kontakt, zuständige Person und Material. Jede Änderung an Material oder Zeitraum prüft Konflikte neu. Bereits abgeholte Positionen sind fest. |
| Abgeholt | Neue Positionen hinzufügen, noch nicht abgeholte Positionen ändern oder entfernen, Zeitraum (zum Beispiel die Rückgabe verlängern), Bemerkung und zuständige Person. Abgeholte Positionen sowie Kontakt und Verleihart sind fest. |
| Zurückgegeben, Storniert | Nur lesen. |

Jede Änderung steht in der Historie.

## Buchungen archivieren

Eine falsch oder zum Test angelegte Buchung löschst du nicht, die Administration **archiviert** sie.
Das geht im Buchungsdetail über „Archivieren“, die Buchung oder Sperre verschwindet danach aus den Listen, dem Kalender und der Auswertung und belegt kein Material mehr.
Nichts geht verloren: Nummer und Historie bleiben, und „Reaktivieren“ bringt die Buchung im selben Status zurück.

- **Archivierbar** sind Entwurf, Storniert und Zurückgegeben.
  Eine genehmigte oder abgeholte Buchung stornierst du vorher oder gibst sie zurück.
- **Eine offene Zahlung** verhindert das Archivieren eines Entwurfs und einer zurückgegebenen Buchung; setze sie vorher auf „Bezahlt“ oder „Erlassen“.
  Bei einer stornierten Buchung stört sie nicht.
- **Sichtbar** ist eine archivierte Buchung nur für die Administration: in der Buchungsübersicht und im Kalender über „Ansicht“ → „Archivierte anzeigen“, in den Buchungslisten eines Kontakts oder Materials immer, jeweils mit dem Merkmal „Archiviert“.
  Alle anderen sehen unter der Adresse nur einen Hinweis mit der Buchungsnummer.
- **Schreibgeschützt:** Eine archivierte Buchung lässt sich nicht ändern, bis sie reaktiviert ist.
- **Keine Nachricht:** Archivieren und Reaktivieren lösen keine Benachrichtigung aus und stehen in der Historie.
- **Auswertung:** Eine archivierte zurückgegebene Ausleihe fehlt in der [Auswertung der Nutzung](../usage/index.md), auch für vergangene Zeiträume; nach dem Reaktivieren zählt sie wieder.

## Schnell ausleihen

Neben dem normalen Weg über den Entwurf gibt es „Buchung anlegen und direkt genehmigen“.
Das geht nur für Ausleihen, nicht für Sperren, und nur, wenn beim Anlegen kein Konflikt besteht.
Sonst bleibt es beim Entwurf.
