---
title: Externe Kalender
description: ICS-Kalender einbinden, deren Termine als Hinweis im Buchungskalender erscheinen.
audience: admin
order: 26
---

# Externe Kalender

Veranstaltungen, die außerhalb von kramr gepflegt werden, zum Beispiel im Kalender des Stadtjugendrings oder der Gemeinde, lassen sich als Hinweis in den Buchungskalender einblenden.
Ein Admin richtet sie unter *Verwaltung → System → Einstellungen* in der Karte *Externe Kalender* ein.

## Was kramr damit tut

- **Nur lesend.** kramr holt die Datei des Kalenders und zeigt ihre Termine an. Es schreibt nie etwas in einen externen Kalender und meldet sich nirgends an.
- **Nur ICS.** Eingebunden wird die Adresse einer iCalendar-Datei (`.ics`), wie sie fast jeder Kalenderdienst als „Abonnieren“-Link anbietet. `webcal://`-Adressen werden als `https://` gelesen. CalDAV gibt es nicht.
- **Nur Hinweis.** Externe Termine erscheinen ausschließlich in der Kalenderansicht der Buchungsübersicht. Sie blockieren kein Material, lösen keinen Konflikt aus und tauchen weder auf der Startseite noch in Benachrichtigungen auf.
- **Übernommen werden** nur Titel und Zeitraum. Beschreibung, Ort und Teilnehmer bleiben im externen Kalender.

## Einrichten

1. In der Karte *Externe Kalender* auf *Kalender hinzufügen* klicken.
2. Einen Namen und die ICS-Adresse eintragen. Der Name erscheint im Kalendermenü und im Tooltip der Termine.
3. Speichern. kramr holt den Kalender sofort und zeigt, ob der Abruf geklappt hat.

Es lassen sich höchstens fünf Kalender einrichten.
Alle Nutzer mit Zugriff auf die Buchungsübersicht sehen dieselben Kalender.
Wer welche Kalender sieht, wählt jede Person selbst im Kalendermenü; das ist keine Einstellung des Admins.

## Die Adresse ist ein Zugangslink

Viele Kalenderdienste hängen ein Geheimnis an die Adresse.
Wer die Adresse kennt, kann den Kalender lesen.
kramr behandelt sie deshalb wie ein Passwort:

- Sie liegt in der Datenbank, nicht in einer Umgebungsvariablen.
- Nach dem Speichern zeigt die Oberfläche nur Adresse und Host, nicht den geheimen Teil.
- Nur Admins bekommen die Adresse überhaupt von der Anwendung geliefert, alle anderen Rollen nie.
- Eine Adresse mit Benutzername und Passwort wird abgelehnt.

Soll der Zugang widerrufen werden, erzeugt man im Kalenderdienst einen neuen Link und ersetzt den Kalender in kramr (entfernen, neu hinzufügen).

## Abruf und Ausfälle

kramr holt jeden Kalender alle 30 Minuten und auf Knopfdruck (*Jetzt abrufen*).
Der Kalender in der Oberfläche liest nur das Gespeicherte und wartet nie auf einen fremden Server.
Fällt ein Kalender aus, zeigt die Karte den Grund (zum Beispiel „Zeitüberschreitung“ oder „Datei nicht lesbar“), und der Buchungskalender zeigt weiter die zuletzt abgerufenen Termine mit dem Hinweis, wann sie zuletzt aktualisiert wurden.
Die Buchungen und die anderen Kalender sind davon nie betroffen.

Aus Sicherheitsgründen lehnt kramr Adressen auf die lokale Maschine und in interne Netze ab, auch bei Weiterleitungen.
Das gilt unabhängig von der Ausnahme für Webhooks.
Eine Antwort darf höchstens 2 MiB groß sein und höchstens zehn Sekunden dauern.

## Welche Termine kommen an

- Einzeltermine, ganztägige und wiederkehrende Termine, auch mit Ausnahmen, geänderten oder abgesagten Einzelterminen.
- Der gespeicherte Zeitraum reicht etwa zwei Monate zurück und ein Jahr voraus, höchstens 2000 Termine je Kalender.
- Zeitzonen liest kramr aus dem Kalender. Fehlt die Angabe, gilt Europe/Berlin. Angezeigt wird immer in Europe/Berlin.
