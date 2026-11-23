const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
const I = (children, vb = '0 0 24 24') => ({ size = 20, ...p }) => (
  <svg viewBox={vb} width={size} height={size} {...base} {...p}>{children}</svg>
);

export const Logo = I(<><path d="M3 12 12 4l9 8" /><path d="M5.5 10.5V20h13v-9.5" /><path d="M9.5 20v-6h5v6" /><path d="M16 7V4.5h2V9" /></>, '0 0 24 24');
export const HouseIcon = I(<><path d="M3 12 12 4l9 8" /><path d="M5.5 10.5V20h13v-9.5" /><path d="M10 20v-5h4v5" /></>);
export const ShieldIcon = I(<><path d="M12 3 5 6v5.5c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3Z" /><path d="m8.8 12 2.3 2.3 4.2-4.6" /></>);
export const StarIcon = I(<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.3 2.8 1-5.9L3.5 9.7l5.9-.8L12 3.5Z" />);
export const Arrow = I(<><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>);
export const ArrowDown = I(<><path d="M12 5v14" /><path d="m6 13 6 6 6-6" /></>);
export const Check = I(<path d="m5 12.5 4.5 4.5L19 7.5" />);
export const Close = I(<><path d="M6 6l12 12" /><path d="M18 6 6 18" /></>);
export const Menu = I(<><path d="M4 8h16" /><path d="M4 16h16" /></>);
export const Bed = I(<><path d="M3 18V7" /><path d="M3 14h18v4" /><path d="M21 14v-2.5A2.5 2.5 0 0 0 18.5 9H11v5" /><circle cx="7" cy="11" r="1.6" /></>);
export const Bath = I(<><path d="M4 12h16v2.5A4.5 4.5 0 0 1 15.5 19h-7A4.5 4.5 0 0 1 4 14.5V12Z" /><path d="M6 12V6.5A2.5 2.5 0 0 1 8.5 4 2.5 2.5 0 0 1 11 6" /><path d="M7 19.5 6 21M17 19.5l1 1.5" /></>);
export const Ruler = I(<><rect x="3" y="8" width="18" height="8" rx="1.5" /><path d="M7 8v3M11 8v4M15 8v3M19 8v2" /></>);
export const Clock = I(<><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>);
export const Telegram = I(<path d="M20.5 4.5 3.7 11c-.9.4-.9 1.1-.2 1.3l4.3 1.3 1.7 5.2c.2.6.4.8.9.8.4 0 .6-.2.9-.5l2.1-2 4.3 3.2c.8.4 1.4.2 1.6-.8l2.9-13.6c.3-1.2-.4-1.8-1.7-1.4ZM8 13.3l8.6-5.4c.4-.3.8-.1.5.2l-7 6.4-.3 3.1L8 13.3Z" fill="currentColor" stroke="none" />);
export const Youtube = I(<><rect x="3" y="6" width="18" height="12" rx="3.5" /><path d="m10.5 9.5 4 2.5-4 2.5v-5Z" fill="currentColor" /></>);
export const Vk = I(<path d="M12.8 17.5C7 17.5 3.7 13.5 3.5 7h2.9c.1 4.7 2.2 6.700 3.900 7.100V7h2.700v4.100c1.700-.2 3.400-2.100 4-4.100h2.700c-.4 2.500-2.200 4.300-3.500 5 1.300.6 3.300 2.200 4.100 5.500h-3c-.6-1.900-2.100-3.300-4.300-3.500v3.500h-.3Z" fill="currentColor" stroke="none" />);
export const PlayIcon = I(<path d="M8.5 5.800v12.400a.6.6 0 0 0 .9.5l10-6.200a.6.6 0 0 0 0-1L9.400 5.300a.6.6 0 0 0-.9.500Z" fill="currentColor" stroke="none" />);
export const NoteArrow = ({ ...p }) => (
  <svg viewBox="0 0 70 34" width="70" height="34" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="M68 6C48 2 26 8 8 24" /><path d="M7 14.500 6 25.500l11-2.500" />
  </svg>
);
