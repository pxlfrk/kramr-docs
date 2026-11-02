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
Das geschieht in amosWEB unter *Einstellungen → Allgemein → Mandanten*: den Ziel-Mandanten öffnen und im Abschnitt *Verbundene Anwendungen* die App entfernen.
Das geschieht in amosWEB unter *Einstellungen → Allgemein → Mandanten*: den Ziel-Mandanten öffnen und im Abschnitt *Verbundene Anwendungen* die App entfernen.

## Neu verbinden

*Neu verbinden* trennt die Verbindung in amosWEB und verbindet kramr mit demselben Mandanten noch einmal.
So übernimmt kramr einen Schlüssel, den amosWEB erneuert hat.
Scheitert das Trennen, bleibt alles wie es war.
Scheitert danach das Verbinden, ist kramr nicht verbunden, und die Seite zeigt es.

## Rechnungsangaben

Der Bereich *Rechnungsangaben* hält alles, was kramr für eine Rechnung in amosWEB wissen muss.
Die Felder sind gesperrt, solange das Modul ausgeschaltet oder kramr nicht verbunden ist.
Die ID ist jeweils die Nummer, unter der amosWEB den Datensatz führt.

### Platzhalter-Debitor

Rechnungen lauten zunächst auf einen Platzhalter-Kontakt in amosWEB.
Er wird vor der Freigabe der Rechnung in amosWEB durch den richtigen Debitor ersetzt.
Ein Admin trägt die amosWEB-IDs des Platzhalter-Kontakts ein:

- die Kontakt-ID,
- die ID seiner Anschrift,
- optional die ID seiner E-Mail-Adresse.

Der Platzhalter-Debitor ist ebenfalls ein Kontakt in amosWEB.
Die Kontakt-ID steht in der Adresszeile des Browsers und auf der Startseite des Kontakts.

> **Tipp:** Anschrift-ID und E-Mail-ID zeigt amosWEB nicht in der Oberfläche an, sie lassen sich aber mit den Entwicklertools des Browsers auslesen.
> Den Kontakt in amosWEB öffnen, die Entwicklertools öffnen und im Reiter *Network* den Filter *Fetch/XHR* einschalten.
> Danach die Seite neu laden.
> In der Anschriften-Ressource steht unter *Data* die ID der Anschrift, in der Kommunikationen-Ressource die ID der E-Mail-Adresse.
> Das braucht keine Anmeldung an der Schnittstelle und ist der einfachere Weg.
>
> **Tipp:** Alternativ liefert ein autorisierter GET-Request mit dem Client-API-Key an `<Adresse von amosWEB>/api/app/client/contacts/<Kontakt-ID>` die IDs ebenfalls in der Antwort.

### Bankverbindung

Die Rechnung lautet auf eine Bankverbindung des Vereins (Kreditor) in amosWEB.
Dafür steht die ID dieser Bankverbindung im Feld.
Die Bankverbindung gehört zum Kontakt des Mandanten, mit dem kramr verbunden ist.
In amosWEB unter *Einstellungen → Mandanten* den Ziel-Mandanten öffnen, über die Schaltfläche oben rechts zu seinem Kontakt wechseln und dort den Reiter *Bankverbindungen* öffnen.

> **Tipp:** Auch diese ID zeigt amosWEB nicht an.
> Auf dieser Seite die Entwicklertools des Browsers öffnen, im Reiter *Network* den Filter *Fetch/XHR* einschalten und die Seite neu laden.
> Die Ressource `bankverbindungen?showInvisible=true` enthält unter *Data* als JSON alle Bankverbindungen des Kontakts, jeweils mit ihrer ID.

### Sachbearbeitung und Zahlungsziel

- *Sachbearbeiter-ID* ist die Sachbearbeitung in amosWEB, die angelegte Rechnungen zugewiesen bekommt.
- *Zahlungsziel* ist die Zahl der Tage bis zur Fälligkeit, von 0 bis 365; Vorgabe sind 14 Tage.

> **Tipp:** In amosWEB unter *Einstellungen → Allgemein → Mitarbeitende* in der Tabelle die Spalte *ID* einblenden und die ID der gewünschten Person ablesen.

## Artikelgruppen

Jede Rechnungsposition verweist auf einen Artikel in amosWEB.
amosWEB liefert die Artikel gruppenweise, deshalb trägt ein Admin im Bereich *Artikel* die IDs der Artikelgruppen ein, aus denen kramr Artikel abrufen soll.

> **Tipp:** Die ID einer Artikelgruppe zeigt amosWEB unter *Einstellungen → Buchhaltung → Artikelverwaltung* im Reiter *Artikelgruppen*.
> Neben der Gruppe das Menü mit den drei Punkten öffnen, die ID steht unten im Menü.

*Artikelgruppe hinzufügen* ruft die Gruppe zuerst ab und zeigt ihre Artikel mit Preis.
Nur ein Artikel, den amosWEB als Brutto-Artikel liefert, lässt sich wählen.
Eine Gruppe, die es nicht gibt oder die leer ist, lässt sich nicht eintragen.

kramr gleicht die Artikel jeden Morgen um 6 Uhr mit amosWEB ab; *Jetzt abrufen* tut es sofort.
Der Abruf gelingt ganz oder gar nicht: Scheitert er für eine Gruppe, bleibt alles wie es war, und die Seite zeigt den Grund.
Eine Gruppe lässt sich nur entfernen, solange keiner ihrer Artikel verwendet wird.

## Fallback-Artikel und Zuordnung

Der *Fallback-Artikel* gilt für jedes Material und jede Art der Zusatzkosten (Beschädigung, Verschmutzung, Verlust) ohne eigenen Artikel.
Ohne Fallback-Artikel lässt sich keine Rechnung erstellen.
Für die drei Arten der Zusatzkosten lässt sich je ein eigener Artikel wählen.

Im Bereich *Zuordnung* lässt sich für jedes Material mit Preis ein eigener Artikel wählen; die Liste zeigt, welcher Artikel gilt.
Änderungen gelten erst nach *Speichern*.
Das Material zeigt seinen Artikel auch im Detail, für jede Rolle, die Material lesen darf.

## Wenn ein Artikel in amosWEB wegfällt

Liefert amosWEB einen verwendeten Artikel nicht mehr oder nur noch als Netto-Artikel, gilt er als nicht nutzbar und bleibt sichtbar.
Ein eigener Artikel eines Materials fällt dann auf den Fallback-Artikel zurück und wird mit einem Warnkennzeichen angezeigt.
Ist es der Fallback-Artikel oder der Artikel einer Art der Zusatzkosten, sind Rechnungen gesperrt, bis ein anderer Artikel gewählt ist.
Alle Admins bekommen einmal je Artikel eine Nachricht im Posteingang und per E-Mail; wer sie nicht möchte, schaltet sie im eigenen Profil ab.

## Integration beenden

*Integration beenden* trennt kramr in amosWEB, löscht den Mandantenschlüssel in kramr und schaltet das Modul aus.
Artikelgruppen, Zuordnungen und Vorlagen bleiben erhalten.
Beenden geht auch bei ausgeschaltetem Modul.

Nimmt amosWEB das Trennen nicht an, weil es nicht erreichbar ist oder den Schlüssel ablehnt, bietet kramr *Nur in kramr trennen* an.
Das löscht den Schlüssel und schaltet das Modul aus, ohne amosWEB zu benachrichtigen.
Danach die App im amosWEB-Backend entfernen, sonst lässt sich nicht neu verbinden (*Einstellungen → Allgemein → Mandanten → Ziel-Mandant → Verbundene Anwendungen*).
