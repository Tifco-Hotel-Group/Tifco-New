$(document).ready(function(){
  
     $('#nav-trigger').waypoint(function() {
      $('.navbar').toggleClass('smaller-nav');
      $('.owl-container').toggleClass('smaller-nav');
    },{offset: '75%'});
    
 
  $('.animation-trigger').each(function() {
  $(this).waypoint(function() {
    $(this.element).addClass('fadeInUp');
      },{offset: '85%'});
  });
    $('.service-trigger').each(function() {
  $(this).waypoint(function() {
    $(this.element).addClass('fadeInUp');
      },{offset: '80%'});
  });
      $('.timeline-trigger').each(function() {
  $(this).waypoint(function() {
    $(this.element).addClass('bounceIn');
      },{offset: '85%'});
  });
    $('.footer-animation-trigger').each(function() {
  $(this).waypoint(function() {
    $(this.element).addClass('fadeInUp');
      },{offset: '95%'});
  });
   
    //CountUp.js
    var countupoptions = {useEasing : true, useGrouping : true, separator : ',', decimal : '.', prefix : '', suffix : '' };
     $('.rooms-circle').waypoint(function() {
      $(this.element).toggleClass('grow-circle');         
         var hotel_count = new CountUp("rooms-number", 0, 2959, 0, 1.5, countupoptions);
         hotel_count.start();
     },{offset: '90%'});
    $('.hotels-circle').waypoint(function() {
      $(this.element).toggleClass('grow-circle');
         var rooms_count = new CountUp("hotels-number", 0, 25, 0, 1.5, countupoptions);
         rooms_count.start();
     },{offset: '90%'});
    $('.conference-circle').waypoint(function() {
      $(this.element).toggleClass('grow-circle');
         var conference_count = new CountUp("conference-number", 0, 3450, 0, 1.5, countupoptions);
         conference_count.start();
     },{offset: '90%'});
 
});
