/**
 * Remark plugin: turns the relative `*.md` links of `docs/public` into site
 * routes.
 *
 * The pages link to each other the way a repository reader expects
 * (`../features/index.md`), which is what the link check of the source folder
 * resolves. The site serves a page at `<docsBase>/<path>/` instead, so the
 * link is resolved against the page's own file and rewritten.
 */
import { posix, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const CONTENT_ROOT = fileURLToPath(new URL('../content/docs/', import.meta.url));
const DOCS_BASE = '/docs';

function visit(node, callback) {
  callback(node);
  for (const child of node.children ?? []) visit(child, callback);
}

/** Pure: the route a relative Markdown link points to, or `undefined` if it is none. */
export function resolveDocLink(url, fromFile) {
  const match = /^([^#?]+\.md)([#?].*)?$/.exec(url);
  if (match === null || /^[a-z][a-z0-9+.-]*:/i.test(url) || url.startsWith('/')) return undefined;

  const target = posix.normalize(posix.join(posix.dirname(fromFile), match[1]));
  const route = target.replace(/(^|\/)index\.md$/, '/').replace(/\.md$/, '/');
  return `${DOCS_BASE}/${route}`.replace(/\/{2,}/g, '/') + (match[2] ?? '');
}

export default function relativeDocLinks() {
  return (tree, file) => {
    if (!file.path) return;
    const fromFile = relative(CONTENT_ROOT, file.path).split('\\').join('/');
    visit(tree, (node) => {
      if (node.type !== 'link' && node.type !== 'definition') return;
      const route = resolveDocLink(node.url, fromFile);
      if (route !== undefined) node.url = route;
    });
  };
}
