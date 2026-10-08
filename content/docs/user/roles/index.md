---
title: Rollen und Rechte
description: Was Admin, Staff, ReadOnly und Kein Zugriff in kramr dürfen.
audience: user
order: 50
---

# Rollen und Rechte

Es gibt vier Rollen.
Ein neues Konto beginnt immer bei **Kein Zugriff**.
Erst die Administration vergibt eine Rolle.

| Rolle | Darf |
| --- | --- |
| Kein Zugriff | Angemeldet sein, sonst nichts. |
| ReadOnly | Alles ansehen, nichts ändern. |
| Staff | Material, Kontakte, Buchungen und Anfragen vollständig verwalten, Material importieren, Kontakte anonymisieren und den Posteingang nutzen. |
| Admin | Alles, was Staff darf, und zusätzlich Nutzer, Rollen und Einstellungen verwalten. |

- Die Bereiche **Nutzer und Rollen** und **System** (Einstellungen) sehen nur Administratoren. Für alle anderen sind sie nicht sichtbar.
- Die Stammdaten (Kategorien, Standorte, Parameter-Typen) pflegt Staff. ReadOnly sieht sie.
- Was du nicht darfst, blendet die Oberfläche aus. Durchgesetzt wird es immer vom Server.
- Eine geänderte Rolle gilt nach spätestens etwa einer Minute. Kommen die Rollen aus einer Gruppe beim Anmeldedienst, wirkt ein Entzug erst nach der nächsten Anmeldung, siehe die Seiten für die Administration.
- Wer die Rollen vergibt, steht unter [Anmeldung und Rollen](../../admin/configuration/anmeldung-und-rollen.md).
