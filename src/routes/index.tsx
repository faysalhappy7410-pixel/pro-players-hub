import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, Blocks, ChevronDown, Gamepad2, MessageCircle, Pickaxe, ShieldCheck, Sparkles, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServerAddress } from '@/components/server-address';
import { features, site } from '@/data/site';
import { pageMetadata } from '@/data/metadata';
export const Route = createFileRoute('/')({ head: () => pageMetadata('Home', 'PRO PLAYERS — a Minecraft community built for players, by players. Explore a new world, meet your people, and make your next adventure.'), component: Index });

function Index() {
  const icons = { pickaxe: Pickaxe, users: Users, trophy: Trophy };
  return <>
    <section className="home-hero"><div className="container hero-inner"><div className="hero-content"><div className="hero-badge"><span className="status-dot"/> A NEW WORLD. YOUR NEXT CHAPTER.</div><h1>PRO<br/><span>PLAYERS<span className="title-period">.</span></span></h1><h2>{site.tagline}</h2><p>{site.description}</p><div className="hero-actions"><Button asChild variant="gaming" size="lg"><Link to="/information"><Gamepad2/> Let's play <ArrowUpRight/></Link></Button><Button asChild variant="discord" size="lg"><Link to="/community"><MessageCircle/> Join the community</Link></Button></div><div className="hero-trust"><span><ShieldCheck size={14}/> Player-first community</span><span><Sparkles size={14}/> Endless possibilities</span></div></div><span className="world-caption"><span className="status-dot"/> YOUR WORLD IS WAITING</span></div></section>
    <section className="server-strip"><div className="container server-strip-inner"><div className="server-status"><span className="status-dot"/><div><strong>{site.server.status}</strong><small>A new adventure is on the horizon</small></div></div><ServerAddress/><Link className="text-link" to="/information">Server information <ArrowRight size={16}/></Link></div></section>
    <section className="home-features container"><div className="section-heading"><div><span className="eyebrow">NOT JUST BLOCKS. POSSIBILITIES.</span><h2>A place to play. A place to belong.</h2></div><span className="heading-detail">One community. Countless adventures.</span></div><div className="feature-grid">{features.map(feature => { const Icon = icons[feature.icon]; return <article className="feature-card" key={feature.title}><div className={`feature-icon ${feature.color}`}><Icon size={25}/></div><h3>{feature.title}</h3><p>{feature.description}</p><span className={`feature-tag ${feature.color}`}>{feature.tag}<ArrowUpRight size={13}/></span></article>; })}</div></section>
    <section className="community-banner container"><div className="banner-art" aria-hidden="true"><Blocks/></div><div><span className="eyebrow purple-text">THE BEST PART? THE PEOPLE.</span><h2>Good games. Great company.</h2><p>Come for the Minecraft. Stay for the friendships.</p></div><Button asChild variant="discord" size="lg"><Link to="/community"><MessageCircle/> Meet the community <ArrowUpRight/></Link></Button></section>
    <div className="bottom-note"><ChevronDown size={14}/><span>Adventure is better together.</span></div>
  </>;
}
