    
    $(".sub").hide();

    $(".sub_sub").hide();

    $(".open_sub").click(function(){

    $(".sub").slideToggle();

    });

    $(".open_sub_sub").click(function(){

    $(".sub_sub").slideToggle();

    });


$('.accordion_body').click(function(){

	if (!$(this).hasClass('open')){

		$(this).removeClass('open');
		$(this).slideUp();

	}
	else
	{
		$(this).addClass('open');
		$(this).slideDown();

	}

});


$('.accordion_head').click(function(){

		var parent = $(this).parent();
		var nearest = parent.find('.accordion_body');

	// make open head

	if (!$(this).hasClass('open')){

		$(this).addClass('open');

		
		nearest.slideDown();
		nearest.addClass('open');

	}

	else{

		$(this).removeClass('open');

		nearest.slideUp();
		nearest.removeClass('open');


	}

	
	

    //$('.accordion_body').slideDown();


});

$('.accordion_body .bolder').click(function(){

	var parent_2 = $(this).parent();

	var nearest_2 = parent_2.find('.innerbody');
	
	nearest_2.slideDown();
	nearest_2.addClass('open');
	

});





var accordion = (function(){
  
  var $accordion = $('.js-accordion');
  var $accordion_header = $accordion.find('.js-accordion-header');
  var $accordion_item = $('.js-accordion-item');
 
  // default settings 
  var settings = {
    // animation speed
    speed: 100,
    
    // close all other accordion items if true
    oneOpen: false
  };
    
  return {
    // pass configurable object literal
    init: function($settings) {
      $accordion_header.on('click', function() {
        accordion.toggle($(this));
      });
      
      $.extend(settings, $settings); 
      
      // ensure only one accordion is active if oneOpen is true
      if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
        $('.js-accordion-item.active:not(:first)').removeClass('active');
      }
      
      // reveal the active accordion bodies
      $('.js-accordion-item.active').find('> .js-accordion-body').show();
    },
    toggle: function($this) {
            
      if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
        $this.closest('.js-accordion')
               .find('> .js-accordion-item') 
               .removeClass('active')
               .find('.js-accordion-body')
               .slideUp('fast')
      }
      
      // show/hide the clicked accordion item
      $this.closest('.js-accordion-item').toggleClass('active');
      $this.next().stop().slideToggle(settings.speed);
    }
  }
})();

$(document).ready(function(){
  accordion.init({ speed: 300, oneOpen: true });
});
	

// Count Jobs

$(".hotel_name").click(function(){

var hotelThis = $(this).text();
var parent = $(this).parent();
var jobsHere = parent.find('.Opportunity_item').length;
var announcementThis = hotelThis + " currently has " + jobsHere + " job listings."
parent.find(".hotel_listings").text(announcementThis);


});

var alljobs = $('.Opportunity_item').length;

$('.title_Profile').click(function(){

  alert("fasdf");

});