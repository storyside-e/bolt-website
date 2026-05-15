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
    // Stable pre-bundling for large icon packages avoids flaky dev-only
    // "504 Outdated Optimize Dep" responses when the browser keeps an old ?v= hash.
    optimizeDeps: {
      include: ["vue", "lucide-vue-next"],
    },
    ssr: {
      noExternal: ["lucide-vue-next"],
    },
  },
});
