import { GUARANTEE_POINTS } from '../data/content';
import Photo from './Photo';
import { Arrow, Check, ShieldIcon } from './Icons';
import { Reveal } from '../hooks/useReveal';

export default function Guarantees({ onOpen }) {
  return (
    <Reveal className="guarantee" id="guarantees">
      <Photo name="guarantee" alt="" className="guarantee__bg" />
      <div className="guarantee__shade" />
      <div className="guarantee__body">
        <ShieldIcon size={46} strokeWidth={1.2} />
        <h2>Гарантии <br />на все виды работ</h2>
        <p>
          Мы уверены в качестве нашей работы, поэтому предоставляем гарантию на строительство до 5 лет.
        </p>
        <ul>
          {GUARANTEE_POINTS.map((t) => (
            <li key={t}><Check size={14} />{t}</li>
          ))}
        </ul>
        <button className="link-underline link-underline--light" onClick={() => onOpen('guarantee')}>
          Узнать подробнее <Arrow size={14} />
        </button>
      </div>
    </Reveal>
  );
}
