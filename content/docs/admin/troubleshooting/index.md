---
title: Fehlerbehebung
description: Typische Startprobleme und Fehlerbilder und wie du sie einordnest.
audience: admin
order: 10
---

# Fehlerbehebung

## Der Container startet nicht

Prüfe zuerst `docker compose logs app`. kramr bricht den Start mit einer
klaren Meldung ab, wenn eine Pflichtvariable fehlt oder ein Wert ungültig ist:

- Fehlende Pflichtwerte: Datenbank-Zugang, `KRAMR_IMAGE_TAG`,
  `KRAMR_SERVER_PUBLIC_URL`, die drei `KRAMR_OIDC_*`-Werte.
- Im Gruppenmodus fehlt `KRAMR_OIDC_ROLES_GROUP_ADMIN`, oder zwei Rollen
  teilen eine Gruppe.
- Ist `KRAMR_NOTIFICATION_SMTP_HOST` gesetzt, ist auch
  `KRAMR_NOTIFICATION_SMTP_FROM` Pflicht.
- Eine Variable hat ein ungültiges Format (Zahl, `true`/`false`, Repository
  als `Eigentümer/Name`).

Eine Variable, die in der `.env` steht, aber nicht im Compose-Dienst `app`
aufgeführt ist, kommt im Container nicht an. Nutze die mitgelieferte
`compose.yaml` und ergänze eigene Variablen dort.

## Die Migration verweigert den Start

Meldet kramr eine **veränderte, bereits angewandte Migration**, wurde eine
Datei nachträglich geändert. Das ist beabsichtigt: Es geht um ein Schema, das
niemand mehr rekonstruieren könnte. Spiele die unveränderte Version ein.
Scheitert eine neue Migration an vorhandenen Daten, nennt die Meldung die
betroffene Bedingung; behebe die Daten und starte neu. Die Migration läuft in
einer Transaktion und hinterlässt keinen halben Stand.

## Anmeldung schlägt fehl

- **Rückkehradresse:** Beim Anbieter muss
  `<öffentliche-url>/api/auth/callback` genau eingetragen sein.
- **Issuer:** `KRAMR_OIDC_ISSUER_URL` wird zeichengenau mit dem `iss`-Claim
  verglichen, einschließlich eines abschließenden Schrägstrichs.
- **Alle Anfragen erscheinen mit derselben Adresse?** Hinter einem Proxy
  muss `KRAMR_SERVER_TRUST_PROXY=true` gesetzt sein, und der Proxy muss die
  `X-Forwarded-*`-Header liefern.
- **Angemeldet, aber ohne Rechte:** Neue Konten beginnen ohne Rolle. Im
  Gruppenmodus fehlt die Gruppe im ID-Token, oder der Scope fehlt.
- **Zu viele Anmeldeversuche:** `KRAMR_AUTH_RATE_LIMIT` begrenzt Anfragen je
  Client und Zeitfenster.

## Bilder werden nicht hochgeladen

Der Proxy lässt weniger als 11 MB zu. Hebe sein Body-Limit an.

## Ein Bild zeigt „noch nicht verfügbar"

Nach einem Restore stimmen Datenbank und Bilder-Volume nicht vom selben
Zeitpunkt überein. Entferne das Bild und lade es erneut hoch.

## Einbettung bleibt leer

- Die Website steht nicht in der Liste unter *Verwaltung → System →
  Website-Einbindung*.
- Der Proxy setzt `X-Frame-Options` oder eine eigene
  `Content-Security-Policy` für `/embed/*`.
- Zu enges Rate-Limit am Proxy; siehe [Reverse Proxy](../installation/reverse-proxy.md).

## Mails kommen nicht an

Ohne `KRAMR_NOTIFICATION_SMTP_HOST` startet die Anwendung zwar, markiert
Mails aber als fehlgeschlagen. Prüfe Host, Port, Zugangsdaten und Absender.

## Eine Person aussperren oder abmelden

Alle Sitzungen einer Person lassen sich beenden, indem du ihre Zeilen in der
Tabelle `sessions` löschst. Das wirkt sofort. Beim Anbieter bleibt die Person
angemeldet, bis dessen eigene Sitzung endet.
