/**
 * The texts of the 404 page, kept apart from the landing page's so
 * rewording one never touches the other.
 */
export const notFound = {
  title: 'Seite nicht gefunden',
  description: 'Diese Adresse gibt es auf der Dokumentationsseite von kramr nicht.',
  tag: { number: 'Nr. 404', code: '404', status: 'nicht ausgeliehen' },
  heading: 'Diese Seite gibt es nicht.',
  // Handbook pages live under /docs/; a link without that prefix was the occasion (issue 542).
  text: 'Die Adresse stimmt nicht, oder die Seite wurde verschoben. Seiten des Handbuchs liegen unter /docs/, zum Beispiel /docs/admin/… statt /admin/….',
  actions: [
    { label: 'Zur Startseite', href: '/', primary: true },
    { label: 'Zur Dokumentation', href: '/docs/user/getting-started/', primary: false },
  ],
};
