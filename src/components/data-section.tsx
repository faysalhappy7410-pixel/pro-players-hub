import type { ReactNode } from 'react';
export function DataSection({ title, children }: { title: string; children: ReactNode }) {
  return <section className="data-section"><h2>{title}</h2>{children}</section>;
}
export function ContentList({ items }: { items: readonly { title: string; description: string; status?: string }[] }) {
  return <div className="content-list">{items.map(item => <article className="content-list-item" key={item.title}><div><h3>{item.title}</h3><p>{item.description}</p></div>{item.status && <span className="coming-soon">{item.status}</span>}</article>)}</div>;
}