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
  center:geo,
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
  .setLngLat([77.3640, 23.2290])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Van Vihar</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([77.3877, 23.2432])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Lake View</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([77.3759657, 23.2162633])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Sair Sapata</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([ 77.392802, 23.262934])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Taj-ul-Masajid</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([77.5784,23.0992])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Bhojpur</h5>"))
  .addTo(map);
new mapboxgl.Marker()
  .setLngLat([77.4299, 23.2327])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>DB Mall</h5>"))
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