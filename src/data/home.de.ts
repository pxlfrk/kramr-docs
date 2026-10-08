/**
 * All texts of the landing page. Components render this data and
 * contain no wording of their own, so the page can be reworded, or later
 * translated, without touching markup.
 *
 * The sample data in the tags and the history is made up. The screenshots
 * come from the demo data of the application (`npm run seed:demo`).
 */

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export interface Feature {
  id: string;
  /** An emphasised feature shown above the points. */
  focus?: { title: string; description: string };
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  more: Link;
}

export interface Step {
  label: string;
  title: string;
  description: string;
}

/** A button of the closing call to action; without `href` it is disabled. */
export interface CtaAction {
  label: string;
  href?: string;
  note?: string;
}

export interface Doc extends Link {
  icon: string;
  kicker: string;
  title: string;
  description: string;
}

export const home = {
  title: 'Materialverleih ohne Zettelwirtschaft',
  hero: {
    eyebrow: 'Materialverleih für Jugendverbände und Vereine',
    lead: 'Wer hat gerade',
    // The line grammatically needs the article, so every entry carries it.
    words: [
      'das Zelt',
      'den Beamer',
      'den Bollerwagen',
      'die Biertischgarnitur',
      'den Gaskocher',
      'das Volleyballnetz',
      'die Hüpfburg',
      'das Megafon',
      'den Anhänger',
    ],
    description:
      'kramr weiß es. Bestand, Buchungen, Abholung und Rückgabe an einem Ort – ohne Tabellen, ohne doppelt vergebenes Material, ohne Zettelwirtschaft.',
    actions: [
      { label: 'Anwender-Handbuch', href: '/docs/user/getting-started/', primary: true },
      { label: 'Betreiber-Guide', href: '/docs/admin/installation/', primary: false },
    ],
    tags: [
      {
        number: 'Nr. 0042',
        name: 'Zelt',
        status: 'Entwurf',
        tone: 'draft',
        when: '12.07. – 19.07.',
        tilt: -1.5,
      },
      {
        number: 'Nr. 0017',
        name: 'Bollerwagen',
        status: 'Genehmigt',
        tone: 'approved',
        when: '07.07. – 12.07.',
        tilt: 1,
      },
      {
        number: 'Nr. 0008',
        name: 'Beamer',
        status: 'Abgeholt',
        tone: 'pickedUp',
        when: '10.07. – 14.07.',
        tilt: -0.5,
      },
      {
        number: 'Nr. 0031',
        name: 'Gaskocher',
        status: 'Zurückgegeben',
        tone: 'returned',
        when: '01.07. – 03.07.',
        tilt: 1.5,
      },
    ],
  },
  facts: [
    'MIT-Lizenz',
    'Docker Compose + PostgreSQL',
    'Single Sign-on (OIDC)',
    'Eigener Server, eigene Daten',
    'Skalierbar',
  ],
  features: [
    {
      id: 'anfragen',
      eyebrow: '01 · Anfragen per Link',
      title: 'Anfrage per Link statt Mailpingpong.',
      description:
        'Wer ausleihen möchte, bekommt einen persönlichen Link per E-Mail. Damit stellt sie oder er die Anfrage in Ruhe zusammen, speichert sie und reicht sie ein. Ihr prüft – und übernehmt sie als Entwurf.',
      points: [
        'Kein Konto nötig, nur eine E-Mail-Adresse.',
        'Zwischenstand speichern und später weitermachen.',
        'Ablehnen nur mit Begründung – nachvollziehbar für beide Seiten.',
      ],
      more: {
        label: 'Buchungsanfragen im Handbuch',
        href: '/docs/user/features/#buchungsanfragen-von-websites',
      },
    },
    {
      id: 'einbettung',
      focus: {
        title: 'Kategorienfilter',
        description:
          'Besucher grenzen die Materialliste nach Kategorie ein und finden auch bei einem großen Bestand sofort, was sie suchen.',
      },
      eyebrow: '02 · Einbettung',
      title: 'Die Materialliste auf eurer Website.',
      description:
        'Die Einbettung auf eurer Seite zeigt, was ihr verleiht – mit Fotos, Kategorien und Suche. Besucher fragen direkt von dort an. Pflegen müsst ihr nichts doppelt.',
      points: [
        'Läuft in jeder Seite, auch im Baukasten oder WordPress.',
        'Hinweis, wenn Material nur für intern oder nur für extern gedacht ist.',
        'Nur erlaubte Webseiten dürfen einbetten – das legt ihr selbst fest.',
      ],
      more: {
        label: 'Einbettung einrichten',
        href: '/docs/admin/installation/reverse-proxy/#einbettungen',
      },
    },
    {
      id: 'bestand',
      eyebrow: '03 · Bestand',
      title: 'Jedes Zelt hat einen Namen. Jedes Feldbett eine Zahl.',
      description:
        'Menge oder Einzelstück, Sets mit Zubehör, Fotos, Eigenschaften. Material wird nie gelöscht, nur archiviert – die Historie bleibt heil.',
      points: [
        'Pflichtsets buchen alle Teile automatisch mit.',
        'Suche findet auch bei Umlauten und Tippfehlern.',
        'Import per CSV, wenn schon eine Liste existiert.',
      ],
      more: { label: 'Material und Sets im Handbuch', href: '/docs/user/features/#material' },
    },
    {
      id: 'uebersicht',
      eyebrow: '04 · Übersicht',
      title: 'Überschneidungen sehen, bevor sie Ärger machen.',
      description:
        'Liste und Kalender zeigen, was wann wo ist. Reicht der Bestand nicht, markiert kramr den Konflikt – als Hinweis, nicht als Sperre. Genehmigen könnt ihr trotzdem, wenn ihr das bewusst bestätigt.',
      points: [
        'Eine Rechenregel für Liste, Kalender und Anfrage – kein Widerspruch.',
        'Sperren für Wartung oder Eigennutzung.',
      ],
      more: { label: 'Kalenderansicht im Handbuch', href: '/docs/user/calendar/' },
    },
  ] satisfies Feature[],
  embed: {
    url: 'jugendwerk-beispielstadt.de/verleih',
    site: 'Jugendwerk Beispielstadt',
    tagline: 'Gruppen · Lager · Verleih',
    badge: 'kramr-Einbettung',
    filter: { search: 'Name oder Beschreibung', category: 'Alle Kategorien', period: 'Zeitraum' },
    items: [
      { name: 'Zelt 4-Personen', meta: '6 verfügbar', note: 'Für alle', tone: 'green' },
      { name: 'Beamer', meta: 'Nr. 0008', note: 'Nur intern', tone: 'mustard' },
      { name: 'Bollerwagen', meta: 'Nr. 0017', note: 'Für alle', tone: 'rose' },
    ],
  },
  email: {
    from: 'Von: Jugendwerk Beispielstadt',
    subject: 'Deine Anfrage bei uns',
    body: 'Hallo Anna, hier kannst du dein Material zusammenstellen.',
    button: 'Anfrage öffnen',
  },
  flow: {
    id: 'ablauf',
    eyebrow: '05 · Ablauf',
    title: 'Vom Entwurf bis zum letzten Kochtopf.',
    description:
      'Vier Stationen, jede nachvollziehbar. Verklickt? Jeder Schritt lässt sich einen Schritt zurücknehmen – und steht in der Historie.',
    steps: [
      {
        label: '01 / Entwurf',
        title: 'Vormerken',
        description:
          'Anfrage oder interne Buchung. Reserviert noch keinen Bestand, zeigt aber Konflikte.',
      },
      {
        label: '02 / Genehmigt',
        title: 'Freigeben',
        description: 'Ab jetzt zählt die Menge als belegt. Konflikte bestätigt ihr bewusst.',
      },
      {
        label: '03 / Abgeholt',
        title: 'Herausgeben',
        description: 'Auch teilweise abholen ist möglich. Das Material ist unterwegs.',
      },
      {
        label: '04 / Zurück',
        title: 'Zurücknehmen',
        description: 'Zustand je Position, mit Vermerk. Beschädigtes mindert den Bestand.',
      },
    ] satisfies Step[],
    returns: {
      eyebrow: 'Rückgabe',
      title: 'Position für Position, auch über mehrere Tage.',
      description:
        '10 Stück zurück, 1 beschädigt, 1 verloren – jede Zeile mit eigenem Vermerk. Beschädigtes und Verlorenes mindert den Bestand, die Historie merkt es sich.',
      states: [
        { label: '10 in Ordnung', tone: 'ok' },
        { label: '1 beschädigt', tone: 'damaged' },
        { label: '1 verloren', tone: 'lost' },
      ],
      more: { label: 'Abholung und Rückgabe im Handbuch', href: '/docs/user/pickup-and-return/' },
    },
  },
  history: {
    id: 'datenschutz',
    eyebrow: 'Historie · Privacy by Design',
    title: 'Wer hatte wann welches Material? Nachlesbar.',
    description:
      'Jede Buchung und jede Änderung bleibt in der Historie. So klärt ihr Fragen zu Schäden, Verlusten und Zuständigkeiten, ohne in Chats oder Tabellen zu suchen. Und das mit Blick auf den Datenschutz: kramr ist von Anfang an auf Datensparsamkeit gebaut, mit Abläufen, die die Anforderungen der DSGVO berücksichtigen.',
    points: [
      'Es werden nur die Daten erhoben und gespeichert, die für den Ablauf nötig sind.',
      'Anonymisieren statt Löschen: Personendaten verschwinden, die Historie bleibt stimmig.',
      'Eigener Server, Single Sign-on und abgestufte Rechte: Zugriff nur für die, die ihn brauchen.',
    ],
    more: { label: 'Kontakte anonymisieren', href: '/docs/user/anonymisation/' },
    moreAdmin: { label: 'Datenschutz für Betreiber', href: '/docs/admin/datenschutz/' },
    item: {
      name: 'Feldbett',
      meta: 'Kategorie Lager · Menge · Bestand 23 Stück',
      url: 'kramr / Bestand / Feldbett · Historie',
    },
    entries: [
      {
        date: '12.10.2026',
        title: 'Rückgabe erfasst',
        booking: 'B26-12',
        tone: 'damaged',
        state: 'Beschädigt',
        note: '8 in Ordnung, 1 beschädigt · Vermerk: Reißverschluss defekt · von Mara W.',
      },
      {
        date: '12.10.2026',
        title: 'Bestand verringert',
        booking: 'B26-12',
        tone: 'stock',
        state: '',
        note: '−1 (jetzt 23) – durch die Rückgabe, automatisch',
      },
      {
        date: '12.10.2026',
        title: 'Status geändert',
        booking: 'B26-12',
        tone: 'returned',
        state: 'Zurückgegeben',
        note: 'Abgeholt → Zurückgegeben · von Mara W.',
      },
      {
        date: '07.10.2026',
        title: 'Aus einer Buchungsanfrage übernommen',
        booking: 'B26-12',
        tone: 'draft',
        state: 'Entwurf',
        note: 'Anfrage per Link, übernommen von Mara W.',
      },
      {
        date: '14.07.2026',
        title: 'Rückgabe erfasst',
        booking: 'B26-3',
        tone: 'ok',
        state: 'In Ordnung',
        note: 'Eva F. · anonymisiert, die Buchung bleibt',
      },
    ],
  },
  extras: {
    title: 'Der Rest, den ein Verleih braucht.',
    items: [
      {
        icon: 'lucide:bell',
        title: 'Erinnerungen',
        description:
          'Vor der Abholung und bei Überfälligem. Per E-Mail oder Webhook, einmal am Morgen.',
      },
      {
        icon: 'lucide:shield-check',
        title: 'Single Sign-on und Rollen',
        description:
          'Anmeldung über euren Single-Sign-on-Anbieter (OIDC), mit abgestuften Rechten.',
      },
      {
        icon: 'lucide:table-properties',
        title: 'Preise und Tarife',
        description: 'Intern, extern oder Eigennutzung – kramr rechnet, ihr entscheidet.',
      },
    ],
  },
  nots: {
    eyebrow: 'Ehrlich gesagt',
    title: 'Was kramr bewusst nicht ist.',
    items: [
      {
        head: 'Kein Abo, kein Anbieter.',
        text: 'kramr ist freie Software. Ihr betreibt sie selbst und entscheidet, wann ihr aktualisiert.',
      },
      {
        head: 'Keine Abhängigkeit.',
        text: 'Eure Daten liegen auf eurem Server, in einer ganz normalen PostgreSQL-Datenbank.',
      },
      {
        head: 'Keine Zahlungsabwicklung.',
        text: 'kramr berechnet den Tarif, ihr kassiert wie bisher.',
      },
    ],
  },
  docs: {
    id: 'dokumentation',
    eyebrow: 'Dokumentation',
    title: 'Je nachdem, wo ihr steht.',
    items: [
      {
        icon: 'lucide:users',
        kicker: 'Anwender',
        title: 'Anwender-Handbuch',
        description: 'Anmelden, Material buchen, ausgeben, zurücknehmen.',
        label: 'Handbuch lesen',
        href: '/docs/user/getting-started/',
      },
      {
        icon: 'lucide:server',
        kicker: 'Betreiber',
        title: 'Betreiber-Guide',
        description: 'Installation, Single Sign-on, Backup, Updates und Betrieb.',
        label: 'Guide lesen',
        href: '/docs/admin/installation/',
      },
      {
        icon: 'lucide:code-xml',
        kicker: 'Schnittstelle',
        title: 'API-Referenz',
        description: 'Die öffentliche Schnittstelle, zum Beispiel für die Einbettung.',
        label: 'Referenz öffnen',
        href: '/api/',
      },
    ] satisfies Doc[],
  },
  cta: {
    title: 'Heute installiert, am Wochenende verliehen.',
    description:
      'Ein Server, Docker Compose, PostgreSQL. Der Betreiber-Guide führt durch jeden Schritt.',
    actions: [
      { label: 'Betreiber-Guide öffnen', href: '/docs/admin/installation/' },
      // The source code is not public yet, so the button is shown disabled.
      { label: 'Quellcode auf GitHub', note: '(soon)' },
    ] satisfies CtaAction[],
  },
} as const;
