# StroyDom — демо-лендинг строительной компании

Демонстрационный сайт для портфолио веб-разработчика. **React + Vite + чистый CSS**, без лишних зависимостей и без backend.

Что внутри: шапка, первый экран, каталог проектов с рабочими фильтрами и карточками-просмотром, калькулятор стоимости по площади, три комплектации, этапы строительства, гарантии, форма заявки на смету (демо), футер с телефоном и Telegram.

> Форма **не отправляет** реальных заявок: после проверки полей показывается уведомление, что это демонстрация.

---

## 1. Запуск локально

Нужен Node.js 18 или новее.

```bash
npm install
npm run dev        # режим разработки: http://localhost:5173
npm run build      # production-сборка в папку dist/
npm run preview    # посмотреть собранный сайт локально
```

## 2. Настройка под себя

Все контакты и параметры — в одном файле **`src/config/site.js`**:

| Параметр | Что меняет |
| --- | --- |
| `name` | Название компании в шапке и футере |
| `phone`, `phoneHref` | Телефон в футере и ссылка `tel:` |
| `telegram`, `youtube`, `vk` | Ссылки в футере и на кнопке «Написать в Telegram» |
| `videoUrl` | Ссылка на видео (`https://www.youtube.com/embed/ID`). Пусто — показывается заглушка |
| `imageExt` | Расширение картинок: `svg` (встроенные иллюстрации) или `jpg` |
| `calc` | Диапазон площади, шаг, стартовое значение и цена за м² в калькуляторе |

Тексты и цены:

- проекты — `src/data/projects.js`
- комплектации, этапы, гарантии, навигация — `src/data/content.js`

## 3. Как заменить иллюстрации на фотографии

Сейчас сайт использует нарисованные SVG-иллюстрации домов (они лежат в `public/images/`), чтобы проект работал сразу, без лицензионных вопросов.

Для портфолио лучше поставить настоящие фотографии:

1. Положите свои файлы в `public/images/` **с теми же именами**, но с расширением `.jpg`:
   `hero.jpg`, `project-1.jpg … project-9.jpg`, `pkg-basic.jpg`, `pkg-optimal.jpg`, `pkg-premium.jpg`, `calc.jpg`, `stages.jpg`, `guarantee.jpg`.
2. В `src/config/site.js` поставьте `imageExt: 'jpg'`.

Рекомендации: `hero.jpg` — 2400×1350 px (дом справа, слева тёмная область под текст); карточки проектов — около 1200×960 px; сжимайте фото (до 300 КБ) через Squoosh или TinyPNG. Фото берите с Unsplash, Pexels или свои — проверьте лицензию.

## 4. Загрузка в GitHub

1. Создайте на github.com пустой репозиторий (например, `stroydom-demo`), **без** README и `.gitignore`.
2. В папке проекта выполните:

```bash
git init
git add .
git commit -m "Initial commit: StroyDom demo landing"
git branch -M main
git remote add origin https://github.com/ВАШ-ЛОГИН/stroydom-demo.git
git push -u origin main
```

Если `npm install` уже запускали, в репозиторий попадёт и `package-lock.json` — это нормально и даже хорошо. Папки `node_modules` и `dist` исключены через `.gitignore`.

## 5. Публикация на Render (бесплатно)

1. Зайдите на [render.com](https://render.com) и войдите через GitHub.
2. **New → Static Site** и выберите ваш репозиторий.
3. Укажите:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. Нажмите **Create Static Site**. Через 1–2 минуты сайт откроется по адресу вида `https://stroydom-demo.onrender.com`.

Дальше каждый `git push` в ветку `main` будет автоматически обновлять сайт.

В репозитории есть `render.yaml` — это необязательный Blueprint для тех, кто предпочитает создавать сервис через **New → Blueprint**. Если сборка на Render идёт на неподходящей версии Node, добавьте переменную окружения `NODE_VERSION` со значением `20`.

## 6. Структура проекта

```
├── index.html
├── package.json
├── vite.config.js
├── render.yaml
├── public/images/        # иллюстрации/фото, favicon
└── src/
    ├── main.jsx          # точка входа
    ├── App.jsx           # порядок секций, модальные окна, уведомление
    ├── config/site.js    # контакты и настройки
    ├── data/             # проекты, комплектации, этапы
    ├── hooks/useReveal.jsx   # плавное появление блоков
    ├── components/       # Header, Hero, Catalog, Calculator, Packages,
    │                     # Stages, Guarantees, LeadForm, Footer, Dialogs …
    └── styles/index.css  # все стили, адаптация под планшет и телефон
```

## 7. Шрифты

Используются Manrope (основной) и Caveat (рукописная подпись у формы), подключаются через Google Fonts в `index.html`. Без интернета сайт откроется с системными шрифтами.
