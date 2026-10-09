import { useState } from 'react';
import { Check, Copy, Info, MessageCircle, Server } from 'lucide-react';
import { BrandMark } from '@/components/brand';
import { Button } from '@/components/ui/button';
import { siteSettings as site } from '@/data/siteSettings';
import { socialLinks } from '@/data/socialLinks';

export function HomeServerHero() {
  const [copyMessage, setCopyMessage] = useState('');
  const [discordMessage, setDiscordMessage] = useState('');
  const { home } = site;
  const discord = socialLinks.find(link => link.icon === 'messages');

  async function copyJavaIp() {
    try {
      await navigator.clipboard.writeText(site.server.address);
      setCopyMessage(site.labels.copied);
    } catch {
      setCopyMessage(site.labels.copyError);
    }
  }

  const connections = [
    { title: home.labels.java, ipLabel: home.labels.javaIp, portLabel: home.labels.javaPort, address: site.server.address, port: home.server.javaPort, color: 'green' },
    { title: home.labels.bedrock, ipLabel: home.labels.bedrockIp, portLabel: home.labels.bedrockPort, address: home.server.bedrockAddress, port: home.server.bedrockPort, color: 'purple' },
  ];

  return <section className="home-hero home-server-hero">
    <div className="container hero-inner">
      <div className="hero-content">
        <div className="home-logo">
          {home.logo.url ? <img src={home.logo.url} alt={home.logo.alt}/> : <><BrandMark/><span>{home.logo.placeholder}</span></>}
        </div>
        <h1>{site.name.split(' ')[0]}<br/><span>{site.name.split(' ').slice(1).join(' ')}</span></h1>
        <h2>{site.tagline}</h2>
        <p>{site.description}</p>
        <dl className="home-server-stats">
          <div><dt>{home.labels.status}</dt><dd className="offline-badge"><span/>{home.server.status}</dd></div>
          <div><dt>{home.labels.players}</dt><dd>{home.server.players}</dd></div>
          <div><dt>{home.labels.version}</dt><dd>{home.server.version}</dd></div>
        </dl>
        <div className="hero-actions">
          <Button variant="gaming" size="lg" onClick={copyJavaIp}>{copyMessage === site.labels.copied ? <Check/> : <Copy/>}{home.labels.copy}</Button>
          {discord?.url ? <Button asChild variant="discord" size="lg"><a href={discord.url} target="_blank" rel="noopener noreferrer"><MessageCircle/>{home.labels.discord}</a></Button> : <Button variant="discord" size="lg" onClick={() => setDiscordMessage(home.labels.discordPending)}><MessageCircle/>{home.labels.discord}</Button>}
        </div>
        <div className="home-action-feedback" role="status" aria-live="polite"><span>{copyMessage}</span>{discordMessage && <span>{discordMessage}</span>}</div>
      </div>
      <div className="home-connections">
        {connections.map(connection => <article className="home-connection-card" key={connection.title}>
          <div className="connection-heading"><Server className={connection.color} size={20}/><h2>{connection.title}</h2><span>{home.labels.placeholder}</span></div>
          <dl><div><dt>{connection.ipLabel}</dt><dd><code>{connection.address}</code></dd></div><div><dt>{connection.portLabel}</dt><dd><code>{connection.port}</code></dd></div></dl>
        </article>)}
        <p className="home-hosting-note"><Info size={16}/>{home.hostingNote}</p>
      </div>
    </div>
  </section>;
}