import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, Blocks, ChevronDown, Gamepad2, MessageCircle, Pickaxe, ShieldCheck, Sparkles, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServerAddress } from '@/components/server-address';
import { features } from '@/data/features';
import { siteSettings as site } from '@/data/siteSettings';
import { pageMetadata } from '@/data/metadata';
export const Route = createFileRoute('/')({ head: () => pageMetadata('home'), component: Index });

function Index() {
  const icons = { pickaxe: Pickaxe, users: Users, trophy: Trophy };
  return <>
    <section className="home-hero"><div className="container hero-inner"><div className="hero-content"><div className="hero-badge"><span className="status-dot"/> {site.home.badge}</div><h1>{site.name.split(" ")[0]}<br/><span>{site.name.split(" ").slice(1).join(" ")}<span className="title-period">.</span></span></h1><h2>{site.tagline}</h2><p>{site.description}</p><div className="hero-actions"><Button asChild variant="gaming" size="lg"><Link to="/information"><Gamepad2/> {site.labels.play} <ArrowUpRight/></Link></Button><Button asChild variant="discord" size="lg"><Link to="/community"><MessageCircle/> {site.labels.joinCommunity}</Link></Button></div><div className="hero-trust"><span><ShieldCheck size={14}/> {site.home.trust[0]}</span><span><Sparkles size={14}/> {site.home.trust[1]}</span></div></div><span className="world-caption"><span className="status-dot"/> {site.home.caption}</span></div></section>
    <section className="server-strip"><div className="container server-strip-inner"><div className="server-status"><span className="status-dot"/><div><strong>{site.server.status}</strong><small>{site.labels.horizon}</small></div></div><ServerAddress/><Link className="text-link" to="/information">{site.labels.serverInformation} <ArrowRight size={16}/></Link></div></section>
    <section className="home-features container"><div className="section-heading"><div><span className="eyebrow">{site.home.featureEyebrow}</span><h2>{site.home.featureTitle}</h2></div><span className="heading-detail">{site.home.featureDetail}</span></div><div className="feature-grid">{features.map(feature => { const Icon = icons[feature.icon]; return <article className="feature-card" key={feature.title}><div className={`feature-icon ${feature.color}`}><Icon size={25}/></div><h3>{feature.title}</h3><p>{feature.description}</p><span className={`feature-tag ${feature.color}`}>{feature.tag}<ArrowUpRight size={13}/></span></article>; })}</div></section>
    <section className="community-banner container"><div className="banner-art" aria-hidden="true"><Blocks/></div><div><span className="eyebrow purple-text">{site.home.communityEyebrow}</span><h2>{site.home.communityTitle}</h2><p>{site.home.communityDescription}</p></div><Button asChild variant="discord" size="lg"><Link to="/community"><MessageCircle/> {site.labels.meetCommunity} <ArrowUpRight/></Link></Button></section>
    <div className="bottom-note"><ChevronDown size={14}/><span>{site.home.bottomNote}</span></div>
  </>;
}
