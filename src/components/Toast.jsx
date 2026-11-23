import { useEffect } from 'react';
import { Check } from './Icons';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return undefined;
    const t = setTimeout(onClose, 5000);
    return () => clearTimeout(t);
  }, [message, onClose]);

  if (!message) return null;
  return (
    <div className="toast" role="status" onClick={onClose}>
      <span className="toast__icon"><Check size={16} /></span>
      <div>
        <b>{message.title}</b>
        <span>{message.text}</span>
      </div>
    </div>
  );
}
