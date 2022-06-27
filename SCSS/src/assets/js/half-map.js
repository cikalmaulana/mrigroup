// Half map

    ( function (){

if ($("#mapid_2").length) {

  var map = L.map("mapid_2").setView([51.5, -0.09], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  var LeafIcon = L.Icon.extend({
    options: {
      iconSize: [62, 75],
    },
  });
  var greenIcon = new LeafIcon({ iconUrl: "../assets/images/map-pin.png" }),
    redIcon = new LeafIcon({ iconUrl: "../assets/images/map-pin.png" }),
    orangeIcon = new LeafIcon({ iconUrl: "../assets/images/map-pin.png" });

  L.marker([51.5, -0.09], { icon: greenIcon })
    .bindPopup(
      '<div class="tooltip-block"><div class="container"><div class="row no-gutters"><div class="col-5"><div class="tooltip-img"><a href="#"><img src="../assets/images/tooltip-img-1.jpg" alt="" class="img-fluid"></a></div></div><div class="col-7"><div class="tooltip-content"><h3 class="tooltip-content-title"><a href="#" class="title">Heading for OfficeSpace Title</a></h3><p class="tooltip-content-text">Ahmedabad, Gujarat, India</p><div class="review-content-rating"><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><a href="#" class="ml-2 badge badge-success">5.0</a></div></div></div></div></div></div>'
    )
    .addTo(map);
  L.marker([51.495, -0.083], { icon: redIcon })
    .bindPopup(
      '<div class="tooltip-block"><div class="container"><div class="row no-gutters"><div class="col-5"><div class="tooltip-img"><a href="#"><img src="../assets/images/tooltip-img-1.jpg" alt="" class="img-fluid"></a></div></div><div class="col-7"><div class="tooltip-content"><h3 class="tooltip-content-title"><a href="#" class="title">Heading for OfficeSpace Title</a></h3><p class="tooltip-content-text">Ahmedabad, Gujarat, India</p><div class="review-content-rating"><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><a href="#" class="ml-2 badge badge-success">5.0</a></div></div></div></div></div></div>'
    )
    .addTo(map);
  L.marker([51.49, -0.1], { icon: orangeIcon })
    .bindPopup(
      '<div class="tooltip-block"><div class="container"><div class="row no-gutters"><div class="col-5"><div class="tooltip-img"><a href="#"><img src="../assets/images/tooltip-img-1.jpg" alt="" class="img-fluid"></a></div></div><div class="col-7"><div class="tooltip-content"><h3 class="tooltip-content-title"><a href="#" class="title">Heading for OfficeSpace Title</a></h3><p class="tooltip-content-text">Ahmedabad, Gujarat, India</p><div class="review-content-rating"><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><i class="fas fa-star text-warning"></i><a href="#" class="ml-2 badge badge-success">5.0</a></div></div></div></div></div></div>'
    )
    .addTo(map);

  var popup = L.popup();


}


if ($("#detailMap").length) {


// Detail map

function listingMap(options) {
  var defaults = {
    mapId: "detailMap",
    mapZoom: 16,
    mapCenter: [51.505, -0.09],
    markerShow: true,
    markerPosition: [51.505, -0.09],
    markerPath: "../assets/images/map-pin.png",
    circleShow: false,
    circleColour: "#4E66F8",
    circleFill: "#8798fa",
    circleOpacity: 0.5,
    circleRadius: 500,
    circlePosition: [51.505, -0.09],
  };

  var settings = $.extend({}, defaults, options);

  var icon = L.icon({
    iconUrl: settings.markerPath,
    iconSize: [25, 37.5],
    popupAnchor: [0, -18],
    tooltipAnchor: [0, 19],
  });

  var dragging = false,
    tap = false;

  if ($(window).width() > 700) {
    dragging = true;
    tap = true;
  }

  var detailMap = L.map(settings.mapId, {
    center: settings.mapCenter,
    zoom: settings.mapZoom,
    dragging: dragging,
    tap: tap,
    scrollWheelZoom: false,
  });

  detailMap.once("focus", function () {
    detailMap.scrollWheelZoom.enable();
  });

  L.tileLayer("https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia maps</a>',
    minZoom: 1,
    maxZoom: 19,
  }).addTo(detailMap);

  if (settings.circleShow) {
    L.circle(settings.circlePosition, {
      color: settings.circleColour,
      weight: 1,
      fillColor: settings.circleFill,
      fillOpacity: settings.circleOpacity,
      radius: settings.circleRadius,
    }).addTo(detailMap);
  }

  if (settings.markerShow) {
    L.marker(settings.markerPosition, {
      icon: icon,
    }).addTo(detailMap);
  }
}

listingMap({
  mapId: "detailMap",
  mapZoom: 14,
  mapCenter: [40.732346, -74.0014247],
  circleShow: true,
  circlePosition: [40.732346, -74.0014247],
});


}












    })();
