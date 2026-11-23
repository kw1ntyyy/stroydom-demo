import { SITE } from '../config/site';
import { NAV } from '../data/content';
import { Logo, Telegram, Vk, Youtube } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <a href="#top" className="logo" aria-label={`${SITE.name} — наверх`}>
          <Logo size={34} strokeWidth={1.4} />
          <span>{SITE.name}</span>
        </a>

        <nav className="footer__nav" aria-label="Навигация в подвале">
          {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>

        <div className="footer__social">
          <a href={SITE.telegram} target="_blank" rel="noreferrer" aria-label="Telegram"><Telegram size={20} /></a>
          <a href={SITE.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><Youtube size={22} /></a>
          <a href={SITE.vk} target="_blank" rel="noreferrer" aria-label="ВКонтакте"><Vk size={22} /></a>
        </div>

        <a href={SITE.phoneHref} className="footer__phone">{SITE.phone}</a>

        <a href={SITE.telegram} target="_blank" rel="noreferrer" className="btn btn--outline btn--sm">
          <Telegram size={15} /> Написать в Telegram
        </a>
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {SITE.name}. Строительство домов под ключ. Демонстрационный сайт.</span>
        <a href="#top">Политика конфиденциальности</a>
      </div>
    </footer>
  );
}
