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

## Schnell ausleihen

Neben dem normalen Weg über den Entwurf gibt es „Buchung anlegen und direkt genehmigen“.
Das geht nur für Ausleihen, nicht für Sperren, und nur, wenn beim Anlegen kein Konflikt besteht.
Sonst bleibt es beim Entwurf.
