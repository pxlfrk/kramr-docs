---
title: API
description: Was die öffentliche Schnittstelle von kramr bietet, welche Grenzen gelten und wo die Referenz steht.
audience: developer
order: 10
---

# API

kramr bietet nach außen eine kleine, lesende und anfragende Schnittstelle unter `/api/public/*`.
Sie dient der Einbettung von Material und der Buchungsanfrage auf einer Website.
Alle anderen Routen sind interne Schnittstellen zwischen der Weboberfläche und dem Server und liegen hinter der Anmeldung.
Sie sind nicht für Integrationen gedacht und können sich ändern.

Die **API-Referenz** dieser Seite zeigt alle öffentlichen Routen mit Parametern und Antwortformen.
Sie ist die verbindliche Beschreibung.

## Was die öffentlichen Routen leisten

- **Katalog einer Einbettung:** Liste und Einzelansicht des Materials sowie die Bilder. Zu sehen ist nur Material, das online sichtbar ist, und nur Parameter, die als öffentlich gelten. Standorte, interne Parameter, Buchungen und Kontakte erscheinen nie.
- **Verfügbarkeit:** Zu einem gewählten Zeitraum und einer Menge nennen die Antworten, ob Material verfügbar, voraussichtlich nicht verfügbar oder nicht verfügbar ist.
- **Buchungsanfrage:** Eine Anfrage beginnen, ihren Stand lesen, speichern, einreichen und zurückziehen.
- **Darstellung:** Name und Logo der Organisation sowie die Anrede (Du oder Sie) für die öffentlichen Seiten.

Eine Einbettung, die es nicht gibt, ein ausgeblendetes oder archiviertes Material und ein Bild davon antworten alle gleich mit `404`.
Bilder werden nur in den Größen `large` und `thumb` ausgeliefert, nie als Original.

## Grenzen

- **Ohne Anmeldung:** Die öffentlichen Routen brauchen weder Sitzung noch Cookie.
- **Rate-Limit:** Lesende und schreibende Anfragen haben je Client-Adresse getrennte Budgets. Das Limit gilt auch für unbekannte Pfade unter `/api/public/*`. Bei Überschreitung antwortet kramr mit `429`. Die Werte stellt der Betreiber ein.
- **Zwischenspeicher:** JSON-Antworten und Fehler sind nie zwischenspeicherbar (`Cache-Control: no-store`). Bilder einer Einbettung sind öffentlich zwischenspeicherbar.
- **Fehlerformat:** Fehler kommen als JSON im Format `application/problem+json` mit einem stabilen Typ und einem Titel.

## Anfrage-Links

Der Link einer Buchungsanfrage ist ihr einziger Zugang und steht als Pfadsegment in der Adresse, zum Beispiel `/api/public/requests/<Link>`.
Er steht nie in Abfrageparametern oder Kopfzeilen.

- Ein unbekannter, abgelaufener, widerrufener oder anonymisierter Link antwortet immer gleich mit `404`.
- Fehlermeldungen nennen den Link nicht.
- Speichern und Einreichen tragen die gelesene `version`. Bei einem älteren Stand antwortet kramr mit `409`, und nichts wird geschrieben.
- Wer eine Anfrage beginnt, bekommt immer dieselbe Antwort, unabhängig davon, ob die Adresse schon bekannt ist. Der Link kommt per E-Mail.
- Protokolliere diese Pfade in deinem eigenen Proxy nicht.

## Einbettung auf einer Website

Die Einbettung ist eine fertige Seite unter `/embed/<Einbettung>/…`, die du in einen Rahmen (`iframe`) setzt.
Welche Websites sie einrahmen dürfen, legt der Betreiber in einer Liste fest.
Siehe [Reverse Proxy](../../admin/installation/reverse-proxy.md) und [Sicherheit](../../admin/sicherheit/index.md).

## Health

`GET /healthz` ist ohne Anmeldung erreichbar; siehe die Seite [Überwachung](../../admin/monitoring/index.md).
