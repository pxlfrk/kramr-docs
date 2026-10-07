/**
 * Remark plugin: removes the leading `# Title` heading of a page.
 *
 * Every page in `docs/public` starts with an H1 so that it reads well in a
 * repository viewer. The site's layout already prints the frontmatter `title`
 * as the page heading, so the same text would appear twice. Only a first
 * heading whose text equals the title is dropped; anything else stays.
 */

function textOf(node) {
  if (typeof node.value === 'string') return node.value;
  return (node.children ?? []).map(textOf).join('');
}

export default function dropDuplicateTitle() {
  return (tree, file) => {
    const title = file.data?.astro?.frontmatter?.title;
    const first = tree.children?.[0];
    if (typeof title !== 'string' || first?.type !== 'heading' || first.depth !== 1) return;
    if (textOf(first).trim() === title.trim()) tree.children.shift();
  };
}
