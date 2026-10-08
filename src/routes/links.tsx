import { createFileRoute } from '@tanstack/react-router';
import { LinksPage } from '@/components/content-page';
import { pageMetadata } from '@/data/metadata';
export const Route = createFileRoute('/links')({ head: () => pageMetadata('Official links', 'Find the official Discord, YouTube, and Instagram links for the PRO PLAYERS Minecraft community.'), component: LinksPage });