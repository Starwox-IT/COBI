const header = document.querySelector("header");
const logos = document.querySelectorAll(".logo");
const hamburgers = document.querySelectorAll(".hamburger");
const nav = document.querySelector("nav");
const scrollWatcher = document.createElement("div");

const toggle_nav = () => {
  header.classList.toggle("is_mobile");
  logos.forEach((logo) => logo.classList.toggle("hidden"));
  hamburgers.forEach((burger) => burger.classList.toggle("hidden"));
  nav.classList.toggle("hidden");
};

hamburgers.forEach((burger) => burger.addEventListener("click", toggle_nav));

header.before(scrollWatcher);
scrollWatcher.setAttribute("data-scroll-watcher", "");

headerIntersection = new IntersectionObserver((entries) => {
  isIntersecting = entries[0].isIntersecting;
  header.classList.toggle("sticky", !isIntersecting);
});

headerIntersection.observe(scrollWatcher);
