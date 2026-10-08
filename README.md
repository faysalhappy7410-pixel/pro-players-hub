# PRO PLAYERS

A static Minecraft community website made with React, Vite, TypeScript, and Tailwind CSS. The template's TanStack file router is retained; all four pages are rendered to HTML at build time. There is no runtime backend, database, authentication, API integration, or paid service.

## Editable content

All editable copy lives under `src/data/`: `siteSettings.ts` (navigation, brand, buttons, connection details, page headings, SEO), `story.ts`, `rules.ts`, `faq.ts`, `features.ts`, `gameModes.ts`, `leaderboard.ts`, `staff.ts`, `gallery.ts`, `events.ts`, `news.ts`, `testimonials.ts`, and `socialLinks.ts`. Edit these files in GitHub or VS Code, then rebuild. Empty social URLs display “Coming soon”; empty rankings, reviews, and images show honest placeholders rather than invented players or endorsements. Add original or permission-cleared local gallery images, with descriptive alt text. The background is an original generated voxel landscape, not a Minecraft screenshot or extracted game asset.

## Local development

```sh
bun install
bun run dev
bun run test
```

## Cloudflare Pages — static only

Connect the repository in Cloudflare Pages and select:

- **Framework preset:** None
- **Build command:** `bun run build:pages`
- **Build output directory:** `dist/pages`
- **Root directory:** the repository root

The build generates HTML for `/`, `/information`, `/community`, and `/links`, then stages only the client files into `dist/pages`. The preparation script checks that all four HTML files exist and excludes any Worker, functions, or private hosting metadata. Do not deploy `dist/server` or the entire `dist` directory. No runtime server, environment variables, secrets, API keys, or Pages Functions are required.

The standard `build` command remains available for Lovable's preview pipeline. Server tooling in the original template is used only while building/prerendering; it is not part of the static Pages deployment. No external fonts are fetched. The generated Minecraft landscape is bundled locally.
