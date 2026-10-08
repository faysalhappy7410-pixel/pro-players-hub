import { createFileRoute } from '@tanstack/react-router';
import { LinksPage } from '@/components/content-page';
import { pageMetadata } from '@/data/metadata';
export const Route = createFileRoute('/links')({ head: () => pageMetadata('links'), component: LinksPage });