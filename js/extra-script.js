    
    $(".sub").hide();

    $(".sub_sub").hide();

    $(".open_sub").click(function(){

    $(".sub").slideToggle();

    });

    $(".open_sub_sub").click(function(){

    $(".sub_sub").slideToggle();

    });


$('.accordion_head').click(function(){

	// make open head

	if (!$(this).hasClass('open')){

		$(this).addClass('open');

	}

	var parent = $(this).parent();

	var nearest = parent.find('.accordion_body');



	nearest.slideDown();
	nearest.addClass('open');
	

    //$('.accordion_body').slideDown();


});

$('.accordion_body .bolder').click(function(){

	var parent_2 = $(this).parent();

	var nearest_2 = parent_2.find('.innerbody');
	
	nearest_2.slideDown();
	nearest_2.addClass('open');
	

});






	
