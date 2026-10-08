# PRO PLAYERS

A static Minecraft community website made with React, Vite, TypeScript, and Tailwind CSS. The template's TanStack file router is retained; all four pages are rendered to HTML at build time. There is no runtime backend, database, authentication, API integration, or paid service.

## Editable content

Edit `src/data/site.ts` for brand text, connection details, feature lists, and social links. Page titles and descriptions live in `src/data/metadata.ts` and the four route declarations. The server address is an explicit placeholder. Empty social URLs display “Coming soon” rather than linking to nonexistent destinations. Replace these with real values before announcing your server.

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
