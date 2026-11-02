---
title: Rollen und Rechte
description: Was Kein Zugriff, Nur-Lesen, Sachbearbeitung und Administration in kramr dürfen.
audience: user
order: 50
---

# Rollen und Rechte

Es gibt vier Rollen.
Ein neues Konto beginnt immer bei **Kein Zugriff**.
Erst die Administration vergibt eine Rolle.

| Rolle | Darf | Name in der Konfiguration |
| --- | --- | --- |
| Kein Zugriff | Angemeldet sein, sonst nichts. | – |
| Nur-Lesen | Alles ansehen, nichts ändern. | `ReadOnly` |
| Sachbearbeitung | Material, Kontakte, Buchungen und Anfragen vollständig verwalten, Material importieren, Kontakte anonymisieren und den Posteingang nutzen. | `Staff` |
| Administration | Alles, was die Sachbearbeitung darf, und zusätzlich Nutzer, Rollen und Einstellungen verwalten sowie Buchungen archivieren. | `Admin` |

Die Oberfläche zeigt die Namen der ersten Spalte.
Die englischen Namen der dritten Spalte begegnen dir nur in der Betreiberdokumentation, etwa bei den OIDC-Gruppen.

- Die Bereiche **Nutzerverwaltung**, **Organisation** und **System** unter „Verwaltung“ sehen nur Administratoren.
  Die **Stammdaten** (Kategorien, Standorte, Parameter) pflegt die Sachbearbeitung, die Rolle Nur-Lesen sieht sie.
- Was du nicht darfst, blendet die Oberfläche aus.
  Durchgesetzt wird es immer vom Server.
- Eine geänderte Rolle gilt nach spätestens etwa einer Minute.
  Beziehen die Konten ihre Rollen aus Gruppen beim Anmeldedienst, wirkt ein Entzug erst nach der nächsten Anmeldung.
- Wer die Rollen vergibt, steht unter [Anmeldung und Rollen](../../admin/configuration/anmeldung-und-rollen.md).
