import { SITE } from '../config/site';

// Картинки лежат в public/images. Расширение задаётся в src/config/site.js
export const imgSrc = (name) => `${import.meta.env.BASE_URL}images/${name}.${SITE.imageExt}`;

export default function Photo({ name, alt = '', eager = false, className = '', ...rest }) {
  return (
    <img
      src={imgSrc(name)}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      {...rest}
    />
  );
}
