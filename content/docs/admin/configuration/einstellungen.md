---
title: Einstellungen
description: Die fachlichen Einstellungen von kramr mit Typ, Standardwert und Bedeutung.
audience: admin
order: 30
---

# Einstellungen

Die fachlichen Werte ändert ein Administrator in der Oberfläche unter *Verwaltung → System → Einstellungen*.
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
| `update_check.enabled` | Ja oder Nein | `true`, Startwert aus `KRAMR_DEFAULT_UPDATE_CHECK_ENABLED` | Ob die Einstellungen-Seite bei GitHub nach einem neueren Release fragen darf. Ausgeschaltet findet kein ausgehender Aufruf statt. |
| `embed.allowed_origins` | Webadressen, eine je Eintrag | leer (keine fremde Einbettung) | Die Webseiten, die eine Einbettung in einem Rahmen anzeigen dürfen. Geändert wird sie unter: Verwaltung der Einbettungen. |
| `organisation.name` | Text | leer (kramr zeigt seinen eigenen Namen) | Name der Organisation in der Kopfzeile, auf der Anmelde- und den Anfrageseiten und in E-Mails. Höchstens 80 Zeichen. |
| `ui.address_form` | Auswahl | `informal`, Startwert aus `KRAMR_DEFAULT_ADDRESS_FORM` | Ob die deutschen Texte „Du“ (`informal`) oder „Sie“ (`formal`) sagen. Die öffentlichen Seiten lesen sie ohne Anmeldung. |

<!-- settings-registry:end -->
