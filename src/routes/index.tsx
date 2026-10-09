import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, Blocks, CalendarDays, ChevronDown, Gamepad2, MessageCircle, Pickaxe, ShieldCheck, Swords } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HomeServerHero } from '@/components/home-server-hero';
import { features } from '@/data/features';
import { siteSettings as site } from '@/data/siteSettings';
import { pageMetadata } from '@/data/metadata';
export const Route = createFileRoute('/')({ head: () => pageMetadata('home'), component: Index });

function Index() {
  const icons = { pickaxe: Pickaxe, swords: Swords, blocks: Blocks, gamepad: Gamepad2, calendar: CalendarDays, shield: ShieldCheck };
  return <>
    <HomeServerHero/>
    <section className="home-features container"><div className="section-heading"><div><span className="eyebrow">{site.home.featureEyebrow}</span><h2>{site.home.featureTitle}</h2></div><span className="heading-detail">{site.home.featureDetail}</span></div><div className="feature-grid">{features.map(feature => { const Icon = icons[feature.icon]; return <article className="feature-card" key={feature.title}><div className={`feature-icon ${feature.color}`}><Icon size={25}/></div><h3>{feature.title}</h3><p>{feature.description}</p><span className={`feature-tag ${feature.color}`}>{feature.tag}<ArrowUpRight size={13}/></span></article>; })}</div></section>
    <div className="container home-page-actions"><Button asChild variant="outline" size="lg"><Link to="/information">{site.home.labels.information}<ArrowRight/></Link></Button><Button asChild variant="outline" size="lg"><Link to="/community">{site.home.labels.community}<ArrowRight/></Link></Button></div>
    <section className="community-banner container"><div className="banner-art" aria-hidden="true"><Blocks/></div><div><span className="eyebrow purple-text">{site.home.communityEyebrow}</span><h2>{site.home.communityTitle}</h2><p>{site.home.communityDescription}</p></div><Button asChild variant="discord" size="lg"><Link to="/community"><MessageCircle/> {site.labels.meetCommunity} <ArrowUpRight/></Link></Button></section>
    <div className="bottom-note"><ChevronDown size={14}/><span>{site.home.bottomNote}</span></div>
  </>;
}
