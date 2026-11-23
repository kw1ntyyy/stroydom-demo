import { useState } from 'react';
import { formatPhone } from '../utils';
import { Arrow, NoteArrow } from './Icons';
import { Reveal } from '../hooks/useReveal';

export default function LeadForm({ onSuccess }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (name.trim().length < 2) next.name = 'Введите имя — минимум 2 буквы';
    if (phone.replace(/\D/g, '').length !== 11) next.phone = 'Введите номер полностью: +7 (999) 999-99-99';
    setErrors(next);
    if (Object.keys(next).length) return;
    onSuccess(name.trim());
    setName('');
    setPhone('');
  };

  return (
    <Reveal className="lead" id="lead" delay={100}>
      <img src={`${import.meta.env.BASE_URL}images/tree.svg`} alt="" className="lead__tree" />
      <h2>Оставьте заявку <br />на бесплатную смету</h2>
      <p className="lead__lead">Ответим в течение 15 минут <br />и рассчитаем точную стоимость</p>

      <form className="lead__form" onSubmit={submit} noValidate>
        <div className="field">
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            autoComplete="name"
            aria-label="Ваше имя"
            aria-invalid={!!errors.name}
            value={name}
            onChange={(e) => { setName(e.target.value); setErrors((v) => ({ ...v, name: undefined })); }}
          />
          {errors.name && <span className="field__err" role="alert">{errors.name}</span>}
        </div>
        <div className="field">
          <input
            type="tel"
            name="phone"
            inputMode="tel"
            placeholder="+7 (999) 999-99-99"
            autoComplete="tel"
            aria-label="Телефон"
            aria-invalid={!!errors.phone}
            value={phone}
            onChange={(e) => { setPhone(formatPhone(e.target.value)); setErrors((v) => ({ ...v, phone: undefined })); }}
          />
          {errors.phone && <span className="field__err" role="alert">{errors.phone}</span>}
        </div>
        <button type="submit" className="btn btn--dark btn--block">
          Получить смету <Arrow size={14} />
        </button>
      </form>

      <div className="lead__note" aria-hidden="true">
        <NoteArrow className="lead__arrow" />
        <span>Бесплатно <br />и без обязательств</span>
      </div>
    </Reveal>
  );
}
