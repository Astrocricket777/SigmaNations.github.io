var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -5
});
map.createPane('labels');
map.getPane('labels').style.zIndex = 650;
map.getPane('labels').style.pointerEvents = 'none';

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetMap, ©CartoDB'
}).addTo(map);

var bounds = [[0,0], [1000, 1500]];
var image = L.imageOverlay('Image2.png', bounds).addTo(map);
map.fitBounds(bounds);



var marker = L.marker([538.125, 368.21875]).addTo(map);
marker.bindTooltip("City of Uruk", {permanent: true, className: "my-label", offset: [0, 0] });
marker.addTo(map);

var polygon = L.polygon([
    [525.5, 345.1875],
    [526.1875, 385.375],
    [563.5, 384.859375],
    [563.140625, 345.242188]
]).addTo(map);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString() + " - (Not MC coords)")
        .openOn(map);
}

map.on('click', onMapClick);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
