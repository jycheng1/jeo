var map;
var infowindow;

function myMap() {
  var mapCanvas = document.getElementById("map");
  var locationCenter = {lat: 40.4406, lng: -79.9959};
  var mapOptions = {
    center: locationCenter,
    // center: new google.maps.LatLng(40.4406,-79.9959), // centered at pittsburgh
    zoom: 15,
  };
  map = new google.maps.Map(mapCanvas, mapOptions);
  // if you have location services on, the map will center to your location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
     locationCenter = position.coords.latitude, position.coords.longitude;
     // console.log(locationCenter);
     initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     map.setCenter(initialLocation);
     infowindow = new google.maps.InfoWindow();
    // console.log(map.getCenter().toString());
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    openNow: true,
    location: initialLocation,
    radius: 500,
    type: 'bakery',
    language: 'en',

  }, callback);

  service.nearbySearch({
    openNow: true,
    location: initialLocation,
    radius: 500,
    type: 'restauraunt',
    language: 'en',
  }, callback);

    service.nearbySearch({
    openNow: true,
    location: initialLocation,
    radius: 500,
    type: 'store',
    language: 'en',
  }, callback);

  });
  }
  else{
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
      openNow: true,
      location: initialLocation,
      radius: 500,
      type: 'bakery',
      language: 'en',
    }, callback);

    service.nearbySearch({
      openNow: true,
      location: initialLocation,
      radius: 500,
      type: 'restauraunt',
      language: 'en',

    }, callback);

      service.nearbySearch({
      openNow: true,
      location: initialLocation,
      radius: 500,
      type: 'store',
      language: 'en',
    }, callback);
  }


     // });
  
}

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }


      var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
          parking: {
            icon: iconBase + 'parking_lot_maps.png'
          },
          library: {
            icon: iconBase + 'library_maps.png'
          },
          info: {
            icon: iconBase + 'info-i_maps.png'
          }
        };




      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          // icon: icons[place.type].icon,
          position: place.geometry.location
        });

        // var infoWindow = new google.maps.InfoWindow({
        //   content: "place.weekday_text"
        // });

        google.maps.event.addListener(marker, 'mouseover', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }

