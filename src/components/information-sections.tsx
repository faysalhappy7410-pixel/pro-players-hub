import { useState } from 'react';
import { Blocks, CalendarDays, ClipboardPaste, Coins, Copy, Gamepad2, Image, Pickaxe, Play, Puzzle, ScrollText, Server, ShieldCheck, Sparkles, Swords, Users } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { DataSection } from '@/components/data-section';
import { story } from '@/data/story';
import { rules } from '@/data/rules';
import { howToJoin } from '@/data/howToJoin';
import { faq } from '@/data/faq';
import { serverFeatures } from '@/data/features';
import { gameModes } from '@/data/gameModes';
import { siteSettings as site } from '@/data/siteSettings';

const icons = { copy: Copy, gamepad: Gamepad2, users: Users, server: Server, clipboard: ClipboardPaste, play: Play, puzzle: Puzzle, coins: Coins, shield: ShieldCheck, scroll: ScrollText, calendar: CalendarDays, sparkles: Sparkles, pickaxe: Pickaxe, blocks: Blocks, swords: Swords };

export function InformationSections() {
  const [copyMessage, setCopyMessage] = useState('');
  async function copyIp() {
    try { await navigator.clipboard.writeText(site.server.address); setCopyMessage(site.labels.copied); }
    catch { setCopyMessage(site.labels.copyError); }
  }
  let ruleNumber = 0;
  return <div className="information-sections">
    <DataSection title={story.title}>
      <p>{story.description}</p>
      <ol className="story-timeline">{story.timeline.map(item => <li key={item.id}>
        <div className="story-moment"><span className="eyebrow">{item.date}</span><h3>{item.title}</h3><p>{item.description}</p></div>
        <figure>{item.screenshot ? <img src={item.screenshot} alt={item.alt} loading="lazy" width={640} height={360}/> : <div className="story-image-placeholder"><Image size={28} aria-hidden="true"/><span>{story.screenshotPlaceholder}</span></div>}<figcaption>{item.caption}</figcaption></figure>
      </li>)}</ol>
    </DataSection>
    <DataSection title={rules.title}>
      <p>{rules.note}</p>
      <div className="rules-groups">{rules.groups.map(group => <section className="rules-group" key={group.title}><h3>{group.title}</h3><ol className="rules-card-list" start={ruleNumber + 1}>{group.items.map(item => { ruleNumber += 1; return <li className="information-rule-card" key={item.title}><span className="rule-number" aria-hidden="true">{String(ruleNumber).padStart(2, '0')}</span><div><h4>{item.title}</h4><p>{item.description}</p></div></li>; })}</ol></section>)}</div>
    </DataSection>
    <DataSection title={howToJoin.title}>
      <p>{howToJoin.description}</p>
      <div className="information-copy-row"><code>{site.server.address}</code><Button variant="gaming" onClick={copyIp}><Copy/>{howToJoin.copyLabel}</Button><span role="status" aria-live="polite">{copyMessage}</span></div>
      <ol className="join-steps">{howToJoin.steps.map((step, index) => { const Icon = icons[step.icon]; return <li key={step.title}><div className="join-step-top"><span className="step-number">{String(index + 1).padStart(2, '0')}</span><Icon size={24} aria-hidden="true"/></div><h3>{step.title}</h3><p>{step.description}</p></li>; })}</ol>
    </DataSection>
    <DataSection title={site.labels.faq}>
      <Accordion type="multiple" className="information-faq">{faq.map(item => <AccordionItem value={item.id} key={item.id}><AccordionTrigger>{item.question}</AccordionTrigger><AccordionContent><p>{item.answer}</p></AccordionContent></AccordionItem>)}</Accordion>
    </DataSection>
    <DataSection title={serverFeatures.title}>
      <p>{serverFeatures.description}</p>
      <div className="feature-grid information-feature-grid">{serverFeatures.items.map(item => { const Icon = icons[item.icon]; return <article className="feature-card" key={item.title}><div className="feature-icon purple"><Icon aria-hidden="true"/></div><h3>{item.title}</h3><p>{item.description}</p><span className="coming-soon">{serverFeatures.status}</span></article>; })}</div>
    </DataSection>
    <DataSection title={gameModes.title}>
      <p>{gameModes.description}</p>
      <div className="information-modes">{gameModes.items.map(item => { const Icon = icons[item.icon]; return <article className="feature-card" key={item.title}><div className="feature-icon green"><Icon aria-hidden="true"/></div><h3>{item.title}</h3><p>{item.description}</p><div className="mode-command"><span>{gameModes.commandLabel}</span><code>{item.command}</code></div></article>; })}</div>
    </DataSection>
  </div>;
}