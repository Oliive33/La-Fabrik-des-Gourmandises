// Slider portfolio
const sliderPortfolio = document.querySelector(".slider-portfolio");
const srcEnCoursSlider = document.querySelector(".img-visible-slider");
const allPicsPortfolio = Array.from(
  document.querySelectorAll(".grid-item img")
);
const rightPorfolio = document.querySelector(".btn-right");
const leftPorfolio = document.querySelector(".btn-left");
const fermerSlide = document.querySelector(".btn-fermer-slider");

let photoEnCours;
let indexEnCours;

allPicsPortfolio.forEach((item) => {
  item.addEventListener("click", (e) => {
    sliderPortfolio.style.display = "block";
    srcEnCoursSlider.src = e.target.src;
    photoEnCours = e.target;
    indexEnCours = allPicsPortfolio.indexOf(photoEnCours);
    console.log(indexEnCours);
  });
});
rightPorfolio.addEventListener("click", () => {
  if (indexEnCours === 5) {
    indexEnCours = 0;
    srcEnCoursSlider.src = allPicsPortfolio[indexEnCours].src;
    photoEnCours = allPicsPortfolio[indexEnCours];
    console.log(indexEnCours);
    return;
  }

  srcEnCoursSlider.src = allPicsPortfolio[indexEnCours + 1].src;
  photoEnCours = allPicsPortfolio[indexEnCours + 1];
  indexEnCours = allPicsPortfolio.indexOf(photoEnCours);
  console.log(indexEnCours);
});
leftPorfolio.addEventListener("click", () => {
  if (indexEnCours === 0) {
    indexEnCours = 5;
    srcEnCoursSlider.src = allPicsPortfolio[indexEnCours].src;
    photoEnCours = allPicsPortfolio[indexEnCours];
    console.log(indexEnCours);
    return;
  }

  srcEnCoursSlider.src = allPicsPortfolio[indexEnCours - 1].src;
  photoEnCours = allPicsPortfolio[indexEnCours - 1];
  indexEnCours = allPicsPortfolio.indexOf(photoEnCours);
  console.log(indexEnCours);
});

fermerSlide.addEventListener("click", () => {
  sliderPortfolio.style.display = "none";
});
/*=============== SCROLL REVEAL ANIMATION Galerie ===============*/
const src = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  delay: 1000,
  // reset: true
});

src.reveal(`.arrow-left, .title-galerie, .titles-galerie-secondary`);
src.reveal(
  `.item1, .item2, .item3 ,.item4, .item5, .item6, .txt-photos, .adresse-logo, .logo, .reseaux`,
  {
    interval: 200,
  }
);
