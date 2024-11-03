import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), db()],
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  build: {
    inlineStylesheets: "always"
  },
  output: "server",
  vite: {
    build: {
      cssMinify: "lightningcss"
    },
    ssr: {
      noExternal: ["path-to-regexp"]
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import 'src/pages/dashboard/assets/scss/styles.scss';`
        }
      }
    }
  }
});
