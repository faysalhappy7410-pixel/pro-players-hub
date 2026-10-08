import { createFileRoute } from '@tanstack/react-router';
import { InformationPage } from '@/components/content-page';
import { pageMetadata } from '@/data/metadata';
export const Route = createFileRoute('/information')({ head: () => pageMetadata('Server information', 'Connection details, supported versions, and announcements for the PRO PLAYERS Minecraft community.'), component: InformationPage });