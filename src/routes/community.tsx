import { createFileRoute } from '@tanstack/react-router';
import { CommunityPage } from '@/components/content-page';
import { pageMetadata } from '@/data/metadata';
export const Route = createFileRoute('/community')({ head: () => pageMetadata('community'), component: CommunityPage });