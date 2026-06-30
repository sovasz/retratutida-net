import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://retratutida.net",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/drafts/"),
    }),
  ],
  build: {
    format: "directory",
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
