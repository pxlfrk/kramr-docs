---
title: Buchungsanfragen von Websites
description: Wie Besucher einer Vereins-Website Material anfragen und wie die Sachbearbeitung die Anfrage prüft, übernimmt oder ablehnt.
audience: user
order: 28
---

# Buchungsanfragen von Websites

Mit der Einbettung sehen Besucher der Vereins-Website die Materialliste und können eine Buchungsanfrage stellen.
Wie die Einbettung eingerichtet wird, steht unter [Reverse Proxy](../../admin/installation/reverse-proxy.md#einbettungen) und [Einstellungen](../../admin/configuration/einstellungen.md).

## Der Weg einer Anfrage

1. Die anfragende Person gibt ihre E-Mail-Adresse an und erhält per E-Mail einen persönlichen Link.
   Konto und Passwort braucht sie nicht.
2. Über den Link stellt sie die Anfrage zusammen, speichert Zwischenstände und reicht sie ein.
3. Die Sachbearbeitung prüft die Anfrage im Bereich „Anfragen“ und sieht, was im Zeitraum frei ist.
4. Sie **übernimmt** die Anfrage als Entwurf oder **lehnt** sie mit Begründung **ab**.
   Die anfragende Person erfährt es per E-Mail.

Eine Anfrage ist noch keine Buchung; erst ihre Übernahme erzeugt einen Entwurf.
Die anfragende Seite wählt in der Einbettung oder im Anfrage-Editor ihren Tarif anhand der öffentlichen Beschreibung; ohne Tarif lässt sich die Anfrage nicht einreichen, bei einem für einen eigenen Kontakt ausgestellten Link entfällt die Wahl.
Material, das im gewählten Tarif nicht verleihbar ist, lässt sich nicht neu in die Anfrage aufnehmen; eine Position, die erst durch einen Tarifwechsel betroffen ist, bleibt stehen, und der Einreichen-Dialog warnt davor.
Bei der Übernahme ist der gewünschte Tarif vorbelegt und als Wunsch gekennzeichnet; die Sachbearbeitung bestätigt ihn oder wählt Kontakt, einen anderen Tarif oder Eigennutzung und zuständige Person.
Unter der Tarifwahl stehen Beschreibung und interner Hinweis des gewählten Tarifs.
Ist der Kontakt eine Person der eigenen Organisation, steht die Wahl fest auf Eigennutzung.
Positionen, die in diesem Tarif nicht verleihbar sind, nennt der Dialog vorab und übernimmt sie nicht.
Liegt ein Termin außerhalb der Öffnungszeiten, bestätigt die Sachbearbeitung ihn bei der Übernahme, siehe [Konflikte und Sperren](../conflicts-and-blocks/index.md#termin-außerhalb-der-öffnungszeiten).

Die Sachbearbeitung kann auch selbst einen Link für einen Kontakt ausstellen.

## Wann der Kontakt eine E-Mail bekommt

Der Kontakt erhält genau vier E-Mails: den Link zur Anfrage (selbst angefordert oder von der Geschäftsstelle ausgestellt), die Übernahme und die Ablehnung.
Jede Aktion, die eine davon auslöst, nennt es vorher in einer Zeile unter dem Dialog: „Löst eine E-Mail an … aus: Anfrage übernommen“.
Hat der Kontakt keine E-Mail-Adresse, steht dort, dass keine E-Mail ausgeht.
Im Buchungsdetail zeigt der Bereich „Mitteilungen“ in der Seitenleiste, welche E-Mail zu dieser Buchung wann in die Warteschlange kam und ob sie gesendet wurde oder fehlschlug.
Den Text der E-Mail zeigt er nicht.
Eine fehlgeschlagene E-Mail steht auch bei den Benachrichtigungen in den Einstellungen.
Die Tabelle „Wann erfährt der Kontakt was?“ auf der Seite *E-Mail-Texte* fasst die Anlässe für Admins zusammen.

## Was Anfragende sehen

- **Material:** Die Einbettung zeigt nur Material, das als online sichtbar markiert ist.
  Material, das nur für einen Personenkreis verleihbar ist, trägt einen Hinweis; Material, das an niemanden verleihbar ist, wird gezeigt, lässt sich aber nicht anfragen.
- **Auswahl:** Anfragende haken im Dialog „Material hinzufügen“ beliebig viele Materialien an und tragen die Menge in der Zeile ein.
  Erst „Übernehmen“ legt die Auswahl als Positionen in die Anfrage.
  Die Auswahl funktioniert wie in der [Buchung](../booking-create/index.md#material-auswählen), auch bei losen Sets und bei Material mit Einheiten.
  Ist mehr gewünscht, als im Zeitraum frei ist, weist die Zeile darauf hin; die Geschäftsstelle prüft das.
- **Zeitraum:** Der gewünschte Zeitraum beginnt frühestens heute, dauert höchstens 90 Tage und beginnt höchstens 24 Monate im Voraus.
  Der Kalender bietet nur solche Tage an.
- **Höchstzahl:** Hat die Anfrage die Höchstzahl an Positionen erreicht, sind die übrigen Kontrollkästchen gesperrt.

Einen Link auf die Einbettung oder auf ein einzelnes Material ohne `iframe` beschreibt die Seite [Einstellungen](../../admin/configuration/einstellungen.md#einbettung-als-eigene-seite-verlinken).
