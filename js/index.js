//Map
function initMap() {
  // Map option
  let options = {
    center: { lat: 47.038868, lng: -1.6408137 },
    zoom: 13,
  };
  //New Map
  map = new google.maps.Map(document.getElementById("map"), options);

  //Marker
  const marker = new google.maps.Marker({
    position: { lat: 47.0276091, lng: -1.6335115 },
    map: map,
    icon: `ressources/logos/markers.png`,
  });
  // infowindow
  const detailWindow = new google.maps.InfoWindow({
    content: `<h4 class="title-window">La Fabri'K des Gourmandises</h4>
      <span class="txt-window">Traiteur et Pâtisseries</span>
      <p class="post-code">9 impasse du Petit Pailler
      </p>
      <p class="post-code">44310 St Philbert de Grand Lieu</p>,
  `,
  });
  marker.addListener("mouseover", () => {
    detailWindow.open(map, marker);
  });
}

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

const btnMenu = document.querySelector(".image-patisserie");
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
