import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";

const site =
  process.env.PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined);

export default defineConfig({
  ...(site ? { site } : {}),
  integrations: [vue()],
  vite: {
    plugins: [tailwindcss()],
  },
});
