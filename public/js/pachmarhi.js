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
  center:[ 78.34381667418317,22.47104483183184],
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
  .setLngLat([ 78.14381667418317,22.57104483183184])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Satpura National Park</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([78.37100182131319,22.45177881478331 ])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Dhoopgarh</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([78.42530275085724,22.440337356817842])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Handi Khoh</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([  78.43241973154798,22.459076406417335])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Pandava Caves</h5>"))
  .addTo(map);

new mapboxgl.Marker()
  .setLngLat([78.43982803552711,22.48259727756356])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Jata Shankar Caves</h5>"))
  .addTo(map);
new mapboxgl.Marker()
  .setLngLat([78.44495262812046,22.452901960027248])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<h5>Rajat Pratap Waterfall</h5>"))
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