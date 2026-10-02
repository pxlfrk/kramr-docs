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

## Sitzungen

Sitzungen liegen serverseitig in der Datenbank. Sie enden nach acht Stunden
ohne Aktivität oder sieben Tage nach der Anmeldung, je nachdem, was zuerst
eintritt. Beide Werte sind fest und nicht konfigurierbar.
