#!/usr/bin/env node
/**
 * Checks the built site: fails when an internal link or asset
 * does not resolve to a file in `dist/`. This is what makes the base-path
 * rewrite (plugins/base-path.mjs) safe — a link it missed is a broken link on
 * the published site, and nothing else would notice before a reader did.
 *
 *   node scripts/check-build.mjs [dist-dir]
 */
import { existsSync, statSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const DIST = resolve(process.argv[2] ?? 'dist');
const BASE = (process.env['KRAMR_DOCS_BASE'] ?? '/kramr-docs').replace(/\/$/, '');

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

function resolves(path) {
  const target = join(DIST, path);
  if (existsSync(target) && statSync(target).isFile()) return true;
  return existsSync(join(target, 'index.html'));
}

const problems = [];
let checked = 0;
let pages = 0;

for await (const file of walk(DIST)) {
  if (file.endsWith('.css')) {
    // Fonts and other files a stylesheet loads must exist as well.
    const css = await readFile(file, 'utf8');
    for (const match of css.matchAll(/url\(\s*['"]?([^'")\s]+)['"]?\s*\)/g)) {
      const url = (match[1] ?? '').split('#')[0]?.split('?')[0] ?? '';
      if (url === '' || url.startsWith('data:') || /^[a-z][a-z0-9+.-]*:/i.test(url)) continue;
      checked += 1;
      if (!url.startsWith('/'))
        problems.push(`${file.slice(DIST.length)}: relative url ${match[1]}`);
      else if (!url.startsWith(`${BASE}/`))
        problems.push(`${file.slice(DIST.length)}: url without the base path ${match[1]}`);
      else if (!resolves(url.slice(BASE.length)))
        problems.push(`${file.slice(DIST.length)}: missing file ${match[1]}`);
    }
    continue;
  }
  if (!file.endsWith('.html')) continue;
  pages += 1;
  const html = await readFile(file, 'utf8');
  const refs = [
    ...[...html.matchAll(/\b(?:href|src)="([^"]+)"/g)].map((m) => m[1]),
    ...[...html.matchAll(/http-equiv="refresh" content="\d+;url=([^"]+)"/g)].map((m) => m[1]),
  ];
  for (const raw of refs) {
    const url = raw.split('#')[0]?.split('?')[0] ?? '';
    // External links, fragments and mail/tel links are out of scope.
    if (url === '' || /^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith('//')) continue;
    checked += 1;
    if (!url.startsWith('/')) {
      problems.push(`${file.slice(DIST.length)}: relative link ${raw}`);
    } else if (BASE !== '' && !url.startsWith(`${BASE}/`) && url !== BASE) {
      problems.push(`${file.slice(DIST.length)}: link without the base path ${raw}`);
    } else if (!resolves(url.slice(BASE.length))) {
      problems.push(`${file.slice(DIST.length)}: dead link ${raw}`);
    }
  }
}

if (pages === 0) problems.push(`no HTML pages in ${DIST}`);

if (problems.length > 0) {
  process.stderr.write(`${[...new Set(problems)].join('\n')}\n`);
  process.stderr.write(`check-build: ${new Set(problems).size} problem(s) in ${pages} pages\n`);
  process.exit(1);
}
process.stdout.write(`check-build: ${checked} internal links in ${pages} pages resolve\n`);
