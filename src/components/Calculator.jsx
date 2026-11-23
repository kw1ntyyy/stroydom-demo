import { useState } from 'react';
import { SITE } from '../config/site';
import { formatPrice } from '../utils';
import Photo from './Photo';
import { Arrow } from './Icons';
import { Reveal } from '../hooks/useReveal';

export default function Calculator() {
  const { min, max, step, initial, ratePerM2 } = SITE.calc;
  const [area, setArea] = useState(initial);
  const progress = ((area - min) / (max - min)) * 100;

  return (
    <Reveal className="calc" id="calculator" delay={100}>
      <Photo name="calc" alt="" className="calc__bg" />
      <div className="calc__body">
        <h2>Рассчитайте стоимость <br />по площади</h2>
        <p className="calc__lead">Узнайте ориентировочную цену <br />вашего дома за 1 минуту</p>

        <div className="calc__row">
          <label htmlFor="area">Площадь дома, м²</label>
          <output htmlFor="area">{area} м²</output>
        </div>
        <input
          id="area"
          className="range"
          type="range"
          min={min}
          max={max}
          step={step}
          value={area}
          style={{ '--p': `${progress}%` }}
          onChange={(e) => setArea(Number(e.target.value))}
        />
        <div className="calc__scale"><span>{min}</span><span>{max}</span></div>

        <div className="calc__result" aria-live="polite">
          <span>Ориентировочно</span>
          <b>от {formatPrice(area * ratePerM2)}</b>
          <small>Комплектация «Базовая». Точную цену покажет смета.</small>
        </div>

        <a href="#lead" className="btn btn--light btn--block">
          Рассчитать стоимость <Arrow size={16} />
        </a>
      </div>
    </Reveal>
  );
}
