//Tipos de dados
//String ""
//Number 01
//Object {}
//Boolean true or false
//Array[]

//Create Map
const map = L.map("mapid").setView([-20.0263689, -48.9377522], 15 );

//Create and add a tile Layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Create Icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});


function addMarker({id,name,lat,lng}) {  
  //Creat PopUp Overlay
  const popup = L
  .popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  })
  .setContent(
    `${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>`
  );

  //Create Marker
  L.marker([lat, lng],{ icon })
  .addTo(map)
  .bindPopup(popup)

}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach(span => {
  const orphanage = {
    id:span.dataset.id,
    name:span.dataset.name,
    lat:span.dataset.lat,
    lng:span.dataset.lng
  }

  addMarker(orphanage)
})