; (function () {
	"use strict";

	//presentation-slider
	$(document).ready(function () {
		$('.ba-header-slider').slick({
			arrows: false,
			dots: true,
			dotsClass: 'ba-slick-dots',
			slide: 'article',
			fade: true,
		});
	});
})();

