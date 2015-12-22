$(function() {

	$('.auth_btn').on('click', function(){
		console.log($(this).next());
		$(this).next().slideToggle();
		//$('.top_links').next().slideToggle();		
	});


	
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
