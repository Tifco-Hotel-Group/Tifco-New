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
        ['<h3>Crowne Plaza Dublin Airport</h3> <p>Park Northwood<br/>Santry<br/>Dublin 9<br/>Ireland<br/>D09 X9X2</p>', 53.404402, -6.245599, 'https://www.tifcohotels.ie/_fileUpload/Image/cp_da.png'],
        ['<h3>Holiday Inn Express Dublin Airport</h3> <p>Northwood Park<br/>NorthWood<br/>Dublin 9<br/>Ireland<br/>D09 RY17</p>', 53.404275, -6.244526, 'https://www.tifcohotels.ie/_fileUpload/Image/hiExpress.png'],
        ['<h3>Crowne Plaza Dublin - Blanchardstown</h3> <p>The Blanchardstown Centre<br/>Dublin 15<br/>Ireland<br/>D15 T1FD</p>', 53.395652, -6.389966, 'https://www.tifcohotels.ie/_fileUpload/Image/cp_b.png'],
        ['<h3>Clontarf Castle Hotel</h3> <p>Castle Ave<br/>Clontarf<br/>Dublin 3<br/>Ireland<br/>D03 W5N0</p>', 53.364754, -6.206846, 'https://www.tifcohotels.ie/_fileUpload/Image/clontarf_logo.png'],
        ['<h3>Hilton Dublin Kilmainham</h3> <p>South Circular Road<br/>Kilmainham<br/>Dublin 8<br/>Ireland<br/>D08 XAK3</p>', 53.342411, -6.308169, 'https://www.tifcohotels.ie/_fileUpload/Image/hilton.png'],
        ['<h3>The Hendrick Smithfield</h3> <p>6 – 11 Hendrick Street<br/>Dublin 7<br/>Ireland<br/>D07 KX28</p>', 53.347805, -6.280856, 'https://www.tifcohotels.ie/_fileUpload/Image/map-icon-hnrk.png'],
        ['<h3>Crowne Plaza Dundalk</h3> <p>Inner Relief Road<br/>Dundalk<br/>Co. Louth<br/>Ireland<br/>A91 EF88</p>', 53.9803991, -6.3906617, 'https://www.tifcohotels.ie/_fileUpload/Image/cp_dk.png'],
        ['<h3>Hotel Killarney</h3> <p>Cork Road<br/>Killarney<br/>Ireland<br/>V93 FX00</p>', 52.060288, -9.484677, 'https://www.tifcohotels.ie/_fileUpload/Image/killarney.png'],
        ['<h3>Travelodge Waterford Hotel</h3> <p>N25 Cork Road<br/>Waterford<br/>Co. Waterford<br/>Ireland<br/>X91 YV04</p>', 52.248430, -7.121480, 'https://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Limerick Ennis Road Hotel</h3> <p>Coonagh Roundabout<br/>Ennis Road<br/>N18<br/>Limerick<br/>Ireland<br/>V94 R990</p>', 52.673351, -8.675873, 'https://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Limerick Castletroy Hotel</h3> <p>Park Point<br/>Castletroy<br/>Dublin Road<br/>Limerick<br/>Ireland<br/>V94 Y83C</p>', 52.664580, -8.585064, 'https://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Galway City Hotel</h3> <p>Joyce Roundabout<br/>Galway City Centre<br/>Tuam Road Galway<br/>Ireland<br/>H91 HX8Y</p>', 53.282843, -9.036276, 'https://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Dublin Phoenix Park Hotel</h3> <p>Auburn Avenue Roundabout<br/>Navan Road<br/>Dublin 15<br/>Ireland<br/>D15 EW29</p>', 53.380359, -6.355205, 'https://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Dublin City Centre Rathmines</h3> <p>Rathmines Road<br/>Dublin 6<br/>Ireland<br/>D06 HF30</p>', 53.325093, -6.265007, 'https://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Plus Dublin City Centre</h3> <p>44 Townsend St<br/>Dublin 2<br/>Ireland<br/>D02 DY01</p>', 53.34600, -6.25204, 'https://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Dublin Airport South Hotel</h3> <p>Shangan Road<br/>Ballymun<br/>Dublin 9<br/>Ireland<br/>D09 W8H7</p>', 53.396499, -6.263210, 'https://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Dublin Airport North Swords Hotel</h3> <p>Pinnock Hill Roundabout<br/>Swords<br/>Co. Dublin<br/>Ireland<br/>K67 K6R2</p>', 53.449318, -6.223605, 'https://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Cork Airport Hotel</h3> <p>Black Ash<br/>Kinsale Road Roundabout<br/>Frankfield Road<br/>Co. Cork<br/>Ireland<br/>T12 E2XY</p>', 51.872464, -8.470073, 'https://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Travelodge Belfast Central Hotel</h3> <p>15 Brunswick Street<br/>Belfast<br/>Belfast<br/>United Kingdom<br/>BT2 7GE</p>', 54.595178, -5.933368, 'https://www.tifcohotels.ie/_fileUpload/Image/travelodge.png'],
        ['<h3>Kinsale Hotel & Spa</h3> <p>Rathmore, Kinsale, County Cork, P17 F542</p>', 51.698865, -8.465479, 'https://www.tifcohotels.ie/_fileUpload/Image/KinsaleHotel.png'],                     
        ['<h3>Innisfallen Hotel</h3> <p>Fossa<br/>Killarney<br/>Co. Kerry<br/>Ireland<br/>V93 CR90</p>', 52.070643, -9.573754, 'https://www.tifcohotels.ie/_fileUpload/Image/innisfallen-icon-map.png'],
        ['<h3>The Clybaun Hotel</h3> <p>Clybaun Road<br/>Knocknacarra<br/>Co. Galway<br/>Ireland<br/>H91 F62V</p>', 53.269480, -9.108403, 'https://www.tifcohotels.ie/_fileUpload/Image/clybaun_map.png'],
        ['<h3>Hard Rock Dublin Hotel</h3> <p>18 Exchange Street Upper<br/>Dublin 2<br/>Ireland<br/>D08 AV24</p>', 53.344286, -6.268025, 'https://www.tifcohotels.ie/_fileUpload/Image/map-icon-hrd.png'],
        ['<h3>Arthaus Hotel Dublin</h3> <p>Mercer Street Lower<br/>Dublin 2<br/>Ireland<br/>D02 TW61</p>', 53.339552834177255, -6.264078911187995, 'https://www.tifcohotels.ie/_fileupload/Arthaus-map-icon(1).png']                                                      

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



$('.image_box').click(function(){

    $(".black_box").css("height","100%");

    // Read Text Values
    var dataheading = $(this).find("h2").text();
    var dataImg = $(this).find(".hidden_values img").attr('src');
    var dataP = $(this).find(".p_text_block").text();


    // Write New Text Values
    $('.hotel_row img').attr("src", dataImg);
    $('.hotel_row .p_text_block').text(dataP);
    $('.hotel_row h2').text(dataheading); 
    

setTimeout(function(){ 

    $(".overlay").fadeIn();
    $('.inis.image_box p').hide();

}, 200); 

    

});

$('.close_overlay').click(function(){

    $(".overlay").fadeOut();    

    setTimeout(function(){ 

    $(".black_box").css("height","0");

}, 250); 

});

$('.image_box').mouseover(function(){

  var overlay = $(this).find('.fill');
  overlay.css("opacity","0.7");

  


    var getButton = $(this).find('.btn-second');
    getButton.css("bottom","0px");


    
  
});

$('.image_box').mouseleave(function(){

    
    $('.image_box p').fadeOut();
    $('.fill').css("opacity","0.5");
    $('.btn-second').css("bottom","-50px");



});

$('li.color_changer a').click(function(){

    // Setup
        
    // Add class="bg_change" as 2nd last class  
    // Add class="color" as last class

    //finds last class i.e color class
    var whatColor = $('nav.navbar.navbar-default').attr("class").split(" ").pop();

    //finds color class of link
    var linkTo = $(this).attr("class");

    // Prevents double click on Color Link
    if(whatColor != linkTo){

    $('.bg_change').addClass(linkTo).removeClass(whatColor);

    $('.changed_color').text(linkTo);
    }

    //changes image on select background
    if ($(this).hasClass("navy")) {    
    $('.navbar-brand-img').attr('src','img/tifco-logo-with-navy-bg.png');
    }

    else {
    $('.navbar-brand-img').attr('src','img/tifco-logo-for-gold-2.png');
    }      


});



$('.Simon, .Daniel').on('click', inittransferScript);

// Split The Cost Functionality With LocalStorage


var receipts = document.querySelector('#receipts');

var savedList = localStorage.getItem('receiptListItems');
// If there are any saved items, update our list

function updateCount(){

    if (localStorage.current_amount < 0 ){
    document.querySelector(".result").innerHTML = "Simon Owes Dan " + Math.abs(localStorage.current_amount);
    } 
    else
    { 
    document.querySelector(".result").innerHTML = "Dan Owes Simon " + Math.abs(localStorage.current_amount); 
    } 

}

updateCount();

  


if (savedList) {
receipts.innerHTML = savedList;
}
    
function inittransferScript(){

var amountinput = document.querySelector('.amt').value;
var descriptioninput = document.querySelector('.desc').value;
var whereinput = document.querySelector('.where').value;
var who = this.className.split(" ").pop();
var today = new Date();
var when = ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);

var receiptListItem = (who + " paid $" + amountinput + " on " + descriptioninput + " at " + whereinput + " - " + when);
receipts.innerHTML += '<li>'  + receiptListItem + '</li>';
// Save the list to localStorage
localStorage.setItem('receiptListItems', receipts.innerHTML);
// Check for saved wishlist items

function ClearFields() {

     document.querySelector(".desc").value = '';
     document.querySelector(".where").value = '';
     document.querySelector(".amt").value = '';
}

ClearFields();


var amt = Number(amountinput);

  if (typeof(Storage) !== "undefined") {

    if (localStorage.current_amount ) {

      if (who === "Daniel"){
        localStorage.current_amount = Number(localStorage.current_amount) - amt;
}

else{
    localStorage.current_amount = Number(localStorage.current_amount) + amt;
    
}
      
    } 

    else {
      localStorage.current_amount = 1;
    }

    updateCount();  

  }

  else {
    document.querySelector(".result").innerHTML = "Change Browser, Bowser...";
  }    

};

 /*

    document.querySelector('.sub').onclick = function(){

    var input = document.querySelector('.amt').value;

    var amt = parseInt(input);

    var text = document.querySelector('.result').innerText;

    var totalBefore =  parseInt(text);

    var sum = amt + totalBefore;

    document.querySelector('.result').innerText = sum;



    };

/*


$('.sub').click(function(){

    var input = $('.amt').val();
    var amt = parseInt(input);
    var text = $('.result').text();
    var totalBefore =  parseInt(text);

    var sum = amt + totalBefore;
    

    

    // Store It

    var someVarName = "value";

    localStorage.setItem("someVarKey", someVarName);

    // Get It

    var someVarName = localStorage.getItem("someVarKey");

    

    $('.result').text(sum);

    var nextNumber = $('.result').text();

    localStorage.setItem("updatedNumber", nextNumber);   
 

});

*/

/*

$('.image_box').mouseover(function(){

  $('.fill').css("opacity","0.7");
  

    setTimeout(function(){ 

      $('.image_box p').css("display","block");

    }, 500);  

});

$('.image_box').mouseleave(function(){

    
    $('.image_box p').fadeOut();

    setTimeout(function(){ 


    }, 500); 

});


$('.readmore').click(function(){

    $(".black_box").css("height","100%"); 
    

setTimeout(function(){ 

    $(".overlay").fadeIn();
    $('.inis.image_box p').hide();

}, 200); 

    

});



*/

    $('.multiple-items').each(function() {
  var slider = $(this);
  slider.slick({
    slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

});

    

  





