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

var bounds = [[0,500], [1000, 1500]];
var image = L.imageOverlay('image2.png', bounds).addTo(map);
map.fitBounds(bounds);



var marker = L.marker([749.96875, 745.390625]).addTo(map);
marker.bindTooltip("City of Uruk", {permanent: true, className: "my-label", offset: [0, 0] });
marker.addTo(map);

var marker2 = L.marker([807.5625, 836.6875]).addTo(map);
marker2.bindTooltip("Bargot River", {permanent: true, className: "my-label", offset: [0, 0] });
marker2.addTo(map);

var marker3 = L.marker([747.75, 914.25]).addTo(map);
marker3.bindTooltip("Chentary Lake", {permanent: true, className: "my-label", offset: [0, 0] });
marker3.addTo(map);

var polygon = L.polygon([
    [743.09375, 729.703125],
    [743.21875, 757.3125],
    [764.225586, 756.905273],
    [764.09375, 729.708984]
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
