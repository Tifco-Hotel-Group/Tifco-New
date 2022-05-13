$(document).ready(function(){
  $('#owl-banner').owlCarousel({
      items:1,
      margin:0,
      autoplay:true,
      center:true,
      loop:true
  });
     $('#owl-logos').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        lazyLoad: true,
        autoplay:true,
        autoplaySpeed:1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    }); 
    
});

function initMap() {
          var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 7,
              center: new google.maps.LatLng(53.412910, -7.94389),
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              mapTypeControl: false,
              scrollwheel: false,
              styles: [{
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#616161"
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#f5f5f5"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#bdbdbd"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        }, {
            "featureType": "poi.business",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e5e5e5"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#757575"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dadada"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#616161"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#9e9e9e"
            }]
        }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e5e5e5"
            }]
        }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [{
                "color": "#eeeeee"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#526b81"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#526b81"
            }]
        }]
          });  
    var locations = [
        ['<h3>Crowne Plaza Dublin Airport</h3> <p>Park Northwood<br/>Santry<br/>Dublin 9<br/>Ireland<br/>D09 X9X2</p>', 53.404402, -6.245599, 'http://www.tifcohotels.ie/_fileUpload/Image/cp_da.png'],
        ['<h3>Holiday Inn Express Dublin Airport</h3> <p>Northwood Park<br/>NorthWood<br/>Dublin 9<br/>Ireland<br/>D09 RY17</p>', 53.404275, -6.244526, 'http://www.tifcohotels.ie/_fileUpload/Image/hiExpress.png'],
        ['<h3>Crowne Plaza Dublin - Blanchardstown</h3> <p>The Blanchardstown Centre<br/>Dublin 15<br/>Ireland<br/>D15 T1FD</p>', 53.395652, -6.389966, 'http://www.tifcohotels.ie/_fileUpload/Image/cp_b.png'],
        ['<h3>Clontarf Castle Hotel</h3> <p>Castle Ave<br/>Clontarf<br/>Dublin 3<br/>Ireland<br/>D03 W5N0</p>', 53.364754, -6.206846, 'http://www.tifcohotels.ie/_fileUpload/Image/clontarf_logo.png'],
        ['<h3>Hilton Dublin Kilmainham</h3> <p>South Circular Road<br/>Kilmainham<br/>Dublin 8<br/>Ireland<br/>D08 XAK3</p>', 53.342411, -6.308169, 'http://www.tifcohotels.ie/_fileUpload/Image/hilton.png'],
        ['<h3>Parliament Hotel</h3> <p>16/18 Lord Edward Street<br/>Dublin 2<br/>Ireland<br/>D02 TD73</p>', 53.344103, -6.268006, 'http://www.tifcohotels.ie/_fileUpload/Image/parliament.png'],
        ['<h3>Crowne Plaza Dundalk</h3> <p>Inner Relief Road<br/>Dundalk<br/>Co. Louth<br/>Ireland<br/>A91 EF88</p>', 53.9803991, -6.3906617, 'http://www.tifcohotels.ie/_fileUpload/Image/cp_dk.png'],
        ['<h3>The Heritage Killenard</h3> <p>Killenard<br/>Co. Laois<br/>Ireland<br/>R32 PW10</p>', 53.133603, -7.151670, 'http://www.tifcohotels.ie/_fileUpload/Image/heritage.png'],
        ['<h3>Athlone Springs Hotel</h3> <p>Athlone<br/>Co. Westmeath<br/>Ireland<br/>N37 F9T3</p>', 53.421144, -7.997189, 'http://www.tifcohotels.ie/_fileUpload/Image/athlone_logo.png'],
        ['<h3>Hotel Killarney</h3> <p>Cork Road<br/>Killarney<br/>Ireland<br/>V93 FX00</p>', 52.060288, -9.484677, 'http://www.tifcohotels.ie/_fileUpload/Image/killarney.png'],
        ['<h3>Innisfallen</h3><p>Fossa<br/>Killarney<br/>Co. Kerry<br/>Ireland<br/>V93 FX00</p>', 52.070643, -9.573754, 'http://www.tifcohotels.ie/_fileUpload/Image/innisfallen-icon-map.png'],
        ['<h3>The Metropole Hotel</h3> <p>MacCurtain Street<br/>Cork City<br/>Ireland<br/>T23 EEC3</p>', 51.901319, -8.467594, 'http://www.tifcohotels.ie/_fileUpload/Image/metropole.png'],
        ['<h3>Cork International Hotel</h3> <p>Cork Airport Business Park<br/>Cork<br/>Co. Cork<br/>Ireland<br/>T12 H516</p>', 51.852083, -8.486338, 'http://www.tifcohotels.ie/_fileUpload/Image/cork_international.png'],
        ['<h3>Cork Airport Hotel</h3> <p>Cork Airport<br/>Co. Cork<br/>Ireland<br/>T12 RPP9</p>', 51.848014, -8.486059, 'http://www.tifcohotels.ie/_fileUpload/Image/cork_airport.png'],
        ['<h3>Travelodge Waterford Hotel</h3> <p>N25 Cork Road<br/>Waterford<br/>Co. Waterford<br/>Ireland<br/>X91 YV04</p>', 52.248430, -7.121480, 'http://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Limerick Ennis Road Hotel</h3> <p>Coonagh Roundabout<br/>Ennis Road<br/>N18<br/>Limerick<br/>Ireland<br/>V94 R990</p>', 52.673351, -8.675873, 'http://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Limerick Castletroy Hotel</h3> <p>Park Point<br/>Castletroy<br/>Dublin Road<br/>Limerick<br/>Ireland<br/>V94 Y83C</p>', 52.664580, -8.585064, 'http://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Galway City Hotel</h3> <p>Joyce Roundabout<br/>Galway City Centre<br/>Tuam Road Galway<br/>Ireland<br/>H91 HX8Y</p>', 53.282843, -9.036276, 'http://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Dublin Phoenix Park Hotel</h3> <p>Auburn Avenue Roundabout<br/>Navan Road<br/>Dublin 15<br/>Ireland<br/>D15 EW29</p>', 53.380359, -6.355205, 'http://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Dublin City Centre</h3> <p>Stephens Green Hotel<br/>Mercer Street Lower<br/>Dublin 2<br/>Ireland<br/>D02 TW61</p>', 53.339576, -6.264111, 'http://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Dublin City Centre Rathmines</h3> <p>Rathmines Road<br/>Dublin 6<br/>Ireland<br/>D06 HF30</p>', 53.325093, -6.265007, 'http://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Dublin Airport South Hotel</h3> <p>Shangan Road<br/>Ballymun<br/>Dublin 9<br/>Ireland<br/>D09 W8H7</p>', 53.396499, -6.263210, 'http://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Dublin Airport North Swords Hotel</h3> <p>Pinnock Hill Roundabout<br/>Swords<br/>Co. Dublin<br/>Ireland<br/>K67 K6R2</p>', 53.449318, -6.223605, 'http://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Derry Hotel</h3> <p>22-24 Strand Road<br/>Derry<br/>Derry<br/>Derry<br/>United Kingdom<br/>BT48 7AB</p>', 54.999520, -7.321776, 'http://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Cork Airport Hotel</h3> <p>Black Ash<br/>Kinsale Road Roundabout<br/>Frankfield Road<br/>Co. Cork<br/>Ireland<br/>T12 E2XY</p>', 51.872464, -8.470073, 'http://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Belfast Central Hotel</h3> <p>15 Brunswick Street<br/>Belfast<br/>Belfast<br/>United Kingdom<br/>BT2 7GE</p>', 54.595178, -5.933368, 'http://www.tifcohotels.ie/_fileUpload/Image/travelodge.png']
    ];
    
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    var markers = new Array();      
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        icon:locations[i][3],
        map: map
      });        
      markers.push(marker);
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
      // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});   
      }