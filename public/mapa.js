const map = L.map('map').setView([-23.55680857344921, -46.734749298708394], 16);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


L.marker([-23.55680857344921, -46.734749298708394]).addTo(map)