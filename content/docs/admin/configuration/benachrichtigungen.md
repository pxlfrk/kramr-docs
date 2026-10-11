---
title: Benachrichtigungen
description: E-Mail und Webhook einrichten, Erinnerungen und Zustellung verstehen.
audience: admin
order: 24
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
| `KRAMR_NOTIFICATION_SMTP_SECURE` | `false` | Implizites TLS (üblich bei Port 465). |
| `KRAMR_NOTIFICATION_SMTP_REQUIRE_TLS` | `true` | Ohne implizites TLS nur über STARTTLS senden. |
| `KRAMR_NOTIFICATION_SMTP_USER`, `KRAMR_NOTIFICATION_SMTP_PASSWORD` | – | Zugangsdaten; leer für ein Relay ohne Anmeldung. |
| `KRAMR_NOTIFICATION_SMTP_FROM` | – | Absenderadresse. Pflicht, sobald ein Mailserver gesetzt ist. |

### Verschlüsselte Verbindung

kramr schickt Zugangsdaten und Mails nur verschlüsselt an den Mailserver.
Bei `KRAMR_NOTIFICATION_SMTP_SECURE=true` ist die Verbindung von Anfang an verschlüsselt.
Sonst verlangt kramr, dass der Server die Verbindung per STARTTLS verschlüsselt.
Bietet er das nicht an, scheitert der Versand.
kramr versucht jede Mail fünfmal innerhalb von knapp anderthalb Stunden.
Korrigierst du die Einstellung in dieser Zeit, gehen die wartenden Mails von selbst raus.
Danach ist eine Mail endgültig fehlgeschlagen: Sie steht mit der Fehlermeldung in der Übersicht der fehlgeschlagenen Benachrichtigungen und wird nicht erneut gesendet.
Prüfe deshalb vor der Aktualisierung von einer älteren Version, ob dein Mailserver STARTTLS anbietet.

Ein Relay ohne Verschlüsselung, etwa ein Postfix im selben Docker-Netz, verlangt eine ausdrückliche Entscheidung:
`KRAMR_NOTIFICATION_SMTP_REQUIRE_TLS=false`.
kramr schreibt dann beim Start eine Warnung ins Protokoll.
Nutze das nur in einem Netz, dem du vertraust.

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
