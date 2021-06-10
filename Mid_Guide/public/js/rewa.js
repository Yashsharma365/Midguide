mapboxgl.accessToken = 'pk.eyJ1IjoieWFzaC0zNjUiLCJhIjoiY2tuZzIycGw5MXB2ejJubGxucmduM2Q0ayJ9.91yR-OoJrCXiVdy5rkEcUw';

//geolocation//
navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
    enableHighAccuracy:true
})
function successLocation(position){
    console.log(position)
    var geo =[position.coords.longitude,position.coords.latitude]
    setupMap([position.coords.longitude,position.coords.latitude]);
}
function errorLocation(){
    setupMap([77.4126,23.2599])
}
function setupMap(geo){
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center:[81.299110,24.530727],
  zoom:10
});

//markers down below//
new mapboxgl.Marker({
  color:"#FF0000",
  draggable: true
})
.setLngLat(geo)
.setPopup(new mapboxgl.Popup({ offset: 25 })
.setHTML("<h5>You</h5>"))
.addTo(map);

new mapboxgl.Marker()
  .setLngLat([81.82877359838497, 24.761608980543492 ])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Bahuti Waterfall</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([ 81.45288946771704, 24.817228195848752])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Keoti Waterfall</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([ 81.66285745981196, 24.93185960273292])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Deur Kothar</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([ 81.26543855860852, 24.785957477631914])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Purwa Falls</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([ 81.24793785964995,24.428769350442995])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Mukundpur Zoo</h5>"))
  .addTo(map);
new mapboxgl.Marker()
  .setLngLat([ 81.51006046760025,24.453890562581098])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Bhairavnath Statue</h5>"))
  .addTo(map);
new mapboxgl.Marker()
  .setLngLat([ 81.27719239031838,24.374511998146016])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Govindgarh Palace</h5>"))
  .addTo(map);



//navigation//
const nav = new mapboxgl.NavigationControl();
map.addControl(nav);
const directions = new MapboxDirections({
accessToken: mapboxgl.accessToken,
unit:'metric'
  });
map.addControl(directions, 'top-left');
}