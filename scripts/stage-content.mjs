#!/usr/bin/env node
/**
 * Stages the site's inputs.
 *
 * The published site reads its pages from `content/docs/` and its API
 * reference from `openapi/api.yaml`, both at the site root. In the generated
 * `kramr-docs` repository the sync has put them there already. Inside
 * the private monorepo this script produces the same layout from the single
 * sources, so `npm run build` here builds what `kramr-docs` will build:
 *
 *   docs/public/**                ->  content/docs/**   (only Markdown pages)
 *   contracts/api.openapi.yaml    ->  openapi/api.yaml  (public routes only)
 *
 * Also copies Scalar's standalone bundle to `public/vendor/scalar.js`.
 * When `../docs/public` does not exist (the generated repository) it does
 * nothing. Both targets are generated and git-ignored.
 */
import { spawnSync } from 'node:child_process';
import { cp, mkdir, rm, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = join(SITE_ROOT, '..', 'docs', 'public');
const TARGET = join(SITE_ROOT, 'content', 'docs');

// The API reference page loads Scalar's standalone bundle from the site itself,
// so a reader's browser contacts no third party. Always copied, also in the
// generated repository (the file is not part of the synced source).
await mkdir(join(SITE_ROOT, 'public', 'vendor'), { recursive: true });
await cp(
  join(SITE_ROOT, 'node_modules', '@scalar', 'api-reference', 'dist', 'browser', 'standalone.js'),
  join(SITE_ROOT, 'public', 'vendor', 'scalar.js'),
);

if (!existsSync(SOURCE)) {
  process.stdout.write('stage-content: no ../docs/public, using the content already in place\n');
  process.exit(0);
}

await rm(TARGET, { recursive: true, force: true });
await mkdir(TARGET, { recursive: true });
// Whole audience folders only: the rules file `docs/public/README.md` is for
// authors, not a page of the site.
for (const entry of await readdir(SOURCE, { withFileTypes: true })) {
  if (entry.isDirectory()) {
    await cp(join(SOURCE, entry.name), join(TARGET, entry.name), { recursive: true });
  }
}

const derive = spawnSync(
  process.execPath,
  [
    join(SITE_ROOT, '..', 'tooling', 'public-openapi.mjs'),
    '--out',
    join(SITE_ROOT, 'openapi', 'api.yaml'),
  ],
  { stdio: 'inherit' },
);
if (derive.status !== 0) process.exit(derive.status ?? 1);
