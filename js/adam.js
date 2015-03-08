$(function(){

    Raphael.fn.line = function(startX, startY, endX, endY){
        return this.path('M' + startX + ' ' + startY + ' L' + endX + ' ' + endY).attr({"stroke": lineColor, 
           "stroke-width": 0.5, "stroke-dasharray":"."}).glow({width:1, color: "white"});
    };

    //CONSTANTS
            var idCreated = 0;
            var immergedPointStyle = {stroke: "none", fill: "#ffc885"};
            var alwaysOnStyle = {fill: "white",stroke: "none"}
            var mainPointFont = {"font-size": 20, "font-family": "Arial"}
            var visibleFont = {"font-size": 5, "font-family":"Helvetica", "fill":"white"}
            var radius = 10;
            var radiusMain = 25;
            var radiusImmerged = 15;
        //COLORS
            var immergedColor = "#CE1126";
            var mainColor = "#e7ff00"
            var lineColor = "#FFF"
        //FONTS
            var font = {"font-size":5, "font-family":"Helvetica", "fill":"white"};
            var immergedFont = {"color": "white"};
        //MAIN POINTS & DESC
            var pointPrint = {"type":"main", x:240, y:200,"title": "Print", "desc":"Thats so printy!"};
            var pointVideo = {x: 100, y:280, "title":"Video","type":"main"};
            var pointSite ={x:380, y:120, "type":"main", "title": "Site Web", "desc": "Tout le monde sait ce que c'est en gros, mais connaissez-vous toutes les démarches nécessaires à la mise en ligne d'un site web? Il y a beaucoup d'étapes cachées mais indispensables qui vous seront présentées" }
            var pointManagement = {x: 80, y:300, "type":"main", "title":""}
            var pointPhoto = {x:450, y:270, "title":"Photo","type": "main", "desc":"c'est de la photo"}
            //not main
            var cercleTravel = {x:pointPhoto.x, y:pointPhoto.y, "title":"","type": "immerged"}
                
    
    var allPointsArray = [pointPhoto, 
                        pointEtalonnage,
                        pointEclairage, 
                        pointCadrage, 
                        pointComposition,
                        pointModelisation
                        ,pointBd
                        ,pointPHP
                        ,pointJS
                        ,pointDesign
                        ,pointUI
                        ,pointCSS
                        ,pointHTML
                        ,pointScenario
                        ,pointSon
                        ,pointStoryBoard
                        ,pointPrisesVue
                        ,pointColorimetrie
                        ,pointMontage
                        ,pointPrint
                        ,pointConceptionWeb
                        ,pointModeNarratif
                        ,pointEcriture
                        ,pointMessage
                        ,pointSupport
                        ,pointMiseEnPage
                        ,pointPrepresse
                        ,pointStuttgart
                        ,pointCouleur
                        ,pointTraitement
                        ,pointFormat
                        ,pointGP
                        ,pointPlanif
                        ,pointBusinessPlan
                        ,pointMarketing
                        ,pointAnalyseMarche
                        ,pointCommunication
                        ,pointCompta
                        ,pointStrategy
                        ,pointSite
                        ,pointManagement
                        ,pointVideo
                        , pointProgrammation
                        ,pointConceptionPhoto
                        ,pointConceptionPrint]      
    

    var layer = $("<li class='layer tooltip' data-depth=0.5></li>");
    //APPEND THE DESCRIPTIONS TO POINTS
    for (var i = allPointsArray.length - 1; i >= 0; i--) {
        var description = $("<p class='tooltip' data-id="+i+"></p>").text(allPointsArray[i].desc);
        
        layer.append(description);
        description.css("position","absolute");
        description.css("top", allPointsArray[i].y+'px');
        description.css("right", allPointsArray[i].x+200+'px');
        
        //description.appendTo('#descriptions');
        //layer.appendTo('body');
    };
     

Raphael(function () {

    var r = Raphael("holder",580,1128);
    console.log(r);
    
    fade = function (id,startX, startY, endX, endY,type, constellation) {
      
        return function () {
            $("article").fadeOut()
            var text = allPointsSet[id+1];
           
            if(type == "main"){
                var back = r.line(startX, startY, endX, endY);


            }
            else{
                if(constellation=="web"){
                    $(text.node).css("font-size","2");
                    var back = r.line(startX, startY, endX, endY);
                    var front = allPointsSet[id].attr({fill: "#fff", r: radius})
                        .animate({fill: "#7f2954", r: radius }, 200); front.toFront();    
                }    
                if(constellation=="photo"){
                    var back = r.line(startX, startY, endX, endY);
                    var front = allPointsSet[id].attr({fill: "#fff", r: radius})
                        .animate({fill: "#aaddbb", r: radius }, 200); front.toFront();    
                }
                if(constellation=="management"){
                    var back = r.line(startX, startY, endX, endY);
                    var front = allPointsSet[id].attr({fill: "#fff", r: radius})
                        .animate({fill: "#fff3e5", r: radius }, 200);front.toFront();     
                }
                if(constellation=="video"){
                    var back = r.line(startX, startY, endX, endY);
                    var front = allPointsSet[id].attr({fill: "#fff", r: radius})
                            .animate({fill: "#daa520", r: radius }, 200);  front.toFront();   
                }
                if(constellation=="print"){
                    var back = r.line(startX, startY, endX, endY);
                    var front = allPointsSet[id].attr({fill: "#fff", r: radius})
                        .animate({fill: "#ff0000", r: radius }, 200);  front.toFront();   
                }              
            }
                text.node.setAttribute('class','switched')
                text.animate({"font-size":15},200).show();        
                videoImage.toFront();
                webImage.toFront()
                printImage.toFront()
                photoImage.toFront()
                text.toFront()

                back.toBack();
                
           

        };
    }; 

   
    //PHOTO TRAVEL
    photoTravel = function () {
      
      c.stop().animate(
         {  "0%" :{cy: pointPhoto.y, easing: "linear", callback: fade(89,pointPhoto.x, pointPhoto.y, pointConceptionPhoto.x, pointConceptionPhoto.y, "main","photo" )},
            "25%": {cy: pointConceptionPhoto.y, easing: "linear", callback: fade(2,pointConceptionPhoto.x, pointConceptionPhoto.y, pointPrisesVue.x, pointPrisesVue.y, "immerged" ,"photo")},
            "50%": {cy: pointPrisesVue.y, easing: "linear", callback: fade(56, pointPrisesVue.x,pointPrisesVue.y, pointTraitement.x,pointTraitement.y, "immerged","photo")},
            "75%": {cy: pointTraitement.y, easing: "linear", callback: fade(30, pointTraitement.x,pointTraitement.y, pointPhoto.x,pointPhoto.y, "immerged","photo")},   
            "100%": {cy: pointPhoto.y, easing: "linear", callback: fade(89, pointTraitement.x,pointTraitement.y, pointPhoto.x,pointPhoto.y, "main","photo")},
         }, 1500).animate({
            "0%" : {cy: pointPhoto.y, easing: "linear"},
            "25%": {cx: pointConceptionPhoto.x, easing: "linear"},
            "50%": {cx: pointPrisesVue.x, easing: "linear"},
            "75%": {cx: pointTraitement.x, easing: "linear"},
            "100%": {cx: pointPhoto.x, easing: "linear"}
        }, 1500)
    ;} 

    videoTravel = function () {

        cVideo.stop().animate(
         {  "0%"        :{cy: pointVideo.y, easing: "linear", callback: fade(5,pointVideo.x, pointVideo.y, pointScenario.x, pointScenario.y,"main","video" )},
            "25%":    {cy: pointScenario.y, easing: "linear", callback: fade(62,pointScenario.x, pointScenario.y, pointPrisesVue.x, pointPrisesVue.y,"immerged","video") },
            "50%":    {cy: pointPrisesVue.y, easing: "linear", callback: fade(56, pointPrisesVue.x,pointPrisesVue.y, pointMontage.x,pointMontage.y, "immerged","video")},
            "75%":    {cy: pointMontage.y, easing: "linear", callback: fade(52, pointMontage.x,pointMontage.y, pointVideo.x,pointVideo.y, "immerged","video")},
            "100%":     {cy: pointVideo.y, easing: "linear", callback: fade(5, pointMontage.x,pointMontage.y, pointVideo.x,pointVideo.y, "main","video")}
         }, 1500).animate({
            "0%" :      {cy: pointVideo.y, easing: "linear"},
            "25%":    {cx: pointScenario.x, easing: "linear"},
            "50%":      {cx: pointPrisesVue.x, easing: "linear"},
            "75%":    {cx: pointMontage.x, easing: "linear"},

            "100%":     {cx: pointVideo.x, easing: "linear"}
        }, 1500)
    ;};


    webTravel = function () {

        cWeb.stop().animate(
         {  
            "0%"        :{cy: pointSite.y, easing: "linear", callback: fade(9,pointSite.x, pointSite.y, pointModelisation.x, pointModelisation.y,"main","web" )},
            "25%":    {cy: pointModelisation.y, easing: "linear", callback: fade(78,pointModelisation.x, pointModelisation.y, pointProgrammation.x, pointProgrammation.y,"immerged","web") },
            "50%":      {cy: pointProgrammation.y, easing: "linear", callback: fade(4, pointProgrammation.x,pointProgrammation.y, pointDesign.x,pointDesign.y, "immerged","web")},
            "75%":      {cy: pointDesign.y, easing: "linear", callback: fade(70, pointDesign.x,pointDesign.y, pointSite.x,pointSite.y, "immerged","web")},

            "100%":    {cy: pointSite.y, easing: "linear", callback: fade(9, pointDesign.x,pointDesign.y, pointSite.x,pointSite.y, "main","web")}
         }, 1500).animate({
            "0%" : {cy: pointSite.y, easing: "linear"},
            "25%": {cx: pointModelisation.x, easing: "linear"},
            "50%": {cx: pointProgrammation.x, easing: "linear"},
            "75%": {cx: pointDesign.x, easing: "linear"},

            "100%": {cx: pointSite.x, easing: "linear"}
        }, 1500)
    ; };
    printTravel = function () {

        cPrint.stop().animate(
         {  "0%"        :{cy: pointPrint.y, easing: "linear", callback: fade(90,pointPrint.x, pointPrint.y, pointConceptionPrint.x, pointConceptionPrint.y,"main","print" )},
            "25%":    {cy: pointConceptionPrint.y, easing: "linear", callback: fade(0,pointConceptionPrint.x, pointConceptionPrint.y, pointMiseEnPage.x, pointMiseEnPage.y,"immerged","print") },
            "50%":    {cy: pointMiseEnPage.y, easing: "linear", callback: fade(38, pointMiseEnPage.x,pointMiseEnPage.y, pointPrepresse.x,pointPrepresse.y, "immerged","print")},
            "75%":    {cy: pointPrepresse.y, easing: "linear", callback: fade(36, pointPrepresse.x,pointPrepresse.y, pointPrint.x,pointPrint.y, "immerged","print")},  
            "100%":      {cy: pointPrint.y, easing: "linear", callback: fade(90, pointPrepresse.x,pointPrepresse.y, pointPrint.x,pointPrint.y, "main","print")}
         }, 1500).animate({
            "0%" :       {cy: pointPrint.y, easing: "linear"},
            "25%":    {cx: pointConceptionPrint.x, easing: "linear"},
            "50%":    {cx: pointMiseEnPage.x, easing: "linear"},
            "75%":    {cx: pointPrepresse.x, easing: "linear"},
            "100%":      {cx: pointPrint.x, easing: "linear"}
        }, 1500)
    ;};
   

    // SVG MAIN POINTS
        var photoImage = r.image("../iceberg/img/photo.png", pointPhoto.x-27, pointPhoto.y-20, 50, 50);
        var webImage = r.image("../iceberg/img/prog.png", pointSite.x-27, pointSite.y-25, 50, 50);
        var videoImage = r.image("../iceberg/img/video.png", pointVideo.x-27, pointVideo.y-20, 50, 50);
        var printImage = r.image("../iceberg/img/print.png", pointPrint.x-27, pointPrint.y-20, 50, 50);
        var imagesSet = r.set(photoImage, webImage, videoImage, printImage).click(function(){
            scrollTo();zoomOut();
            $("path").fadeOut();
            $(".infoTitle, .switched").fadeOut(); 
            createPointAndTexts();
            
        })
    //Settings and clicks
        photoImage.click(photoTravel);
        webImage.click(webTravel);
            // webImage.hover(function(){
            //     $("#site").fadeIn()
            // })
        videoImage.click(videoTravel);
        printImage.click(printTravel);

    //Travelling circles
        var    c = r.circle(cercleTravel.x, cercleTravel.y, 10).attr({stroke: "#ada", "stroke-width": 4})
        var    cVideo = r.circle(pointVideo.x, pointVideo.y, 10).attr({stroke: "#ada", "stroke-width": 4})                 
        var    cWeb = r.circle(pointSite.x, pointSite.y, 10).attr({stroke: "#ada", "stroke-width": 4});
        var    cPrint = r.circle(pointPrint.x, pointPrint.y, 10).attr({stroke: "#ada", "stroke-width": 4});
        var    travelling = r.set(c, cVideo, cWeb, cPrint).toBack();

     //CREATE ALL CIRCLES and TITLES
     var allPointsSet =  r.set();
     var allTextsSet = r.set();
     var immergedSet  = r.set();
     var alwaysOnSet = r.set();

function createPointAndTexts(){

     immergedSet.attr(immergedPointStyle);
     alwaysOnSet.glow({color:"white"})
    if (idCreated > 0) {
       $("circle[data-created="+idCreated-1+"]").remove();
       $("text[data-created="+idCreated-1+"]").remove();    
    };
        for (var i = allPointsArray.length - 1; i >= 0; i--) {
            if(allPointsArray[i].type == "main"){
                allPointsSet.push(r.text(allPointsArray[i].x,allPointsArray[i].y+50, allPointsArray[i].title).attr(mainPointFont))
                allPointsSet.push(r.circle(allPointsArray[i].x, allPointsArray[i].y, radiusMain).hide())
                
            }else{
               if (allPointsArray[i].show == "show") {
                if (allPointsArray[i].solo =="solo") {
                    var text = r.text(allPointsArray[i].x,allPointsArray[i].y+30, allPointsArray[i].title).attr(visibleFont).hide()
                    var circle = r.circle(allPointsArray[i].x, allPointsArray[i].y, radius).attr(alwaysOnStyle);
                    circle.glow({color:"white"})
                    alwaysOnSet.push(circle);
                    

                }else{
                    var text = r.text(allPointsArray[i].x,allPointsArray[i].y+30, allPointsArray[i].title).attr(font).hide();
                    var circle = r.circle(allPointsArray[i].x, allPointsArray[i].y, radius).attr(immergedPointStyle);
                    immergedSet.push(circle);
                }
                   
                   allPointsSet.push(circle)
                   allPointsSet.push(text);
                   allTextsSet.push(text);

                   circle.node.setAttribute("data-id",i);
                   circle.node.setAttribute("info", allPointsArray[i].info)
                   circle.node.setAttribute("data-created", idCreated)
                   text.node.setAttribute("data-created", idCreated)
                   text.node.setAttribute('class','infoTitle');
                   text.node.setAttribute("text-id",i)
                   
               }else{
                   var circle = r.circle(allPointsArray[i].x, allPointsArray[i].y, radius).attr(immergedPointStyle).hide();
                   var text = r.text(allPointsArray[i].x,allPointsArray[i].y+30, allPointsArray[i].title).attr(font).hide();
                   allPointsSet.push(circle)
                   allPointsSet.push(text);
                   allTextsSet.push(text);
               };
               

            }        
         };

                idCreated++; 

 }        

       
        
createPointAndTexts();
circleHover();
circleClick();
boxClose()

function showInfo(title, left, top){
    var info = $("#"+title);
    var before = $(r.canvas)
    info.stop().fadeIn()
    info.insertAfter(before)

    info.css({"left":left-65, "top": top+15})
 

}
//Show title on hover
function circleHover(){
    $("circle").mouseover(function() {  
         $("text[text-id="+ $(this).attr("data-id")+"]" ).show().animate({"font-size": "15px"},200);
         $(this).css("cursor", "pointer");

  })
  .mouseout(function() {
      var element = $("text[text-id="+ $(this).attr("data-id")+"]" );

      if (element.attr('class') != "switched") {
        element.fadeOut().animate({"font-size": "2px"},200);
      };
      var info = $("circle[data-id="+ $(this).attr("data-id")+"]").attr('info');
        
  });
}
function boxClose(){
    $(".boxclose").click(function(){
        $(this).closest("article").fadeOut();

    })
}
function circleClick(){
  $("circle").click(function() {
     var info = $("circle[data-id="+ $(this).attr("data-id")+"]").attr('info');
        var left = $("circle[data-id="+ $(this).attr("data-id")+"]").attr("cx");    
        var top = $("circle[data-id="+ $(this).attr("data-id")+"]").attr("cy"); 
        top = parseInt(top);
        left = parseInt(left);
        showInfo(info,left, top);
})        
}


function scrollTo(){
    var to =  $("circle[data-id=36]");
   // $('html, body').animate({scrollTop: to.offset().top -200}, 2000);
     
}
function zoomOut(){

    $("body").css({
        "transform": "scale("+1.3+")",
        "-webkit-animation-fill-mode": "forwards",
        "animation-fill-mode": "forwards",
        "transition": "2s"
    });
    setTimeout(zoomIn(), 500)
    
    
   
}      
function zoomIn(){
    console.log('zoomin');
    $("body").css({
        "transform": "scale("+1+")",
        "-webkit-animation-fill-mode": "forwards",
        "animation-fill-mode": "forwards",
        "transition": "2s"
    })
}
       
});

});
