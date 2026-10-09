---
title: Sicherheit
description: Das Sicherheitsmodell von kramr und was du als Betreiber dafür einrichten musst.
audience: admin
order: 40
---

# Sicherheit

Diese Seite beschreibt, wie kramr Zugang, Daten und öffentliche Seiten schützt.
Sie sagt auch, was davon in deiner Hand liegt.
Die Pflichten des Betreibers stehen am Ende als Checkliste.

## Anmeldung

kramr hat keine eigenen Passwörter.
Die Anmeldung läuft über OIDC bei einem Anbieter deiner Wahl, siehe [Anmeldung und Rollen](../configuration/anmeldung-und-rollen.md).
Damit gelten die Regeln deines Anbieters für Passwörter, zweiten Faktor und Sperren.

- **Zugriff beim Anbieter beschränken.** Sonst kann sich jedes Konto des Anbieters anmelden, nicht nur Mitglieder deiner Organisation. Es erhält zwar keine Rechte, legt aber ein Konto an.
- **Verschlüsselte Verbindung.** Die Adresse des Anbieters muss `https://` sein. Klartext erlaubt kramr nur für einen Anbieter auf demselben Rechner, gedacht für Tests. Jede andere `http://`-Adresse lehnt kramr beim Start ab.
- **Begrenzung der Anmeldeversuche.** Die Anmelde-Routen haben ein eigenes Limit je Client-Adresse (`KRAMR_AUTH_RATE_LIMIT`), zusätzlich zum groben Limit deines Proxys.

## Sitzungen

Sitzungen liegen serverseitig in der Datenbank, nicht als Token im Browser.
Der Browser hält nur einen zufälligen Wert in einem Cookie.
Eine Sitzung endet nach acht Stunden ohne Aktivität oder sieben Tage nach der Anmeldung.
Beide Werte sind fest.
Ein Datenbank-Abzug oder ein Backup enthält keine verwendbaren Anmeldungen.
Wie du alle Sitzungen einer Person sofort beendest, steht unter [Anmeldung und Rollen](../configuration/anmeldung-und-rollen.md).

## Rollen und Rechte

Es gibt vier Rollen: Kein Zugriff, ReadOnly, Staff und Admin.
Ein neues Konto beginnt immer ohne Zugriff.
Anmelden allein gibt keine Rechte.

- Jede Route der Anwendung legt ausdrücklich fest, wer sie aufrufen darf. Was nicht festgelegt ist, lehnt kramr ab.
- Die Rechte prüft der Server. Die Oberfläche blendet nur aus, was ohnehin abgelehnt würde.
- Die Rolle liest kramr bei jeder Anfrage frisch aus der Nutzerverwaltung (kurz zwischengespeichert, etwa eine Minute). Ein Rechteentzug wirkt also binnen etwa einer Minute.
- Im Gruppenmodus kommt die Rolle aus dem Anbieter und aktualisiert sich nur bei der Anmeldung. Ein Rechteentzug wirkt dort nach `KRAMR_OIDC_ROLES_REFRESH_MINUTES`, standardmäßig nach 60 Minuten. Wähle die Frist so kurz, wie dein Anbieter eine stille Neuanmeldung zulässt.

## Reverse Proxy und TLS

kramr ist nie direkt aus dem Internet erreichbar.
TLS endet an deinem Reverse Proxy, siehe [Reverse Proxy](../installation/reverse-proxy.md).
Dort liegt auch das grobe Rate-Limit.

`KRAMR_SERVER_TRUST_PROXY` entscheidet, ob kramr den Headern `X-Forwarded-*` vertraut:

- **Hinter einem Proxy `true`.** Sonst sieht kramr für alle Besucher die Adresse des Proxys. Das Rate-Limit und die Logs behandeln dann alle als einen Client.
- **Ohne Proxy `false`.** Sonst kann jeder Client seine Adresse und das Protokoll selbst bestimmen und damit das Rate-Limit umgehen.
- Der Proxy muss `X-Forwarded-For`, `X-Forwarded-Proto` und `X-Forwarded-Host` korrekt setzen und fremde Werte überschreiben.

Die Datenbank hat keinen veröffentlichten Port.
Das soll so bleiben.

## Sicherheits-Header

Die Anwendung setzt selbst eine strenge Content-Security-Policy und weitere Header: Rahmen von fremden Seiten sind ausgeschlossen, Inhalte ohne erlaubte Herkunft werden nicht geladen, HSTS gilt ein Jahr einschließlich Subdomains.
Die Oberfläche kommt aus derselben Adresse wie die Schnittstelle, deshalb gibt es keine CORS-Freigabe.

Dein Proxy darf diese Header nicht überschreiben oder ersetzen.
Für `/embed/*` darf er insbesondere weder `X-Frame-Options` noch eine eigene `Content-Security-Policy` setzen.

## Öffentliche Seiten und Einbettung

Ohne Anmeldung erreichbar sind nur die Seiten unter `/embed/*`, die Schnittstellen unter `/api/public/*`, die Anmelde-Routen und `/healthz`.
Die Sachbearbeitung der Anfragen ist nicht öffentlich.

- **Katalog:** Eine Einbettung zeigt nur Material, das als online sichtbar markiert ist, und nur Parameter, die als öffentlich gelten. Standorte, interne Parameter, Buchungen und Kontakte erscheinen nie. Der Katalog einer Einbettung ist für jeden lesbar, der ihre Kennung kennt. Markiere deshalb nur Material als online sichtbar, das jeder sehen darf.
- **Allow-List:** Die Einstellung für die Website-Einbindung bestimmt, welche Websites eine Einbettung einrahmen dürfen. Sie schützt vor Clickjacking und ist keine Zugriffskontrolle. Leer heißt: keine fremde Website darf einbetten. Trage nur Websites ein, die du kontrollierst, jeweils mit Schema, Host und optional Port, ohne Pfad und ohne Platzhalter.
- **Begrenzung:** Die öffentlichen Routen haben getrennte Limits für Lesen und Schreiben je Client-Adresse, siehe [Umgebungsvariablen](../configuration/umgebungsvariablen.md). Ein verstecktes Feld und die Obergrenzen schützen vor Missbrauch. Einen externen Captcha-Dienst nutzt kramr nicht.
- **Anfrage-Links:** Der Link einer Buchungsanfrage ist ihr einziger Zugang. Er ist lang und zufällig, befristet und lässt sich widerrufen. Ein unbekannter, abgelaufener oder widerrufener Link antwortet immer gleich, sodass niemand erfährt, ob es ihn gibt. Antworten dazu werden nie zwischengespeichert, und die Anwendung schreibt keine Pfade ins Log.
- **Was du beisteuern musst:** Dein Proxy darf diese Links nicht protokollieren, weder im Zugriffs- noch im Fehlerprotokoll. Siehe [Reverse Proxy](../installation/reverse-proxy.md), Anforderung 6.
- **E-Mails:** Die Anfrage beginnt mit einer Mail an die angegebene Adresse. Damit wird die Adresse bestätigt, und die Antwort verrät nie, ob eine Adresse schon bekannt war. Das erfordert funktionierenden Mailversand, siehe [Benachrichtigungen](../configuration/benachrichtigungen.md).

## Uploads

- **Material-Bilder:** Höchstens 10 MB, genau eine Datei je Anfrage. Die Anwendung prüft das Dateiformat und kodiert jedes Bild neu. Ausgeliefert wird nie das Original, sondern verkleinerte Fassungen. Das Original bleibt im Volume `uploads` und gehört ins [Backup](../backup/index.md).
- **Logo der Organisation:** Nur Admins laden es hoch, als SVG (höchstens 256 KiB) oder PNG (höchstens 2 MB). Ein PNG wird neu kodiert und verkleinert. Ein SVG darf keine Skripte, keine Verweise nach außen und keine eingebetteten Bilder enthalten; eine Verletzung lehnt kramr ab. Ausgeliefert wird das Logo immer als Bild in einer abgeschotteten Umgebung, nie als Teil der Seite.
- **Proxy:** Das Body-Limit des Proxys muss mindestens 11 MB zulassen, sonst scheitern Bild-Uploads schon dort.

## Webhooks und ausgehende Verbindungen

Die Webhook-Adresse in den Einstellungen lehnt kramr beim Speichern ab, wenn sie offensichtlich auf ein internes Ziel zeigt: den eigenen Rechner, private Adressbereiche, Link-Local-Adressen einschließlich der Metadaten-Adresse von Cloud-Anbietern und die IPv6-Entsprechungen.
Das schützt vor einer versehentlich oder böswillig eingetragenen internen Adresse.
Es ist ein Grundschutz.
Ein Hostname, der erst beim Senden auf eine interne Adresse zeigt, wird nicht erkannt.
Lass deshalb nur Admins die Einstellungen ändern und vergib die Rolle sparsam.
Jede Änderung einer Einstellung hält kramr im Änderungsprotokoll fest: wer, wann, welcher Schlüssel, alter und neuer Wert.
So lässt sich nachvollziehen, wann die Webhook-Adresse umgestellt wurde.

`KRAMR_NOTIFICATION_WEBHOOK_ALLOWED_HOSTS` ist die bewusste Ausnahme für ein legitimes internes Ziel, zum Beispiel einen Chat-Server im selben Docker-Netz.
Trage dort nur Hosts ein, die du wirklich meinst.

Die Versionsprüfung auf der Einstellungen-Seite ist der einzige weitere ausgehende Aufruf der Anwendung an einen fremden Dienst.
Du kannst sie abschalten, siehe [Einstellungen](../configuration/einstellungen.md).

## Daten und Löschung

kramr löscht Kontakte nie, sondern anonymisiert sie.
Dieselbe Anonymisierung erfasst Verlaufseinträge, Benachrichtigungen und Buchungsanfragen der Person.
Material wird archiviert, nie gelöscht.
Anonymisiert wird nie automatisch, nur auf Vorschlag durch die Sachbearbeitung.
Die festen Aufbewahrungsfristen und der Ablauf eines Begehrens stehen unter [Datenschutzbegehren](../datenschutz/index.md).
Datensicherungen enthalten Daten bis zu ihrer eigenen Löschung weiter; wäge das gegen die Aufbewahrungsdauer deiner Backups ab.

## Geheimnisse und Container

- Zugangsdaten (Datenbank, OIDC-Secret, Mail, Schlüssel für Anfrage-Links) stehen nur in der Umgebung, nie in der Datenbank und nie im Image.
- Das Image läuft als Nicht-Root-Benutzer und enthält nur das Nötige. Es enthält weder Shell noch Compiler.
- Veröffentlichte Images werden vor der Freigabe auf bekannte Schwachstellen geprüft. Aktualisiere regelmäßig, siehe [Updates und Migrationen](../upgrades/index.md).
- Setze keine Variable mit Zugangsdaten in einer Datei, die in ein Repository gelangt.

## Checkliste für Betreiber

- [ ] Zugriff beim OIDC-Anbieter auf die berechtigte Gruppe beschränkt.
- [ ] Anbieter-Adresse mit `https://`.
- [ ] `KRAMR_SERVER_TRUST_PROXY` passt zur Aufstellung (hinter einem Proxy `true`).
- [ ] Datenbank ohne veröffentlichten Port; die Anwendung nur über den Proxy erreichbar.
- [ ] Proxy überschreibt keine Sicherheits-Header, vor allem nicht für `/embed/*`.
- [ ] Proxy protokolliert Anfrage-Links nicht.
- [ ] Body-Limit des Proxys mindestens 11 MB.
- [ ] Allow-List der Einbettung enthält nur eigene Websites.
- [ ] Nur Material, das jeder sehen darf, ist online sichtbar.
- [ ] Erster Administrator festgelegt und `KRAMR_AUTH_BOOTSTRAP_ADMIN_SUBJECT` wieder entfernt.
- [ ] Admin-Rolle sparsam vergeben.
- [ ] Backup mit Datenbank und Bildern läuft, Wiederherstellung geprobt.
- [ ] Aktuelle Version im Einsatz.
