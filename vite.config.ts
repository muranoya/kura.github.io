import tailwindcss from "@tailwindcss/vite";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const SRC_DIR = resolve(import.meta.dirname, "src");

// src/ 直下の全 HTML を rollup の entry として自動的に拾う。
// 法務文書ページ (privacy-*, terms-*) は pnpm build 前段の
// generate-legal.ts が src/ に生成する。
function htmlInputs(): Record<string, string> {
  const entries: Record<string, string> = {};
  for (const name of readdirSync(SRC_DIR)) {
    if (!name.endsWith(".html")) continue;
    const key = name.replace(/\.html$/, "");
    entries[key] = resolve(SRC_DIR, name);
  }
  return entries;
}

export default defineConfig({
  plugins: [tailwindcss()],
  root: "src",
  base: "/kura.github.io/",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: htmlInputs(),
    },
  },
});
