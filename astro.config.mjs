// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://studynotes.jekyllhyn.workers.dev/",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      langs: [], // 不额外加载 mermaid 语言
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
