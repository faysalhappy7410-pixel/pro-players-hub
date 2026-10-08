import { createFileRoute } from '@tanstack/react-router';
import { CommunityPage } from '@/components/content-page';
import { pageMetadata } from '@/data/metadata';
export const Route = createFileRoute('/community')({ head: () => pageMetadata('Community', 'Find your people, share your Minecraft creations, and discover upcoming PRO PLAYERS community events.'), component: CommunityPage });