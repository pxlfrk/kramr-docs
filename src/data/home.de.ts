/**
 * All texts of the landing page. Components render this data and
 * contain no wording of their own, so the page can be reworded, or later
 * translated, without touching markup.
 */

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Screenshot {
  /** Path below the site base, e.g. `/screenshots/uebersicht.png`. */
  src: string;
  alt: string;
  caption: string;
}

export interface Audience extends Link {
  icon: string;
  title: string;
  description: string;
}

const github = 'https://github.com/pxlfrk/kramr';

export const home = {
  title: 'Materialverleih ohne Zettelwirtschaft',
  hero: {
    eyebrow: 'Freie Software für Jugendverbände und Vereine',
    title: 'Wer hat das Zelt – und wann ist es wieder da?',
    description:
      'kramr verwaltet den Materialverleih eures Vereins: Bestand, Buchungen, Abholung und Rückgabe an einem Ort, nachvollziehbar und ohne doppelte Buchungen.',
    actions: [
      {
        label: 'Erste Schritte',
        href: '/docs/user/getting-started/',
        variant: 'solid',
        color: 'accent',
      },
      { label: 'Selbst betreiben', href: '/docs/admin/installation/', variant: 'outline' },
    ],
  },
  problem: {
    title: 'Das Problem',
    description:
      'Tabellen, Chatnachrichten und ein Ordner voller Zettel: Wer weiß, ob die Schlafsäcke nächstes Wochenende noch da sind? Doppelt vergebenes Material, vergessene Rückgaben und fehlende Übergaben kosten Zeit und Nerven.',
    points: [
      'Niemand sieht auf einen Blick, was frei ist.',
      'Zwei Gruppen planen mit demselben Zelt.',
      'Beschädigtes Material fällt erst beim nächsten Lager auf.',
    ],
  },
  features: {
    title: 'Funktionen',
    description: 'Alles, was ein Verleih im Alltag braucht – nicht mehr und nicht weniger.',
    items: [
      {
        icon: 'lucide:boxes',
        title: 'Material und Sets',
        description:
          'Mengen- oder Einzelmaterial, Kategorien, Eigenschaften und Fotos. Sets bündeln Zubehör, das zusammengehört.',
      },
      {
        icon: 'lucide:calendar-check',
        title: 'Buchungen mit Konfliktwarnung',
        description:
          'Von Entwurf über Genehmigung bis Rückgabe. Überschneidungen werden sichtbar, bevor sie zum Ärger werden.',
      },
      {
        icon: 'lucide:clipboard-check',
        title: 'Abholung und Rückgabe',
        description:
          'Je Position festhalten, was in Ordnung, beschädigt oder verloren ist – auch über mehrere Tage verteilt.',
      },
      {
        icon: 'lucide:users',
        title: 'Kontakte mit Datenschutz',
        description:
          'Personen, die ausleihen, lassen sich später anonymisieren; die Historie bleibt erhalten.',
      },
      {
        icon: 'lucide:bell',
        title: 'Erinnerungen',
        description:
          'Hinweise vor der Abholung und bei überfälligen Rückgaben, per E-Mail oder an einen Webhook.',
      },
      {
        icon: 'lucide:globe',
        title: 'Anfragen von eurer Website',
        description:
          'Besucher sehen die Materialliste und stellen eine Anfrage; ihr prüft und übernehmt sie als Entwurf.',
      },
    ] satisfies Feature[],
  },
  how: {
    title: 'So funktioniert es',
    description: 'Vom Wunsch bis zur Rückgabe in vier Schritten.',
    steps: [
      {
        title: 'Material erfassen',
        description: 'Bestand anlegen, einordnen und mit Fotos versehen.',
      },
      { title: 'Buchen', description: 'Zeitraum und Material wählen; Konflikte werden angezeigt.' },
      { title: 'Abholen', description: 'Die Genehmigung ist erteilt, das Material geht raus.' },
      {
        title: 'Zurücknehmen',
        description: 'Zustand je Position festhalten – fertig, und alles ist in der Historie.',
      },
    ] satisfies Step[],
  },
  screenshots: {
    title: 'So sieht es aus',
    description: 'Ansichten der Anwendung mit Beispieldaten.',
    // Taken from the demo data with the running application (skill kramr-run);
    // the section is hidden while the list is empty.
    items: [] as Screenshot[],
  },
  docs: {
    title: 'Dokumentation',
    description: 'Je nachdem, was ihr mit kramr vorhabt.',
    audiences: [
      {
        icon: 'lucide:users',
        title: 'Für Anwender',
        description: 'Anmelden, Material buchen, ausgeben und zurücknehmen.',
        label: 'Zur Anwenderdokumentation',
        href: '/docs/user/getting-started/',
      },
      {
        icon: 'lucide:server',
        title: 'Für Betreiber',
        description: 'Installation, Anmeldung, Backup, Updates und Betrieb.',
        label: 'Zur Betreiberdokumentation',
        href: '/docs/admin/installation/',
      },
      {
        icon: 'lucide:code-xml',
        title: 'API-Referenz',
        description: 'Die öffentlichen Schnittstellen, zum Beispiel für die Einbettung.',
        label: 'Zur API-Referenz',
        href: '/api/',
      },
    ] satisfies Audience[],
  },
  community: {
    title: 'Mitmachen',
    description:
      'kramr ist freie Software unter der MIT-Lizenz. Fragen, Fehler und Ideen sind auf GitHub willkommen.',
    links: [
      { label: 'Fehler melden oder Idee einreichen', href: `${github}/issues`, external: true },
    ] satisfies Link[],
  },
  roadmap: {
    title: 'Wie es weitergeht',
    description:
      'Ideen für später, nicht zugesagt und ohne Termin. Vorschläge gern als Issue auf GitHub.',
    items: [
      'Kontakte mit der Mitgliederverwaltung amosWEB abgleichen',
      'Termine in Kalender-Apps übernehmen (iCal, CalDAV)',
      'Fotos bei der Rückgabe zur Dokumentation des Zustands',
      'Inventarnummern automatisch vergeben',
    ],
    link: {
      label: 'Alle Vorhaben auf GitHub',
      href: `${github}/issues`,
      external: true,
    } satisfies Link,
  },
  cta: {
    title: 'Bereit zum Ausprobieren?',
    description: 'kramr läuft mit Docker Compose und PostgreSQL auf einem eigenen Server.',
    actions: [
      {
        label: 'Installationsanleitung',
        href: '/docs/admin/installation/',
        variant: 'solid',
        color: 'accent',
      },
    ],
  },
} as const;
