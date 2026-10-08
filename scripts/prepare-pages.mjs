import { access, cp, mkdir, readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';

// TanStack's prerender pass writes the complete website into dist/client.
// Stage only those static assets, never Nitro's server/Worker output.
const source = 'dist/client';
const destination = 'dist/pages';
for (const route of ['', 'information', 'community', 'links']) {
  await access(join(source, route, 'index.html'));
}
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true });
for (const name of ['_worker.js', 'functions', '.lovable']) {
  await rm(join(destination, name), { recursive: true, force: true });
}
const entries = await readdir(destination);
if (!entries.includes('index.html')) throw new Error('Static home page is missing.');
console.log('Cloudflare Pages static website ready in dist/pages. No runtime server is deployed.');