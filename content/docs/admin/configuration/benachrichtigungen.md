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

Die Mails an die Sachbearbeitung zu einer Buchung enden mit der Schaltfläche „Buchung öffnen“.
Im Klartext steht dieselbe Adresse darunter.
Eine Adresse ohne Konto in kramr, etwa auf der Liste der ständigen Empfänger oder als zusätzlicher Empfänger einer Buchung, bekommt die Mail ohne Schaltfläche und Adresse, weil sie die Buchung nicht öffnen kann.

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

kramr schickt je Ereignis einen POST mit genau einem Feld, `text`, auf Deutsch.
Der Text beginnt mit einem Symbol für das Ereignis, es folgen Betreff und Einzelheiten, und die letzte Zeile ist die Adresse der Buchung:

```json
{
  "text": "🆕 Neue Buchung B27-42\n\nEine neue Buchung wurde angelegt.\n\nBuchung: B27-42\nZeitraum: 10.06.2027, 08:00 – 12.06.2027, 18:00\nAusleiher: Hanna Müller\nMaterial: Gaskocher (3)\nZuständig: Sam Weber\n\nhttps://kramr.example.org/bookings/3f2c…"
}
```

Die Adresse baut kramr aus `KRAMR_SERVER_PUBLIC_URL`.
Sie steht ohne Markdown-Auszeichnung da, damit sie in jedem Ziel lesbar bleibt.

| Symbol | Ereignis |
| --- | --- |
| 🆕 | Buchung angelegt |
| ⏰ | Erinnerung vor der Abholung |
| ⚠️ | Überfällige Rückgabe |
| 🔀 | Konflikt bei einer Buchung oder durch eine Bestandsminderung |
| ✅ | Buchung trotz Konflikt genehmigt |

Eine Nachricht entsteht nur, wenn das Ereignis mindestens einen Mail-Empfänger hat.
Die Bestandsminderung meldet kramr je Prüflauf in einer Nachricht mit allen betroffenen Buchungen und je einer Adresse.
Eine Buchung, die dabei in Konflikt geraten ist, erscheint nur in dieser Nachricht und nicht zusätzlich als eigene 🔀-Nachricht.

### Rocket.Chat

1. In Rocket.Chat unter *Administration → Integrationen* einen **eingehenden Webhook** für den gewünschten Kanal anlegen und dessen Adresse kopieren.
2. Die Adresse als `notification.webhook_url` in den Einstellungen eintragen.
3. Läuft Rocket.Chat im selben Docker-Netz oder unter einer privaten Adresse, den Host zusätzlich in `KRAMR_NOTIFICATION_WEBHOOK_ALLOWED_HOSTS` eintragen, sonst lehnt kramr das Ziel beim Speichern ab.

Microsoft Teams ist nicht unterstützt.
Teams erwartet eine Adaptive Card statt eines einfachen `text`-Feldes.

## Zeitplan

Erinnerungen vor der Abholung und Meldungen zu überfälligen Rückgaben werden
einmal täglich gegen 7 Uhr (Europe/Berlin) geprüft. Pro Buchung, Ereignis und
Kalendertag wird höchstens einmal gesendet; ein Neustart sendet nichts doppelt.
Die Zustellung der Warteschlange und die Bereinigung alter Einträge laufen
nachts.
