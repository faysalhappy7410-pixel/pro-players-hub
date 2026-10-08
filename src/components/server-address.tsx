import { useState } from 'react';
import { Check, Copy, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteSettings as site } from '@/data/siteSettings';

export function ServerAddress() {
  const [message, setMessage] = useState('');
  async function copyAddress() {
    try { await navigator.clipboard.writeText(site.server.address); setMessage(site.labels.copied); }
    catch { setMessage(site.labels.copyError); }
  }
  return <div className="server-address"><Server size={18}/><div><small>{site.labels.serverIp} {site.server.placeholder && <span>{site.labels.placeholder}</span>}</small><code>{site.server.address}</code></div><Button variant="ghost" size="icon" aria-label={site.labels.copy} title={site.labels.copy} onClick={copyAddress}>{message === site.labels.copied ? <Check/> : <Copy/>}</Button><span className="copy-message" role="status">{message}</span></div>;
}