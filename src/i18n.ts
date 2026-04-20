export type Lang = "en" | "ja";

const translations: Record<string, Record<Lang, string>> = {
  // Header
  "nav.features": { en: "Features", ja: "特徴" },
  "nav.how": { en: "How It Works", ja: "仕組み" },
  "nav.download": { en: "Download", ja: "ダウンロード" },

  // Hero
  "hero.title": {
    en: "Your passwords.<br>Your storage.<br>No server required.",
    ja: "パスワードも、ストレージも、自分の手に。<br>サーバー不要。",
  },
  "hero.subtitle": {
    en: "A serverless password manager that stores your encrypted vault on S3-compatible storage you control.",
    ja: "S3互換ストレージに暗号化vaultを保存する、サーバー不要のパスワードマネージャー。",
  },
  "hero.cta.download": { en: "Download", ja: "ダウンロード" },
  "hero.cta.github": { en: "View on GitHub", ja: "GitHubで見る" },

  // Features
  "features.title": { en: "Features", ja: "特徴" },
  "features.noserver.title": { en: "No Server Required", ja: "サーバー不要" },
  "features.noserver.desc": {
    en: "Your vault is a single encrypted file on S3-compatible storage you control. No proprietary server, no subscription.",
    ja: "vaultはS3互換ストレージ上の暗号化ファイル1つだけ。専用サーバーもサブスクも不要。",
  },
  "features.encryption.title": {
    en: "Zero-Knowledge Encryption",
    ja: "ゼロ知識暗号化",
  },
  "features.encryption.desc": {
    en: "AES-256-GCM encryption with Argon2id key derivation. All cryptography happens on your device — keys never leave it.",
    ja: "AES-256-GCM暗号化とArgon2id鍵導出。すべての暗号処理はデバイス上で完結。",
  },
  "features.multiplatform.title": {
    en: "Multi-Platform",
    ja: "マルチプラットフォーム",
  },
  "features.multiplatform.desc": {
    en: "Desktop (Windows, macOS, Linux), Android, and browser extensions — all sharing the same Rust core library.",
    ja: "デスクトップ・Android・ブラウザ拡張。すべて同一のRustコアライブラリを共有。",
  },
  "features.nolockin.title": {
    en: "No Vendor Lock-in",
    ja: "ベンダーロックインなし",
  },
  "features.nolockin.desc": {
    en: "Use AWS S3, Cloudflare R2, MinIO, or any S3-compatible storage. Switch providers anytime — your data is yours.",
    ja: "AWS S3・Cloudflare R2・MinIO等、好きなS3互換ストレージを使用。いつでも乗り換え可能。",
  },
  "features.oss.title": { en: "Open Source", ja: "オープンソース" },
  "features.oss.desc": {
    en: "Fully open-source under Apache 2.0. Audit the code, build from source, contribute — it's all yours.",
    ja: "Apache 2.0ライセンスで完全オープンソース。コード監査・ビルド・コントリビュート自由。",
  },

  // How It Works
  "how.title": { en: "How It Works", ja: "仕組み" },
  "how.step1.label": { en: "Your Device", ja: "デバイス" },
  "how.step2.label": { en: "vault.json", ja: "vault.json" },
  "how.step3.label": { en: "Your S3 Bucket", ja: "S3バケット" },
  "how.arrow1": { en: "encrypt", ja: "暗号化" },
  "how.arrow2": { en: "store", ja: "保存" },
  "how.detail1.title": {
    en: "Client-Side Encryption",
    ja: "クライアントサイド暗号化",
  },
  "how.detail1.desc": {
    en: "Your master password derives encryption keys via Argon2id. Data is encrypted with AES-256-GCM before leaving your device.",
    ja: "マスターパスワードからArgon2idで暗号鍵を導出。データはAES-256-GCMで暗号化されてからデバイスを出ます。",
  },
  "how.detail2.title": {
    en: "Single Encrypted File",
    ja: "単一の暗号化ファイル",
  },
  "how.detail2.desc": {
    en: "Your entire vault is one JSON file. No database, no server infrastructure. Simple, portable, and easy to back up.",
    ja: "vault全体が1つのJSONファイル。データベースもサーバーも不要。シンプルで持ち運び可能。",
  },
  "how.detail3.title": { en: "Shared Rust Core", ja: "共有Rustコア" },
  "how.detail3.desc": {
    en: "The same vault-core library compiles to native code, JNI, and WebAssembly. Identical behavior across all platforms.",
    ja: "同一のvault-coreライブラリがネイティブ・JNI・WASMにコンパイル。全プラットフォームで同一の動作。",
  },

  // Download
  "download.title": { en: "Download", ja: "ダウンロード" },
  "download.notice": {
    en: "kura has not reached its first stable release yet. Use at your own risk.",
    ja: "kuraはまだ安定版リリースに達していません。自己責任でご利用ください。",
  },
  "download.platforms": {
    en: "Supported Platforms",
    ja: "対応プラットフォーム",
  },
  "download.btn": {
    en: "Download",
    ja: "ダウンロード",
  },

  // Getting Started
  "start.title": { en: "Getting Started", ja: "はじめ方" },
  "start.step1.title": { en: "1. Download", ja: "1. ダウンロード" },
  "start.step1.desc": {
    en: "Download kura for your platform from the links above.",
    ja: "上のリンクからお使いのプラットフォーム用のkuraをダウンロード。",
  },
  "start.step2.title": {
    en: "2. Set Up Storage",
    ja: "2. ストレージの設定",
  },
  "start.step2.desc": {
    en: "Configure your S3-compatible storage — AWS S3, Cloudflare R2, or MinIO.",
    ja: "S3互換ストレージを設定 — AWS S3・Cloudflare R2・MinIOなど。",
  },
  "start.step3.title": {
    en: "3. Start Managing",
    ja: "3. パスワード管理開始",
  },
  "start.step3.desc": {
    en: "Create your master password and start storing credentials securely.",
    ja: "マスターパスワードを作成して、安全なパスワード管理を開始。",
  },

  // Footer
  "footer.tagline": {
    en: "Serverless password manager",
    ja: "サーバー不要のパスワードマネージャー",
  },
  "footer.privacy": {
    en: "Privacy Policy",
    ja: "プライバシーポリシー",
  },
  "footer.terms": {
    en: "Terms of Use",
    ja: "利用規約",
  },
  "footer.contact": {
    en: "Contact",
    ja: "連絡先",
  },
};

let currentLang: Lang = "en";

export function detectLang(): Lang {
  const saved = localStorage.getItem("kura-lang");
  if (saved === "en" || saved === "ja") return saved;
  return navigator.language.startsWith("ja") ? "ja" : "en";
}

export function setLang(lang: Lang): void {
  currentLang = lang;
  localStorage.setItem("kura-lang", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll<HTMLAnchorElement>("a[data-lang-href]").forEach((a) => {
    a.href = a.dataset.langHref!.replace("{lang}", lang);
  });
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n!;
    const entry = translations[key];
    if (entry) {
      const text = entry[currentLang];
      // Safe: translations are hardcoded constants, never user input
      if (text.includes("<br>")) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    }
  });
}

export function getLang(): Lang {
  return currentLang;
}
