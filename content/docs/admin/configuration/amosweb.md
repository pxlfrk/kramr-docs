---
title: amosWEB-Anbindung
description: Das amosWEB-Modul einschalten, die Geheimnisse setzen, kramr mit einem Mandanten verbinden und die Integration wieder beenden.
audience: admin
order: 27
---

# amosWEB-Anbindung

Das amosWEB-Modul verbindet kramr mit einem Mandanten von amosWEB.
Es ist optional und standardmäßig ausgeschaltet.
Wer amosWEB nicht nutzt, braucht nichts davon einzurichten.
Ein Admin findet das Modul unter *Verwaltung → System → Integrationen*.

## Was das Modul tut

- kramr verbindet sich im Modus `sync` mit genau einem Mandanten von amosWEB.
- Die Angaben für Rechnungen (Platzhalter-Debitor, Bankverbindung, Sachbearbeitung, Zahlungsziel) liegen in den Einstellungen des Moduls.
- Die Verbindung lässt sich prüfen, erneuern und beenden.

## Umgebungsvariablen

Das Modul lässt sich erst einschalten, wenn drei Werte in der Umgebung gesetzt sind:

- `KRAMR_AMOSWEB_APP_TOKEN` ist das App-Token, das amosWEB für kramr ausstellt.
- `KRAMR_AMOSWEB_APP_KEY` ist ein selbst gewählter Schlüssel von mindestens 32 Zeichen, mit dem sich amosWEB gegenüber kramr ausweist.
- `KRAMR_SECRETS_KEY` verschlüsselt den Mandantenschlüssel, den amosWEB beim Verbinden herausgibt.

Beide Schlüssel lassen sich so erzeugen:

```bash
openssl rand -base64 32
```

App-Token und App-Schlüssel gehören zusammen: Wird nur einer von beiden gesetzt, startet kramr nicht.
Alle Einzelheiten stehen auf der Seite [Umgebungsvariablen](umgebungsvariablen.md).

**`KRAMR_SECRETS_KEY` zusammen mit der Umgebung sichern, bevor das Modul eingeschaltet wird.**
Geht er verloren oder wird er geändert, kann kramr den Mandantenschlüssel nicht mehr lesen.
Die Verbindung lässt sich dann nur noch in kramr trennen und muss danach neu hergestellt werden.

## Einrichtung

1. Die drei Umgebungsvariablen setzen und kramr neu starten.
2. Unter *Integrationen* das Modul einschalten.
3. Auf der Seite *amosWEB* im Bereich *Einrichtung* die Adresse der amosWEB-Instanz eintragen und speichern.
   Erlaubt ist nur `https://` ohne Pfad; offensichtlich interne Adressen lehnt kramr ab.
4. *Verbindung prüfen* wählen.
   kramr fragt amosWEB mit dem App-Token und zeigt den Tenant.
5. Den Mandanten wählen und *Verbinden* wählen.
   Gibt es nur einen Mandanten, ist er vorausgewählt.

Beim Verbinden ruft amosWEB eine Adresse von kramr auf, um zu prüfen, dass die App antwortet.
Die Seite zeigt sie als *Adresse von kramr für amosWEB*.
Sie muss aus dem Internet erreichbar sein und lautet `<öffentliche Adresse von kramr>/api/public/amosweb`.

Meldet amosWEB beim Verbinden, die App existiere bereits, ist sie in amosWEB schon verbunden, zum Beispiel nach einem Verlust des Schlüssels.
Dann die App im amosWEB-Backend entfernen und noch einmal verbinden.

## Neu verbinden

*Neu verbinden* trennt die Verbindung in amosWEB und verbindet kramr mit demselben Mandanten noch einmal.
So übernimmt kramr einen Schlüssel, den amosWEB erneuert hat.
Scheitert das Trennen, bleibt alles wie es war.
Scheitert danach das Verbinden, ist kramr nicht verbunden, und die Seite zeigt es.

## Platzhalter-Debitor

Rechnungen lauten zunächst auf einen Platzhalter-Kontakt in amosWEB.
Er wird vor der Freigabe der Rechnung in amosWEB durch den richtigen Debitor ersetzt.
Im Bereich *Rechnungsangaben* trägt ein Admin die amosWEB-IDs des Platzhalter-Kontakts ein:

- die Kontakt-ID,
- die ID seiner Anschrift,
- optional die ID seiner E-Mail-Adresse.

Die ID ist die Nummer, unter der amosWEB den Datensatz führt.
Wo amosWEB sie anzeigt, hängt von der Version ab; im Zweifel hilft der Support von amosWEB.

## Kreditor

Die Rechnung lautet auf eine Bankverbindung des Vereins in amosWEB.
Im Bereich *Rechnungsangaben* steht dafür die ID dieser Bankverbindung.

## Rechnung allgemein

- *Sachbearbeiter-ID* ist die Sachbearbeitung in amosWEB, die angelegte Rechnungen zugewiesen bekommt.
- *Zahlungsziel* ist die Zahl der Tage bis zur Fälligkeit, von 0 bis 365; Vorgabe sind 14 Tage.

Die Felder sind gesperrt, solange das Modul ausgeschaltet oder kramr nicht verbunden ist.

## Integration beenden

*Integration beenden* trennt kramr in amosWEB, löscht den Mandantenschlüssel in kramr und schaltet das Modul aus.
Zuordnungen und Vorlagen bleiben erhalten.
Beenden geht auch bei ausgeschaltetem Modul.

Nimmt amosWEB das Trennen nicht an, weil es nicht erreichbar ist oder den Schlüssel ablehnt, bietet kramr *Nur in kramr trennen* an.
Das löscht den Schlüssel und schaltet das Modul aus, ohne amosWEB zu benachrichtigen.
Danach die App im amosWEB-Backend entfernen, sonst lässt sich nicht neu verbinden.

## Was im Änderungsprotokoll steht

Das Verbinden und das Trennen stehen im Änderungsprotokoll, mit der Adresse, dem Tenant und dem Mandanten und bei einem Trennen mit dem Hinweis, ob es in amosWEB geschah.
Der Mandantenschlüssel steht nie darin.
Jede Änderung einer Einstellung des Moduls steht dort ebenfalls.
