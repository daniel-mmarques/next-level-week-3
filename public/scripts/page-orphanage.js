const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

const map = L.map("mapid", options).setView([lat, lng], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [60, 70],
    iconAnchor: [29, 68],
    popupAnchor: [170, 6]
})

L.marker([lat, lng], {icon}).addTo(map);

function selectImage(event) {
  const button = event.currentTarget
  const buttons = document.querySelectorAll(".images button")

  buttons.forEach(removeActiveClass)

  function removeActiveClass(button) {
    button.classList.remove("active")
  }

  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")
  const imageContainerCopy = imageContainer.src

  imageContainer.src = image.src
  image.src = imageContainerCopy

  button.classList.add("active")
}