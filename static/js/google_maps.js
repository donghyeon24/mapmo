function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 25, lng: 20 },
    zoom: 3,
    disableDefaultUI: true,
    styles: [
      {
        featureType: 'water',
        stylers: [
          {
            color: '#0e171d',
          },
        ],
      },
      {
        featureType: 'landscape',
        stylers: [
          {
            color: '#1e303d',
          },
        ],
      },
      {
        featureType: 'road',
        stylers: [
          {
            color: '#1e303d',
          },
        ],
      },
      {
        featureType: 'poi.park',
        stylers: [
          {
            color: '#1e303d',
          },
        ],
      },
      {
        featureType: 'transit',
        stylers: [
          {
            color: '#182731',
          },
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'labels.icon',
        stylers: [
          {
            color: '#f0c514',
          },
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#1e303d',
          },
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#e77e24',
          },
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#94a5a6',
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'simplified',
          },
          {
            color: '#e84c3c',
          },
        ],
      },
      {
        featureType: 'poi',
        stylers: [
          {
            color: '#e84c3c',
          },
          {
            visibility: 'off',
          },
        ],
      },
    ],
  });

  // Create an array of alphabetical characters used to label the markers.
  const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  // Options to pass along to the marker clusterer
  const clusterOptions = {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    gridSize: 100,
    zoomOnClick: false,
    maxZoom: 10,
  };

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, clusterOptions);


  const miniMap = new google.maps.Map(document.getElementById('mini-map'), {
    center: { lat: 25, lng: 20 },
    zoom: 3,
    disableDefaultUI: true,
    styles: [
      {
        featureType: 'water',
        stylers: [
          {
            color: '#0e171d',
          },
        ],
      },
      {
        featureType: 'landscape',
        stylers: [
          {
            color: '#1e303d',
          },
        ],
      },
      {
        featureType: 'road',
        stylers: [
          {
            color: '#1e303d',
          },
        ],
      },
      {
        featureType: 'poi.park',
        stylers: [
          {
            color: '#1e303d',
          },
        ],
      },
      {
        featureType: 'transit',
        stylers: [
          {
            color: '#182731',
          },
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'labels.icon',
        stylers: [
          {
            color: '#f0c514',
          },
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#1e303d',
          },
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#e77e24',
          },
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#94a5a6',
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'simplified',
          },
          {
            color: '#e84c3c',
          },
        ],
      },
      {
        featureType: 'poi',
        stylers: [
          {
            color: '#e84c3c',
          },
          {
            visibility: 'off',
          },
        ],
      },
    ],
  });
  new google.maps.Marker({
    position: center,
    map,
    title: 'Hello World!',
  });
}
