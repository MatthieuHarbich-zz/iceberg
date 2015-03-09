$(function(){
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
	

	var width = $(window).width();
	var lefti = width/2 - 290;

	var leftB = width/2 - 75;
	$("#iceberg img").css({ left: lefti});
	$("#holder").css({left:lefti, top:203+"px"});
	$('#journalButton').css({left:leftB});


	

	$(window).on("resize", function(){
		var w = $(window).width();

		var left = w/2 - 290;
		var leftBu = width/2 - 75;
		
		// $("#iceberg img").parent().css();
		$("#iceberg img").css({ left: left});
		$("#holder").css({left:left});
		$('#journalButton').css({left:leftBu});

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

	})

	$("#profils li").hover(function() {

		
			$(this).children('.eye').toggleClass("hidden");
			$(this).children('.profil').toggleClass("hover");
			}, function() {
		$(this).children('.profil').toggleClass("hover");
		$(this).children('.eye').toggleClass("hidden");

	});
	
	var fade = true;
	$(window).mousemove(function(e){
		var top = e.clientY;
		var windowHeight = $(window).height();
		 
		var bottom = windowHeight - top;
	
		if(bottom<40){
			
			$('.journalButtonDown').fadeIn();
		}else{
			$('.journalButtonDown').fadeOut();
		}

	})

	$('#journalButton').on("click", function(){
			console.log("yeah");
			// $(this).toggle("bottom", 600);
				
		})

	
	});

	



