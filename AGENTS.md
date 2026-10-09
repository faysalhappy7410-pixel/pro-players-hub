<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the existing React/Vite and TanStack file router; all four public pages are prerendered so the Cloudflare Pages deployment serves only static files.
- Keep all visible copy and SEO values in named src/data content modules; reusable sections render their lists and honest empty states without network calls so editing local content updates every public page.
- Keep Home-specific server presentation in a dedicated hero reading siteSettings.home, with Java IP shared from siteSettings.server and Discord URL read from socialLinks; this isolates Home changes while keeping copy and destinations editable.
- Keep Information's six sections isolated in InformationSections with structured local timeline, rule groups, joining steps, FAQs, detailed feature previews, and modes; detailed features use a separate export so Home's preview design and content stay unchanged.
- Build Cloudflare Pages with build:pages and deploy dist/pages; the staging script validates all four prerendered pages and excludes worker, functions, and private metadata so hosting remains static-only.
