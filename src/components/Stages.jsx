import { STAGES } from '../data/content';
import Photo from './Photo';
import { Arrow, PlayIcon } from './Icons';
import { Reveal } from '../hooks/useReveal';

export default function Stages({ onOpen }) {
  return (
    <Reveal className="stages" id="stages" delay={100}>
      <div className="stages__text">
        <p className="eyebrow">Этапы строительства</p>
        <h2>Прозрачный процесс <br />от фундамента до ключей</h2>
        <ol className="steps">
          {STAGES.map((s, i) => (
            <li key={s.title}>
              <span className="steps__num">{i + 1}</span>
              <div>
                <b>{s.title}</b>
                <span>{s.text}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="stages__media" id="video">
        <div className="stages__shape">
          <Photo name="stages" alt="Каркас дома на этапе возведения" />
        </div>
        <button className="play" onClick={() => onOpen('video')} aria-label="Смотреть видео о строительстве">
          <PlayIcon size={26} />
        </button>
        <button className="stages__link" onClick={() => onOpen('video')}>
          Смотреть видео <br />о строительстве <Arrow size={14} />
        </button>
      </div>
    </Reveal>
  );
}
