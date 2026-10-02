---
title: Entscheidungen
description: Die wichtigsten Architekturentscheidungen hinter kramr und ihre Begründung.
audience: developer
order: 10
---

# Entscheidungen

Architekturentscheidungen werden im Projekt als ADR festgehalten und gehören
zum Pull Request, der sie umsetzt. Diese Seite fasst die tragenden
Entscheidungen zusammen.

| Entscheidung | Kurzbegründung |
| --- | --- |
| Modulmonolith nach Ports & Adapters | Ein Team und 8 bis 50 Nutzer rechtfertigen keine verteilten Dienste; Modulgrenzen bleiben prüfbar. |
| Ein Container plus PostgreSQL | Einfacher Betrieb auf einem einzelnen Server. |
| Kein Backend-as-a-Service | Daten und Logik bleiben beim Betreiber. |
| Hintergrundaufgaben mit `pg-boss` | Die Job-Queue braucht nur die vorhandene Datenbank, keinen eigenen Worker. |
| Kein Redis | Rollen-Cache und Rate-Limit passen in den Prozessspeicher. |
| Bilder mit `sharp` im Prozess, auf einem Volume | Genügt für die Größenordnung, kein Objektspeicher nötig. |
| Suche in PostgreSQL | `tsvector`, `pg_trgm` und `unaccent` reichen; kein Suchdienst. |
| Zwei feste Benachrichtigungs-Adapter | Eine generische Bibliothek wurde erprobt und zurückgebaut. |
| Anmeldung über beliebiges OIDC | Kein eigenes Passwortsystem; der Anbieter ist austauschbar. |
| Rollen aus genau einer Quelle | Lokal oder aus Gruppen, nie beides; vermeidet widersprüchliche Rechte. |
| Sitzungen serverseitig, Rolle nicht in der Sitzung | Ein Rechteentzug wirkt binnen etwa einer Minute. |
| Infrastruktur-Geheimnisse nur in der Umgebung | Fachliche Werte liegen in der Datenbank und sind in der Oberfläche änderbar. |
| Material wird archiviert, nie gelöscht | Buchungen und Historie behalten ihren Bezug. |
| Kontakte werden anonymisiert, nicht gelöscht | Datenschutz, ohne die Buchungshistorie zu zerstören; auch Audit-Einträge werden anonymisiert. |
| Halboffene Zeiträume `[Abholung, Rückgabe)` | Ein Ende um 18 Uhr kollidiert nicht mit einem Beginn um 18 Uhr. |
| Konflikt ist ein Hinweis, kein Status | Mensch entscheidet; Genehmigen trotz Konflikt braucht eine ausdrückliche Bestätigung. |
| Öffentliche Dokumentation aus einer Positivliste | Nur `docs/public/**` wird veröffentlicht; die Quelle bleibt in einem Repository. |

Eine Änderung an einer dieser Entscheidungen beginnt mit einem neuen ADR,
nicht mit Code.
