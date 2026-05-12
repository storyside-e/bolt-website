# Bolt Marketing Site

Marketing site for Bolt — Astro + Vue + Tailwind v4.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve dist/ locally
npm test         # runs vitest
```

## Deployment (Vercel)

The site is a **static** Astro build deployed on [Vercel](https://vercel.com/).

1. Import this repo in Vercel and use the **Astro** framework preset (or set **Build Command** to `npm run build` and **Output Directory** to `dist`).
2. Set **`PUBLIC_SITE_URL`** in Vercel → Project → Settings → Environment Variables to your canonical URL (for example `https://your-domain.com`), without a trailing slash. Use this for production and, if you want stable absolute URLs, for preview deployments too.
3. On Vercel, **`VERCEL_URL`** is defined during builds; [`astro.config.mjs`](astro.config.mjs) falls back to `https://${VERCEL_URL}` when `PUBLIC_SITE_URL` is unset (useful for preview builds).

Add new routes by adding files under [`src/pages/`](src/pages/) (for example `src/pages/about.astro` → `/about`). Use [`vercel.json`](https://vercel.com/docs/projects/project-configuration) redirects or rewrites when you need legacy URL mapping.

## Stack

- Astro 5 (static-first, islands architecture)
- Vue 3 (interactive islands)
- Tailwind CSS v4 (CSS-first config in `src/styles/global.css`)
- Vitest + @vue/test-utils + jsdom
- lucide-vue-next (icons, ported from source landing page)
