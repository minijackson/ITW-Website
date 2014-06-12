$(document).ready(function() {
	window.sliderFrame = 0;
	window.productsSliderFrame = 0;

	$(".image-slider .slider-control-next").click(function() {
		nextSlide();
		return false;
	});

	$(".image-slider .slider-control-prev").click(function() {
		--window.sliderFrame;
		window.sliderFrame = (window.sliderFrame < 0) ?
			window.sliderFrame + 4 : window.sliderFrame;
		changeSliderFrame();
		return false;
	});

	$(".products-slider .slider-control-next").click(function() {
		++window.productsSliderFrame;
		window.productsSliderFrame %= 5;
		changeProductsSliderFrame();
		return false;
	});

	$(".products-slider .slider-control-prev").click(function() {
		--window.productsSliderFrame;
		window.productsSliderFrame = (window.productsSliderFrame < 0) ?
			window.productsSliderFrame + 5 : window.productsSliderFrame;
		changeProductsSliderFrame();
		return false;
	});

	$(".slider-dots-controls>ul>li").click(function() {
		window.sliderFrame = parseInt($(this).attr("data-slide"));
		changeSliderFrame();
		return false;
	});

	function nextSlide() {
		++window.sliderFrame;
		window.sliderFrame %= 4;
		changeSliderFrame();
	}

	function updateDots() {
		$(".slider-dots-controls>ul>li").removeClass("slider-dot-active");
		$(".slider-dots-controls>ul>li:nth-child("
				+ (window.sliderFrame + 1) + ")").addClass("slider-dot-active");
	}

	function changeSliderFrame() {
		// transform: translateX(-i*20%);
		$(".image-slider>ul").css({
			"transform": "translate3d(-" + window.sliderFrame * 20 + "%, 0, 0)"
		});
		updateDots();
		window.clearTimeout(slideTimeout);
		slideTimeout = window.setTimeout(nextSlide, 5000);
	}

	function changeProductsSliderFrame() {
		// transform: translateX(-i*5%);
		$(".products-slider>ul").css({
			"transform": "translate3d(-" + window.productsSliderFrame * 5 + "%, 0, 0)"
		});
	}

	var slideTimeout = window.setTimeout(nextSlide, 5000);

});
