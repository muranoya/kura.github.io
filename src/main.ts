import { detectLang, getLang, setLang } from "./i18n";

// --- Language ---
const lang = detectLang();
setLang(lang);

const langToggle = document.getElementById("lang-toggle")!;
const langToggleMobile = document.getElementById("lang-toggle-mobile")!;

function updateLangButtons(): void {
  const label = getLang() === "en" ? "JA" : "EN";
  langToggle.textContent = label;
  langToggleMobile.textContent = label;
}

function toggleLang(): void {
  setLang(getLang() === "en" ? "ja" : "en");
  updateLangButtons();
}

langToggle.addEventListener("click", toggleLang);
langToggleMobile.addEventListener("click", toggleLang);
updateLangButtons();

// --- Mobile nav ---
const menuBtn = document.getElementById("menu-btn")!;
const mobileNav = document.getElementById("mobile-nav")!;
menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
});
// Close mobile nav on link click
mobileNav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => mobileNav.classList.add("hidden"));
});

// --- Header scroll effect ---
const header = document.getElementById("header")!;
window.addEventListener("scroll", () => {
  header.classList.toggle("header-scrolled", window.scrollY > 10);
});

// --- Scroll reveal ---
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// --- Smooth scroll for anchor links ---
document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href")!);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
