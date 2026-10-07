---
title: Datenschutzbegehren
description: Löschung, Speicherbegrenzung und Auskunft für Kontakte und Buchungsanfragen, mit den festen Aufbewahrungsfristen.
audience: admin
order: 10
---

# Datenschutzbegehren

Rechtsgrundlage und Ablauf bei einem Begehren gehören in die Datenschutzerklärung deiner Organisation, nicht in die Software.
Diese Seite beschreibt, was kramr dafür bereithält.

## Löschbegehren

kramr löscht einen Kontakt nie, sondern **anonymisiert** ihn, weil Buchungen auf ihn verweisen.
Eine Person mit der Rolle Staff oder Admin öffnet *Kontakte* und wählt in der Zeile des Kontakts im Menü *Anonymisieren*.
Nach der Bestätigung sind Geburtsdatum, E-Mail, Handynummer, Organisation und Adresse entfernt, und der Nachname ist auf die Initiale gekürzt.
Dieselben Angaben verschwinden aus dem Verlauf der zugehörigen Buchungen.
Die Aktion ist nicht umkehrbar.
Einen Eingriff in die Datenbank braucht es dafür nicht.

## Speicherbegrenzung

Kontakte ohne neue Buchung seit einer einstellbaren Frist listet *Kontakte → Inaktive Kontakte* als Vorschlag.
Die Frist beträgt standardmäßig drei Jahre und ist in Tagen einstellbar, siehe [Einstellungen](../configuration/einstellungen.md).
Anonymisiert wird nie automatisch, sondern nur durch die Sachbearbeitung.
Gehe die Liste regelmäßig durch, zum Beispiel einmal im Jahr.

## Auskunftsbegehren

Einen eigenen Auskunftsbericht gibt es nicht.
Die Angaben zu einer Person stehen im Kontakt und in dessen Buchungen.
Für die Weitergabe steht der CSV-Export der Buchungen zur Verfügung.
Geht ein Begehren darüber hinaus, bedienst du es über deinen Zugriff auf die Datenbank.

## Benachrichtigungen

Der Text einer Benachrichtigung nennt die ausleihende Person.
Beim Anonymisieren eines Kontakts löscht kramr deshalb in derselben Transaktion alle Benachrichtigungen zu seinen Buchungen, auch ausstehende.
Ein täglicher Job (gegen 03:45 Uhr Europe/Berlin) löscht versendete und endgültig fehlgeschlagene Benachrichtigungen nach **180 Tagen**.
Der Wert ist fest.

## Buchungsanfragen von der Website

Eine Anfrage von der Website trägt Name, E-Mail-Adresse, Handynummer und Gruppe der anfragenden Person, bevor es einen Kontakt gibt.
Ein täglicher Job (gegen 03:50 Uhr Europe/Berlin) räumt auf:

- Abgelaufene offene Anfragen setzt er auf „Verfallen“.
- Nicht übernommene Anfragen (abgelehnt, zurückgezogen, verfallen) **löscht** er **90 Tage** nach ihrem Abschluss vollständig.
- Übernommene Anfragen **anonymisiert** er **30 Tage** nach der Übernahme. Die Angaben stehen dann im Kontakt und in der Buchung.

Die Fristen sind fest.
Der Link einer Anfrage gilt bis 30 Tage nach der Entscheidung, höchstens 180 Tage ab Erstellung.
Ein nie geöffneter Link, den eine Person selbst angelegt hat, gilt 7 Tage.
Die E-Mail mit dem Link liegt bis zum Versand im Klartext in der Warteschlange und wird danach gelöscht.
Wer einen Kontakt anonymisiert, löscht oder anonymisiert in demselben Vorgang dessen Anfragen.

## Was außerhalb von kramr bleibt

- Das Zugriffs- und das Fehlerprotokoll des Reverse Proxys, siehe [Reverse Proxy](../installation/reverse-proxy.md), Anforderung 6.
- Das Postfach der anfragenden Person.
- Datensicherungen, die vor einer Löschung entstanden sind. Das gilt für jede Löschung. Wäge es gegen die Aufbewahrungsdauer deiner Sicherungen ab, siehe [Backup](../backup/index.md).

Nenne in der Datenschutzerklärung deiner Organisation die Anfrage über die Website samt diesen Fristen.
Die Seite „Anfrage stellen“ zeigt sie den Anfragenden bereits in Kurzform.
