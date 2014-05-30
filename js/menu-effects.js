$(document).ready(function() {
	$("nav > ul > li .submenu-title, nav > ul > li .submenu").hover(function() {
		$("body > :not(nav):not(script)").addClass("faded");
	});

	$("nav > ul > li .submenu-title, nav > ul > li .submenu").mouseleave(function() {
		$("body > :not(nav):not(script)").removeClass("faded");
	});

	$("nav .submenu-imgs").mouseleave(function() {
		$(this).children().removeClass("faded");
	});
});
