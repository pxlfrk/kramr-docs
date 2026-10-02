---
title: Benachrichtigungen
description: E-Mail und Webhook einrichten, Erinnerungen und Zustellung verstehen.
audience: admin
order: 40
---

# Benachrichtigungen

kramr kennt zwei Wege: **E-Mail** und **Webhook** (JSON per POST). Versendet
wird nie direkt bei der Änderung, sondern über eine Warteschlange in der
Datenbank. Ein Ausfall des Mailservers verliert daher nichts.

## E-Mail

Der Zugang zum Mailserver steht nur in Umgebungsvariablen:

| Variable | Standard | Bedeutung |
| --- | --- | --- |
| `KRAMR_NOTIFICATION_SMTP_HOST` | – | Mailserver. Ohne Wert ist Mailversand aus; die Anwendung startet trotzdem. |
| `KRAMR_NOTIFICATION_SMTP_PORT` | `587` | Port. |
| `KRAMR_NOTIFICATION_SMTP_SECURE` | `false` | Implizites TLS. |
| `KRAMR_NOTIFICATION_SMTP_USER`, `KRAMR_NOTIFICATION_SMTP_PASSWORD` | – | Zugangsdaten; leer für ein Relay ohne Anmeldung. |
| `KRAMR_NOTIFICATION_SMTP_FROM` | – | Absenderadresse. Pflicht, sobald ein Mailserver gesetzt ist. |

Buchungsanfragen von Websites funktionieren nur mit Mailversand, weil der Link
zur Anfrage per E-Mail kommt.

## Webhook

Das Ziel und die Auswahl der Ereignisse stellt ein Admin unter *Verwaltung →
System → Einstellungen* ein. Beim Speichern lehnt kramr offensichtlich interne
Ziele ab (lokale Adressen, private Netze). Für ein bewusst internes Ziel,
etwa einen Chat-Dienst im selben Docker-Netz, trägt der Betreiber den Host in
`KRAMR_NOTIFICATION_WEBHOOK_ALLOWED_HOSTS` ein (kommagetrennt). Das ist eine
Ausnahme, keine allgemeine Freigabeliste.

## Zeitplan

Erinnerungen vor der Abholung und Meldungen zu überfälligen Rückgaben werden
einmal täglich gegen 7 Uhr (Europe/Berlin) geprüft. Pro Buchung, Ereignis und
Kalendertag wird höchstens einmal gesendet; ein Neustart sendet nichts doppelt.
Die Zustellung der Warteschlange und die Bereinigung alter Einträge laufen
nachts.
