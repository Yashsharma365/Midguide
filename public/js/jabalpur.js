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
  center:[79.93333,23.16667],
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
  .setLngLat([ 79.81364635046964,23.126102495364872])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Dhuandhar Falls</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([ 79.89993333521643,23.193331075009358])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Kachnar City</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([ 80.60936719115765,22.33455266076201])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Kanha National Park</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([  79.92515673136411,23.113496717415906])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Gwarighat</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([ 79.90457699707059,23.149808157564628])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Balancing Rock</h5>"))
  .addTo(map);
new mapboxgl.Marker()
  .setLngLat([ 79.90175118911422,23.14929771982329])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Madan Mahal Fort</h5>"))
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