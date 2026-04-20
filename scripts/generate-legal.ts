// 法務文書 MD を HTML ページに変換する。
//
// 入力: src/legal/<name>_<lang>.md
// 出力: src/<name>-<lang>.html
//
// source of truth は本体リポジトリ (github.com/muranoya/kura) の
// assets/legal/*.md で、GitHub Actions で src/legal/ に同期される。
// 本スクリプトは vite build の前段で走り、HTML を生成する。

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const SRC_DIR = resolve(SCRIPT_DIR, "../src");
const LEGAL_DIR = resolve(SRC_DIR, "legal");

type Lang = "ja" | "en";

interface Strings {
  back: string;
  title: string;
  footerTagline: string;
  footerGithub: string;
  footerLicense: string;
  footerPrivacy: string;
  footerTerms: string;
  footerContact: string;
}

const STRINGS: Record<Lang, Strings> = {
  ja: {
    back: "← トップに戻る",
    title: "kura",
    footerTagline: "サーバ不要のパスワードマネージャー",
    footerGithub: "GitHub",
    footerLicense: "ライセンス",
    footerPrivacy: "プライバシーポリシー",
    footerTerms: "利用規約",
    footerContact: "連絡先",
  },
  en: {
    back: "← Back to home",
    title: "kura",
    footerTagline: "Serverless password manager",
    footerGithub: "GitHub",
    footerLicense: "License",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Use",
    footerContact: "Contact",
  },
};

function pageTitle(slug: string, lang: Lang): string {
  const map: Record<string, Record<Lang, string>> = {
    privacy: { ja: "プライバシーポリシー", en: "Privacy Policy" },
    terms: { ja: "利用規約", en: "Terms of Use" },
  };
  const base = map[slug]?.[lang] ?? slug;
  return `${base} — kura`;
}

function renderHtml(slug: string, lang: Lang, bodyHtml: string): string {
  const s = STRINGS[lang];
  return `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index,follow" />
    <title>${pageTitle(slug, lang)}</title>
    <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body class="bg-white">
    <header class="border-b border-border">
      <div class="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="./" class="flex items-center gap-2">
          <img src="./assets/kura-icon.svg" alt="kura" class="h-7 w-7" />
          <span class="text-lg font-bold tracking-tight">${s.title}</span>
        </a>
        <a href="./" class="text-sm text-text-secondary hover:text-text-primary transition-colors">${s.back}</a>
      </div>
    </header>

    <main class="mx-auto max-w-3xl px-6 py-12">
      <article class="legal-prose">
${bodyHtml}
      </article>
    </main>

    <footer class="border-t border-border bg-surface py-10">
      <div class="mx-auto flex max-w-3xl flex-col items-center gap-3 px-6 text-center">
        <div class="flex items-center gap-2">
          <img src="./assets/kura-icon.svg" alt="kura" class="h-6 w-6" />
          <span class="text-base font-bold">kura</span>
        </div>
        <p class="text-sm text-text-muted">${s.footerTagline}</p>
        <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-secondary">
          <a href="https://github.com/muranoya/kura" target="_blank" rel="noopener" class="hover:text-text-primary transition-colors">${s.footerGithub}</a>
          <a href="./privacy-${lang}.html" class="hover:text-text-primary transition-colors">${s.footerPrivacy}</a>
          <a href="./terms-${lang}.html" class="hover:text-text-primary transition-colors">${s.footerTerms}</a>
          <a href="mailto:daisuke.muraoka.jp@gmail.com" class="hover:text-text-primary transition-colors">${s.footerContact}</a>
          <a href="https://github.com/muranoya/kura/blob/main/LICENSE" target="_blank" rel="noopener" class="hover:text-text-primary transition-colors">${s.footerLicense}</a>
        </div>
      </div>
    </footer>
  </body>
</html>
`;
}

interface Doc {
  slug: string;
  lang: Lang;
  mdPath: string;
  outPath: string;
}

function discoverDocs(): Doc[] {
  const entries = readdirSync(LEGAL_DIR);
  const docs: Doc[] = [];
  for (const name of entries) {
    const match = name.match(/^([a-z]+)_(ja|en)\.md$/);
    if (!match) continue;
    const [, slug, lang] = match;
    docs.push({
      slug,
      lang: lang as Lang,
      mdPath: resolve(LEGAL_DIR, name),
      outPath: resolve(SRC_DIR, `${slug}-${lang}.html`),
    });
  }
  return docs;
}

function main(): void {
  mkdirSync(LEGAL_DIR, { recursive: true });
  const docs = discoverDocs();
  if (docs.length === 0) {
    console.warn("No legal MDs found under src/legal/. Skipping.");
    return;
  }
  for (const doc of docs) {
    const md = readFileSync(doc.mdPath, "utf-8");
    const html = marked.parse(md, { async: false }) as string;
    const page = renderHtml(doc.slug, doc.lang, html);
    writeFileSync(doc.outPath, page, "utf-8");
    console.log(`Generated: ${doc.outPath.replace(SRC_DIR, "src")}`);
  }
}

main();
