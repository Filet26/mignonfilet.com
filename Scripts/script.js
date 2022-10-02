// Main Script

// Nav
const header = document.querySelector("header");
const hamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

let hamburgerOpen = false;

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

hamburger.addEventListener("click", () => {
  if (!hamburgerOpen) {
    navLinks.classList.toggle("show-nav-links");
    hamburger.classList.toggle("hamburger-off");
  } else {
    navLinks.classList.remove("show-nav-links");
    hamburger.classList.remove("hamburger-off");
    hamburgerOpen = false;
  }
});

// Button for meat
const grow_btn = document.getElementById("meatbuttongrow");
const shrink_btn = document.getElementById("meatbuttonsmall");

const meatimg = document.getElementById("meatpic");
let size = 200;
grow_btn.addEventListener("click", function onClick() {
  if (size < 400) {
    size += 20;
    meatimg.style.width = `${size}px`;
  }
});

shrink_btn.addEventListener("click", function onClick() {
  if (size > 20) {
    size -= 20;
    meatimg.style.width = `${size}px`;
  }
});
