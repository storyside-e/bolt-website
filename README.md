# Bolt Marketing Site

Marketing site for Bolt — Astro + Vue + Tailwind v4.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run dev:clean   # if dev shows 504 / "Outdated Optimize Dep" or islands fail to hydrate
npm run build    # outputs to dist/
npm run preview  # serve dist/ locally
npm test         # runs vitest
```

### Vue islands fail / `504 Outdated Optimize Dep`

Vite stores optimized dependencies in `node_modules/.vite`. After config or dependency changes, the dev server can invalidate that cache while the browser still requests an old `?v=` URL for files like `lucide-vue-next.js`, which returns **504 (Outdated Optimize Dep)**. Then dynamic imports for [`LandingExperience.vue`](src/components/landing/LandingExperience.vue) fail and **[astro-island] Error hydrating** appears — **no Vue handlers run** (e.g. Schedule a demo appears dead).

Use **`npm run dev:clean`** (or delete `node_modules/.vite` and run **`npm run dev`**) and hard-reload the page (**⌘⇧R** / Ctrl+Shift+R).

## Deployment (Vercel)

The site is a **static** Astro build deployed on [Vercel](https://vercel.com/).

1. Import this repo in Vercel and use the **Astro** framework preset (or set **Build Command** to `npm run build` and **Output Directory** to `dist`).
2. Set **`PUBLIC_SITE_URL`** in Vercel → Project → Settings → Environment Variables to your canonical URL (for example `https://your-domain.com`), without a trailing slash. Use this for production and, if you want stable absolute URLs, for preview deployments too.
3. On Vercel, **`VERCEL_URL`** is defined during builds; [`astro.config.mjs`](astro.config.mjs) falls back to `https://${VERCEL_URL}` when `PUBLIC_SITE_URL` is unset (useful for preview builds).

Add new routes by adding files under [`src/pages/`](src/pages/) (for example `src/pages/about.astro` → `/about`). Use [`vercel.json`](https://vercel.com/docs/projects/project-configuration) redirects or rewrites when you need legacy URL mapping.

## Schedule a demo (form submission)

The **Schedule a demo** modal (`ScheduleDemoModal.vue`) POSTs JSON when the user confirms. Configure one of these patterns:

1. **Formspree (or similar)** — Set **`PUBLIC_DEMO_FORM_ENDPOINT`** to your form URL (for example `https://formspree.io/f/your-id`). The payload includes `_replyto`, `_subject`, `preferredDate`, `preferredTime`, `fullName`, `email`, `company`, and `fleetSize`.
2. **Web3Forms** — Set **`PUBLIC_DEMO_FORM_ENDPOINT`** to `https://api.web3forms.com/submit` and set **`PUBLIC_DEMO_FORM_ACCESS_KEY`** to your access key; it is merged into the JSON body as `access_key`.

For local development, add the same variables to a root `.env` (gitignored).

If `PUBLIC_DEMO_FORM_ENDPOINT` is unset (or the POST fails), the modal falls back to opening the user's email client with a prefilled `mailto:sales@boltsystem.com` containing all booking details — so a lead is never silently dropped, even before the endpoint is wired up.

## Stack

- Astro 5 (static-first, islands architecture)
- Vue 3 (interactive islands)
- Tailwind CSS v4 (CSS-first config in `src/styles/global.css`)
- Vitest + @vue/test-utils + jsdom
- lucide-vue-next (icons, ported from source landing page)
