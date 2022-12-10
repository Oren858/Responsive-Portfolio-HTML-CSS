// Show languages bar
const language = document.querySelector(".lang");
const list = document.querySelector(".list");
language.addEventListener("click", (e) => {
  language.classList.toggle("active");
  if (language.classList.contains("active")) {
    list.classList.add("active");
  } else {
    list.classList.remove("active");
  }
});

// Add active class to nav links
const navLinks = Array.from(document.querySelectorAll("nav ul li > a"));
navLinks.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((currentItem) => {
      currentItem.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// Show ul in small devices
const ul = document.querySelector("header nav ul");
const icon = document.querySelector("header .nav-icon");
icon.addEventListener("click", (e) => {
  ul.classList.toggle("active");
});
