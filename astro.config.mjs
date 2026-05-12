import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://bolt-system.github.io",
  base: "/bolt-landing",
  outDir: "./docs",
  integrations: [vue()],
  vite: {
    plugins: [tailwindcss()],
  },
});
