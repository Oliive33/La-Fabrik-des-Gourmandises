// Scroll up
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // Si on le scroll est supérieur ou égale à 200vh
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  delay: 1800,
  // reset: true
});

sr.reveal(`.titre-principal,.activite, .traiteur`);
sr.reveal(`.patisserie, .localisation, .about`, {
  interval: 200,
});

// =================Loader====================//
const loader = document.querySelector(".loader");

function load() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.className += " hidden";
    }, 1300);
  });
}
load();

// =================Btn Toggle====================//
const btnMenu = document.querySelector(".titre-logos");
const menu = document.querySelector(".nav-links");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const allLinks = document.querySelectorAll(".item-nav");

allLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
