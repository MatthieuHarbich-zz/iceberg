$(function(){
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
	

	var width = $(window).width();
	var lefti = width/2 - 290;

	var leftB = width/2 - 125;
	$("#iceberg img").css({ left: lefti});
	$("#holder").css({left:lefti, top:203+"px"});
	$('#journalButton').css({left:leftB});


	

	$(window).on("resize", function(){
		var w = $(window).width();

		var left = w/2 - 290;
		var leftBu = width/2 - 125;
		
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
	
	// var fade = true;
	// $(window).mousemove(function(e){
	// 	var top = e.clientY;
	// 	var windowHeight = $(window).height();
		 
	// 	var bottom = windowHeight - top;
	
	// 	if(bottom<40){
			
	// 		$('.journalButtonDown').fadeIn();
	// 	}else{
	// 		$('.journalButtonDown').fadeOut();
	// 	}
		 

		

	// })

	$('#journalButton').on("click", function(){

				
				

				$('#journalContainer').toggleClass("journalContentUp", 200, 'linear');

				// $('#journalButton').toggleClass("journalButtonDown");

				$('#journalButton').toggleClass("journalButtonUp", 200, 'linear');

				
		})

	$( ".accordion" ).accordion({
	  active: 0,
	  heightStyle: "content",
	  collapsible: true
	});

	$('.journalContent[data-day = 1]').show();

	$('.jour li').on('click', function(){

		var day = $(this).attr('data-d');

		console.log(day);

		switch(day){
			case "1":
				console.log("1")
				$('.journalContent').hide();
				$('.journalContent[data-day = 1]').show();
			break;
			case "2":
			console.log("2")
				$('.journalContent').hide();
				$('.journalContent[data-day = 2]').show();
			break;
			case "3":
			console.log("3")
				$('.journalContent').hide();
				$('.journalContent[data-day = 3]').show();
			break;
			case "4":
			console.log("4")
				$('.journalContent').hide();
				$('.journalContent[data-day = 4]').show();
			break;
			case "5":
			console.log("<5></5>")
				$('.journalContent').hide();
				$('.journalContent[data-day = 5]').show();
			break;


		}
	})
	

	
	




	
	});

	



