"use strict";

const siteNav = document.querySelector(".site-nav");
const hero = document.querySelector("#home");

function updateNavContrast() {
  const navBounds = siteNav.getBoundingClientRect();
  const navCenter = navBounds.top + navBounds.height / 2;
  siteNav.classList.toggle("nav-on-light", hero.getBoundingClientRect().bottom <= navCenter);
}

window.addEventListener("scroll", updateNavContrast, { passive: true });
window.addEventListener("resize", updateNavContrast);
window.addEventListener("pageshow", updateNavContrast);
updateNavContrast();

const hamburger = document.querySelector("[data-hamburger]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const hamburgerSvg = document.querySelector("[data-hamburger-svg]");
const overlayBlur = document.querySelector("[data-overlay-blur]");

function setMenuOpen(open) {
  mobileNav.classList.toggle("active-mobile-nav", open);
  hamburgerSvg.classList.toggle("rotate-hamburger", open);
  overlayBlur.classList.toggle("opacity-0", !open);
  overlayBlur.classList.toggle("pointer-events-none", !open);
  hamburger.setAttribute("aria-expanded", String(open));
  hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

hamburger.addEventListener("click", () => {
  setMenuOpen(hamburger.getAttribute("aria-expanded") !== "true");
});

document.addEventListener("click", (event) => {
  if (!mobileNav.contains(event.target) && !hamburger.contains(event.target)) {
    setMenuOpen(false);
  }
});

document.querySelectorAll("[data-nav-link]").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && hamburger.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    hamburger.focus();
  }
});

window.matchMedia("(min-width: 640px)").addEventListener("change", () => setMenuOpen(false));

if (window.AOS) {
  AOS.init({
    duration: 650,
    easing: "ease-out-cubic",
    once: true,
    disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  });
}
