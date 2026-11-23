import { PACKAGES } from '../data/content';
import { formatPrice } from '../utils';
import Photo from './Photo';
import { Arrow, Check } from './Icons';
import { Reveal } from '../hooks/useReveal';

export default function Packages({ onOpen }) {
  return (
    <Reveal className="packages" id="packages">
      <p className="eyebrow">Комплектации</p>
      <h2>3 уровня комплектации <br />для любых задач</h2>

      <div className="packages__grid">
        {PACKAGES.map((p) => (
          <article key={p.id} className={`pkg${p.popular ? ' pkg--popular' : ''}`}>
            {p.popular && <span className="pkg__badge">Популярная</span>}
            <Photo name={p.image} alt={`Дом в комплектации «${p.name}»`} className="pkg__img" />
            <div className="pkg__body">
              <h3>{p.name}</h3>
              <p className="pkg__price">от {formatPrice(p.price)}</p>
              <ul>
                {p.short.map((f) => (
                  <li key={f}><Check size={13} />{f}</li>
                ))}
              </ul>
              <button className={`btn btn--sm btn--block ${p.popular ? 'btn--dark' : 'btn--soft'}`} onClick={() => onOpen('package', p)}>
                Подробнее <Arrow size={14} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
