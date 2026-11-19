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

### Rücksprache vor der Genehmigung

Braucht Material der Buchung eine Rücksprache (siehe [Inventar](../inventory/index.md)), zeigt die Buchung die Karte „Rücksprache“: je Person ihre Kontaktdaten, ihre Positionen und den Stand der Rücksprache.
Hast du mit der Person gesprochen, wählst du „Rücksprache gehalten“ und trägst bei Bedarf eine Notiz ein; mit „Vermerk zurücknehmen“ wird die Rücksprache wieder offen.
Beides geht im Entwurf und in genehmigten Buchungen, später zeigt die Karte nur noch an.

#### Zusammenfassung per Mail senden

Statt anzurufen, schickst du der Person mit „Zusammenfassung senden“ eine Mail mit den Positionen, die sie betreffen, dem Zeitraum und dem Namen des Ausleihers.
Telefon und E-Mail des Ausleihers kommen nur mit, wenn du sie im Dialog freigibst; Preise stehen nie in der Mail.
Die Person öffnet den Link und bestätigt oder lehnt ab (eine Begründung ist Pflicht) und kann eine Anmerkung für dich und eine Auflage mitgeben, die auch auf der Packliste steht.
Die Antwort gilt endgültig; du wirst benachrichtigt, und die Karte zeigt „Bestätigt“ oder „Abgelehnt“.
Der Link gilt bis zum Abholtermin, höchstens 30 Tage, und endet, wenn du „Rücksprache gehalten“ vermerkst, erneut sendest oder die Buchung abgeholt, storniert oder archiviert wird.
Genehmigen kannst du ohne Rückfrage, wenn die Person bestätigt hat oder „Rücksprache gehalten“ vermerkt ist; bei „Angefragt“ und „Abgelehnt“ bestätigst du im Dialog ausdrücklich.
Ohne hinterlegte E-Mail-Adresse der Person oder nach dem Abholtermin gibt es den Knopf nicht.

Beim Genehmigen mit offener Rücksprache bestätigst du im Dialog ausdrücklich, wie bei „Trotzdem genehmigen“; kramr hält nichts auf, und die Bestätigung steht in der Historie.
Wechselt die Ansprechperson des Materials, ist die neue Person offen.
Bei der Übernahme einer Anfrage weist ein Hinweis auf die Rücksprache hin, ohne Bestätigung.

#### Veraltete Rücksprache

Eine Antwort oder ein Vermerk gilt für den Zeitraum, den Ausleiher und die Positionen der Person, wie sie beim Senden oder Vermerken waren.
Änderst du danach den Zeitraum, tauschst eine Einheit, änderst die Menge, fügst eine Position der Person hinzu oder entfernst eine, oder wechselt der Ausleiher, zeigt die Karte „Veraltet“ und darunter, was sich seitdem geändert hat.
Änderungen an Positionen einer anderen Person und das Umbenennen von Material zählen nicht, und machst du eine Änderung rückgängig, gilt die Rücksprache wieder.
Mit „Erneut senden“ fragst du die Person neu, oder du vermerkst nach einem Gespräch erneut „Rücksprache gehalten“.
Genehmigen geht bei „Veraltet“ wie bei „Abgelehnt“ nur mit ausdrücklicher Bestätigung; der Dialog nennt die Person mit „(veraltet)“.

#### Abholung ohne geklärte Rücksprache

Ist die Rücksprache noch offen, angefragt, abgelehnt oder veraltet, kannst du trotzdem abholen: Unter „Als abgeholt erfassen“ steht, mit wem sie nicht geklärt ist, und der Schritt „Abholung“ trägt einen Hinweis, kramr hält nichts auf.

### Hinweis „Beansprucht“

Die Buchung, die den Bestand hält, trägt einen neutralen Hinweis, wenn andere Buchungen mehr wollen, als im Zeitraum frei ist.
In der Buchungsübersicht steht dafür „Beansprucht“.
Das ist kein Konflikt: keine Rückfrage, keine Benachrichtigung, kein Filter.

## Termin außerhalb der Öffnungszeiten

Hat die Verwaltung die Öffnungszeiten der Geschäftsstelle eingetragen, prüft kramr die Termine einer Ausleihe.
Liegt der Abhol- oder Rückgabetermin außerhalb dieser Zeiten, an einem Feiertag oder an einem geschlossenen Tag, zeigt kramr einen Hinweis mit dem Grund, zum Beispiel „Feiertag: Ostermontag“.
Der Hinweis ist wie der Konflikt kein Status und sperrt nichts.

- **Wo du ihn siehst:** In der Buchung steht er unter dem betroffenen Termin und als Hinweis an der Abholung oder der Rückgabe in der Statuskette; ein Klick darauf springt zum Termin. Im Formular erscheint er unter den Terminen, in der Buchungsübersicht in der Zeile.
- **Bestätigen:** Wer einen Termin außerhalb anlegt, ändert, genehmigt oder aus einer Anfrage übernimmt, bestätigt ihn ausdrücklich. Im Formular kreuzt du „Termin außerhalb der Öffnungszeiten bestätigen“ an, beim Genehmigen bestätigst du im Dialog. Beim Bearbeiten fragt kramr nur für einen Termin, den du verschoben hast.
- **Wann nicht:** Sperren tragen den Hinweis nie. Zurückgegebene und stornierte Buchungen auch nicht, und eine abgeholte Buchung nur noch an der Rückgabe. Beim Erfassen von Abholung oder Rückgabe fragt kramr nicht, denn dann ist es ohnehin geschehen.
- **Filter:** In der Buchungsübersicht zeigt der Filter „Außerhalb der Öffnungszeiten“ nur diese Buchungen oder blendet sie aus. Er ist ein eigener Filter und nicht der Filter „Konflikt“.
- **Anfragende:** Wer eine Anfrage stellt, sieht den Hinweis nicht; die Geschäftsstelle bestätigt ihn beim Übernehmen.

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
- Alles oder einen ganzen Standort sperrst du in der Materialauswahl mit „Alle auswählen“ ([Material auswählen](../features/index.md)); die Sperre enthält dann jedes Material als eigene Position. Später angelegtes Material gehört nicht dazu.
- Eine genehmigte Sperre über alles markiert jede überschneidende Ausleihe als Konflikt, und die Benachrichtigung über Konflikte meldet jede einmal.
