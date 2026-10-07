---
title: Anmeldung und Rollen
description: OIDC-Anbieter anbinden und Rollen entweder lokal oder aus Gruppen vergeben.
audience: admin
order: 30
---

# Anmeldung und Rollen

kramr hat keine eigenen Passwörter. Die Anmeldung läuft über OIDC; jeder
standardkonforme Anbieter funktioniert, zum Beispiel Pocket ID, Authentik,
Keycloak oder Zitadel. Die Endpunkte ermittelt kramr per Discovery aus der
Issuer-Adresse; ein Anbieterwechsel ist daher eine reine Konfigurationsänderung.

## Client beim Anbieter anlegen

- **Redirect-URI:** `<öffentliche-url>/api/auth/callback`
- **Post-Logout-Redirect-URI:** `<öffentliche-url>/`
- **Scopes:** mindestens `openid profile email`
- **Zugriff beschränken:** Begrenze beim Anbieter den Zugriff auf die
  berechtigte Gruppe. Sonst kann sich jeder authentifizierte Nutzer des
  Anbieters anmelden, nicht nur Mitglieder eurer Organisation.

## Rollen

Es gibt die Rollen `Admin`, `Staff`, `ReadOnly` und `Kein Zugriff`. Neue
Konten beginnen ohne Zugriff. Die Rollen haben **genau eine Quelle**, die der
Betreiber mit `KRAMR_OIDC_ROLES_SOURCE` festlegt:

- **`local`** (Standard): Admins vergeben Rollen in der Nutzerverwaltung.
- **`groups`**: Die Rolle wird bei jeder Anmeldung aus einem Gruppen-Claim im
  ID-Token abgeleitet; die lokale Rollenänderung ist dann gesperrt.

Die Rolle wird bei jeder Anfrage frisch aus der Nutzertabelle gelesen
(kurz zwischengespeichert, etwa eine Minute); ein Rechteentzug wirkt also
innerhalb etwa einer Minute.

### Gruppenmodus

1. Beim Anbieter je Rolle eine Gruppe anlegen, zum Beispiel `kramr_admin` und
   `kramr_staff`, und dafür sorgen, dass sie im ID-Token erscheinen.
2. Setzen:

   ```bash
   KRAMR_OIDC_ROLES_SOURCE=groups
   KRAMR_OIDC_ROLES_GROUP_ADMIN=kramr_admin
   KRAMR_OIDC_ROLES_GROUP_STAFF=kramr_staff
   KRAMR_OIDC_ROLES_GROUP_READ_ONLY=kramr_read
   ```

   Die Gruppe für `Admin` ist Pflicht, die anderen sind optional. Der Vergleich
   unterscheidet Groß- und Kleinschreibung. Zwei Rollen auf dieselbe Gruppe
   brechen den Start ab.
3. Optional `KRAMR_OIDC_ROLES_GROUPS_CLAIM` (Standard `groups`) anpassen, falls
   der Anbieter einen anderen Claim-Namen nutzt, und den Scope in
   `KRAMR_OIDC_SCOPES` ergänzen.

Wer in keiner zugeordneten Gruppe ist, hat keinen Zugriff. Da sich die Rolle
nur beim Anmelden aktualisiert, endet eine Sitzung im Gruppenmodus spätestens
nach `KRAMR_OIDC_ROLES_REFRESH_MINUTES` (Standard 60, mindestens 5) nach dem
Anmelden. Das ist die Frist, binnen der ein Rechteentzug beim Anbieter wirkt.

**Ein Wechsel der Quelle** stellt beim Start alle Rollen zurück und beendet
alle Sitzungen. Für den Wechsel zurück auf `local` wird
`KRAMR_AUTH_BOOTSTRAP_ADMIN_SUBJECT` benötigt, damit danach jemand Admin ist.

Weitere Hinweise zum Gruppenmodus:

- Ist das Mapping falsch und niemand wird Admin, hilft nur der Weg zurück auf `local`.
  Im Gruppenmodus bleibt `KRAMR_AUTH_BOOTSTRAP_ADMIN_SUBJECT` wirkungslos.
- Ein Rechteentzug beim Anbieter wirkt erst nach der Frist oben, nicht binnen einer Minute wie im lokalen Modus.
  Beim Anbieter läuft die neue Anmeldung meist ohne Klick durch.
- Eine Rolle, die ein Login erhöht (zum Beispiel von „Kein Zugriff“ auf Staff), gilt sofort für die nächste Anfrage der Person.
- Hat jemand mehrere zugeordnete Gruppen, gilt die höherwertige Rolle.
- Fehlt der Gruppen-Claim im Token, etwa weil der Scope nicht freigegeben ist, landen alle ohne Zugriff.
  Das Log der Anwendung nennt den Grund.
- Kann die Rolle beim Login nicht gespeichert werden, schlägt die Anmeldung fehl.
  Es entsteht keine Sitzung mit einer Rolle aus der Zeit davor.
- Liefert der Anbieter den Claim als einen Text statt als Liste, trennt kramr die Gruppennamen an Leerzeichen.
  Wähle dann Gruppennamen ohne Leerzeichen, sonst würde „kramr admin“ als „kramr“ und „admin“ gelesen.
- Sind die Gruppen-Variablen gesetzt, obwohl die Quelle `local` ist, nennt das Log sie einmal als ignoriert.

Der Wechsel der Quelle geschieht beim Start in einer Transaktion, bevor die Anwendung Anfragen annimmt.
Scheitert er, startet die Anwendung nicht, und nichts ist verändert.
Auch ein Wechsel zurück auf `local` ohne `KRAMR_AUTH_BOOTSTRAP_ADMIN_SUBJECT` bricht den Start ab.

## Voraussetzungen der Anmeldung

Die drei OIDC-Pflichtvariablen werden beim Start geprüft.
Fehlt eine, startet die Anwendung nicht und nennt alle fehlenden Werte auf einmal.
Die Anmeldung ist der einzige Zugang zu kramr, eine Installation ohne Anbieter wäre unbenutzbar.

Die Discovery beim Anbieter läuft erst beim ersten Login, nicht beim Start.
Ein Neustart während einer Störung des Anbieters führt also nicht zu einem Container, der nicht einmal `/healthz` beantwortet.

Klartext-HTTP zum Anbieter ist nur für einen Anbieter auf demselben Rechner erlaubt, gedacht für Tests.
Jede andere `http://`-Adresse als Issuer lehnt kramr ab.

Die Anmelde-Routen haben ein eigenes Rate-Limit (`KRAMR_AUTH_RATE_LIMIT`).
Der Zähler liegt im Arbeitsspeicher des Prozesses und läuft je Client-Adresse.
`KRAMR_SERVER_TRUST_PROXY` entscheidet, ob die weitergereichte oder die direkte Adresse zählt.
`/healthz` ist bewusst nicht begrenzt.

## Sitzungen

Sitzungen liegen serverseitig in der Datenbank. Sie enden nach acht Stunden
ohne Aktivität oder sieben Tage nach der Anmeldung, je nachdem, was zuerst
eintritt. Beide Werte sind fest und nicht konfigurierbar.
Die Frist von acht Stunden zählt ab der letzten Anfrage und beginnt bei jeder neuen von vorn, ein Arbeitstag unterbricht sich also nicht.
Die sieben Tage zählen ab der Anmeldung und werden nie verschoben.

Eine abgelaufene Sitzung löscht kramr bei der nächsten Anfrage.
Sitzungen, zu denen nie wieder eine Anfrage kommt, räumt eine stündliche Aufgabe weg.
Das ist reine Aufräumarbeit: Eine abgelaufene Zeile kann niemanden anmelden.

### Alle Sitzungen einer Person beenden

Bei einem verlorenen Gerät löschst du die Zeilen der Person in der Tabelle `sessions`:

```sql
DELETE FROM sessions WHERE user_id = '<uuid>';
```

Die Abmeldung wirkt sofort, ohne Neustart.
Beim Anbieter bleibt die Person angemeldet und kann sich ohne neues Passwort wieder anmelden, solange dessen Sitzung läuft.

## Mitarbeitende als Kontakt anlegen

Wer in der eigenen Organisation Material für sich oder die Gruppe ausleiht,
braucht dafür einen Kontakt der Art **Eigene Organisation**. In der
Nutzerverwaltung legt die Aktion **Als Kontakt anlegen** ihn aus einem Konto
an: Name und E-Mail-Adresse werden einmal kopiert, danach besteht keine
Verbindung mehr. Hat das Konto keine E-Mail-Adresse, trägst du sie dabei ein. Hat ein Konto
schon einen solchen Kontakt, blendet kramr die Aktion in seiner Zeile aus.
kramr legt nicht von selbst Kontakte für alle Konten an. Einen solchen Kontakt
legst du auch direkt im Kontaktformular an; seine Handynummer ist freiwillig.
