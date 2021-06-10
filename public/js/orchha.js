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
  center:[78.64,25.35],
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
  .setLngLat([ 78.65144324438296,25.383521472055154])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Ram Raja Temple</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([78.62878265177598, 25.36935589716768])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Orchha Fort</h5>"))
  .addTo(map);


new mapboxgl.Marker()
  .setLngLat([  78.63975915231673,25.35081381663213])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Chaturbhuj Temple</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([ 78.63082548300271,25.353592428091524])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Lakshmi Narayan Temple</h5>"))
  .addTo(map);
new mapboxgl.Marker()
  .setLngLat([78.63766511368495, 25.34460912984208])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>The Chhatris</h5>"))
  .addTo(map);
new mapboxgl.Marker()
  .setLngLat([78.64346333697311, 25.347708155557566])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Betwa River</h5>"))
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