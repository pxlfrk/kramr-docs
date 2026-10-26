---
title: Neuigkeiten
description: Was sich in den Versionen von kramr für Anwender geändert hat.
audience: user
order: 80
---

# Neuigkeiten

Diese Seite führt die veröffentlichten Versionen ab 1.0 auf, die neueste zuerst.
Dieselbe Liste zeigt die Anwendung den Administratoren in den Einstellungen unter „Changelog“.

<!-- release-notes:start - generated from CHANGELOG.md, do not edit -->

## Version 1.8.0 (20.10.2026)

### Neue Funktionen

- ⚙️ Unter den Einstellungen gibt es die neue Seite „E-Mail-Texte“: Ein Administrator passt dort Betreff und Text der vier E-Mails an Anfragende an, je in einer Du- und einer Sie-Fassung, und sieht vorab, wie die E-Mail aussieht.
- ⚙️ Unter den Einstellungen pflegt ein Administrator jetzt die Datenschutzerklärung und bis zu vier weitere Links wie das Impressum; sie erscheinen als Fußzeile auf den Seiten für Buchungsanfragen und der Anmeldeseite sowie unter den E-Mails an Anfragende, und der Datenschutzhinweis beim Anfordern des Links verweist auf die Datenschutzerklärung.
- 📋 Zu einer genehmigten oder abgeholten Buchung und zu einer Sperre gibt es jetzt eine Packliste als PDF zum Drucken: mit Kästchen zum Abhaken beim Packen und bei der Übergabe, Spalten für den Zustand bei der Rückgabe und Feldern für die Unterschrift. Ein QR-Code auf jeder Seite öffnet die Buchung und zeigt, ob der Ausdruck noch aktuell ist.
- 📋 Eine falsch erfasste Rückgabe lässt sich einzeln korrigieren, auch während einer Teilrückgabe und nach der Rückgabe der ganzen Buchung; die Rückgabe-Ansicht trennt dazu „Offen“ und „Erfasst“, und bei einer zurückgegebenen Buchung führt „Rückgabe ansehen“ direkt dorthin.
- 📋 Ein Pflicht-Set lässt sich in einer bestehenden Buchung hinzufügen, entfernen und in der Menge ändern, solange nichts davon abgeholt ist; die Bestandteile folgen beim Speichern, und die Historie nennt sie mit ihrem Set.

### Fehlerbehebungen

- 📦 „Nur im Set buchbar“ gibt es nur noch bei den Bestandteilen eines Pflicht-Sets; bei einer losen Gruppe ist die Einstellung nicht mehr sichtbar, denn dort wäre der Bestandteil nirgends buchbar gewesen.
- 📦 Ein Material, das nur im Set buchbar ist, trägt jetzt das Badge „Nur im Set“, und die Karte „Bestandteil von“ nennt das Set dazu.
- 📋 Die Materialauswahl sperrt Material, das nur im Set buchbar ist, mit diesem Grund; eine trotzdem abgelehnte Position meldet es auf Deutsch.
- 📋 Lose Sets sehen in der Buchung jetzt aus wie Pflicht-Sets, mit Set-Symbol und Kennzeichnung am Set selbst; in der Bearbeitung stehen die Mengen eines Sets und seiner Bestandteile in einer Spalte.
- 📋 Nach dem Bearbeiten einer Buchung stehen neu hinzugefügte Materialien, zum Beispiel die Bestandteile eines losen Sets, sofort mit Namen da und nicht erst nach einem Neuladen.
- 📋 Scheitert das Abholen, weil Material nicht im Lager ist, nennt die Meldung jetzt das Material, den Bestand und die Buchung, in der es noch ausgeliehen ist.
- 📋 In der Buchung steht an einer offenen Position schon vor dem Abholen, wenn das Material noch in einer anderen Buchung ausgeliehen ist oder der Bestand nicht reicht.
- 📋 Die Historie einer Buchung nennt bei jeder erfassten oder zurückgenommenen Rückgabe das Material, das verloren, beschädigt oder in Ordnung zurückkam.
- 📋 Beim Bearbeiten einer Buchung steht bei archiviertem Material wieder der Name, und archiviertes Material lässt sich nicht mehr abholen; der Konflikt nennt archiviertes Material jetzt als Ursache.

### Verbesserungen

- ⚙️ Die Einstellungen sind auf eigene Seiten verteilt – Auftritt, Recht & Datenschutz, Benachrichtigungen, Externe Kalender und Version & Updates – in den Verwaltungsgruppen „Organisation“ und „System“, und jede Seite speichert nur ihre eigenen Felder; auf schmalen Bildschirmen steht die Navigation der Verwaltung als Leiste über dem Inhalt.
- 📋 Ändert man in einer Buchung die Menge eines losen Sets, bietet die Zeile „Bestandteile anpassen“ an: Die Mengen der Bestandteile folgen auf Knopfdruck, und ein Hinweis nennt, was sich geändert hat. Das gilt beim Anlegen und beim Bearbeiten.

## Version 1.7.1 (16.10.2026)

### Verbesserungen

- 📦 Ein Material zeigt jetzt, in welchen Sets es Bestandteil ist: als Badge „In n Sets“ in der Bestandsübersicht, das die Sets aufklappt, und als Karte „Bestandteil von“ im Materialdetail.
- 📦 Archivierst du ein Material, das Bestandteil aktiver Sets ist, fragt kramr vorher nach und nennt die Sets – auch in der Sammelbearbeitung; gesperrt ist nichts.
- 📋 Bestandteile, die mit einem losen Set ausgewählt wurden, stehen in Buchung, Rückgabe, Übersicht, Kalender und Anfrage eingerückt unter ihrem Set, und beim Entfernen des Sets fragt kramr, ob sie mit entfernt werden sollen.
- 📋 Die Materialauswahl der Buchungsanfrage hat den Knopf „Bestandteile mit auswählen“ für lose Sets.
- 📋 In der Materialauswahl einer Buchung und einer Buchungsanfrage zeigt „Nur Ausgewählte“ jetzt auch das Material, das schon in der Buchung bzw. Anfrage steht.
- 📋 Die Materialauswahl der Buchungsanfrage hat den Schalter „Bilder anzeigen“, mit dem sich die Bilder ausblenden lassen.
- 📋 Bei Material mit Einzeleinheiten können Anfragende die Einheiten jetzt selbst wählen: schon im Materialdetail der Einbettung und in der Materialauswahl der Anfrage, mit dem Zustand jeder Einheit im gewählten Zeitraum. Die Geschäftsstelle sieht die gewählten Einheiten in der Anfrage und übernimmt sie in die Buchung.

### Fehlerbehebungen

- 🖥️ Ein geöffneter Auswahldialog hat nur noch eine Rollleiste; die Seite dahinter rollt nicht mehr mit.

## Version 1.7.0 (14.10.2026)

### Neue Funktionen

- 🖥️ In der Kopfzeile sucht ein Suchfeld (Strg + K) in Buchungen, Material und Kontakten zugleich und springt mit einem Treffer direkt auf die Buchung, das Material oder den Kontakt.

### Verbesserungen

- 📋 In der Materialauswahl einer Buchung nimmt der Button „Bestandteile mit auswählen“ an einem angehakten losen Set dessen Bestandteile mit - was übersprungen wurde, steht mit Grund darunter.
- 📋 Administratoren können eine Buchung oder Sperre archivieren, statt sie zu löschen: Sie verschwindet aus Listen, Kalender und Auswertung, belegt kein Material mehr und lässt sich über „Archivierte anzeigen“ wiederfinden und reaktivieren.

### Unter der Haube

- 📋 Die Buchungsübersicht prüft Konflikte für alle Zeilen gemeinsam und bleibt dadurch auch mit vielen Buchungen zügig.

## Version 1.6.0 (12.10.2026)

### Neue Funktionen

- 📦 Die Bestandsübersicht lässt sich neben der Tabelle als Raster aus Karten mit Titelbild anzeigen, wobei Suche, Filter und Sortierung bleiben und die Kartengröße im Menü „Ansicht“ gewählt wird.
- 📦 In der Bestandsübersicht lassen sich über „Ansicht“ die Parameter eines Materials als zusätzliche Spalten einblenden, angeboten werden die Parameter der gewählten Kategorie oder ohne Kategorie alle.
- 📦 In der Bestandsübersicht lassen sich mehrere angehakte Materialien auf einmal in eine andere Kategorie oder an einen anderen Lagerort legen, online ein- oder ausblenden, für Personenkreise verleihbar oder nicht verleihbar machen sowie archivieren und reaktivieren.
- 📦 Neu ist die Auswertung der Nutzung: Sie zeigt je Material, wie oft und wie lange es im gewählten Zeitraum verliehen war, wie stark es ausgelastet war, wann es zuletzt verliehen wurde und wie oft es beschädigt oder verloren zurückkam.
- 📦 Die Auswertung der Nutzung öffnet sich in der Bestandsübersicht unter „Weitere Aktionen“, steht je Material im Abschnitt „Nutzung“ (bei Einzelmaterial je Einheit) und lässt sich als CSV herunterladen.

### Verbesserungen

- 📦 Bei Sammelaktionen fragt die Anwendung vorher mit den betroffenen Materialien nach, wenn dabei ein Wert verloren geht, und speichert nichts, sobald ein Material gegen eine Regel verstößt.
- 📦 Die Bestandsübersicht bietet im Menü „Weitere Aktionen“ jetzt „Bestand exportieren (CSV)“, die Datei enthält alle Materialien samt archivierter, öffnet sich in Excel mit richtigen Umlauten und steht auch Nutzern mit der Rolle „Nur-Lesen“ zur Verfügung.
- 📦 Im Material-Formular stehen „Online sichtbar“, die Verleihbarkeit und die Preise jetzt gemeinsam in der Karte „Verfügbarkeit und Preis“, die Kontrollkästchen sind zu Schaltern geworden, und ein kostenloser Tarif zeigt im Preisfeld „kostenlos“.
- 📋 Material kommt in eine Buchung oder Sperre jetzt über den Dialog „Material hinzufügen“, in dem sich mit Suche, Filtern nach Kategorie und Standort, freier Menge im Zeitraum und optionalen Titelbildern mehrere Materialien, Mengen und Einheiten in einem Schritt übernehmen lassen.
- 📋 Der Dialog „Material hinzufügen“ lässt sich bedienen, sobald Abhol- und Rückgabetermin eingetragen sind.
- 📋 In der Buchungsanfrage lassen sich im Dialog „Material hinzufügen“ mehrere Materialien ankreuzen, die Menge steht gleich in der Zeile, und ist mehr gewünscht als im Zeitraum frei, weist die Zeile darauf hin.
- 📋 Die Bestandteile eines Pflicht-Sets stehen in einer Buchung jetzt in einem Streifen unter der Position, statt eine Zeile je Bestandteil zu belegen.
- 📋 Im Buchungsdetail legt „Duplizieren“ aus einer Ausleihe oder Sperre eine neue an, in der Ausleiher, Verleihart, Material und zusätzliche Empfänger schon eingetragen sind und nur der Zeitraum neu gewählt wird.
- 📋 Beim Duplizieren fehlt Material, das nicht mehr buchbar ist, und wird über dem Formular genannt, und die Historie der neuen Buchung verweist auf das Original.
- 📋 Ist der Ausleiher noch kein Kontakt, lässt er sich im Feld „Ausleiher“ über „Kontakt anlegen“ anlegen, ohne die Buchung zu verlassen, und bei gleicher E-Mail-Adresse weist die Anwendung auf den vorhandenen Kontakt hin.
- 📋 Beim Anlegen und Bearbeiten einer Buchung oder Sperre zeigt das Rückgabedatum zunächst den Abholtag, die Uhrzeit wird selbst gewählt, und ein schon gesetzter Rückgabetermin bleibt unberührt.
- 📋 Wer eine Zahlung erlässt, muss jetzt einen Grund angeben, der in der Bezahlung der Buchung und in der Historie steht.
- ⚙️ Administratoren können in den Einstellungen externe Kalender als ICS-Adresse (iCal) einbinden, deren Termine im Buchungskalender nur lesend als Hinweis mit Kalender-Symbol erscheinen, kein Material blockieren und sich im Kalendermenü pro Kalender ein- und ausblenden lassen.
- ⚙️ Benachrichtigungen führen mit einem Klick zur Buchung: Der Webhook-Text endet mit der Adresse der Buchung, und die E-Mails an die Sachbearbeitung haben die Schaltfläche „Buchung öffnen“.
- ⚙️ Die Meldung über einen Konflikt nach einer Bestandsminderung geht jetzt auch an den Webhook.
- ⚙️ In der Nutzerverwaltung bleibt „Als Kontakt anlegen“ auf einem Tablet eine Schaltfläche mit Symbol, und Rollenauswahl, Name und E-Mail-Adresse bleiben lesbar.
- 🖥️ Die Auswahllisten der Filter zeigen ihren Pfeil jetzt einheitlich rechts und in derselben Stärke wie der Zeitraum-Filter.

### Fehlerbehebungen

- 📦 Werden mehr Stück als verloren oder beschädigt zurückgegeben, als im Bestand sind, geht der Bestand auf 0 und die Rückgabe bleibt gespeichert, die Historie nennt den Fehlbetrag, und das Zurücksetzen der Rückgabe gibt nur zurück, was abgezogen wurde.
- 📦 Eine Einheit, die schon vor einer Rückgabe archiviert war, bleibt auch nach dem Zurücksetzen der Rückgabe archiviert.
- 📦 Ein Material, das sich während des Bearbeitens geändert hat, etwa durch eine Rückgabe, lässt sich nicht mehr mit einer veralteten Bearbeitungsansicht überschreiben, stattdessen lädt die Seite neu und weist darauf hin.
- 📦 Ein Preis von 0 gilt jetzt überall als kostenlos, genau wie ein leeres Preisfeld, sodass Anzeige und der Filter „kostenpflichtig“ nicht mehr auseinanderlaufen, und bereits gespeicherte Preise von 0 werden auf „kostenlos“ umgestellt.
- 📋 Werden zwei sich überschneidende Buchungsentwürfe gleichzeitig genehmigt, fragt die Anwendung bei der zweiten Genehmigung nach „Trotzdem genehmigen“, statt beide stillschweigend zu genehmigen.
- 📋 Die Abholung lässt sich nicht mehr zurücknehmen, sobald für die Buchung eine Rückgabe erfasst wurde.
- 📋 Holen zwei Personen gleichzeitig Positionen derselben Buchung ab, bleibt keine Abholung mehr halb gespeichert und ohne Eintrag in der Historie.
- 📋 Das Feld „Einheit“ einer Position in der Buchung ist breiter, sodass auch längere Bezeichnungen vollständig lesbar sind.

### Unter der Haube

- 📦 Im CSV-Export werden jetzt auch Felder entschärft, die mit einem Zeilenumbruch oder mit Leerzeichen vor einem Formelzeichen beginnen.
- 📋 Die E-Mail mit dem Link zur Buchungsanfrage grüßt jetzt ohne Namen, damit kein frei in das öffentliche Formular getippter Text unter dem Absender der Organisation an eine unbestätigte Adresse geht, die E-Mails zu Übernahme und Ablehnung nennen den Namen weiterhin.
- 📋 Eine Menge über 999.999 Stück in einer Buchungsposition oder Rückgabe wird mit einer klaren Fehlermeldung abgelehnt, statt einen Serverfehler auszulösen.
- 👤 Die Kontaktlisten liefern nur noch die Spalten der Liste, Geburtsdatum und Adresse werden erst beim Öffnen eines Kontakts geladen.
- ⚙️ Änderungen an den Einstellungen, etwa an der Webhook-Adresse, werden jetzt im Änderungsprotokoll festgehalten.
- ⚙️ E-Mails gehen nur noch verschlüsselt an den Mailserver, und wer einen internen Mailserver ohne Verschlüsselung nutzt, muss das ausdrücklich abschalten (Betreiber-Dokumentation: Benachrichtigungen, „Verschlüsselte Verbindung“).
- ⚙️ Die Webhook-Adresse und die Adressen externer Kalender lehnen beim Speichern jetzt weitere interne Adressbereiche ab, und für ein Webhook-Ziel in einem solchen Bereich ist eine ausdrückliche Freigabe nötig (Betreiber-Dokumentation: Sicherheit, „Webhooks und ausgehende Verbindungen“).
- ⚙️ Schreibende Anfragen, die ein Browser von einer fremden Seite aus an die Anwendung schickt, werden jetzt abgewiesen, wobei die Einbettung für die Website ausgenommen ist und der Reverse Proxy dafür richtig eingerichtet sein muss (Betreiber-Dokumentation: Sicherheit, „Herkunft schreibender Anfragen“).
- ⚙️ Das Anfrage-Limit lässt sich nicht mehr durch wechselnde IPv6-Adressen umgehen, und eine Abweisung wird nur noch einmal je Adresse und Zeitfenster protokolliert.
- ⚙️ Bei einem Datenbankfehler schreibt die Anwendung nur noch Fehlercode, Einschränkung und Tabelle ins Protokoll, nicht mehr die Werte, die der Fehler enthalten kann, auch beim Anlegen und Freigeben einer Buchung, bei der Konfliktprüfung und bei Fehlern der Aufgabenplanung.
- ⚙️ Eine endgültig gescheiterte E-Mail nennt im Protokoll die Empfängeradresse nicht mehr.
- 🖥️ Jede Anfrage trägt jetzt eine Kennung, die in Fehlermeldungen und im Protokoll des Servers wiederkehrt, sodass sich ein gemeldeter Fehler leichter nachvollziehen lässt.

## Version 1.5.1 (07.10.2026)

### Verbesserungen

- 📋 Sperren können einen Titel tragen, der in der Buchungsübersicht, im Kalender und in der Buchung anstelle des Ausleihers steht und in der Suche gefunden wird.
- 📋 Der Schloss-Filter in der Buchungsübersicht kann Sperren jetzt auch ausblenden: ein Klick zeigt nur Sperren, ein zweiter blendet sie aus, ein dritter hebt den Filter auf.

### Fehlerbehebungen

- 📋 Sperren gelten nach ihrem Ende nicht mehr als überfällig, lösen keine Erinnerung „Überfällige Rückgabe“ mehr aus, und genehmigte Sperren mit abgelaufenem Zeitraum stehen nicht mehr im Arbeitsvorrat der Startseite.
- 📋 Eine Buchung lässt sich nicht mehr abholen, wenn weniger Stück im Lager sind als gebucht (zum Beispiel nach einer verlorenen oder beschädigten Rückgabe); der Hinweis nennt, wie sich das lösen lässt.
- 👤 In der Nutzerverwaltung entfällt „Als Kontakt anlegen“, wenn es für das Konto schon einen Kontakt der eigenen Organisation gibt.

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
