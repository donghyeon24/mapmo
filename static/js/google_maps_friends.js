function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 25, lng: 20 },
    zoom: 3,
    disableDefaultUI: true,
    styles: [
      {
        featureType: "water",
        stylers: [
          {
            color: "#cfeae4",
          },
        ],
      },
      {
        featureType: "landscape",
        stylers: [
          {
            color: "#fbebc7",
          },
        ],
      },
      {
        featureType: "road",
        stylers: [
          {
            color: "#1e303d",
          },
        ],
      },
      {
        featureType: "poi.park",
        stylers: [
          {
            color: "#1e303d",
          },
        ],
      },
      {
        featureType: "transit",
        stylers: [
          {
            color: "#182731",
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.icon",
        stylers: [
          {
            color: "#f0c514",
          },
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1e303d",
          },
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#e77e24",
          },
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#94a5a6",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "labels",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            color: "#B70046",
          },
        ],
      },
      {
        featureType: "poi",
        stylers: [
          {
            color: "#b70046",
          },
          {
            visibility: "off",
          },
        ],
      },
    ],
  });

  const miniMap = new google.maps.Map(document.getElementById("mini-map"), {
    center: { lat: 25, lng: 20 },
    zoom: 3,
    disableDefaultUI: true,
    styles: [
      {
        featureType: "water",
        stylers: [
          {
            color: "#cfeae4",
          },
        ],
      },
      {
        featureType: "landscape",
        stylers: [
          {
            color: "#fbebc7",
          },
        ],
      },
      {
        featureType: "road",
        stylers: [
          {
            color: "#1e303d",
          },
        ],
      },
      {
        featureType: "poi.park",
        stylers: [
          {
            color: "#1e303d",
          },
        ],
      },
      {
        featureType: "transit",
        stylers: [
          {
            color: "#182731",
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.icon",
        stylers: [
          {
            color: "#f0c514",
          },
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1e303d",
          },
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#e77e24",
          },
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#94a5a6",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "labels",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            color: "#B70046",
          },
        ],
      },
      {
        featureType: "poi",
        stylers: [
          {
            color: "#B70046",
          },
          {
            visibility: "off",
          },
        ],
      },
    ],
  });
  new google.maps.Marker({
    position: center,
    map,
    title: "Hello World!",
  });
}
