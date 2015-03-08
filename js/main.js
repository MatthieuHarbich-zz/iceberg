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


	$(window).on('scroll', function() {
	   var st = $(this).scrollTop();
	   
	   if (st < 280) {
	   		$(".profil").css({ 'opacity' : (0.75 - st/500) });
	   } else{
	   		$(".profil").css({ 'opacity' : (0.75 - 280/500) });
	   };
	   
	});

	$(window).on('click', function(){
		$('#bgStart').fadeOut();
		console.log("fadeOUt");
	})

	$("#profils li").hover(function() {

		
			$(this).children('.eye').toggleClass("hidden");
		
		
		$(this).children('.profil').toggleClass("hover");
			}, function() {
		$(this).children('.profil').toggleClass("hover");
		$(this).children('.eye').toggleClass("hidden");

	});

	$(window).mousemove(function(e){
		var top = e.pageX;
		var windowHeight = $(window).height();

		var bottom = windowHeight - top;

		console.log(bottom);
	})


});
