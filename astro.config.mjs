import { defineConfig } from "astro/config";
import rehypeCoall from "./src/lib/rehype-coall.mjs";

export default defineConfig({
  site: "https://coall.example", // [à confirmer] domaine définitif
  trailingSlash: "ignore",
  markdown: {
    rehypePlugins: [rehypeCoall],
    shikiConfig: { theme: "github-dark-dimmed" },
  },
});
