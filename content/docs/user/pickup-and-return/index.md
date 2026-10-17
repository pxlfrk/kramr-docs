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
- Wurde mehr als „verloren“ oder „beschädigt“ gemeldet, als im Bestand ist, geht der Bestand auf 0; die Rückgabe wird trotzdem gespeichert, und die Historie des Materials nennt den Fehlbetrag.
- Sinkt der Bestand so, dass eine genehmigte Buchung mehr verlangt, als vorhanden ist, bekommt diese Buchung einen Konflikt-Hinweis, und die zuständige Person wird benachrichtigt.

Nimmst du „Zurückgegeben“ zurück, entfernt kramr die erfassten Rückgaben und gibt dem Bestand zurück, was sie abgezogen haben.

## Eine erfasste Rückgabe korrigieren

Die Rückgabe-Ansicht hat zwei Reiter.
Unter **Offen** gibst du die Rückgabe ein, unter **Erfasst** siehst du alle bisher erfassten Rückgaben je Position, auch von vollständig zurückgegebenen Positionen.
Bei einer zurückgegebenen Buchung führt **Rückgabe ansehen** in der Aktionsbox direkt auf **Erfasst**.

Hast du eine Rückgabe falsch erfasst, korrigierst du genau diese eine:

1. Öffne **Erfasst** und wähle bei der Rückgabe **Korrigieren**.
2. kramr fragt nach und nennt die Rückgabe und was die Korrektur für den Bestand bedeutet, etwa „Bestand +2“ oder „Einheit wird reaktiviert“.
   Ist die Buchung schon zurückgegeben, steht dort auch, dass sie danach wieder Abgeholt ist.
3. Haben andere Buchungen das Material inzwischen abgeholt, warnt kramr und nennt sie.
   Du kannst trotzdem korrigieren.
4. Nach dem Bestätigen ist die Rückgabe entfernt, und ihre Werte stehen unter **Offen** als Eingabe.
   Ändere sie und buche sie mit **Erfasste Rückgaben buchen** neu.

Ist die Bezeichnung einer verlorenen oder beschädigten Einheit inzwischen an eine andere Einheit vergeben, bleibt die Einheit archiviert, und kramr weist darauf hin.
Eine archivierte Buchung lässt sich nicht korrigieren.
