import { ArrowUpRight, Blocks, CalendarDays, Camera, MessageCircle, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { community, information, links } from '@/data/site';
import { ServerAddress } from './server-address';

export function InformationPage() {
  return <div className="content-page container"><PageHeading eyebrow="THE ESSENTIALS" title="Server information" description="Everything you need before your next adventure."/><div className="information-grid">{information.map(item => <article className="info-item" key={item.title}><small>{item.title}</small><h2>{item.value}</h2><p>{item.note}</p></article>)}</div><section className="connection-section"><div><span className="eyebrow">YOUR NEXT WORLD</span><h2>See you on the other side.</h2><p>Our server is getting ready. The connection details above are placeholders until the official launch announcement.</p></div><ServerAddress/></section></div>;
}
export function CommunityPage() {
  const icons = { messages: MessageCircle, blocks: Blocks, calendar: CalendarDays };
  return <div className="content-page container"><PageHeading eyebrow="BETTER TOGETHER" title="More than a server." description="Behind every great world is a great community. Find yours here."/><div className="feature-grid">{community.map(item => { const Icon = icons[item.icon]; return <article className="feature-card" key={item.title}><div className="feature-icon purple"><Icon/></div><h2>{item.title}</h2><p>{item.description}</p><span className="coming-soon">{item.label}</span></article>; })}</div><section className="community-note"><Blocks/><div><h2>Your story belongs here.</h2><p>Community spaces are being prepared. Check back for our official Discord invitation and first events.</p></div><Button asChild variant="outline"><Link to="/links">Explore our links <ArrowUpRight/></Link></Button></section></div>;
}
export function LinksPage() {
  const icons = { messages: MessageCircle, video: Video, camera: Camera };
  return <div className="content-page container"><PageHeading eyebrow="STAY CONNECTED" title="All roads lead here." description="The official corners of the PRO PLAYERS community."/><div className="links-list">{links.map(item => { const Icon = icons[item.icon]; return <article className="link-item" key={item.title}><div className="feature-icon purple"><Icon/></div><div><h2>{item.title}</h2><p>{item.description}</p></div>{item.url ? <Button asChild variant="outline"><a href={item.url} target="_blank" rel="noopener noreferrer">Visit <ArrowUpRight/></a></Button> : <span className="coming-soon">Coming soon</span>}</article>; })}</div><div className="links-note"><span className="status-dot"/> Official links will appear here when they’re ready.</div></div>;
}
function PageHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="page-heading"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>;
}