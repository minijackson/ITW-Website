$(document).ready(function() {
	window.sliderFrame = 0;

	$(".slider-control-next").click(function() {
		nextSlide();
		return false;
	});

	$(".slider-control-prev").click(function() {
		--window.sliderFrame;
		window.sliderFrame = (window.sliderFrame < 0) ?
			window.sliderFrame + 4 : window.sliderFrame;
		changeSliderFrame();
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
			"transform": "translateX(-" + window.sliderFrame * 20 + "%)"
		});
		updateDots();
		window.clearTimeout(slideTimeout);
		slideTimeout = window.setTimeout(nextSlide, 5000);
	}

	var slideTimeout = window.setTimeout(nextSlide, 5000);

});
