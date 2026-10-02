import assert from 'node:assert/strict';
import { test } from 'node:test';
import { addBase } from '../plugins/base-path.mjs';
import { resolveDocLink } from '../plugins/relative-doc-links.mjs';

const BASE = '/kramr-docs';
const SITE = 'https://example.org';

test("NFR-21: a relative link to another page becomes that page's route", () => {
  assert.equal(
    resolveDocLink('../features/index.md', 'user/getting-started/index.md'),
    '/docs/user/features/',
  );
  assert.equal(
    resolveDocLink('reverse-proxy.md#caddy', 'admin/installation/index.md'),
    '/docs/admin/installation/reverse-proxy/#caddy',
  );
});

test('NFR-21: links that are not relative Markdown links are left alone', () => {
  for (const url of [
    'https://example.org/a.md',
    '/docs/a.md',
    '#anchor',
    '../image.png',
    'mailto:a@b.c',
  ]) {
    assert.equal(resolveDocLink(url, 'user/a/index.md'), undefined, url);
  }
});

test('NFR-21: the base path is put in front of site links in attributes, JSON and scripts', () => {
  const input = [
    '<a href="/docs/user/faq/">x</a>',
    '<link href="/favicon.svg">',
    '<a href="/">home</a>',
    '{"href":"/docs/a/","u":"/api/"}',
    "fetch('/docs/search.json')",
    '<meta http-equiv="refresh" content="0;url=/docs/user/x/">',
  ].join('\n');
  const out = addBase(input, BASE);
  assert.match(out, /href="\/kramr-docs\/docs\/user\/faq\/"/);
  assert.match(out, /href="\/kramr-docs\/favicon.svg"/);
  assert.match(out, /href="\/kramr-docs\/"/);
  assert.match(out, /"href":"\/kramr-docs\/docs\/a\/","u":"\/kramr-docs\/api\/"/);
  assert.match(out, /fetch\('\/kramr-docs\/docs\/search.json'\)/);
  assert.match(out, /url=\/kramr-docs\/docs\/user\/x\//);
});

test('NFR-21: rewriting twice does not add the base path twice', () => {
  const once = addBase('<a href="/docs/a/">x</a>', BASE);
  assert.equal(addBase(once, BASE), once);
});

test('NFR-21: absolute URLs built from the site address get the base path', () => {
  assert.equal(
    addBase(`[a](${SITE}/docs/user/a.md)`, BASE, SITE),
    `[a](${SITE}/kramr-docs/docs/user/a.md)`,
  );
});

test('NFR-21: an empty base path changes nothing', () => {
  const input = '<a href="/docs/a/">x</a>';
  assert.equal(addBase(input, '/'), input);
  assert.equal(addBase(input, ''), input);
});
