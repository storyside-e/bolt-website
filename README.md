# Bolt Marketing Site

Marketing site for Bolt — Astro + Vue + Tailwind v4.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm test         # runs vitest
```

## Stack

- Astro 5 (static-first, islands architecture)
- Vue 3 (interactive islands)
- Tailwind CSS v4 (CSS-first config in `src/styles/global.css`)
- Vitest + @vue/test-utils + jsdom
- lucide-vue-next (icons, ported from source landing page)
