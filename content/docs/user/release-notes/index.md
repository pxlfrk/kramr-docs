---
title: Neuigkeiten
description: Was sich in den Versionen von kramr für Anwender geändert hat.
audience: user
order: 80
---

# Neuigkeiten

Diese Seite führt die veröffentlichten Versionen ab 1.0 auf, die neueste zuerst.
Dieselbe Liste zeigt die Anwendung den Administratoren in den Einstellungen unter „Changelog“.
Technische Release Notes zu jeder Version stehen außerdem auf der Seite „Releases“ des Projekts auf GitHub.

<!-- release-notes:start - generated from CHANGELOG.md, do not edit -->

## Version 1.5.1 (07.10.2026)

### Verbesserungen

- 📋 Sperren können einen Titel tragen, der in der Buchungsübersicht, im Kalender und in der Buchung anstelle des Ausleihers steht und in der Suche gefunden wird.
- 📋 Der Schloss-Filter in der Buchungsübersicht kann Sperren jetzt auch ausblenden: ein Klick zeigt nur Sperren, ein zweiter blendet sie aus, ein dritter hebt den Filter auf.

### Fehlerbehebungen

- 📋 Sperren gelten nach ihrem Ende nicht mehr als überfällig, lösen keine Erinnerung „Überfällige Rückgabe“ mehr aus, und genehmigte Sperren mit abgelaufenem Zeitraum stehen nicht mehr im Arbeitsvorrat der Startseite.
- 📋 Eine Buchung lässt sich nicht mehr abholen, wenn weniger Stück im Lager sind als gebucht (zum Beispiel nach einer verlorenen oder beschädigten Rückgabe); der Hinweis nennt, wie sich das lösen lässt.
- 👤 In der Nutzerverwaltung entfällt „Als Kontakt anlegen“, wenn es für das Konto schon einen Kontakt der Eigenen Organisation gibt.

### Unter der Haube

- 📦 Hochgeladene Bilder werden vor der Verarbeitung auf ihr Format geprüft, und die Bildbibliothek ist auf dem neuesten Stand.

## Version 1.5.0 (06.10.2026)

### Verbesserungen

- 📦 Bei jedem Material lässt sich festlegen, ob es an den internen und/oder den externen Personenkreis verliehen wird; ein Personenkreis ohne Verleih hat keinen Preis. Bestand, Buchung und Einbettung zeigen das an, ein Set ist nur verleihbar, wenn alle Bestandteile es sind, und ein Material, das an niemanden verleihbar ist, lässt sich nicht anfragen.
- 📋 Neue Verleihart „Eigennutzung“ für Ausleihen der eigenen Organisation: ohne Tarif, für jedes Material möglich und nur zusammen mit einem Kontakt der „Eigenen Organisation“ – und umgekehrt. Bereits angelegte Buchungen bleiben dabei unverändert.
- 👤 Kontakte der eigenen Organisation brauchen keine Handynummer; in der Nutzerverwaltung legt „Als Kontakt anlegen“ einen solchen Kontakt aus einem Konto an.
- 🖥️ Auf sehr breiten Bildschirmen nutzen Tabellen und der Kalender die volle Breite und zeigen mehr Spalten, während Formulare und Texte weiter mittig und gut lesbar bleiben.
- 🖥️ In der Kopfzeile zeigt eine Glocke mit der Zahl der ungelesenen Benachrichtigungen, was bei Buchungen ansteht (Abholung, überfällige Rückgabe, Konflikte, neue Buchungen); ein Klick öffnet die letzten Einträge, „Alle anzeigen“ führt auf die neue Seite „Benachrichtigungen“, und ein Eintrag springt zur Buchung und gilt dann als gelesen.
- 🖥️ Im eigenen Profil lässt sich je Ereignis und getrennt für Posteingang und E-Mail ein- und ausschalten, was man selbst bekommt; Hinweise bei „Überfällige Rückgabe“ und „Bestandsänderungs-Konflikt“ warnen, dass man dann nichts mehr davon erfährt.

## Version 1.4.0 (04.10.2026)

### Verbesserungen

- 📋 Die Buchungsübersicht lässt sich nun zwischen Tabelle und Kalender umschalten: Der Kalender zeigt jede Buchung als Balken von der Abholung bis zur Rückgabe (nach Woche oder Monat), mit denselben Filtern wie die Tabelle, und ein Klick auf einen Balken zeigt die Kurzfassung der Buchung an der Seite.

### Unter der Haube

- ⚙️ Benachrichtigungen werden jetzt zusätzlich für jeden Nutzer mit Konto gesammelt, auch für Nutzer ohne E-Mail-Adresse; die Anzeige in der Kopfzeile folgt.

## Version 1.3.0 (02.10.2026)

### Verbesserungen

- 📋 Alle E-Mails kommen jetzt als übersichtlich gestaltete Nachricht mit Logo und Namen der Organisation, bei Anfragen mit einer Schaltfläche zum Ausfüllen, und am Ende steht, warum man sie bekommt; wer keine gestalteten E-Mails anzeigt, sieht weiterhin den bisherigen Text.
- ⚙️ In den Einstellungen lassen sich Name und Logo der Organisation hinterlegen; sie erscheinen in der Kopfzeile, auf der Anmeldeseite und auf den Seiten für Buchungsanfragen, ohne Pflege bleibt kramr zu sehen.
- ⚙️ In den Einstellungen lässt sich wählen, ob die Anwendung „Du“ oder „Sie“ sagt (voreingestellt ist „Du“); das gilt für die E-Mails an Anfragende, die Einbettung auf der Website und die Anfrageseiten. Bereits eingereihte E-Mails behalten ihre Anrede.
- ⚙️ Die Einstellung „Anrede“ gilt für die gesamte Oberfläche der Anwendung: mit „Du“ sprechen alle Meldungen, Hinweise und Dialoge die Nutzerinnen und Nutzer direkt an, mit „Sie“ bleibt alles wie bisher; die Umstellung wirkt sofort, ohne die Seite neu zu laden.

### Unter der Haube

- ⚙️ Die öffentliche Dokumentation wird bei jeder Änderung automatisch auf die Dokumentationsseite übertragen; vorher wird geprüft, dass nichts Internes/überflüssiges darin steht, und die Seite muss sich fehlerfrei bauen lassen.
- ⚙️ Die Dokumentationsseite wird nach jeder Übertragung automatisch gebaut und auf GitHub Pages veröffentlicht.

## Version 1.2.1 (01.10.2026)

### Unter der Haube

- ⚙️ Die Build-Pipeline wurde optimiert und ist nun gegen Verbindungsabbrüche beim Abruf von Paket-Abhängigkeiten abgesichert.

## Version 1.2.0 (01.10.2026)

### Verbesserungen

- 🖥️ Das Changelog ist jetzt für alle Nutzer mit einer Rolle einsehbar: ein Klick auf die Versionsnummer oben rechts öffnet die Seite „Changelog“, auf der die neueste Version gleich aufgeklappt ist.
- 📋 Wer den Link zu einer Buchungsanfrage hat, kann sie jetzt in einem eigenen Fenster zusammenstellen: Zeitraum, Material und Mengen eintragen, zwischendurch speichern, sehen, was im Zeitraum frei ist, und die Anfrage einreichen oder zurückziehen; danach zeigt dieselbe Seite den Stand. Speichern zwei Personen gleichzeitig, geht nichts verloren – die zweite bekommt eine Meldung und ihre Änderungen werden aufgelistet.
- 📋 Besucher einer Website können jetzt eine Buchungsanfrage beginnen: Sie geben Name, E-Mail-Adresse und Handynummer an und bekommen per E-Mail einen Link, über den die Anfrage später zusammengestellt wird; die Schaltflächen „Anfrage stellen“ und „Dieses Material anfragen“ stehen in der Materialübersicht.
- 📋 Anfragen von der Website lassen sich im neuen Bereich „Anfragen“ prüfen: Die Zahl der eingereichten Anfragen steht in der Navigation, die ältesten stehen auf der Startseite, und im Detail sehen Sachbearbeiter, was frei ist. Sie übernehmen eine Anfrage als Entwurf (Kontakt, Verleihart und zuständige Person wählen; was sich nicht buchen lässt, wird vorher genannt) oder lehnen sie mit Begründung ab – die anfragende Seite erfährt es per E-Mail. Offene Links lassen sich widerrufen, bei ausgestellten Links lässt sich die Positionsgrenze anheben.
- 👤 In der Kontaktansicht stellen Sachbearbeiter mit „Anfrage-Link ausstellen“ einen Link für genau diesen Kontakt aus (mit wählbarer Positionsgrenze bis 200, auf Wunsch per E-Mail), kopieren ihn einmalig, und die Karte „Anfrage-Links“ zeigt, was aus den ausgestellten Links geworden ist.
- ⚙️ Administratoren legen unter „Verwaltung › Website-Einbindung“ Einbettungen an, wählen die gezeigten Kategorien, pflegen die Liste der Websites, die einbetten dürfen, und kopieren den fertigen Code für ihre Website.
- 📦 Einzelne Materialien lassen sich jetzt von jeder Online-Anzeige ausschließen: „Online sichtbar“ im Material-Formular, und im Bestand können mehrere Materialien auf einmal ein- oder ausgeblendet werden. Nicht online sichtbare Materialien sind am durchgestrichenen Globus erkennbar.
- ⚙️ Administratoren legen bei jedem Parameter fest, ob er später online erscheinen darf; bisher vorhandene Parameter bleiben intern, und in der Parameterliste steht dazu die neue Spalte „Online“.
- 🖥️ Schrift, Eingabefelder und Schaltflächen sind größer und besser lesbar: Tabellen stehen in derselben Schriftgröße wie in einer Tabellenkalkulation, und Beschriftungen, Hinweise und Badges sind nicht mehr winzig. Die Schrift IBM Plex wird jetzt mitgeliefert, statt je nach Rechner durch eine andere ersetzt zu werden – geladen vom eigenen Server, nicht aus dem Internet.
- 🖥️ Das dunkle Erscheinungsbild ist jetzt kühles Grau statt bräunlich, die Anmeldeseite zeigt das kramr-Zeichen groß über dem Anmeldefeld, und in der Kopfzeile steht es klein neben dem Namen – ein Klick darauf führt zur Startseite.

### Fehlerbehebungen

- 📋 Lange Beschriftungen in der Aktionsbox einer Buchung laufen nicht mehr aus ihrer Schaltfläche heraus.
- 🖥️ Die Markierung des geöffneten Bereichs in der Navigation sitzt jetzt bündig auf der Linie unter der Kopfzeile.
- 📋 Im Anfragen-Eingang steht in der Spalte „Eingereicht“ bei Anfragen, die nie eingereicht wurden (offen, verfallen, widerrufen), jetzt „–“ statt ihres Erstellungsdatums.

### Unter der Haube

- ⚙️ Die öffentlichen Seiten für Websites und Anfrage-Links sind als Ganzes auf Sicherheit geprüft: Fehlermeldungen auf einem Anfrage-Link nennen den Link nicht mehr und werden wie alle öffentlichen Antworten nie zwischengespeichert. Die Betriebsdokumentation beschreibt jetzt, was der Reverse Proxy für Einbettungen und Anfrage-Links beachten muss (keine eigenen Rahmen-Header, Anfrage-Links nicht ins Zugriffsprotokoll) und wie lange Anfragedaten aufbewahrt werden.
- ⚙️ Die Demo-Daten enthalten jetzt zwei Einbettungen samt erlaubter Website, ein nicht online sichtbares Material, öffentliche Parameter und Buchungsanfragen in jedem Stand; ein neuer Ende-zu-Ende-Test geht von einer fremden Website über die Anfrage per E-Mail-Link bis zur Übernahme als Entwurf.
- 📋 Grundlage für Buchungsanfragen über die Website: Speicherung, Fristen und Löschung – eine Anfrage ist noch keine Buchung und belegt kein Material; nicht übernommene Anfragen verschwinden nach 90 Tagen, übernommene verlieren nach 30 Tagen die persönlichen Angaben, und beim Anonymisieren eines Kontakts gehen seine Anfragen mit.
- 📦 Die Materialübersicht für fremde Websites ist jetzt fertig gestaltet: Besucher sehen Karten mit Bild, Preisen und Bestand, können nach Name, Kategorie und Zeitraum filtern, sehen dann die Verfügbarkeit, und öffnen zu jedem Material eine Detailseite mit Bildern, Eigenschaften und Set-Inhalt; die Seiten passen ihre Höhe an die Website an und folgen wahlweise dem hellen oder dunklen Erscheinungsbild.
- 📦 Der Server liefert jetzt den Materialbestand einer Einbettung für fremde Websites aus, ohne Anmeldung: nur aktive, online sichtbare Materialien im Umfang der Einbettung, mit öffentlichen Parametern, Bildern, Preisen, Bestand und – bei gewähltem Zeitraum – Verfügbarkeit; Standort, Einheiten-Bezeichnungen und interne Parameter erscheinen nie. Die Anzeige auf der Website selbst folgt in einem späteren Schritt.
- 📦 Vorbereitung für die Verfügbarkeitsanzeige auf der Website: Die Anwendung kann intern für ein Material und eine gewünschte Menge sagen, ob es im Zeitraum verfügbar, voraussichtlich nicht verfügbar oder nicht verfügbar ist.
- ⚙️ Der Server kann jetzt Seiten für fremde Websites ausliefern: Administratoren können Einbettungen anlegen und festlegen, welche Websites sie einrahmen dürfen, und die Anwendung selbst lässt sich weiterhin nirgends einrahmen; eine Kategorie, die eine Einbettung verwendet, lässt sich nicht mehr löschen.

## Version 1.1.0 (30.09.2026)

### Verbesserungen

- 📋 In der Buchungsübersicht steht bei internen Buchungen die Organisation des Ausleihers in Klammern hinter dem Namen.
- 📋 Eine Sperre heißt im Detail jetzt „Sperre Nr. …“, und eine leere Bemerkung wird in der Buchung nicht mehr angezeigt.
- 📋 Das Feld „Zusätzliche Benachrichtigungsempfänger“ zeigt beim Anlegen einer Buchung ein Beispiel.
- 👤 Nach dem Anlegen eines Kontakts erscheint die Bestätigung als grüne Erfolgsmeldung statt in Rot.
- 📋 Die Startseite zeigt jetzt nur noch Buchungen mit offener Aufgabe (Entwurf, Genehmigt, Abgeholt) samt Überfälligen und Konflikten, hat direkte Knöpfe zum Anlegen von Buchung und Material und verweist auf die vollständige Buchungsliste.
- 📋 In der Buchungsübersicht gibt es einen Filter nur für Sperren (Schloss-Symbol), und ein Klick auf „Sperre“, „intern“ oder „extern“ in der Zeile filtert auf diesen Tarif.
- 📦 Auf der Startseite steht unter den Buchungen eine Tabelle „Material ohne Bestand“, damit Fehlbestände sofort auffallen.
- 📋 Eine Buchung, deren Material eine andere, bereits markierte Buchung braucht, zeigt jetzt einen Hinweis mit Links auf diese Buchungen (in der Übersicht als „Beansprucht“). Wird eine Buchung trotz Konflikt genehmigt, erfährt die betroffene Sachbearbeitung das per E-Mail bzw. Webhook.

### Fehlerbehebungen

- 📋 „Ausstehende Abholung“ in der Buchungsübersicht zeigt keine Sperren mehr, weil für eine Sperre nie etwas abgeholt wird.
- 📋 Bei einer stornierten Buchung lassen sich Betrag und Bezahlstatus nicht mehr ändern; die bisherigen Angaben bleiben sichtbar.
- 📋 Die Konflikt-Meldung in der Buchung nennt jetzt getrennt, wie viel diese Buchung braucht, wie viel im Bestand ist und wie viel im Zeitraum frei ist (statt einer falschen Summe wie „4 von 9"); vorgemerkte Entwürfe anderer Buchungen stehen gesondert.

## Version 1.0.0 (28.09.2026)

### Verbesserungen

- 📋 Beim Anlegen und Bearbeiten einer Buchung zeigt jede Position jetzt, wie viel vom Material im gewählten Zeitraum noch frei ist, warnt bei Übernachfrage, und bei Einzeleinheiten sind bereits belegte Einheiten in der Auswahl entsprechend gekennzeichnet.
- 📋 Von einer Kontakt- oder Materialseite aus lässt sich jetzt direkt eine neue Buchung mit vorausgefülltem Kontakt bzw. Material anlegen.
- 📋 Beim Anlegen einer Buchung lassen sich jetzt zusätzliche Empfängerinnen und Empfänger für Benachrichtigungen angeben.
- 🖥️ Bestand, Buchungen und Kontakte filtern jetzt über dieselbe Filterleiste, der Buchungsstatus steht in der Liste als beschrifteter Text statt nur als Symbol, und die Bezahlung einer Buchung ist deutlich als sofort speichernde Sonderaktion gekennzeichnet.
- ⚙️ Neue Konten sehen erst etwas, wenn ein Admin eine Rolle vergibt.

### Fehlerbehebungen

- 📋 Eine neu angelegte Sperre lässt sich jetzt wie vorgesehen genehmigen – der Knopf dafür fehlte.
- 🖥️ Im Kalender lassen sich Monat und Jahr jetzt direkt auswählen statt sich nur Monat für Monat vorzuklicken, die Änderungshistorie zeigt Einträge jetzt zuverlässig in der Reihenfolge, in der sie entstanden sind, und mehrere kleine Darstellungsfehler bei schmalem Bildschirm sind behoben.

### Unter der Haube

- ⚙️ Alle Umgebungsvariablen tragen jetzt einheitlich das Präfix `KRAMR_` und sind nach Bereichen benannt; für den Betrieb gibt es eine eigene, sichere Vorlage sowie eine durchgehende Installationsanleitung. **Vor dem Update die `.env` und die Crontab-Zeile der Datensicherung nach der Betreiber-Dokumentation (Seite „Umgebungsvariablen“) umstellen** – die alten Variablennamen werden weder gelesen noch gemeldet, und `KRAMR_SERVER_PUBLIC_URL` muss im Docker-Stack jetzt gesetzt sein.
- 🖥️ Wenn eine Seite nicht geladen werden kann, lässt sie sich jetzt direkt über „Erneut versuchen“ neu laden, ohne die ganze Seite neu zu öffnen.
- ⚙️ Ein Release entsteht nur noch aus grüner CI, und der Sicherheitsscan des Images blockiert jetzt vor der Veröffentlichung statt nur zu warnen.

<!-- release-notes:end -->
