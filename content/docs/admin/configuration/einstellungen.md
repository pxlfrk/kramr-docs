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
| `update_check.enabled` | Ja oder Nein | `true`, Startwert aus `KRAMR_DEFAULT_UPDATE_CHECK_ENABLED` | Ob die Einstellungsseite *Version & Updates* bei der Image-Registry nach einer neueren Version fragen darf. Ausgeschaltet findet kein ausgehender Aufruf statt. |
| `embed.allowed_origins` | Webadressen, eine je Eintrag | leer (keine fremde Einbettung) | Die Webseiten, die eine Einbettung in einem Rahmen anzeigen dürfen. Geändert wird sie unter: Verwaltung der Einbettungen. |
| `organisation.name` | Text | leer (kramr zeigt seinen eigenen Namen) | Name der Organisation in der Kopfzeile, auf der Anmelde- und den Anfrageseiten und in E-Mails. Höchstens 80 Zeichen. |
| `legal.privacy_policy_url` | Text | leer (keine Datenschutzerklärung verlinkt) | Adresse der Datenschutzerklärung, nur mit `https://`. Sie steht als Fußzeile auf den Anfrageseiten und der Anmeldeseite sowie in den E-Mails an Anfragende, und die Seite zum Anfordern des Links verlinkt sie im Datenschutzhinweis. |
| `legal.links` | Liste aus Beschriftung und Adresse (höchstens 4) | leer (keine weiteren Links) | Bis zu 4 weitere Links aus Beschriftung und Adresse, zum Beispiel Impressum oder Kontakt, nur mit `https://`. Sie stehen in der gepflegten Reihenfolge hinter der Datenschutzerklärung. |
| `request_mail.link_self_service` | Texte einer E-Mail (Du- und Sie-Fassung) | leer (die Vorgabe) | Betreff und Text der Mail mit dem Link zur Anfrage, wenn die anfragende Person ihn selbst angefordert hat, je in einer Du- und einer Sie-Fassung. Gepflegt auf der Seite *E-Mail-Texte*. |
| `request_mail.link_staff_issued` | Texte einer E-Mail (Du- und Sie-Fassung) | leer (die Vorgabe) | Betreff und Text der Mail mit dem Link zur Anfrage, den die Geschäftsstelle ausgestellt hat, je in einer Du- und einer Sie-Fassung. |
| `request_mail.taken_over` | Texte einer E-Mail (Du- und Sie-Fassung) | leer (die Vorgabe) | Betreff und Text der Mail, dass die Anfrage übernommen wurde, je in einer Du- und einer Sie-Fassung. |
| `request_mail.declined` | Texte einer E-Mail (Du- und Sie-Fassung) | leer (die Vorgabe) | Betreff und Text der Mail, dass die Anfrage abgelehnt wurde, je in einer Du- und einer Sie-Fassung; der Text muss die Begründung enthalten. |
| `booking.select_all_confirm_threshold` | Zahl | `50`, ohne Umgebungsvariable | Ab wie vielen hinzugefügten Positionen „Alle auswählen“ in der Materialauswahl vorher fragt. Eine ganze Zahl von 1 bis 10000. |
| `extra_charge.cleaning_fee_parameter_type` | parameter-type | leer (keine Reinigungsgebühr vorbelegt) | Der Parameter-Typ, dessen Wert (eine Zahl in €) den Einzelpreis einer Zusatzkosten-Position „verunreinigt“ vorbelegt. Zur Auswahl stehen Zahl-Parameter mit der Einheit „€“; ohne Auswahl wird nichts vorbelegt. |
| `amosweb.enabled` | Ja oder Nein | `false`, ohne Umgebungsvariable | Ob das amosWEB-Modul eingeschaltet ist. Einschalten lässt es sich nur, wenn `KRAMR_AMOSWEB_APP_TOKEN`, `KRAMR_AMOSWEB_APP_KEY` und `KRAMR_SECRETS_KEY` gesetzt sind. Ausgeschaltet bleibt eine bestehende Verbindung erhalten, alle anderen amosWEB-Einstellungen sind gesperrt. Geändert wird sie unter: Verwaltung › Integrationen. |
| `amosweb.base_url` | Text | leer | Die Adresse der amosWEB-Instanz, nur `https://` und ohne Pfad. Offensichtlich interne Ziele lehnt kramr ab. Eine bestehende Verbindung behält die Adresse, mit der sie hergestellt wurde. Geändert wird sie unter: Verwaltung › Integrationen › amosWEB › Einrichtung. |
| `amosweb.debtor_contact_id` | Text | leer | Die ID des Platzhalter-Kontakts in amosWEB, auf den Rechnungen vorerst lauten. Eine ganze Zahl; die ID steht in amosWEB beim Kontakt. Geändert wird sie unter: Verwaltung › Integrationen › amosWEB › Rechnungsangaben. |
| `amosweb.debtor_address_id` | Text | leer | Die ID der Anschrift des Platzhalter-Kontakts in amosWEB. Eine ganze Zahl. Geändert wird sie unter: Verwaltung › Integrationen › amosWEB › Rechnungsangaben. |
| `amosweb.debtor_email_id` | Text | leer | Die ID der E-Mail-Adresse des Platzhalter-Kontakts in amosWEB. Optional; eine ganze Zahl. Geändert wird sie unter: Verwaltung › Integrationen › amosWEB › Rechnungsangaben. |
| `amosweb.creditor_bank_detail_id` | Text | leer | Die ID der Bankverbindung in amosWEB, auf die Rechnungen lauten. Eine ganze Zahl. Geändert wird sie unter: Verwaltung › Integrationen › amosWEB › Rechnungsangaben. |
| `amosweb.responsible_user_id` | Text | leer | Die ID der Sachbearbeitung in amosWEB, die Rechnungen angelegt bekommen. Eine ganze Zahl. Geändert wird sie unter: Verwaltung › Integrationen › amosWEB › Rechnungsangaben. |
| `amosweb.payment_term_days` | Zahl | `14` Tage, ohne Umgebungsvariable | Nach wie vielen Tagen eine Rechnung fällig ist. Eine ganze Zahl von 0 bis 365. Geändert wird sie unter: Verwaltung › Integrationen › amosWEB › Rechnungsangaben. |
| `ui.address_form` | Auswahl | `informal`, Startwert aus `KRAMR_DEFAULT_ADDRESS_FORM` | Ob die deutschen Texte „Du“ (`informal`) oder „Sie“ (`formal`) sagen. Die öffentlichen Seiten lesen sie ohne Anmeldung. |

<!-- settings-registry:end -->

## Wo welche Einstellung steht

Jede Seite hat ihren eigenen Knopf *Speichern*; er speichert nur die Felder dieser Seite.
Wer eine Seite mit ungespeicherten Änderungen verlässt, wird vorher gefragt.
Was sofort gespeichert wird, etwa ein Logo oder ein externer Kalender, steht in einem eigenen Kasten mit dem Hinweis „Wird sofort gespeichert“.

| Gruppe | Seite | Inhalt |
| --- | --- | --- |
| Organisation | Auftritt | `organisation.name`, `ui.address_form`, `booking.select_all_confirm_threshold`, `extra_charge.cleaning_fee_parameter_type` und die Logos für Oberfläche und E-Mails |
| Organisation | Recht & Datenschutz | `legal.privacy_policy_url`, `legal.links` und `contacts.inactivity_period_days` |
| Organisation | E-Mail-Texte | die vier `request_mail.*`-Texte, siehe [E-Mail-Texte](#e-mail-texte-an-anfragende) |
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

## E-Mail-Texte an Anfragende

Auf der Seite *E-Mail-Texte* änderst du Betreff und Text der vier E-Mails, die Anfragende erhalten: den Link zur Anfrage (selbst angefordert oder von der Geschäftsstelle ausgestellt), die Übernahme und die Ablehnung.
Jede E-Mail gibt es in einer Du- und einer Sie-Fassung; welche verschickt wird, bestimmt die eingestellte Anrede.
Eine Fassung ist entweder ganz die Vorgabe oder ganz angepasst, teilweise leere Felder nimmt kramr nicht an.
„Auf Vorgabe zurücksetzen“ stellt die Vorgabe wieder her, bei den Link-Mails auch die Sicherheitshinweise.
Gibt es keine angepasste Fassung für die eingestellte Anrede, verwendet kramr die Vorgabe.

Der Text ist reiner Text: Eine Leerzeile trennt Absätze, HTML und Markdown gibt es nicht.
Der Betreff darf höchstens 150 Zeichen lang sein und steht zugleich als Überschrift in der E-Mail, jedes Textfeld höchstens 2000 Zeichen.
Bei den Link-Mails legen die beiden Textfelder fest, wo die Schaltfläche „Anfrage ausfüllen“ steht.
Kopf mit Logo und Name, Anrede, Schaltfläche, Fuß und die rechtlichen Links bleiben immer erhalten.

Im Text stehen Platzhalter in doppelten geschweiften Klammern; welche eine E-Mail kennt, zeigt der Editor darunter:

| Platzhalter | Wert | Verfügbar in |
| --- | --- | --- |
| `{{gueltig_bis}}` | Bis wann der Link der Anfrage gilt, als Datum | allen vier |
| `{{buchungsnummer}}` | Die Buchungsnummer, zum Beispiel B26-1 | Anfrage übernommen |
| `{{begruendung}}` | Die Begründung der Ablehnung; Pflicht im Text, nicht im Betreff | Anfrage abgelehnt |
| `{{organisation}}` | Der Name der Organisation, sonst „kramr“ | allen vier |

Ein unbekannter oder in dieser E-Mail nicht erlaubter Platzhalter wird beim Speichern abgewiesen.
Die Vorschau zeigt die E-Mail mit Beispieldaten als HTML und darunter als Klartext; sie speichert nichts.

Eine E-Mail hält den Text fest, mit dem sie eingereiht wurde; eine spätere Änderung wirkt erst auf neue E-Mails.
Die E-Mails an Mitarbeitende lassen sich nicht anpassen.
Änderungen stehen im Verlauf der Einstellungen.
