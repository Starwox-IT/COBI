const header = document.querySelector("header");
const logos = document.querySelectorAll(".logo");
const hamburgers = document.querySelectorAll(".hamburger");
const nav = document.querySelector("nav");
const scrollWatcher = document.createElement("div");
const passwordInput = document.querySelector("#password");
const eyes = document.querySelector(".eyes img");

// Toggle Functionality for navigation
const toggle_nav = () => {
  header.classList.toggle("is_mobile");
  logos.forEach((logo) => logo.classList.toggle("hidden"));
  hamburgers.forEach((burger) => burger.classList.toggle("hidden"));
  nav.classList.toggle("hidden");
};

hamburgers.forEach((burger) => burger.addEventListener("click", toggle_nav));

// Change header styling on scroll
header.before(scrollWatcher);
scrollWatcher.setAttribute("data-scroll-watcher", "");

headerIntersection = new IntersectionObserver((entries) => {
  isIntersecting = entries[0].isIntersecting;
  header.classList.toggle("sticky", !isIntersecting);
});

headerIntersection.observe(scrollWatcher);

// Toggle password visibility

const toggle_vision = () => {
  inputType = passwordInput.getAttribute("type");
  if (inputType == "password") {
    passwordInput.setAttribute("type", "text");
    eyes.setAttribute("src", "../../images/open_eyes.png");
  } else {
    passwordInput.setAttribute("type", "password");
    eyes.setAttribute("src", "../../images/eyes.svg");
  }

  console.log("works");
};

eyes.addEventListener("click", toggle_vision);

console.log(passwordInput, eyes);
