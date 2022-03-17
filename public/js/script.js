const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");
const portfolioContainer = $(".portfolio-container");
const portfolioItem = $(".portfolio-item");
const portfolioInfoToggle = $(".portfolio-info");

let toggleNav = () => {
  document.body.classList.toggle("nav-open");
};

let closeNav = () => {
  document.body.classList.remove("nav-open");
};

let toggleInfoOn = (event) => {
  let link = $(event.target.closest(".portfolio-item"));
  let paragraph = $(link.children()[1]).addClass("portfolio-info-toggle");
};

let toggleInfoOff = (event) => {
  let link = $(event.target.closest(".portfolio-item"));
  let paragraph = $(link.children()[1]).removeClass("portfolio-info-toggle");
};

navToggle.addEventListener("click", toggleNav);
//the event listener is attached to each element with the nav-link class
navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

portfolioContainer.on("mouseover", toggleInfoOn);
portfolioContainer.on("mouseout", toggleInfoOff);
portfolioItem.focusin(toggleInfoOn);
portfolioItem.focusout(toggleInfoOff);
