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
- Keep editable site text, server details, social URLs, and lists in src/data; shared React components read this local content without network calls.
- Only deploy the static client output to Cloudflare Pages, never the generated server or worker artifacts, because the site has no runtime backend.
