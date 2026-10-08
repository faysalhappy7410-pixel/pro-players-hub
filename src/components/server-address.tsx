import { useState } from 'react';
import { Check, Copy, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';

export function ServerAddress() {
  const [message, setMessage] = useState('');
  async function copyAddress() {
    try { await navigator.clipboard.writeText(site.server.address); setMessage('Copied!'); }
    catch { setMessage('Copy unavailable. Select the address to copy.'); }
  }
  return <div className="server-address"><Server size={18}/><div><small>SERVER IP <span>· PLACEHOLDER</span></small><code>{site.server.address}</code></div><Button variant="ghost" size="icon" aria-label="Copy server address" title="Copy server address" onClick={copyAddress}>{message === 'Copied!' ? <Check/> : <Copy/>}</Button><span className="copy-message" role="status">{message}</span></div>;
}