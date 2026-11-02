---
title: Funktionen im Überblick
description: Was kramr kann – Bestand, Buchungen, Kontakte, Benachrichtigungen und Anfragen von Websites – mit Verweisen auf die Einzelseiten.
audience: user
order: 20
---

# Funktionen im Überblick

## Bestand

Material wird als Menge (20 Schlafsäcke) oder als einzelne Einheiten (jedes Zelt für sich) geführt, nach Kategorien geordnet, mit Parametern beschrieben und mit Fotos versehen.
Material wird nie gelöscht, sondern archiviert.
Standorte lassen sich verschachteln, mehrere Materialien auf einmal ändern.

- [Bestand verwalten](../inventory/index.md)
- [Sets](../kits/index.md): Material, das andere Materialien bündelt
- [Verleihbarkeit und Eigennutzung](../lending-restrictions/index.md): an wen ein Material verliehen wird
- [Preise und Tarife](../pricing/index.md)
- [Auswertung der Nutzung](../usage/index.md)
- [CSV-Import und -Export](../export-and-import/index.md)

## Buchungen

Eine Buchung ist eine **Ausleihe** (mit Kontakt) oder eine **Sperre** (Material ist belegt, ohne dass jemand ausleiht).
Beide durchlaufen `Entwurf → Genehmigt → Abgeholt → Zurückgegeben`; Entwurf und Genehmigt lassen sich auch stornieren, und jeder Schritt lässt sich rückgängig machen.
Überschneiden sich Buchungen so, dass der Bestand nicht reicht, zeigt kramr einen Konflikt an.
Er ist ein Hinweis, keine Sperre.

- [Buchung anlegen](../booking-create/index.md)
- [Buchungsstatus und Übergänge](../booking-status/index.md)
- [Konflikte und Sperren](../conflicts-and-blocks/index.md)
- [Abholung und Rückgabe](../pickup-and-return/index.md), mit Rückgabezustand und Packliste
- [Kalenderansicht](../calendar/index.md)

## Kontakte

Ein Kontakt ist immer eine Person; das Geburtsdatum ist freiwillig.
Personen der eigenen Organisation markierst du als **Eigene Organisation**; für sie ist die Handynummer freiwillig, die E-Mail-Adresse bleibt Pflicht, und sie leihen nur zur Eigennutzung aus.
Wer lange nichts ausgeliehen hat, wird als Vorschlag zum Anonymisieren angezeigt, nie automatisch.
Siehe [Kontakte anonymisieren](../anonymisation/index.md).

## Suche und Benachrichtigungen

- [Globale Suche](../search/index.md): findet Buchungen, Material und Kontakte zugleich (Strg + K).
- [Posteingang und Benachrichtigungen](../notifications/index.md): Erinnerungen vor der Abholung und bei überfälligen Rückgaben, per Posteingang und E-Mail, für die Organisation optional an einen Webhook.
  Was verschickt wird, stellt die Administration ein.

## Anfragen von Websites

Besucher der Vereins-Website sehen die Materialliste und stellen eine Anfrage über einen persönlichen Link; die Sachbearbeitung übernimmt sie als Entwurf oder lehnt sie ab.
Siehe [Buchungsanfragen von Websites](../requests/index.md).

## Weiterführend

- [Erste Schritte](../getting-started/index.md)
- [Anleitungen](../tutorials/index.md)
- [Rollen und Rechte](../roles/index.md)
- [Glossar](../glossary/index.md)
