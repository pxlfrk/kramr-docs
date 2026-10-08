---
title: Erster Administrator
description: Den ersten Admin nach der Installation festlegen und die Hilfsvariable wieder entfernen.
audience: admin
order: 12
---

# Erster Administrator

Eine neue Datenbank enthält keinen Admin, und nur ein Admin darf Rollen
vergeben. Die Variable `KRAMR_AUTH_BOOTSTRAP_ADMIN_SUBJECT` löst das, ohne dass
du die Datenbank bearbeiten musst.

1. Ermittle den `sub`-Claim der Person beim OIDC-Anbieter. Nimm nicht den
   Anmeldenamen; der `sub` ist stabil und eindeutig.
2. Setze `KRAMR_AUTH_BOOTSTRAP_ADMIN_SUBJECT=<sub>` und starte den
   Anwendungs-Container neu.
3. Lass die Person sich **anmelden**. Die Beförderung geschieht bei der
   Anmeldung, nicht beim Start.
4. Prüfe in der Nutzerverwaltung, dass die Rolle `Admin` steht, und vergib bei
   Bedarf weitere.
5. **Entferne die Variable wieder** und starte neu.

Schritt 5 gehört zur Ersteinrichtung. Solange die Variable gesetzt ist, stellt
jede Anmeldung dieser Person die Rolle `Admin` wieder her; eine Herabstufung
hält dann nicht. Danach ist die Rolle eine normale Rolle, die ein Admin ändern
kann.

Im Gruppenmodus wirkt die Variable nicht. Für den Wechsel zurück auf `local`
ist sie aber nötig.

## Weitere Personen

Der erste Login einer Person legt ihr Konto an.
Es beginnt ohne Zugriff.
Ein Admin vergibt die passende Rolle in der Nutzerverwaltung, danach gilt sie ab der nächsten Anfrage.
So bekommt nicht jedes Mitglied des Anmeldedienstes automatisch Lesezugriff auf die Kontaktdaten.
