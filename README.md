# Sivasakthi PVC & Aluminium Works

Professional PVC interior and installation website built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run lint
npm run build
```

The deployable files are generated in `dist/`.

## Deployment

Upload the contents of `dist/` to a static host such as Netlify, Vercel, or any host that supports single-page applications. The `public/_redirects` file is included for Netlify so React Router URLs continue to work after refresh.

Because the app uses `BrowserRouter`, configure another hosting provider to rewrite unknown routes to `/index.html`.

## Content updates

- Company details and service data: `src/data/site.js`
- English/Tamil copy: `src/data/translations.js`
- Logo: `public/sivasakthi-logo.png`
- Global styling: `src/App.css`
