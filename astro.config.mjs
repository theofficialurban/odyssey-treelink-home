import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercelAdapter from "@astrojs/vercel";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/blog": "/",
  },
  site: "https://urbanodyssey.xyz",
  base: "odyssey-treelink-home",
  integrations: [tailwind(), sitemap(), icon()],
});
