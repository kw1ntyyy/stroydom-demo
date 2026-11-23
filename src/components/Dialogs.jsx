import { SITE } from '../config/site';
import { GUARANTEE_TERMS } from '../data/content';
import { formatPrice } from '../utils';
import Modal from './Modal';
import Photo from './Photo';
import { Arrow, Bath, Bed, Check, Clock, PlayIcon, Ruler } from './Icons';

export default function Dialogs({ modal, onClose }) {
  const open = !!modal;
  const { type, data } = modal || {};

  return (
    <Modal open={open} onClose={onClose} label="Подробности" wide={type === 'project' || type === 'video'}>
      {type === 'project' && (
        <div className="dlg dlg--project">
          <Photo name={data.image} alt={`${data.title} ${data.area} м²`} className="dlg__img" />
          <div className="dlg__body">
            <p className="eyebrow">Проект · {data.floors}</p>
            <h3>{data.title} {data.area} м²</h3>
            <p className="dlg__price">от {formatPrice(data.price)}</p>
            <p>{data.text}</p>
            <ul className="specs">
              <li><Ruler size={18} /><b>{data.area} м²</b><span>площадь</span></li>
              <li><Bed size={18} /><b>{data.bedrooms}</b><span>спальни</span></li>
              <li><Bath size={18} /><b>{data.baths}</b><span>санузла</span></li>
              <li><Clock size={18} /><b>{data.term}</b><span>под ключ</span></li>
            </ul>
            <ul className="ticks">
              {data.features.map((f) => <li key={f}><Check size={14} />{f}</li>)}
            </ul>
            <div className="dlg__actions">
              <a href="#lead" className="btn btn--dark" onClick={onClose}>Получить смету <Arrow size={14} /></a>
              <button className="btn btn--soft" onClick={onClose}>Закрыть</button>
            </div>
          </div>
        </div>
      )}

      {type === 'package' && (
        <div className="dlg dlg--simple">
          <p className="eyebrow">Комплектация</p>
          <h3>{data.name}</h3>
          <p className="dlg__price">от {formatPrice(data.price)}</p>
          <ul className="ticks">
            {data.full.map((f) => <li key={f}><Check size={14} />{f}</li>)}
          </ul>
          <div className="dlg__actions">
            <a href="#lead" className="btn btn--dark" onClick={onClose}>Получить смету <Arrow size={14} /></a>
            <button className="btn btn--soft" onClick={onClose}>Закрыть</button>
          </div>
        </div>
      )}

      {type === 'guarantee' && (
        <div className="dlg dlg--simple">
          <p className="eyebrow">Гарантии</p>
          <h3>Сроки гарантии по видам работ</h3>
          <table className="terms">
            <tbody>
              {GUARANTEE_TERMS.map(([a, b]) => (
                <tr key={a}><td>{a}</td><td>{b}</td></tr>
              ))}
            </tbody>
          </table>
          <p className="muted">Условия гарантии фиксируются в договоре. Технадзор проверяет каждый этап до приёмки.</p>
          <div className="dlg__actions">
            <a href="#lead" className="btn btn--dark" onClick={onClose}>Получить смету <Arrow size={14} /></a>
          </div>
        </div>
      )}

      {type === 'video' && (
        <div className="dlg dlg--video">
          {SITE.videoUrl ? (
            <iframe
              src={SITE.videoUrl}
              title="Видео о строительстве"
              allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="dlg__video-ph">
              <Photo name="stages" alt="" />
              <div>
                <span className="play play--static"><PlayIcon size={26} /></span>
                <b>Видео о строительстве</b>
                <span>Здесь будет ролик о ходе работ. Ссылка задаётся в настройках сайта.</span>
              </div>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}
