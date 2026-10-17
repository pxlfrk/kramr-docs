---
title: Funktionen im Überblick
description: Was kramr kann – Material, Buchungen, Kontakte, Benachrichtigungen und Anfragen.
audience: user
order: 20
---

# Funktionen im Überblick

## Suche

Ein Suchfeld in der Kopfzeile (Strg + K) findet Buchungen, Material und Kontakte zugleich und springt mit einem Treffer direkt auf das Detail.
Die Einzelheiten stehen unter [Suche in der Kopfzeile](../search/index.md).

## Material

- **Mengen- und Einzelmaterial:** Ein Material wird entweder über eine
  Stückzahl geführt (zum Beispiel 20 Schlafsäcke) oder als einzelne Einheiten
  mit eigener Bezeichnung (zum Beispiel jedes Zelt für sich).
- **Kategorien, Parameter, Bilder:** Material wird nach Kategorien geordnet,
  mit eigenen Eigenschaften beschrieben und mit Fotos versehen.
  In der Bestandsübersicht blendest du über **Ansicht** die Parameter als zusätzliche Spalten ein.
  Angeboten werden die Parameter der gewählten Kategorie, ohne Kategorie alle.
- **Sets:** Ein Set bündelt mehrere Materialien. Ist es ein Pflichtset, wird
  beim Buchen jede Komponente mitgebucht.
- **Wer darf ausleihen:** Bei jedem Material legst du fest, ob es an den
  **internen** Personenkreis (Jugendgruppen), den **externen** Personenkreis
  (Privatpersonen) oder an beide verliehen wird; Vorgabe ist beide. Ein
  Personenkreis, der das Material nicht ausleihen darf, hat dafür keinen
  Preis. Ist ein Material für keinen von beiden verleihbar, bleibt es im
  Bestand, kann aber nur für die Eigennutzung gebucht oder gesperrt werden.
  Ein Set ist nur dann verleihbar, wenn alle seine Bestandteile es sind.
- **Archivieren statt löschen:** Material wird nie gelöscht, sondern
  archiviert; die Historie bleibt erhalten.
- **Zugehörigkeit zu Sets:**
  Ein Material zeigt, in welchen Sets es Bestandteil ist, als Badge „In n Sets“ in der Bestandsübersicht und als Karte „Bestandteil von“ im Materialdetail.
  Wer ein Material archiviert, das in aktiven Sets steckt, wird vorher gefragt; die Sets bleiben unverändert.
  Mehr dazu unter [Sets](../kits/index.md).
- **Mehrere Materialien auf einmal ändern:**
  In der Bestandsübersicht haken Mitarbeitende Materialien an.
  Dann ändern sie Kategorie, Lagerort, Online-Sichtbarkeit oder Verleihbarkeit oder archivieren und reaktivieren die Auswahl.
  Die Änderung gilt für alle angehakten Materialien oder für keines.
  Ist in der neuen Kategorie schon ein Material mit demselben Namen, wird nichts gespeichert, und die Meldung nennt jedes betroffene Material.
  Gehen dabei Werte verloren, fragt die Anwendung vorher nach und nennt die betroffenen Materialien.
  Das betrifft Parameter, die in der neuen Kategorie nicht gelten, und den Preis eines Personenkreises, der nicht mehr ausleihen darf.
  Der bisherige Wert steht danach in der Historie des Materials.
  Macht man einen Personenkreis wieder verleihbar, bleibt der Preis leer, und leer heißt kostenlos.
  Die Auswahl gilt für die angezeigte Seite, höchstens 100 Materialien.
- **Raster statt Tabelle:**
  Neben **Ansicht** schaltest du die Bestandsübersicht von der Tabelle auf ein Raster aus Karten mit Titelbild um.
  Das Raster zeigt dieselben Treffer und behält Suche und Filter.
  Eine Karte nennt Kategorie, Standort, Bestand, beide Preise und, wenn ein Zeitraum gewählt ist, wie viele frei sind.
  Im Raster wählst du im Menü **Ansicht** die Sortierung und die Kartengröße.
  Ankreuzen, Aufklappen und die Parameter-Spalten gibt es nur in der Tabelle.
- **Auswertung:**
  Über „Weitere Aktionen“ in der Bestandsübersicht öffnest du die Auswertung.
  Sie zeigt je Material für einen Zeitraum, wie oft und wie lange es verliehen war, wie stark es ausgelastet war und wie oft es beschädigt oder verloren zurückkam.
  Dieselben Zahlen stehen im Abschnitt „Nutzung“ des Materials, und die Tabelle lässt sich als CSV herunterladen.
- **Suche:** Die Suche findet Material auch bei Umlauten und kleinen
  Tippfehlern.

## Buchungen

Eine Buchung ist eine **Ausleihe** (mit Kontakt) oder eine **Sperre**
(Material ist belegt, ohne dass jemand ausleiht). Beide durchlaufen:

`Entwurf → Genehmigt → Abgeholt → Zurückgegeben`

Entwurf und Genehmigt lassen sich auch **stornieren**. Jeder Schritt kann um
einen Schritt zurückgenommen werden, falls du dich verklickt hast.

- **Konflikte:** Überschneiden sich Buchungen so, dass der Bestand nicht
  reicht, markiert kramr den Konflikt. Er ist ein Hinweis, keine Sperre: Wer
  einen Entwurf trotzdem genehmigen will, bestätigt das ausdrücklich.
- **Zeiträume:** Ein Zeitraum reicht vom Abholen bis zur Rückgabe. Endet eine
  Buchung um 18 Uhr und beginnt die nächste um 18 Uhr, gibt es keinen
  Konflikt.
- **Material auswählen:** Material kommt über den Knopf „Material hinzufügen“ in eine Buchung oder Sperre.
  Er ist gesperrt, bis Abhol- und Rückgabetermin eingetragen sind, damit die Auswahl zeigt, was im Zeitraum frei ist.
  Der Dialog sucht in Name, Kategorie und Beschreibung und lässt sich nach Kategorie, Standort, „Nur im Zeitraum Freie“ und „Nur Ausgewählte“ eingrenzen.
  „Nur Ausgewählte“ zeigt auch, was die Buchung schon enthält.
  Mehrere Materialien, Mengen und Einheiten gehen mit „Übernehmen“ in einem Schritt in die Buchung; die Auswahl bleibt beim Wechsel der Filter erhalten.
  „Bilder anzeigen“ blendet Titelbilder ein und ist standardmäßig aus; die Einstellung merkt sich der Browser je Gerät.
  Material, das schon in der Buchung steht, ist mit „In der Buchung“ markiert; bei Material mit Einheiten sind nur die schon gebuchten Einheiten gesperrt.
  Mehr als im Zeitraum frei ist, lässt sich weiter wählen; es erscheint nur ein Hinweis auf den Konflikt.
  Ein loses Set reserviert seine Bestandteile nicht mit; wer sie halten will, wählt sie als eigene Positionen.
  Hat man ein loses Set angehakt, nimmt „Bestandteile mit auswählen“ in seiner Zeile die Bestandteile mit, mit der Menge laut Set mal Zahl der Sets, und ein Hinweis darunter nennt, was dazukam.
  Die Mengen lassen sich danach in der Zeile des Bestandteils ändern; ändert sich die Menge des Sets, bietet die Zeile „Bestandteile anpassen“ an.
  Dasselbe gilt in der Buchung selbst, beim Anlegen und beim Bearbeiten: Ändert man dort die Menge eines losen Sets, bietet seine Zeile „Bestandteile anpassen“ an.
  Ein Pflicht-Set lässt sich beim Bearbeiten hinzufügen, entfernen und in der Menge ändern, solange nichts davon abgeholt ist; seine Bestandteile folgen beim Speichern (siehe [Sets](../kits/index.md)).
  Bei Bestandteilen mit Einheiten klappt die Zeile auf, die Einheiten wählt man selbst.
  Bestandteile, die schon in der Buchung stehen, für die Verleihart nicht verleihbar oder nur im Set buchbar sind, werden übersprungen und im Hinweis genannt.
  Die mit ausgewählten Bestandteile stehen danach unter ihrem Set, eingerückt, mit einer gestrichelten Linie und der Marke „aus Set“.
  Die Zugehörigkeit ist nur eine Anzeige: Jeder Bestandteil bleibt eine eigene Position, die du ändern oder entfernen kannst.
  Bei einem Pflicht-Set zeigt das Buchungsformular die mitreservierten Bestandteile als nur lesbare Zeilen unter dem Set, mit einer durchgezogenen Linie.
  Entfernst du ein Set, zu dem Bestandteile gehören, fragt kramr „Bestandteile auch entfernen?“: „Mit entfernen“ nimmt sie mit, „Behalten“ lässt sie als gewöhnliche Positionen stehen.
  Dieselbe Darstellung gilt im Buchungsdetail, bei der Rückgabe, in der Positionsliste der Übersicht und im Kalender.
- **Ausleiher neu anlegen:** Gibt es die Person noch nicht, endet die Liste im Feld „Ausleiher“ in der Zeile „Kontakt anlegen“.
  Der Dialog fragt nach Vorname, Nachname, E-Mail-Adresse und Handynummer und optional nach der Organisation; Adresse und Geburtsdatum lassen sich später im Kontakt ergänzen.
  Hat schon ein Kontakt dieselbe E-Mail-Adresse, weist kramr darauf hin und bietet an, ihn zu wählen.
  Nach dem Speichern ist der neue Kontakt der Ausleiher; alles andere in der Buchung bleibt, wie du es eingetragen hast.
  Das geht beim Anlegen und beim Bearbeiten einer Buchung, solange der Ausleiher noch änderbar ist.
- **Buchung duplizieren:** Wiederkehrende Ausleihen oder Sperren legst du aus einer bestehenden Buchung an: Im Buchungsdetail öffnet „Duplizieren“ das Formular vorbefüllt mit Ausleiher, Verleihart, Material mit Menge bzw. Einheit und den zusätzlichen Empfängern, bei einer Sperre mit ihrem Titel.
  Zeitraum und Bemerkung trägst du neu ein; Status, Betrag, Zahlung und alles zu Abholung und Rückgabe kommen nicht mit.
  Was nicht mehr buchbar ist, etwa archiviertes Material oder ein anonymisierter Kontakt, fehlt im Entwurf; ein Hinweis über dem Formular nennt es.
  Die neue Buchung zeigt in ihrer Historie, von welcher Buchung sie stammt.
  Das geht für Administration und Sachbearbeitung in jedem Status, nicht für die Rolle „Nur lesen“.
- **Verleihart:** Jede Ausleihe ist **intern**, **extern** oder
  **Eigennutzung**. Die Verleihart bestimmt den Tarif und welches Material
  gebucht werden darf: Eine interne oder externe Ausleihe nimmt nur Material
  auf, das für diesen Personenkreis verleihbar ist (nicht Auswählbares ist
  mit dem Grund markiert). Die Eigennutzung gilt für jedes Material, kostet
  nichts und gehört zu einem Kontakt der eigenen Organisation. Wählst du so
  einen Kontakt, steht die Verleihart fest auf Eigennutzung. Spätere
  Änderungen am Material ändern bestehende Buchungen nicht.
- **Rückgabe:** Bei der Rückgabe wird je Position festgehalten, was in
  Ordnung, beschädigt oder verloren ist. Eine Rückgabe kann auf mehrere Tage
  verteilt sein.
- **Historie:** Jede Änderung an Buchungen und Material steht in einer
  Änderungshistorie.

## Kontakte

Ein Kontakt ist immer eine Person. Das Geburtsdatum ist freiwillig. Personen
der eigenen Organisation markierst du als **Eigene Organisation**; für sie ist
die Handynummer freiwillig, die E-Mail-Adresse bleibt Pflicht, und sie leihen
nur für die Eigennutzung aus. Wer lange
nichts ausgeliehen hat, wird als Vorschlag zum **Anonymisieren** angezeigt;
das geschieht nie automatisch. Beim Anonymisieren bleibt die Buchungshistorie
erhalten, die persönlichen Daten werden entfernt.

## Benachrichtigungen

kramr verschickt Erinnerungen vor der Abholung und bei überfälligen
Rückgaben, per E-Mail und optional an einen Webhook (zum Beispiel einen Chat).
Die Prüfung läuft einmal täglich am Morgen. Was verschickt wird, stellt die
Administration ein.

## Buchungsanfragen von Websites

Mit der Einbettung können Besucher einer Vereins-Website die Materialliste
sehen und eine Buchungsanfrage stellen. Sie erhalten per E-Mail einen Link,
mit dem sie die Anfrage zusammenstellen, speichern und einreichen. Die
Sachbearbeitung prüft die Anfrage im Bereich „Anfragen" und übernimmt sie als
Entwurf oder lehnt sie mit Begründung ab. Material, das nur für einen
Personenkreis verleihbar ist, trägt in der Einbettung einen Hinweis; Material,
das an niemanden verleihbar ist, wird gezeigt, lässt sich aber nicht anfragen.
Bei der Übernahme wählt die Sachbearbeitung die Verleihart; Positionen, die
dafür nicht verleihbar sind, nennt der Dialog vorab und übernimmt sie nicht.

Wer eine Anfrage zusammenstellt, öffnet „Material hinzufügen" und hakt dort beliebig viele Materialien an.
Die Menge tragen sie gleich in der Zeile ein.
„Nur Ausgewählte" zeigt, was schon angehakt ist, und das, was die Anfrage schon enthält; „Bilder anzeigen" blendet die Bilder aus und ist hier standardmäßig an.
Erst „Übernehmen" legt die Auswahl als Positionen in die Anfrage, „Abbrechen" verwirft sie.
Ist mehr gewünscht, als im gespeicherten Zeitraum frei ist, weist die Zeile darauf hin.
Übernehmen lässt sich die Auswahl trotzdem, die Geschäftsstelle prüft das.
Hat die Anfrage die Höchstzahl an Positionen erreicht, sind die übrigen Kontrollkästchen gesperrt.
Ist ein loses Set angehakt, nimmt „Bestandteile mit auswählen" seine Bestandteile mit; jeder zählt als eigene Position und steht danach unter dem Set, mit der Marke „aus Set".
Was nicht mehr unter die Höchstzahl passt oder nicht angeboten wird, übernimmt der Knopf nicht und nennt es darunter.
Entfernt man ein Set, fragt die Seite, ob die Bestandteile mit entfernt werden.
Bei einem Material mit Einheiten steht in der Zeile jeder gewählten Einheit ein Auswahlfeld.
Damit tauscht man die Einheit, ohne die Position zu entfernen; die Einheiten stehen mit ihrem Zustand im gespeicherten Zeitraum da, und was schon in der Anfrage steht, ist gesperrt.
Eine Position ohne Einheit bietet dasselbe Feld mit „Geschäftsstelle wählt“; wählt man dort eine Einheit, wird ein Stück davon zur Position mit dieser Einheit, die übrigen bleiben ohne Einheit.
Mehrere Positionen desselben Materials stehen zusammen unter einer Überschrift mit Bild, Name und Kategorie.

## Mehr dazu

- [Buchungsstatus und Übergänge](../booking-status/index.md)
- [Konflikte und Sperren](../conflicts-and-blocks/index.md)
- [Abholung und Rückgabe](../pickup-and-return/index.md)
- [Sets](../kits/index.md)
- [Verleih-Einschränkung und Eigennutzung](../lending-restrictions/index.md)
- [Preise und Tarife](../pricing/index.md)
- [Kalenderansicht](../calendar/index.md)
- [Posteingang und Benachrichtigungen](../notifications/index.md)
- [Material per CSV importieren](../export-and-import/index.md)
- [Auswertung der Nutzung](../usage/index.md)
- [Kontakte anonymisieren](../anonymisation/index.md)
- [Rollen und Rechte](../roles/index.md)
- [Glossar](../glossary/index.md)
