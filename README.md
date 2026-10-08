# kramr documentation site

Public documentation and product site of kramr, built with Astro and the Lotus
theme (`@prosefly/astro-theme-lotus`, BSD-3-Clause). The theme's components are
used as they are; the site only sets its colour tokens (`src/styles/kramr.css`),
replaces the footer links and has its own landing page. The credit link of the
theme is switched off in `theme.config.json`; the theme remains a dependency
under its licence. The text here is English because it is code; the site itself
is German.

**This repository is generated.** It is assembled from the kramr repository on
every change of the public documentation and overwritten completely, so changes
made here by hand are lost. Corrections to the documentation belong in the kramr
repository (`docs/public/`); this repository only builds and publishes them.

```
content/docs/**   the pages (user, admin, developer)
openapi/api.yaml  the public part of the API contract, shown on /api/
src/, plugins/    the site
src/data/home.de.ts      the texts of the landing page
src/assets/screenshots/  screenshots of the demo data, light and dark
src/styles/kramr.css     the palette of the whole site, loaded after the theme
```

Screenshots are taken from the running application with the demo data
(`npm run seed:demo`), cropped to the content and stored as WebP.
The fonts are served from the site itself (`public/fonts/`, SIL OFL, licence
texts next to the files, Latin subset); `scripts/check-build.mjs` fails when a
font does not resolve.

## Build locally

```sh
npm ci
npm run build     # stages the content, then builds into dist/
npm run dev       # development server
```

`npm run stage` (part of both) leaves the content in place when there is no
`../docs/public` next to this folder, which is the case here. In the kramr
repository it copies the pages from `docs/public` and derives the API reference
from the contract, so the same build runs there.

The theme loads its icons from an Iconify API while building. Without internet
access set `ICONIFY_API` to a mirror.

## Licence

MIT, see `LICENSE`.
