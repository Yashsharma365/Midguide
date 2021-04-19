mapboxgl.accessToken = 'pk.eyJ1IjoieWFzaC0zNjUiLCJhIjoiY2tuZzIycGw5MXB2ejJubGxucmduM2Q0ayJ9.91yR-OoJrCXiVdy5rkEcUw';

//geolocation//
navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
    enableHighAccuracy:true
})
function successLocation(position){
    console.log(position)
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
  zoom:5.8
});

//markers down below//
var marker = new mapboxgl.Marker()
  .setLngLat([77.3640, 23.2290])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<a href='https://www.google.com'target='_blank' rel='noopener noreferrer'><h3>Van Vihar</h3></a>"))
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