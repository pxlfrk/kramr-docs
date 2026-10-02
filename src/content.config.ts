import { defineCollection } from 'astro:content';
import { docsLoader, docsSchema } from '@prosefly/astro-theme-lotus/content';

// The pages are the staged copy of `docs/public` (see scripts/stage-content.mjs),
// plain Markdown by rule, so the default `**/*.mdx` pattern is widened.
const docs = defineCollection({
  loader: docsLoader({ base: './content/docs', pattern: '**/*.{md,mdx}' }),
  schema: docsSchema(),
});

export const collections = { docs };
