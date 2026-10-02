import { defineConfig } from 'astro/config';
import lotus from '@prosefly/astro-theme-lotus';
import sitemap from '@astrojs/sitemap';
import basePath from './plugins/base-path.mjs';
import relativeDocLinks from './plugins/relative-doc-links.mjs';

const ICONIFY_DEFAULT = 'https://api.iconify.design';
const iconifyApi = process.env['ICONIFY_API'] ?? ICONIFY_DEFAULT;

// The theme loads its icons from an Iconify API while the site is built (not
// when a reader opens it). Some of its components ignore the configured address,
// so with `ICONIFY_API` set — a mirror, for a build without internet access —
// every request to the default address is redirected there.
if (iconifyApi !== ICONIFY_DEFAULT) {
  const nativeFetch = globalThis.fetch;
  globalThis.fetch = (input, init) => {
    const url = input instanceof Request ? input.url : String(input);
    return nativeFetch(
      url.startsWith(ICONIFY_DEFAULT) ? iconifyApi + url.slice(ICONIFY_DEFAULT.length) : input,
      init,
    );
  };
}

// Published under the project path of GitHub Pages. A custom domain
// later only changes `site` and `base`. `npm run dev` serves from `/`.
const site = 'https://pxlfrk.github.io';
const base = process.env['KRAMR_DOCS_BASE'] ?? '/kramr-docs';

export default defineConfig({
  site,
  base,
  // The theme links to the docs root, which has no page of its own.
  redirects: { '/docs': '/docs/user/getting-started/' },
  markdown: { remarkPlugins: [relativeDocLinks] },
  integrations: [lotus({ iconify: { apiBase: iconifyApi } }), sitemap(), basePath({ base, site })],
});
