## Learned User Preferences

- When visible landing copy changes in `src/content/home/` or in `src/components/landing/LandingExperience.vue`, keep `tests/landing-experience.spec.ts` in sync so string assertions do not fall out of date.
- The in-page product preview (section `#preview` in `LandingExperience.vue`) is a frequent review target; validate flex overflow, text contrast, and small metric or chip UIs in the mock’s fixed dimensions, not only at full-page width.

## Learned Workspace Facts

- Production hosting targets **Vercel** static output (`dist/`); set `PUBLIC_SITE_URL` for canonical `site` in builds (see README). Do not reintroduce GitHub Pages patterns (`base` subpath, `docs/` as `outDir`, `.nojekyll`).
- bolt-landing is an Astro 5 + Vue 3 app; the long-form marketing page and embedded product mock are largely in `src/components/landing/LandingExperience.vue` (e.g. `#preview`).
- The marketing live preview is intentionally non-interactive for a full Settings experience: `showScreen` blocks the settings route and the sidebar Settings control is disabled; re-enabling that flow is a product decision, not a casual refactor.
- Local dev: `npm run dev` (Astro) usually serves on `http://localhost:4321/`; `ERR_CONNECTION_REFUSED` to that origin typically means the dev server is not running or a different port was printed in the terminal.
- `package.json` sets `npm test` to `vitest run` for a single, non-watch test pass.
