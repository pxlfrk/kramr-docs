---
title: Sets
description: Mehrere Materialien zu einem Set bündeln und was das beim Buchen bedeutet.
audience: user
order: 44
---

# Sets

Ein Set bündelt mehrere Materialien, zum Beispiel ein Zelt aus Gestänge, Zeltplane und Heringen.
Es ist selbst ein Material und kann wie jedes Material Parameter tragen.

## Pflicht-Set oder lose Gruppe

- **Pflicht-Set:** Es wird nur gemeinsam ausgeliehen. Buchst du das Set, bucht kramr jeden Bestandteil als eigene Position mit. Rückgabezustand, Teilabholung und Teilrückgabe gelten damit für jeden Bestandteil einzeln.
- **Lose Gruppe:** Das Set reserviert nichts automatisch. Wer die Bestandteile will, bucht sie als eigene Positionen.

Was ein Pflicht-Set kostet, legst du am Set fest: Hat es einen Preis, gilt er für das ganze Set samt Bestandteilen.
Mit dem Schalter „Bestandteile einzeln berechnen“ trägt das Set keinen Preis, und jeder Bestandteil zählt mit seinem eigenen, siehe [Preise und Tarife](../pricing/index.md#pflicht-sets).

Bei jedem Bestandteil eines Pflicht-Sets legst du zusätzlich fest, ob er auch einzeln gebucht werden darf.
Ist er „Nur im Set buchbar“, sperrt die Materialauswahl ihn mit diesem Grund, und das Material nennt es selbst im Kopf und in der Karte „Bestandteil von“.
Bei einer losen Gruppe gibt es diese Einstellung nicht.
Eine Sperre darf solches Material trotzdem enthalten, denn sie leiht nichts aus, sondern belegt es nur.

## Bestand und Verfügbarkeit

- Der Bestand eines Pflicht-Sets ist sein eigener Bestand. Frei sind nur komplette Sets.
- Ein Set ist nur dann für einen Personenkreis verleihbar, wenn alle Bestandteile es sind, siehe [Verleih-Einschränkung und Eigennutzung](../lending-restrictions/index.md).

## Änderungen am Set

Änderst du die Zusammensetzung eines Sets, ändert das keine bereits gebuchte Position.
Eine Buchung hält den Stand fest, der beim Buchen galt.
Die Historie des Sets nennt jeden hinzugefügten, geänderten und entfernten Bestandteil mit Menge.

## Ein Pflicht-Set in der Buchung ändern

Solange von einem Pflicht-Set nichts abgeholt ist, kannst du es in der Buchung bearbeiten.

- **Hinzufügen:** „Material hinzufügen“ bietet auch Pflicht-Sets an.
  Ein neues Set nimmt die heutige Zusammensetzung, wie beim Anlegen der Buchung.
- **Entfernen:** „Entfernen“ in der Zeile des Sets nimmt das Set samt seinen Bestandteilen aus der Buchung.
  Es fragt nicht nach den Bestandteilen, denn sie gehören zum Set.
- **Menge ändern:** Bei einem Set, das in Mengen geführt wird, ändert die Menge in der Zeile auch die Bestandteile.
  kramr rechnet dabei vom gebuchten Stand: Hat die Buchung 4 Heringe für 1 Set, sind es bei 3 Sets 12, auch wenn das Set inzwischen anders zusammengesetzt ist.
  Bei Bestandteilen mit Einheiten wählt kramr für mehr Sets weitere freie Einheiten; bei weniger Sets fallen die zuletzt gewählten weg, die übrigen bleiben reserviert.
  Die Zeile sagt „Die Bestandteile werden beim Speichern angepasst.“, bis du speicherst.
- **Set mit Einheiten:** Wechselst du die Einheit des Sets, ist das Entfernen und Hinzufügen in einem Schritt.

Reichen die Einheiten eines Bestandteils nicht aus, lehnt kramr das Speichern ab und nennt das Set.
Sind nur belegte Einheiten frei, nimmt kramr diese und zeigt wie üblich den Konflikt-Hinweis.
Ist vom Set oder einem Bestandteil schon etwas abgeholt, bleibt das Set fest: Die Zeile lässt sich weder ändern noch entfernen.
Die Historie der Buchung nennt die geänderten Bestandteile mit ihrem Set.

## In welchen Sets steckt ein Material?

Ein Material zeigt dir, in welchen Sets es Bestandteil ist.

- In der Bestandsübersicht steht unter dem Namen das Badge „In 2 Sets“.
  Ein Klick darauf klappt die Sets darunter auf, mit Art, Menge je Set und dem Badge „Archiviert“ bei archivierten Sets.
  Der Pfeil vor dem Namen klappt wie bisher die Einheiten auf.
- Im Raster trägt die Karte dasselbe Badge, ohne aufzuklappen.
- Im Materialdetail zeigt die Karte „Bestandteil von“ dieselben Sets, und der Kopf nennt die Zahl der aktiven.
- Die Zahl in „In n Sets“ zählt nur aktive Sets, die aufgeklappte Liste und die Karte nennen auch archivierte.

Alle Rollen sehen das, auch die reine Leserolle.

## Einen Bestandteil archivieren

Ist ein Material Bestandteil mindestens eines aktiven Sets, fragt kramr vor dem Archivieren nach und nennt die Sets.
Das gilt im Materialdetail und in der Sammelbearbeitung der Bestandsübersicht, dort mit den betroffenen Materialien und ihren Sets.
Bestätigst du, wird das Material archiviert, und die Zusammensetzung der Sets bleibt unverändert.
Es gibt keine Sperre, und das Reaktivieren fragt nie nach.

## Bestandteile in der Bestandsübersicht

In der Tabelle nennt die Zeile eines Sets unter dem Namen die ersten drei Bestandteile, zum Beispiel „2 × Baustrahler, Stativ, Kabeltrommel + 2 weitere“.
Die Karte im Raster zeigt dieselbe Zeile.
Der Pfeil vor dem Namen klappt alle Bestandteile des Sets auf.
Im Menü „Ansicht“ klappt der Schalter „Sets aufklappen“ alle Sets der Seite auf; er ist zunächst aus, und kramr merkt ihn pro Gerät.
Suchst du nach dem Namen eines Bestandteils, findet kramr das Set und zeigt es aufgeklappt mit genau diesem Bestandteil.
