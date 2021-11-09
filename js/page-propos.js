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
  `.vague1,.features__img2, .vague2, .vague3 ,.form-title, .form-contact, .adresse-logo, .logo, .reseaux`,
  {
    interval: 200,
  }
);
