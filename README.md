# SPG Static Site

Премиальный статический one-page сайт агентства SPG на `React + TypeScript + Vite + Tailwind CSS + Framer Motion`, подготовленный под публикацию на GitHub Pages.

## Стек

- `React`
- `TypeScript`
- `Vite`
- `Tailwind CSS`
- `Framer Motion`
- `lucide-react`
- статические данные в `src/data/cases.ts`
- `localStorage` только для cookie banner

## Быстрый запуск

```bash
npm install
npm run dev
```

Сборка production:

```bash
npm run build
```

Предпросмотр production-сборки:

```bash
npm run preview
```

## Где менять base path для GitHub Pages

Vite берёт base path из переменной окружения `VITE_BASE_PATH` в [vite.config.ts](/c:/Users/Admin/Desktop/Proga/WEB/spgsite/vite.config.ts).

По умолчанию:

- локально используется `/`
- в GitHub Actions автоматически подставляется `/${repo-name}/`

Если нужно собрать сайт вручную под репозиторий `spgsite`, используйте:

```bash
$env:VITE_BASE_PATH="/spgsite/"
npm run build
```

Если сайт будет опубликован в корне домена, используйте:

```bash
$env:VITE_BASE_PATH="/"
npm run build
```

## Структура проекта

```text
.
├─ .github/workflows/deploy.yml
├─ public/
│  ├─ favicon.svg
│  ├─ og-cover.svg
│  ├─ privacy.html
│  └─ terms.html
├─ src/
│  ├─ components/
│  ├─ data/
│  │  ├─ cases.ts
│  │  └─ site-content.ts
│  ├─ App.tsx
│  ├─ index.css
│  ├─ main.tsx
│  └─ types.ts
├─ index.html
├─ tailwind.config.js
├─ postcss.config.js
├─ tsconfig*.json
└─ vite.config.ts
```

## Контент и кейсы

- Все кейсы находятся в [src/data/cases.ts](/c:/Users/Admin/Desktop/Proga/WEB/spgsite/src/data/cases.ts)
- Навигация, ниши, услуги, процесс и контакты находятся в [src/data/site-content.ts](/c:/Users/Admin/Desktop/Proga/WEB/spgsite/src/data/site-content.ts)

## Деплой на GitHub Pages

1. Запушить проект в репозиторий GitHub.
2. В настройках репозитория открыть `Settings → Pages`.
3. В качестве источника выбрать `GitHub Actions`.
4. Убедиться, что основная ветка называется `main`, либо скорректировать её в [.github/workflows/deploy.yml](/c:/Users/Admin/Desktop/Proga/WEB/spgsite/.github/workflows/deploy.yml).
5. После пуша workflow сам соберёт `dist` и опубликует сайт.

## Важные ограничения

- Сайт полностью статический.
- Нет backend, SSR, API routes, server actions и Node.js-сервера после сборки.
- Legal-страницы лежат как отдельные статические файлы `privacy.html` и `terms.html`.
