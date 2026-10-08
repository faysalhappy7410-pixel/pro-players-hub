import { ArrowUpRight, Blocks, CalendarDays, Camera, MessageCircle, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { siteSettings as site } from '@/data/siteSettings';
import { story } from '@/data/story';
import { rules } from '@/data/rules';
import { faq } from '@/data/faq';
import { gameModes } from '@/data/gameModes';
import { leaderboard } from '@/data/leaderboard';
import { staff } from '@/data/staff';
import { gallery } from '@/data/gallery';
import { events } from '@/data/events';
import { news } from '@/data/news';
import { testimonials } from '@/data/testimonials';
import { socialLinks } from '@/data/socialLinks';
import { ServerAddress } from './server-address';
import { ContentList, DataSection } from './data-section';

export function InformationPage() {
  return <div className="content-page container"><PageHeading page="information"/>
    <div className="information-grid">{site.information.details.map(item => <article className="info-item" key={item.title}><small>{item.title}</small><h2>{site.server[item.field]}</h2><p>{item.note}</p></article>)}</div>
    <DataSection title={story.title}><span className="eyebrow">{story.eyebrow}</span><p>{story.description}</p></DataSection>
    <DataSection title={site.labels.gameModes}><ContentList items={gameModes}/></DataSection>
    <DataSection title={site.labels.rules}><ContentList items={rules}/></DataSection>
    <DataSection title={site.labels.faq}><div className="faq-list">{faq.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div></DataSection>
    <section className="connection-section"><div><span className="eyebrow">{site.information.eyebrow}</span><h2>{site.information.title}</h2><p>{site.information.description}</p></div><ServerAddress/></section>
  </div>;
}
export function CommunityPage() {
  const icons = { messages: MessageCircle, blocks: Blocks, calendar: CalendarDays };
  return <div className="content-page container"><PageHeading page="community"/>
    <div className="feature-grid">{site.community.cards.map(item => { const Icon = icons[item.icon]; return <article className="feature-card" key={item.title}><div className="feature-icon purple"><Icon/></div><h2>{item.title}</h2><p>{item.description}</p><span className="coming-soon">{item.label}</span></article>; })}</div>
    <DataSection title={site.labels.news}><ContentList items={news}/></DataSection>
    <DataSection title={site.labels.events}><ContentList items={events}/></DataSection>
    <DataSection title={site.labels.staff}><ContentList items={staff}/></DataSection>
    <DataSection title={site.labels.leaderboard}><p>{leaderboard.description}</p>{leaderboard.entries.length ? <ol className="rankings">{leaderboard.entries.map(entry => <li key={entry.name}><span>{entry.name}</span><strong>{entry.score}</strong></li>)}</ol> : <p className="empty-state">{leaderboard.empty}</p>}</DataSection>
    <DataSection title={site.labels.gallery}><p>{gallery.description}</p>{gallery.images.length ? <div className="gallery-grid">{gallery.images.map(image => <figure key={image.src}><img src={image.src} alt={image.alt} loading="lazy" width={640} height={360}/><figcaption>{image.caption}</figcaption></figure>)}</div> : <p className="empty-state">{gallery.empty}</p>}</DataSection>
    <DataSection title={site.labels.testimonials}>{testimonials.entries.length ? testimonials.entries.map(entry => <blockquote key={entry.name}><p>{entry.quote}</p><cite>{entry.name}</cite></blockquote>) : <p className="empty-state">{testimonials.empty}</p>}</DataSection>
    <section className="community-note"><Blocks/><div><h2>{site.community.title}</h2><p>{site.community.description}</p></div><Button asChild variant="outline"><Link to="/links">{site.labels.exploreLinks} <ArrowUpRight/></Link></Button></section>
  </div>;
}
export function LinksPage() {
  const icons = { messages: MessageCircle, video: Video, camera: Camera };
  return <div className="content-page container"><PageHeading page="links"/><div className="links-list">{socialLinks.map(item => { const Icon = icons[item.icon]; return <article className="link-item" key={item.title}><div className="feature-icon purple"><Icon/></div><div><h2>{item.title}</h2><p>{item.description}</p></div>{item.url ? <Button asChild variant="outline"><a href={item.url} target="_blank" rel="noopener noreferrer">{site.labels.visit} <ArrowUpRight/></a></Button> : <span className="coming-soon">{site.labels.comingSoon}</span>}</article>; })}</div><div className="links-note"><span className="status-dot"/>{site.pages.links.note}</div></div>;
}
function PageHeading({ page }: { page: 'information' | 'community' | 'links' }) {
  const content = site.pages[page];
  return <div className="page-heading"><span className="eyebrow">{content.eyebrow}</span><h1>{content.heading}</h1><p>{content.intro}</p></div>;
}
