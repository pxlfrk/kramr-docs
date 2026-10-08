---
title: Konflikte und Sperren
description: Wie kramr Überschneidungen anzeigt, was „Trotzdem genehmigen“ bedeutet und wofür eine Sperre dient.
audience: user
order: 42
---

# Konflikte und Sperren

## Der Konflikt-Hinweis

Ein Konflikt ist ein Hinweis, kein eigener Status und keine Sperre.
kramr zeigt ihn bei Entwürfen und genehmigten Buchungen, deren Material sich im Zeitraum mit einer genehmigten oder abgeholten Buchung überschneidet.

- **Mengenmaterial:** Es gibt erst einen Konflikt, wenn die gewünschte Menge die im Zeitraum freie Menge übersteigt.
- **Einzelne Einheiten:** Jede Einheit kann im Zeitraum nur einmal belegt sein.
- **Die Meldung** nennt die Menge in dieser Buchung, den Bestand und die im Zeitraum freie Menge, dazu die Buchungen, die das Material belegen. Entwürfe anderer Buchungen verbrauchen nichts und stehen getrennt als „vorgemerkt“.
- **Bei abgeholten Buchungen** gilt der Hinweis nur für die noch nicht abgeholten Positionen. Was schon unterwegs ist, ist fest.

Zwei genehmigte Buchungen können sich technisch überschneiden.
Der Hinweis macht es nur sichtbar.
Die Auflösung liegt bei der Sachbearbeitung, etwa indem sie eine Buchung ändert oder storniert.
Ein automatisches Nachrücken einer wartenden Buchung gibt es nicht.

### Trotzdem genehmigen

Besteht beim Genehmigen eines Entwurfs schon ein Konflikt, genehmigt kramr nicht stillschweigend.
Du bestätigst ausdrücklich „Trotzdem genehmigen“.

### Hinweis bei der anderen Buchung

Die Buchung, die den Bestand hält, trägt einen neutralen Hinweis, wenn andere Buchungen mehr wollen, als im Zeitraum frei ist.
In der Buchungsübersicht steht dafür „Beansprucht“.
Das ist kein Konflikt: keine Rückfrage, keine Benachrichtigung, kein Filter.

## Zeiträume

Ein Zeitraum reicht vom Abholtermin bis zum Rückgabetermin, jeweils mit Datum und Uhrzeit.
Der Rückgabezeitpunkt zählt nicht mehr dazu.
Endet eine Buchung um 18 Uhr und beginnt die nächste um 18 Uhr, gibt es keinen Konflikt.
Eine Pufferzeit zwischen Rückgabe und Abholung gibt es nicht.

## Sperren

Eine Sperre belegt Material im Zeitraum, ohne dass jemand es ausleiht.
Sie dient zum Beispiel für eine Reparatur oder eine Inventur.

- Sie hat **keinen Kontakt**, aber immer eine zuständige Person aus der Sachbearbeitung.
- Sie durchläuft denselben Status und dieselbe Konfliktprüfung wie eine Ausleihe, bleibt aber bei Genehmigt: Eine Sperre wird nie abgeholt oder zurückgegeben und ist nie überfällig.
- Sie kann einen **Titel** tragen. Er steht in Übersicht, Kalender und Buchung anstelle des Ausleihers und wird bei der Suche gefunden.
- In Übersicht und Kalender ist sie optisch abgehoben. Der Schloss-Filter der Übersicht zeigt nur Sperren, blendet sie aus oder hebt den Filter auf.
- „Direkt genehmigen“ gibt es für Sperren nicht.
