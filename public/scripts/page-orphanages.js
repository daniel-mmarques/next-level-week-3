const map = L.map("mapid").setView([-26.9083339, -49.0798445], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [60, 70],
    iconAnchor: [29, 68],
    popupAnchor: [170, 6]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minwidth: 240,
    minheight: 240
  }).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" > </a>')

L.marker([-26.9083339, -49.0798445], {icon}).addTo(map).bindPopup(popup);