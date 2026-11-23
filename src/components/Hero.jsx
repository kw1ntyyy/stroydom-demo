import Photo from './Photo';
import { STATS } from '../data/content';
import { Arrow, ArrowDown, HouseIcon, ShieldIcon, StarIcon } from './Icons';

const ICONS = { house: HouseIcon, shield: ShieldIcon, star: StarIcon };

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img src={`${import.meta.env.BASE_URL}images/hero.jpg`} alt="Современный дом с панорамным остеклением в сосновом лесу" loading="eager" className="hero__bg" />
      <div className="hero__shade" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <h1>
            Строим дома <br className="br-d" />
            для <span>комфортной жизни</span>
          </h1>
          <p>
            Современные дома под ключ <br className="br-d" />
            с гарантией и прозрачными условиями
          </p>
          <div className="hero__actions">
            <a href="#calculator" className="btn btn--light btn--lg">
              Рассчитать стоимость <Arrow size={16} />
            </a>
            <a href="#projects" className="link-circle">
              Узнать больше
              <span className="circle"><Arrow size={14} /></span>
            </a>
          </div>
        </div>

        <div className="hero__foot">
          <ul className="stats">
            {STATS.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <li key={s.value}>
                  <Icon size={30} strokeWidth={1.3} className="stats__icon" />
                  <div>
                    <b>{s.value}</b>
                    <span>{s.label[0]}<br />{s.label[1]}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <a href="#projects" className="scroll-hint">
            Листайте вниз <span className="circle"><ArrowDown size={14} /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
