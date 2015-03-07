$(function(){
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
	

	var width = $(window).width();
	var lefti = width/2 - 290;
	$("#iceberg img").css({ left: lefti});

	

	$(window).on("resize", function(){
		var w = $(window).width();

		console.log(width);

		var left = w/2 - 290;
		console.log(left);

		// $("#iceberg img").parent().css();
		$("#iceberg img").css({ left: left});
	})


	$(window).on('scroll', function() {
	   var st = $(this).scrollTop();
	   
	   if (st < 280) {
	   		$("#profils").css({ 'opacity' : (0.75 - st/500) });
	   } else{
	   		$("#profils").css({ 'opacity' : (0.75 - 280/500) });
	   };
	   
	});

	$(window).on('click', function(){
		$('#bgStart').fadeOut();
		console.log("fadeOUt");
	})

	$("#profils li").hover(function() {
		$(this).children('.eye').toggleClass("hidden");
			}, function() {
		$(this).children('.eye').toggleClass("hidden");
	});


});
