/** The footer links (components/FooterLinks.astro). */
export const footerLinks: { icon: string; label: string; href: string; external?: boolean }[] = [
  { icon: 'lucide:users', label: 'Anwender-Handbuch', href: '/docs/user/getting-started/' },
  { icon: 'lucide:server', label: 'Betreiber-Guide', href: '/docs/admin/installation/' },
  { icon: 'lucide:code-xml', label: 'API-Referenz', href: '/api/' },
  // GitHub follows when the source code is public.
];

/** Legal line below the links. The year is the year of the build. */
export const legal = {
  name: 'kramr',
  note: 'freie Software (MIT-Lizenz)',
  imprint: { label: 'Impressum', href: 'https://achimkraemer.com/impressum/' },
} as const;

/** Icons of the header links, by address (components/HeaderNavbar.astro). */
export const navIcons: Record<string, string> = {
  '/docs/user/getting-started/': 'lucide:users',
  '/docs/admin/installation/': 'lucide:server',
  '/api/': 'lucide:code-xml',
};
