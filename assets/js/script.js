const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");

let toggleNav = () => {
  document.body.classList.toggle("nav-open");
};

let closeNav = () => {
  document.body.classList.remove("nav-open");
};

navToggle.addEventListener("click", toggleNav);
//the event listener is attached to each element with the nav-link class
navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});
