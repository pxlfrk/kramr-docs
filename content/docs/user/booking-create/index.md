---
title: Buchung anlegen
description: Material in eine Buchung oder Sperre übernehmen, einen Ausleiher neu anlegen und eine bestehende Buchung als Vorlage nutzen.
audience: user
order: 25
---

# Buchung anlegen

Eine Buchung ist eine **Ausleihe** mit Kontakt oder eine **Sperre** ohne Kontakt.
Den Weg von der Ausleihe bis zur Rückgabe zeigt die [Anleitung](../tutorials/index.md), die Status die Seite [Buchungsstatus und Übergänge](../booking-status/index.md).

## Material auswählen

Material kommt über „Material hinzufügen“ in eine Buchung.
Der Knopf ist gesperrt, bis Abhol- und Rückgabetermin eingetragen sind, damit die Auswahl zeigt, was im Zeitraum frei ist.

- **Suchen und eingrenzen:** Der Dialog sucht in Name, Kategorie und Beschreibung.
  Du grenzt nach Kategorie und Standort ein, mit „Nur im Zeitraum Freie“ und mit „Nur Ausgewählte“, das auch zeigt, was die Buchung schon enthält.
- **Mehrere auf einmal:** Materialien, Mengen und Einheiten gehen mit „Übernehmen“ in einem Schritt in die Buchung.
  Die Auswahl bleibt beim Wechsel der Filter erhalten.
- **Alle auswählen:** Übernimmt alles, was die Filter gerade zeigen, mit dem ganzen Bestand und allen freien Einheiten.
  So sperrst du in einem Schritt alles oder nur einen Standort oder eine Kategorie.
  Fragt der Dialog vorher nach, weil sehr viele Positionen dazukommen, bestätigst du mit „Hinzufügen“.
  „Auswahl aufheben“ nimmt nur die gezeigten Zeilen wieder heraus.
  Was ausgelassen wurde, steht mit Grund unter den Filtern.
- **Bilder anzeigen:** Blendet Titelbilder ein, standardmäßig aus; der Browser merkt sich die Einstellung je Gerät.
- **Schon in der Buchung:** Solches Material trägt die Marke „In der Buchung“; bei Material mit Einheiten sind nur die schon gebuchten Einheiten gesperrt.
- **Mehr als frei:** Du kannst mehr wählen, als im Zeitraum frei ist; kramr weist nur auf den Konflikt hin, siehe [Konflikte und Sperren](../conflicts-and-blocks/index.md).

Bei einer Ausleihe bleibt Material außen vor, das nur im Set buchbar ist, und Bestandteile eines Pflicht-Sets, das mitgebucht wird, weil sie mit dem Set entstehen.
Material, das für die gewählte Verleihart nicht verleihbar ist, ist mit dem Grund markiert, siehe [Verleihbarkeit und Eigennutzung](../lending-restrictions/index.md).

### Sets in der Buchung

- Ein **loses Set** reserviert seine Bestandteile nicht mit.
  Hast du es angehakt, nimmt „Bestandteile mit auswählen“ die Bestandteile mit, in der Menge laut Set mal Zahl der Sets; ein Hinweis nennt, was dazukam.
  Ändert sich später die Menge des Sets, bietet seine Zeile „Bestandteile anpassen“ an, in der Auswahl wie in der Buchung.
- Mitgenommene Bestandteile stehen unter ihrem Set, eingerückt, mit gestrichelter Linie und der Marke „aus Set“.
  Die Zugehörigkeit ist nur eine Anzeige: Jeder Bestandteil bleibt eine eigene Position, die du ändern oder entfernen kannst.
  Bestandteile, die schon in der Buchung stehen oder für die Verleihart nicht buchbar sind, überspringt kramr und nennt sie im Hinweis.
- Bei einem **Pflicht-Set** zeigt das Formular die mitreservierten Bestandteile als nur lesbare Zeilen unter dem Set, mit durchgezogener Linie.
  Wie du ein Pflicht-Set in einer bestehenden Buchung änderst, steht unter [Sets](../kits/index.md#ein-pflicht-set-in-der-buchung-ändern).
- Entfernst du ein Set mit Bestandteilen, fragt kramr „Bestandteile auch entfernen?“: „Mit entfernen“ nimmt sie mit, „Behalten“ lässt sie als gewöhnliche Positionen stehen.

Dieselbe Darstellung gilt im Buchungsdetail, bei der Rückgabe, in der Positionsliste der Übersicht und im Kalender.

## Ausleiher neu anlegen

Gibt es die Person noch nicht, endet die Liste im Feld „Ausleiher“ in der Zeile „Kontakt anlegen“.
Der Dialog fragt nach Vorname, Nachname, E-Mail-Adresse und Handynummer und optional nach der Organisation; Adresse und Geburtsdatum lassen sich später im Kontakt ergänzen.
Hat schon ein Kontakt dieselbe E-Mail-Adresse, weist kramr darauf hin und bietet an, ihn zu wählen.
Nach dem Speichern ist der neue Kontakt der Ausleiher, alles andere in der Buchung bleibt, wie du es eingetragen hast.
Das geht beim Anlegen und beim Bearbeiten, solange der Ausleiher noch änderbar ist.

## Buchung duplizieren

Wiederkehrende Ausleihen oder Sperren legst du aus einer bestehenden Buchung an: Im Buchungsdetail öffnet „Duplizieren“ das Formular vorbefüllt.

- **Übernommen** werden Ausleiher, Verleihart, Material mit Menge bzw. Einheit und die zusätzlichen Empfänger, bei einer Sperre ihr Titel.
- **Neu einzutragen** sind Zeitraum und Bemerkung.
  Status, Betrag, Zahlung und alles zu Abholung und Rückgabe kommen nicht mit.
- **Nicht mehr buchbar** ist etwa archiviertes Material oder ein anonymisierter Kontakt; so etwas fehlt im Entwurf, und ein Hinweis über dem Formular nennt es.
- Die Historie der neuen Buchung nennt die ursprüngliche Buchung.

Das geht für Administration und Sachbearbeitung in jedem Status, nicht für die Rolle „Nur-Lesen“.
