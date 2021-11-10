/*=============== SCROLL REVEAL ANIMATION A Propos ===============*/
const srv = ScrollReveal({
  origin: "top",
  distance: "70px",
  duration: 2500,
  delay: 1000,
  // reset: true
});

srv.reveal(`.arrow-left, .title-a-propos, .presentation`);
srv.reveal(
  `.vague1,.features__img2, .vague2, .vague3 ,.form-title,.section-form, .logo, .reseaux`,
  {
    interval: 200,
  }
);
// Scroll up
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // Si on le scroll est supérieur ou égale à 200vh
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
