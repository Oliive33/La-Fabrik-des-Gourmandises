const contLoader = document.querySelector(".loader");

window.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("premierChargement") === null) {
    contLoader.classList.add("fondu-out");
  } else {
    contLoader.style.display = "none";
  }

  sessionStorage.setItem("premierChargement", "done");
});
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
