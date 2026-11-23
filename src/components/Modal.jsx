import { useEffect, useRef } from 'react';
import { Close } from './Icons';

export default function Modal({ open, onClose, label, wide = false, children }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const prev = document.activeElement;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prev?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="modal" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className={`modal__box${wide ? ' modal__box--wide' : ''}`} role="dialog" aria-modal="true" aria-label={label}>
        <button ref={closeRef} className="modal__close" onClick={onClose} aria-label="Закрыть">
          <Close size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}
