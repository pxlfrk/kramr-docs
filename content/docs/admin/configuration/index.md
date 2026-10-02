---
title: Konfiguration
description: Wie kramr konfiguriert wird – Umgebungsvariablen für Infrastruktur, Einstellungen in der Oberfläche für Fachliches.
audience: admin
order: 10
---

# Konfiguration

kramr trennt zwei Arten von Werten:

- **Infrastruktur** (Datenbank, OIDC-Zugang, Mail-Zugangsdaten) steht
  ausschließlich in Umgebungsvariablen der `.env`-Datei. Diese Werte liegen
  nie in der Datenbank und nie im Repository.
- **Fachliches** (zum Beispiel Vorlaufzeit der Erinnerung, Webhook-Ziel,
  Website-Einbindung) stellt ein Admin in der Oberfläche unter *Verwaltung →
  System → Einstellungen* ein. Einige Variablen liefern dafür nur den
  **Startwert**; ist die Einstellung einmal gespeichert, wird die Variable
  ignoriert.

Weiterführend:

- [Umgebungsvariablen](umgebungsvariablen.md)
- [Anmeldung und Rollen](anmeldung-und-rollen.md)
- [Benachrichtigungen](benachrichtigungen.md)
