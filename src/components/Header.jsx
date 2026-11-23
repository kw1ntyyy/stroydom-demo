import { useEffect, useState } from 'react';
import { SITE } from '../config/site';
import { NAV } from '../data/content';
import { Arrow, Logo, Menu, Close } from './Icons';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="container header__bar">
        <a href="#top" className="logo" aria-label={`${SITE.name} — на главную`}>
          <Logo size={34} strokeWidth={1.4} />
          <span>{SITE.name}</span>
        </a>

        <nav className="header__nav" aria-label="Основная навигация">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
        </nav>

        <a href="#lead" className="btn btn--light btn--sm header__cta">
          Получить смету <Arrow size={14} />
        </a>

        <button
          className="header__burger"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
        >
          {open ? <Close size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className="header__panel">
        {NAV.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
        ))}
        <a href="#lead" className="btn btn--light" onClick={() => setOpen(false)}>
          Получить смету <Arrow size={16} />
        </a>
      </div>
    </header>
  );
}
