import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, Menu, X, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandMark } from './brand';
import { navigation, site } from '@/data/site';
import landscape from '@/assets/minecraft-landscape.jpg';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="site-shell">
    <img className="world-background" src={landscape} alt="" width={1920} height={1024}/>
    <header className="site-header"><div className="header-inner">
      <Link to="/" className="brand" aria-label="PRO PLAYERS home"><BrandMark/><span>PRO<span className="text-primary">PLAYERS</span><small>MINECRAFT COMMUNITY</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} activeProps={{ className: 'nav-active' }}>{item.label}</Link>)}</nav>
      <Button asChild variant="gaming" className="header-join"><Link to="/information"><Gamepad2/> Join the server <ArrowUpRight/></Link></Button>
      <Button variant="ghost" size="icon" className="mobile-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button>
    </div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{navigation.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} activeProps={{ className: 'nav-active' }} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav>}</header>
    <main>{children}</main>
    <footer className="site-footer"><div className="footer-inner"><Link to="/" className="footer-brand"><BrandMark/><span>PRO PLAYERS</span></Link><span>{site.footer}</span><div className="footer-links"><Link to="/information">Information</Link><Link to="/community">Community</Link><Link to="/links">Links <ArrowUpRight size={13}/></Link></div></div><div className="footer-bottom"><span>© {new Date().getUTCFullYear()} PRO PLAYERS. All rights reserved.</span><span>Not affiliated with Mojang or Microsoft.</span></div></footer>
  </div>;
}