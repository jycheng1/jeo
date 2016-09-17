function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(40.4406,-79.9959), // centered at pittsburgh
    zoom: 15,
  };
  // if you have location services on, the map will center to your location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
     initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     map.setCenter(initialLocation);
     });
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  // service = new google.maps.places.PlacesService(map);
  // service.nearbySearch(request, callback);
}



