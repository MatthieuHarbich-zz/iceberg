$(function(){
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
	

	var width = $(window).width();
	var lefti = width/2 - 290;
	$("#iceberg img").css({ left: lefti});
	$("#holder").css({left:lefti, top:203+"px"})


	

	$(window).on("resize", function(){
		var w = $(window).width();

		var left = w/2 - 290;
		
		// $("#iceberg img").parent().css();
		$("#iceberg img").css({ left: left});
		$("#holder").css({left:left})
	})



});
