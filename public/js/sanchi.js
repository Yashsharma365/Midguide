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
  center:[ 77.73952,23.48759],
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
  .setLngLat([77.73952,23.48759])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Great Stupa and Bowl</h5>"))
  .addTo(map);


new mapboxgl.Marker()
  .setLngLat([77.739683, 23.479223])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Ashok Pillar</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([ 77.7722, 23.5363])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Udayagiri Caves</h5>"))
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