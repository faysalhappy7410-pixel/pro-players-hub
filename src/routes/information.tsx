import { createFileRoute } from '@tanstack/react-router';
import { InformationPage } from '@/components/content-page';
import { pageMetadata } from '@/data/metadata';
export const Route = createFileRoute('/information')({ head: () => pageMetadata('information'), component: InformationPage });