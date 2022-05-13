$(document).ready(function () {
	$('#owl-banner').owlCarousel({
		items: 1,
		margin: 0,
		autoplay: true,
		center: true,
		loop: true
	});
});
$(function () {
	$('#submenu-button').click(function () {
		$('.subpage-nav').toggleClass("open");
	});
});
