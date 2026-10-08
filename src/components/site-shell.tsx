import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, Menu, X, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandMark } from './brand';
import { siteSettings as site } from '@/data/siteSettings';
const navigation = site.navigation;
import landscape from '@/assets/minecraft-landscape.jpg';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="site-shell">
    <img className="world-background" src={landscape} alt="" width={1920} height={1024}/>
    <header className="site-header"><div className="header-inner">
      <Link to="/" className="brand" aria-label={site.labels.home}><BrandMark/><span>{site.name.split(" ")[0]} <span className="text-primary">{site.name.split(" ").slice(1).join(" ")}</span><small>{site.subtitle}</small></span></Link>
      <nav className="desktop-nav" aria-label={site.labels.mainNavigation}>{navigation.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} activeProps={{ className: 'nav-active' }}>{item.label}</Link>)}</nav>
      <Button asChild variant="gaming" className="header-join"><Link to="/information"><Gamepad2/> {site.labels.joinServer} <ArrowUpRight/></Link></Button>
      <Button variant="ghost" size="icon" className="mobile-toggle" aria-label={open ? site.labels.closeMenu : site.labels.openMenu} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} onKeyDown={event => { if (event.key === "Escape") setOpen(false); }}>{open ? <X/> : <Menu/>}</Button>
    </div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label={site.labels.mobileNavigation}>{navigation.map(item => <Link key={item.to} to={item.to} activeOptions={{ exact: true }} activeProps={{ className: 'nav-active' }} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav>}</header>
    <main>{children}</main>
    <footer className="site-footer"><div className="footer-inner"><Link to="/" className="footer-brand"><BrandMark/><span>{site.name}</span></Link><span>{site.labels.footer}</span><div className="footer-links">{navigation.filter(item => item.to !== "/").map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div></div><div className="footer-bottom"><span>{site.labels.copyright}</span><span>{site.labels.disclaimer}</span></div></footer>
  </div>;
}