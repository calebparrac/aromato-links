# AROMATO · Links

Página de enlaces de AROMATO hecha con Astro 5 y Tailwind CSS 4, siguiendo el sistema de diseño de la marca.

## Correr en local

Requiere Node.js 18.20+ (recomendado 20 o 22).

```bash
npm install
npm run dev
```

Abre http://localhost:4321

## Editar enlaces

Todos los enlaces y el número de WhatsApp están en `src/data/links.ts`.

## Publicar

`npm run build` genera un sitio estático en `dist/`, listo para Netlify, Vercel, Cloudflare Pages o GitHub Pages.

## Estructura

- `src/styles/global.css` — tokens del sistema AROMATO como tema de Tailwind (`bg-surface`, `text-ink`, `text-accent-gold`, `rounded-2`…)
- `src/components/` — isotipo, iconos, botón de enlace y botón flotante de WhatsApp
- `src/pages/index.astro` — la página
