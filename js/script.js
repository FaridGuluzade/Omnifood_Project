"use strict";

const header = document.querySelector(".header");
const btnMobile = document.querySelector(".btn-mobile-nav");
const nav = document.querySelector(".main-nav");
const sectionHero = document.querySelector(".section-hero");
const body = document.querySelector("body");
const yearEl = document.querySelector(".year");

// Make mobile navigation work
btnMobile.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Set current year
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Sticky navigation
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) body.classList.add("sticky");
  else body.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-80px`,
});

headerObserver.observe(sectionHero);
