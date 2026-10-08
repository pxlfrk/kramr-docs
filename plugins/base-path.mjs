/**
 * Astro integration: puts the site's base path in front of the theme's links.
 *
 * The site is published under the project path of GitHub Pages
 * (`/kramr-docs/`). Astro applies `base` to its own assets, but the Lotus theme
 * writes root-relative links (`/docs/…`, `/api/`, `/`) into its header, sidebar,
 * search index and client scripts without it. The theme is not patched, so
 * after the build the known site-internal prefixes are rewritten in the
 * generated files. `scripts/check-build.mjs` proves that
 * nothing was missed: it fails the build when an internal link does not resolve.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const TEXT_FILES = /\.(html|json|js|css|txt|md|xml)$/;
const PREFIXES = [
  '/docs/',
  '/api/',
  '/favicon.svg',
  '/logo.svg',
  '/fonts/',
  '/llms.txt',
  '/search.json',
];

/** Pure: rewrites root-relative site links in `text`. */
export function addBase(text, base, site = '') {
  const prefix = base.replace(/\/$/, '');
  if (prefix === '') return text;

  let out = text;
  for (const path of PREFIXES) {
    // Only where a string or attribute value starts: `"/docs/…`, `'/docs/…`, `(/docs/…`.
    out = out.replace(
      new RegExp(`(?<=["'(]|url=)${path.replace(/[./]/g, '\\$&')}`, 'g'),
      `${prefix}${path}`,
    );
  }
  // Absolute URLs the theme builds from `site` (llms.txt).
  if (site !== '') {
    for (const path of PREFIXES) {
      out = out.replaceAll(`${site}${path}`, `${site}${prefix}${path}`);
    }
  }
  // The home link and the bare site root.
  return out.replace(/(?<=\bhref=)"\/"/g, `"${prefix}/"`);
}

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

export default function basePath({ base, site }) {
  return {
    name: 'kramr-base-path',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        for await (const file of walk(root)) {
          if (!TEXT_FILES.test(file)) continue;
          const before = await readFile(file, 'utf8');
          const after = addBase(before, base, site);
          if (after !== before) await writeFile(file, after, 'utf8');
        }
      },
    },
  };
}
