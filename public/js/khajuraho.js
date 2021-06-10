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
  center:[79.9216, 24.8520],
  zoom:8
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
  .setLngLat([79.55, 24.51])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Lakshmana Temple</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([79.9216, 24.8520])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Matangeshwar Temple</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([79.9417, 24.5905])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Panna National Park</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([ 79.92154866422717 ,24.853443453874576])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Sound and Light Show</h5>"))
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