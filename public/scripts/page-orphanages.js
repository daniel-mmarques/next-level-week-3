const map = L.map("mapid").setView([-26.9083339, -49.0798445], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [60, 70],
    iconAnchor: [29, 68],
    popupAnchor: [170, 6]
})

function addMarker({id, name, lat, lng}) {
  const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minwidth: 240,
    minheight: 240
  }).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"> </a>`)

  L.marker([lat, lng], {icon}).addTo(map).bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach((span) => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng
  }

  addMarker(orphanage)
})