console.log(coordinates)

var map = L.map('map').setView(coordinates, 10);

L.tileLayer(`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=U10hSHIvqdSYiMN6iXFj`, {
    maxZoom: 19,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

var marker = L.marker(coordinates).addTo(map)
.bindPopup(`<h4>This is where you will be!</h4>`)
.openPopup();