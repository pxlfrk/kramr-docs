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

## Der Leihschein

Wenn Sie eine Ausleihe in einem Tarif genehmigen, hält kramr sie als Revision fest: Zeitraum, Tarif, Positionen, Preise und die gültigen Ausleihbedingungen.
Daraus entsteht der Leihschein als PDF, mit Unterschriftsfeld und dem vollen Text der Bedingungen.
Sie öffnen ihn im Buchungsdetail über „Leihschein“, jede Rolle mit Lesezugriff kann das.
Der Leihschein zeigt immer die festgehaltene Revision, auch wenn die Buchung später geändert wird.
Nehmen Sie die Genehmigung mit „Zurück zu Entwurf“ zurück, bleibt der Leihschein abrufbar und trägt den Vermerk „Nicht mehr gültig“; die nächste Genehmigung legt eine neue Revision fest.
Eigennutzung und Sperren haben keinen Leihschein, ebenso Ausleihen, die vor Einführung des Leihscheins genehmigt wurden.

## Bestätigung des Leihscheins

Mit der Genehmigung einer Ausleihe in einem Tarif bekommt der Ausleihkontakt eine E-Mail mit dem Leihschein im Anhang und einem Link.
Auf der Seite hinter dem Link liest er Leihschein und Ausleihbedingungen und bestätigt mit einem Klick; das ist genau eine Bestätigung je Revision, ein zweiter Klick ändert nichts.
kramr speichert dabei Zeitpunkt, Name und E-Mail-Adresse des Kontakts, aber keine IP-Adresse.
Der Link gilt bis 30 Tage nach der geplanten Rückgabe, höchstens 180 Tage, und endet mit „Zurück zu Entwurf“, mit der Stornierung und mit der Anonymisierung des Kontakts.
Hat der Kontakt keine E-Mail-Adresse, geht keine Mail hinaus, und Sie tragen die Bestätigung selbst ein.
Im Buchungsdetail zeigt die Zeile „Bestätigung“ den Zustand: ausstehend oder bestätigt, per Link oder vor Ort.
Mit „Vor Ort bestätigt“ vermerken Sie eine Bestätigung auf Papier oder mündlich, mit einem kurzen Vermerk ohne Personendaten; das steht in der Historie.
Fehlt die Bestätigung, bleibt die Abholung möglich; der Schritt „Abholung“ trägt dann den Hinweis „Bestätigung ausstehend“, und unter „Als abgeholt erfassen“ steht ein Satz dazu, mehr nicht.
Eine Erinnerung an die ausstehende Bestätigung gibt es nicht.

## Übergänge

`Entwurf → Genehmigt → Abgeholt → Zurückgegeben`

- **Genehmigen:** Eine Person der Sachbearbeitung bestätigt den Entwurf. Besteht bereits ein Konflikt, fragt kramr ausdrücklich nach, siehe [Konflikte und Sperren](../conflicts-and-blocks/index.md).
- **Abholen:** Nur aus Genehmigt möglich. Die Buchung wechselt mit der ersten abgeholten Position nach Abgeholt, siehe [Abholung und Rückgabe](../pickup-and-return/index.md).
- **Zurückgeben:** Erst wenn alle Positionen zurück sind. Eine noch nicht abgeholte Position holst du vorher ab oder entfernst sie.
- **Stornieren:** Aus Entwurf und Genehmigt, solange nichts abgeholt wurde, auch nach dem geplanten Abholtermin. Ein Grund ist Pflicht. Eine feste Auswahl von Gründen gibt es nicht.

Eine überfällige Buchung ist kein eigener Status.
kramr zeigt sie an, wenn eine genehmigte oder abgeholte Ausleihe ihren geplanten Rückgabetermin überschritten hat.
Eine Sperre ist nie überfällig.

## Einen Schritt rückgängig machen

Jeden Statuswechsel kannst du mit „Rückgängig“ um einen Schritt zurücknehmen, wenn du dich verklickt hast.
Das steht in der Historie, sodass sie den Fehler und die Korrektur zeigt.
Zwei Schritte löschen erfasste Tatsachen und fragen vorher nach:

- **Abgeholt → Genehmigt** entfernt den Abholstand aller Positionen. Es geht nicht mehr, sobald eine Rückgabe erfasst ist.
- **Zurückgegeben → Abgeholt** entfernt zusätzlich alle erfassten Rückgaben und nimmt ihre Wirkung auf den Bestand zurück.

## Was sich wann bearbeiten lässt

| Status | Bearbeitbar |
| --- | --- |
| Entwurf | Alles: Material, Zeitraum, Kontakt, Bemerkung, zuständige Person, zusätzliche Empfänger. |
| Genehmigt | Zeitraum, Bemerkung, Kontakt, zuständige Person und Material. Jede Änderung an Material oder Zeitraum prüft Konflikte neu. Bereits abgeholte Positionen sind fest. |
| Abgeholt | Neue Positionen hinzufügen, noch nicht abgeholte Positionen ändern oder entfernen, Zeitraum (zum Beispiel die Rückgabe verlängern), Bemerkung und zuständige Person. Abgeholte Positionen sowie Kontakt und Tarif sind fest. |
| Zurückgegeben, Storniert | Nur ansehen. |

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

## Änderungen nach der Bestätigung

Ändern Sie eine genehmigte Ausleihe wesentlich (Zeitraum, Tarif, Ausleihkontakt, Positionen, Mengen, Beträge, Zusatzkosten), zeigt das Buchungsdetail „Änderung noch nicht mitgeteilt“ mit den Änderungen vorher und nachher.
Eine Mail geht erst hinaus, wenn Sie „Kontakt informieren“ klicken: Das legt eine neue Revision fest und schickt dem Ausleihkontakt genau eine Mail mit dem neuen Leihschein.
Der Link der alten Revision zeigt dann nur noch „Überholt“.
Zusatzkosten und Änderungen nach der Rückgabe verlangen keine neue Bestätigung.
Beim Stornieren bekommt der Kontakt eine Mail ohne den Stornogrund, wenn er schon einen Leihschein hatte.
Interne Bemerkung, Zuständige und Zusatzempfänger sind keine wesentlichen Änderungen.

## Schnell ausleihen

Neben dem normalen Weg über den Entwurf gibt es „Buchung anlegen und direkt genehmigen“.
Das geht nur für Ausleihen, nicht für Sperren, und nur, wenn beim Anlegen kein Konflikt besteht.
Sonst bleibt es beim Entwurf.
