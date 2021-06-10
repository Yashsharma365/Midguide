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
  center:[75.77722,23.18278],
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
  .setLngLat([ 75.76819735926222,23.183372408055455])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Mahakaleshwar Temple</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([ 75.76507542857794,23.18888532598827])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Ram Ghat</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([ 75.77307394090884,23.16561151940665])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Shipra River</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([75.77783741325356,23.249859965385284])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Kaliadeh Palace</h5>"))
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