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
new mapboxgl.Marker({
  color:"#FF0000",
  draggable: true
})
.setLngLat(geo)
.setPopup(new mapboxgl.Popup({ offset: 25 })
.setHTML("<h5>You</h5>"))
.addTo(map);

new mapboxgl.Marker()
  .setLngLat([77.412613, 23.259933])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<a href='places/bhopal'><h5>Bhopal</h5></a>"))
  .addTo(map);
  
new mapboxgl.Marker()
  .setLngLat([75.857727, 22.719568])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<a href='places/indore'><h5>Indore</h5></a>"))
  .addTo(map);
  
new mapboxgl.Marker()
  .setLngLat([79.932613, 24.85])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<a href='places/khajuraho'><h5>Khajuraho</h5></a>"))
  .addTo(map);
  
new mapboxgl.Marker()
  .setLngLat([78.64,25.35 ])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<a href='places/orchha'><h5>Orchha</h5></a>"))
  .addTo(map);
  
new mapboxgl.Marker()
  .setLngLat([78.434585, 22.467446])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<a href='places/pachmarhi'><h5>Pachmarhi</h5></a>"))
  .addTo(map);
  
new mapboxgl.Marker()
  .setLngLat([77.741824, 23.487339])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<a href='places/sanchi'><h5>Sanchi</h5></a>"))
  .addTo(map);
  
new mapboxgl.Marker()
  .setLngLat([75.784910, 23.179301])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<a href='places/ujjain'><h5>Ujjain</h5></a>"))
  .addTo(map);
new mapboxgl.Marker()
  .setLngLat([80.87115,25.19134])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<a href='places/chitrakoot'><h5>Chitrakoot</h5></a>"))
  .addTo(map);  
new mapboxgl.Marker()
  .setLngLat([81.304180, 24.530727])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<a href='places/rewa'><h5>Rewa</h5></a>"))
  .addTo(map);  
new mapboxgl.Marker()
  .setLngLat([79.974380, 23.185884])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<a href='places/jabalpur'><h5>Jabalpur</h5></a>"))
  .addTo(map);
new mapboxgl.Marker()
  .setLngLat([78.182831, 26.218287])
  .setPopup(new mapboxgl.Popup({ offset: 25 })
  .setHTML("<a href='places/gwalior'><h5>Gwalior</h5></a>"))
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