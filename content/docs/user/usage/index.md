---
title: Auswertung der Nutzung
description: Sehen, wie oft und wie lange Material verliehen war, und welches nie rausgeht.
audience: user
order: 51
---

# Auswertung der Nutzung

Die Auswertung beantwortet Fragen wie „Welche Zelte waren letztes Jahr nie draußen?“, „Was ist in den Sommerferien regelmäßig knapp?“ und „Was kommt häufig beschädigt zurück?“.
Du brauchst dafür keine eigene Tabelle: kramr zählt die Ausleihen für dich.
Jede Rolle, die den Bestand sieht, sieht auch die Auswertung, auch **ReadOnly**.
Die Zahlen gelten je Material und nennen keine Personen.

## Alle Materialien vergleichen

1. Öffne die Bestandsübersicht und wähle im Menü „Weitere Aktionen“ den Eintrag „Auswertung“.
2. Wähle bei Bedarf den **Zeitraum**.
   Ohne Auswahl zeigt kramr die letzten 365 Tage bis heute.
   Länger als fünf Jahre darf der Zeitraum nicht sein.
3. Klicke auf eine Spaltenüberschrift, um danach zu sortieren, und noch einmal, um die Richtung zu wechseln.

Der Zeitraum und die Sortierung stehen in der Adresse der Seite.
Du kannst die Adresse also weitergeben, und die Ansicht bleibt nach dem Neuladen erhalten.
Archiviertes Material blendest du mit „Auch archivierte anzeigen“ ein.

Ein Material, das im Zeitraum nie verliehen war, steht trotzdem in der Liste, mit Nullen.
Sortierst du nach den verliehenen Tagen, steht es am Ende oder am Anfang, je nach Richtung.
So findest du, was nie rausgeht.

## Was die Spalten bedeuten

| Spalte | Bedeutung |
| --- | --- |
| Ausleihen | Wie viele Buchungen das Material im Zeitraum hatten. „davon über Sets“ nennt die Buchungen, in denen es nur als Bestandteil eines Pflicht-Sets dabei war. |
| Verliehene Tage | An wie vielen Kalendertagen im Zeitraum mindestens ein Stück draußen war. |
| Mengentage | Stückzahl mal Tage, zusammengezählt. 4 Zelte für 3 Tage sind 12 Mengentage. |
| Auslastung | Die Mengentage im Verhältnis zum Bestand und zur Länge des Zeitraums. |
| Höchste Belegung | Wie viele Stück zur selben Zeit draußen waren, im Verhältnis zum Bestand. |
| Zuletzt verliehen | Der Tag, an dem das Material zuletzt rausging. Er hängt nicht am gewählten Zeitraum. |
| Beschädigt, Verloren | Wie viele Stück im Zeitraum so zurückkamen oder fehlten. |

Gezählt werden **genehmigte, abgeholte und zurückgegebene** Ausleihen.
Entwürfe, stornierte Buchungen und Sperren zählen nicht.
Die Zeiten richten sich nach der tatsächlichen Abholung und Rückgabe, wo du sie erfasst hast, sonst nach dem geplanten Zeitraum.
Kommt ein Teil früher zurück, endet die Zählung für diesen Teil früher.
Ein Pflicht-Set zählt auch für jeden seiner Bestandteile.

Die Auslastung rechnet mit dem **heutigen Bestand**.
Sie ist nicht bei 100 % gedeckelt.
Werte darüber entstehen zum Beispiel, wenn Bestand verloren ging oder sich Buchungen überschneiden.
Einnahmen weist die Auswertung nicht aus, weil der Betrag an der Buchung hängt und nicht am einzelnen Material.

## Ein Material genauer ansehen

Der Name in der Liste führt zum Material und öffnet dort den Abschnitt **Nutzung**, mit demselben Zeitraum.
Du erreichst ihn auch über die Seitenleiste des Materials.
Dort stehen dieselben Zahlen für dieses eine Material.
Bei Material mit einzelnen Einheiten siehst du zusätzlich eine Zeile je Einheit mit den Ausleihen, den verliehenen Tagen und dem Tag der letzten Ausleihe.
Archivierte Einheiten erscheinen nur, wenn sie im Zeitraum verliehen waren.

## Als CSV weitergeben

Im Menü „Weitere Aktionen“ der Auswertung lädst du die Tabelle als CSV-Datei herunter.
Sie enthält dieselben Zeilen für denselben Zeitraum und heißt zum Beispiel `kramr-auswertung-2026-01-01-2026-01-31.csv`.
Anteile stehen darin als Prozent mit Komma.
