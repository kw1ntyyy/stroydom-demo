import { useMemo, useState } from 'react';
import { FILTERS, PROJECTS } from '../data/projects';
import { formatPrice } from '../utils';
import Photo from './Photo';
import { Arrow } from './Icons';
import { Reveal } from '../hooks/useReveal';

const PREVIEW = 3;

export default function Catalog({ onOpen }) {
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState(false);

  const list = useMemo(
    () => PROJECTS.filter((p) => filter === 'all' || p.tags.includes(filter)),
    [filter]
  );
  const shown = expanded ? list : list.slice(0, PREVIEW);
  const allOpen = filter === 'all' && expanded;

  const toggleAll = () => {
    if (allOpen) {
      setExpanded(false);
    } else {
      setFilter('all');
      setExpanded(true);
    }
  };

  return (
    <Reveal className="catalog" id="projects">
      <div className="catalog__head">
        <div>
          <p className="eyebrow">Каталог проектов</p>
          <h2>Выберите проект <br />вашего будущего дома</h2>
        </div>
        <button className="link-underline" onClick={toggleAll}>
          {allOpen ? 'Свернуть' : 'Все проекты'} <Arrow size={14} />
        </button>
      </div>

      <div className="chips" role="group" aria-label="Фильтр проектов">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className={`chip${filter === f.id ? ' is-active' : ''}`}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="catalog__grid" aria-live="polite">
        {shown.map((p) => (
          <button key={`${filter}-${p.id}`} className="pcard" onClick={() => onOpen('project', p)}>
            <Photo name={p.image} alt={`${p.title} ${p.area} м²`} />
            <span className="pcard__price">от {formatPrice(p.price)}</span>
            <span className="pcard__info">
              <span>{p.title}<br />{p.area} м²</span>
              <span className="circle circle--dark"><Arrow size={14} /></span>
            </span>
          </button>
        ))}
        {shown.length === 0 && <p className="muted">В этой категории пока нет проектов.</p>}
      </div>
    </Reveal>
  );
}
