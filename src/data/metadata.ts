import { siteSettings } from './siteSettings';
export function pageMetadata(page: keyof typeof siteSettings.pages) {
  const { title, description } = siteSettings.pages[page];
  return { meta: [{ title: `${title} — ${siteSettings.name}` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} — ${siteSettings.name}` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}