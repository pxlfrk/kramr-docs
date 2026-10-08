---
title: Abholung und Rückgabe
description: Material in Teilen abholen und zurückgeben und den Zustand bei der Rückgabe festhalten.
audience: user
order: 41
---

# Abholung und Rückgabe

Abholung und Rückgabe werden je Position erfasst, nicht nur für die ganze Buchung.
So kann ein Teil schon abgeholt werden und der Rest später folgen.

## Abholung

- Die Buchung wechselt mit der **ersten** abgeholten Position von Genehmigt nach Abgeholt.
- Solange Positionen noch fehlen, zeigt die Buchung den Hinweis „Abholung unvollständig“. Die übrigen Positionen holst du im Status Abgeholt einzeln oder gesammelt ab.
- **Nicht mehr, als im Lager ist:** kramr lehnt die Abholung ab, wenn weniger Stück im Lager sind, als abgeholt werden sollen, etwa nach einer beschädigten oder verlorenen Rückgabe. Gleiches gilt für eine archivierte Einheit oder eine, die noch nicht zurück ist. Es wird nichts gespeichert. Verringere dann die Menge in der Buchung oder entferne die Position.
- Die Erinnerung an die Abholung gilt nur für Buchungen im Status Genehmigt und endet mit der ersten Abholung.

## Rückgabe

- Zurückgeben lässt sich ab der ersten Abholung, und nur Positionen, die abgeholt sind.
- Bis alles zurück ist, zeigt die Buchung „teilweise zurückgegeben“. Die Buchung wird erst Zurückgegeben, wenn **alle** Positionen zurück sind.
- Entfernst du beim Bearbeiten die letzten offenen Positionen und ist alles Abgeholte schon zurück, schließt kramr die Buchung ab.

## Zustand bei der Rückgabe

Bei jeder Rückgabe hältst du fest, in welchem Zustand das Material zurückkommt: **in Ordnung**, **beschädigt** oder **verloren**.

- Bei Mengenmaterial kannst du eine Position aufteilen, zum Beispiel 10 Stück in Ordnung, 1 beschädigt und 1 verloren. Jede Zeile trägt ihre Menge, eine Notiz und den Zeitpunkt.
- Eine einzelne Einheit hat genau eine Zeile.
- Eine Rückgabe darf auf mehrere Tage verteilt sein.
- **Beschädigt und verloren** verringern beide den Bestand um ihre Menge oder archivieren die Einheit. Sie unterscheiden sich nur darin, was die Historie festhält.
- Sinkt der Bestand so, dass eine genehmigte Buchung mehr verlangt, als vorhanden ist, bekommt diese Buchung einen Konflikt-Hinweis, und die zuständige Person wird benachrichtigt.

Nimmst du „Zurückgegeben“ zurück, entfernt kramr die erfassten Rückgaben und deren Wirkung auf den Bestand.
