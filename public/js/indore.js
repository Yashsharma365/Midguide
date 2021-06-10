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
  center:[75.90790173614812,22.7324378816593],
  zoom:9
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
  .setLngLat([ 75.85484540491237,22.719208089166024 ])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Rajwada</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([75.90790173614812,22.7324378816593])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Khajrana Ganesh temple</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([75.8520484668291,22.718622565699597 ])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Sarafa Market</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([75.7987164443173, 22.517056947370067 ])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Patalpani Waterfall</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([75.84882159751393,22.717478002389996 ])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Kaanch Mandir</h5>"))
  .addTo(map);
new mapboxgl.Marker()
  .setLngLat([75.88358758961287,22.725049584415387 ])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Chappan Dukan</h5>"))
  .addTo(map);
new mapboxgl.Marker()
  .setLngLat([75.96127653557635,22.648314360331128])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Crescent Water Park</h5>"))
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