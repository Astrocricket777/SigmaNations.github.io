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
var image = L.imageOverlay('Image2.png', bounds).addTo(map);
map.fitBounds(bounds);



var marker = L.marker([749.96875, 745.390625]).addTo(map);
marker.bindTooltip("Uruk", {permanent: true, className: "my-label", offset: [0, 0] });
marker.addTo(map);

var marker2 = L.marker([807.5625, 836.6875]).addTo(map);
marker2.bindTooltip("Bargot River", {permanent: true, className: "my-label", offset: [0, 0] });
marker2.addTo(map);

var marker3 = L.marker([747.75, 914.25]).addTo(map);
marker3.bindTooltip("Chentary Lake", {permanent: true, className: "my-label", offset: [0, 0] });
marker3.addTo(map);

var marker4 = L.marker([757.421875, 659.78125]).addTo(map);
marker4.bindTooltip("Kish", {permanent: true, className: "my-label", offset: [0, 0] });
marker4.addTo(map);

var polygon = L.polygon([
    [743.09375, 729.703125],
    [743.21875, 757.3125],
    [764.225586, 756.905273],
    [764.09375, 729.708984]
    
], {color: 'red'}).addTo(map);


var polygon2 = L.polygon([
    [761.203125, 666.15625],
    [762.203125, 662.453125],
    [761.25, 658.046875],
    [759.828125, 657.078125],
    [754.625, 656.9375],
    [753.46875, 658.359375],
    [753.296875, 664.484375],
    [756.75, 668.5],
    [758.25, 668.71875]
    
], {color: 'red'}).addTo(map);

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
