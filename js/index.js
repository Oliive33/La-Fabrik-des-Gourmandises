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
    content: `<h2>La Fabri'K des Gourmandises</h2> 
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
  delay: 400,
  // reset: true
});

sr.reveal(`.titre-principal, .nav-links, .traiteur`);
sr.reveal(`.patisserie, .localisation, .about`, {
  interval: 100,
});
// sr.reveal(`.txt-traiteur, .parallax-traiteur`, { origin: "left" });
// sr.reveal(`.txt-patisserie, .parallax-patisserie`, { origin: "right" });
