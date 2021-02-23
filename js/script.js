$(document).ready(function(){
	// counter start
	$('.counter').counterUp({
    delay: 10,
    time: 1000
});

	// wow js
	new WOW().init();

	// slick slider
	$('.autoplay').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
});


})