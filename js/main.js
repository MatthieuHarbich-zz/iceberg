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



});
