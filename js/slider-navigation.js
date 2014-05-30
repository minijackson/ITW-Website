$(document).ready(function() {
	window.sliderFrame = 0;

	$(".slider-control-next").click(function() {
		++window.sliderFrame;
		window.sliderFrame %= 4;
		changeSliderFrame();
		return false;
	});

	$(".slider-control-prev").click(function() {
		--window.sliderFrame;
		window.sliderFrame = (window.sliderFrame < 0) ?
		window.sliderFrame + 4 : window.sliderFrame;
	changeSliderFrame();
	return false;
	});

	function changeSliderFrame() {
		// transform: translateX(-i*20%);
		$(".image-slider>ul").css({
			"transform": "translateX(-" + window.sliderFrame * 20 + "%)"
		});

	}
});
