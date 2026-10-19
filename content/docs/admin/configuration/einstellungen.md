---
title: Einstellungen
description: Die fachlichen Einstellungen von kramr mit Typ, Standardwert und Bedeutung.
audience: admin
order: 22
---

# Einstellungen

Die fachlichen Werte ändert ein Administrator in der Oberfläche unter *Verwaltung*, in den Gruppen *Organisation* und *System*.
Sie liegen in der Datenbank und gelten sofort, ohne Neustart.
Einige haben einen Startwert aus einer Umgebungsvariable; der gilt nur, bis die Einstellung zum ersten Mal gespeichert wurde.
Die Variablen stehen unter [Umgebungsvariablen](umgebungsvariablen.md).

<!-- settings-registry:start - generated from ops/env-registry.yaml, do not edit -->

| Schlüssel | Art | Standard | Bedeutung |
| --- | --- | --- | --- |
| `reminder.lead_time_days` | Tage (ganze Zahl) | `2` Tage, Startwert aus `KRAMR_DEFAULT_REMINDER_LEAD_TIME_DAYS` | Wie viele Tage vor dem geplanten Abholtermin die Erinnerung verschickt wird. |
| `contacts.inactivity_period_days` | Tage (ganze Zahl) | `1095` Tage (3 Jahre), Startwert aus `KRAMR_DEFAULT_CONTACT_INACTIVITY_PERIOD_DAYS` | Nach so vielen Tagen ohne Buchung schlägt kramr vor, einen Kontakt zu anonymisieren. Anonymisiert wird nie automatisch. |
| `notification.webhook_url` | Text | leer (kein Webhook) | Adresse, an die kramr Benachrichtigungen als JSON schickt, zum Beispiel an einen Chat-Kanal. Offensichtlich interne Ziele lehnt kramr ab; Ausnahmen legst du mit `KRAMR_NOTIFICATION_WEBHOOK_ALLOWED_HOSTS` fest. |
| `notification.notify_creator` | Ja oder Nein | `false` | Ob auch die Person, die eine Buchung angelegt hat, die Benachrichtigungen zu dieser Buchung erhält, zusätzlich zur zuständigen Person. |
| `notification.notify_admins_on_new_booking` | Ja oder Nein | `false` | Ob alle Administratoren beim Anlegen einer Buchung benachrichtigt werden. |
| `notification.always_notify_recipients` | Mailadressen, durch Komma getrennt | leer | Adressen, die jede Benachrichtigung erhalten, unabhängig von den beiden Schaltern darüber. |
| `update_check.enabled` | Ja oder Nein | `true`, Startwert aus `KRAMR_DEFAULT_UPDATE_CHECK_ENABLED` | Ob die Einstellungsseite *Version & Updates* bei GitHub nach einem neueren Release fragen darf. Ausgeschaltet findet kein ausgehender Aufruf statt. |
| `embed.allowed_origins` | Webadressen, eine je Eintrag | leer (keine fremde Einbettung) | Die Webseiten, die eine Einbettung in einem Rahmen anzeigen dürfen. Geändert wird sie unter: Verwaltung der Einbettungen. |
| `organisation.name` | Text | leer (kramr zeigt seinen eigenen Namen) | Name der Organisation in der Kopfzeile, auf der Anmelde- und den Anfrageseiten und in E-Mails. Höchstens 80 Zeichen. |
| `legal.privacy_policy_url` | Text | leer (keine Datenschutzerklärung verlinkt) | Adresse der Datenschutzerklärung, nur mit `https://`. Sie steht als Fußzeile auf den Anfrageseiten und der Anmeldeseite sowie in den E-Mails an Anfragende, und die Seite zum Anfordern des Links verlinkt sie im Datenschutzhinweis. |
| `legal.links` | Liste aus Beschriftung und Adresse (höchstens 4) | leer (keine weiteren Links) | Bis zu 4 weitere Links aus Beschriftung und Adresse, zum Beispiel Impressum oder Kontakt, nur mit `https://`. Sie stehen in der gepflegten Reihenfolge hinter der Datenschutzerklärung. |
| `ui.address_form` | Auswahl | `informal`, Startwert aus `KRAMR_DEFAULT_ADDRESS_FORM` | Ob die deutschen Texte „Du“ (`informal`) oder „Sie“ (`formal`) sagen. Die öffentlichen Seiten lesen sie ohne Anmeldung. |

<!-- settings-registry:end -->

## Wo welche Einstellung steht

Jede Seite hat ihren eigenen Knopf *Speichern*; er speichert nur die Felder dieser Seite.
Wer eine Seite mit ungespeicherten Änderungen verlässt, wird vorher gefragt.
Was sofort gespeichert wird, etwa ein Logo oder ein externer Kalender, steht in einem eigenen Kasten mit dem Hinweis „Wird sofort gespeichert“.

| Gruppe | Seite | Inhalt |
| --- | --- | --- |
| Organisation | Auftritt | `organisation.name`, `ui.address_form` und die Logos für Oberfläche und E-Mails |
| Organisation | Recht & Datenschutz | `legal.privacy_policy_url`, `legal.links` und `contacts.inactivity_period_days` |
| System | Benachrichtigungen | `reminder.lead_time_days`, die Empfänger (`notification.notify_creator`, `notification.notify_admins_on_new_booking`, `notification.always_notify_recipients`) und `notification.webhook_url`; darunter die fehlgeschlagenen Benachrichtigungen der letzten 7 Tage |
| System | Externe Kalender | die eingebundenen Kalender, siehe [Externe Kalender](externe-kalender.md) |
| System | Website-Einbindung | `embed.allowed_origins` und die Einbettungen |
| System | Version & Updates | die laufende Version und `update_check.enabled` |

Die frühere Adresse `/settings` führt auf die Seite *Auftritt*.

## Rechtliche Links

Auf der Seite *Recht & Datenschutz* pflegst du die Datenschutzerklärung und bis zu vier weitere Links, zum Beispiel Impressum, Kontakt oder die Website des Vereins.
Jeder Link besteht aus einer Beschriftung (höchstens 40 Zeichen, eine Zeile) und einer Adresse, die mit `https://` beginnt und keine Zugangsdaten enthält.
Die weiteren Links lassen sich hinzufügen, verschieben und entfernen; die Reihenfolge ist die der Anzeige, die Datenschutzerklärung steht immer zuerst.

Die Links erscheinen als Fußzeile auf den Seiten für Buchungsanfragen, auf der Anmeldeseite und unter den E-Mails an Anfragende.
Die Seite zum Anfordern des Links (der Einstieg in der Einbettung) zeigt keine Fußzeile, verlinkt aber die Datenschutzerklärung in ihrem Datenschutzhinweis.
In der Einbettung selbst, in der angemeldeten Anwendung und in den Mails an Mitarbeitende stehen keine rechtlichen Links.
Ohne gepflegte Links erscheint nirgends eine Fußzeile.

Eine E-Mail hält die Links fest, die beim Einreihen galten; eine spätere Änderung wirkt erst auf neue Mails.
Die Links öffnen in einem neuen Fenster.
Umgibt die einbettende Website den Code mit einem eigenen `sandbox`-Attribut, braucht es dort `allow-popups`, damit der Link im Datenschutzhinweis aufgeht.
