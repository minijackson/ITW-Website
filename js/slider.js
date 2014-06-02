/* The MIT License (MIT)
 * 
 * Copyright (c) <year> <copyright holders>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

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
			"transform": "translate3d(-" + window.sliderFrame * 20 + "%, 0, 0)"
		});
		updateDots();
		window.clearTimeout(slideTimeout);
		slideTimeout = window.setTimeout(nextSlide, 5000);
	}

	var slideTimeout = window.setTimeout(nextSlide, 5000);

});
