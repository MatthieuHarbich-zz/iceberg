$(function(){

    Raphael.fn.line = function(startX, startY, endX, endY){
        return this.path('M' + startX + ' ' + startY + ' L' + endX + ' ' + endY).attr({"stroke": lineColor, 
           "stroke-width": 3, "stroke-dasharray":"."});
    };

    //CONSTANTS
            var immergedPointStyle = {stroke: "none", fill: "#666"}
            var mainPointFont = {"font-size": 20, "font-family": "Arial"}
            var radius = 12;
            var radiusMain = 25;
            var radiusImmerged = 15;
        //COLORS
            var immergedColor = "#CE1126";
            var mainColor = "#e7ff00"
            var lineColor = "#FFF"
        //FONTS
            var font = {"font-size":14, "font-family":"Helvetica"};
            var immergedFont = {"color": "white"};
        //MAIN POINTS & DESC
            var pointPrint = {"type":"main", x:280, y:110,"title": "Print", "desc":""};
            var pointVideo = {x: 170, y:230, "title":"Video","type":"main"};
            var pointSite ={x:420, y:170, "type":"main", "title": "Site Web", "desc": "Tout le monde sait ce que c'est en gros, mais connaissez-vous toutes les démarches nécessaires à la mise en ligne d'un site web? Il y a beaucoup d'étapes cachées mais indispensables qui vous seront présentées" }
            var pointManagement = {x: 80, y:300, "type":"main", "title":"Management"}
            var pointPhoto = {x:300, y:270, "title":"Photo","type": "main", "desc":"c'est de la photo"}
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
                        ,pointConception
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
                        ,pointSite,pointManagement,pointVideo]      
    

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
    
    //TEXTS
     



    fade = function (id,startX, startY, endX, endY,type, constellation) {
            return function () {
                
                if(type == "main"){
                    var back = r.line(startX, startY, endX, endY);
                    var front = allPointsSet[id].attr({fill: "#fff", r: radius})
                            .animate({fill: mainColor, r: radiusMain }, 200); 
                }
                

                else{
                    if(constellation=="web"){
                    var back = r.line(startX, startY, endX, endY);
                    var front = allPointsSet[id].attr({fill: "#fff", r: radius})
                            .animate({fill: "#7f2954", r: radius }, 200);     
                    }
                    if(constellation=="photo"){
                    var back = r.line(startX, startY, endX, endY);
                    var front = allPointsSet[id].attr({fill: "#fff", r: radius})
                            .animate({fill: "#aaddbb", r: radius }, 200);     
                    }
                    if(constellation=="management"){
                        
                    var back = r.line(startX, startY, endX, endY);
                    var front = allPointsSet[id].attr({fill: "#fff", r: radius})
                            .animate({fill: "#fff3e5", r: radius }, 200);     
                    }
                    if(constellation=="video"){

                    var back = r.line(startX, startY, endX, endY);
                    var front = allPointsSet[id].attr({fill: "#fff", r: radius})
                            .animate({fill: "#daa520", r: radius }, 200);     
                    }
                    if(constellation=="print"){
                    var back = r.line(startX, startY, endX, endY);
                    var front = allPointsSet[id].attr({fill: "#fff", r: radius})
                            .animate({fill: "#ff0000", r: radius }, 200);     
                    }

                    
                }
                    console.log(allPointsSet[id-1]);
                    
                    back.toBack();
                    front.toFront();
                   // if(id != 78 && id != 2 && id != 41 && id != 1){
                   //      allPointsSet[id-1].animate({fill:"#fff"}, 300)
                   // } 
 
            };
    }; 

   
    //PHOTO TRAVEL
    photoTravel = function () {

        c.stop().animate(
         {  "0%" :{cy: pointPhoto.y, easing: "linear", callback: fade(78,pointPhoto.x, pointPhoto.y, pointEclairage.x, pointEclairage.y, "main","photo" )},
            "20%": {cy: pointEclairage.y, easing: "linear", callback: fade(74,pointEclairage.x, pointEclairage.y, pointCadrage.x, pointCadrage.y, "immerged" ,"photo")},
            "40%": {cy: pointCadrage.y, easing: "linear", callback: fade(72, pointCadrage.x,pointCadrage.y, pointComposition.x,pointComposition.y, "immerged","photo")},
            "60%": {cy: pointComposition.y, easing: "linear", callback: fade(70, pointComposition.x,pointComposition.y, pointEtalonnage.x,pointEtalonnage.y,  "immerged","photo")},
            "80%": {cy: pointEtalonnage.y, easing: "linear", callback: fade(76, pointEtalonnage.x,pointEtalonnage.y, pointPhoto.x,pointPhoto.y, "immerged","photo")},
            "100%": {cy: pointPhoto.y, easing: "linear", callback: fade(78, pointEtalonnage.x,pointEtalonnage.y, pointPhoto.x,pointPhoto.y, "main","photo")},
         }, 1000).animate({
            "0%" : {cy: pointPhoto.y, easing: "linear"},
            "20%": {cx: pointEclairage.x, easing: "linear"},
            "40%": {cx: pointCadrage.x, easing: "linear"},
            "60%": {cx: pointComposition.x, easing: "linear"},
            "80%": {cx: pointEtalonnage.x, easing: "linear"},
            "100%": {cx: pointPhoto.x, easing: "linear"}
        }, 1000)
    ;};

    videoTravel = function () {

        cVideo.stop().animate(
         {  "0%"        :{cy: pointVideo.y, easing: "linear", callback: fade(0,pointVideo.x, pointVideo.y, pointScenario.x, pointScenario.y,"main","video" )},
            "14.28%":    {cy: pointScenario.y, easing: "linear", callback: fade(52,pointScenario.x, pointScenario.y, pointSon.x, pointSon.y,"immerged","video") },
            "28.57%":      {cy: pointSon.y, easing: "linear", callback: fade(50, pointSon.x,pointSon.y, pointStoryBoard.x,pointStoryBoard.y, "immerged","video")},
            "42.83%":    {cy: pointStoryBoard.y, easing: "linear", callback: fade(48, pointStoryBoard.x,pointStoryBoard.y, pointPrisesVue.x,pointPrisesVue.y, "immerged","video")},
            "57.12%":      {cy: pointPrisesVue.y, easing: "linear", callback: fade(46, pointPrisesVue.x,pointPrisesVue.y, pointColorimetrie.x,pointColorimetrie.y, "immerged","video")},
            "71.39%":    {cy: pointColorimetrie.y, easing: "linear", callback: fade(44, pointColorimetrie.x,pointColorimetrie.y, pointMontage.x,pointMontage.y, "immerged","video")},
            "85.67%":    {cy: pointMontage.y, easing: "linear", callback: fade(42, pointMontage.x,pointMontage.y, pointVideo.x,pointVideo.y, "immerged","video")},
            "100%":     {cy: pointVideo.y, easing: "linear", callback: fade(0, pointMontage.x,pointMontage.y, pointVideo.x,pointVideo.y, "main","video")}
         }, 1500).animate({
            "0%" :      {cy: pointVideo.y, easing: "linear"},
            "14.28%":    {cx: pointScenario.x, easing: "linear"},
            "28.57%":      {cx: pointSon.x, easing: "linear"},
            "42.83%":    {cx: pointStoryBoard.x, easing: "linear"},
            "57.12%":      {cx: pointPrisesVue.x, easing: "linear"},
            "71.39%":    {cx: pointColorimetrie.x, easing: "linear"},
            "85.67%":    {cx: pointMontage.x, easing: "linear"},
            "100%":     {cx: pointVideo.x, easing: "linear"}
        }, 1500)
    ;};


    webTravel = function () {

        cWeb.stop().animate(
         {  
            "0%"        :{cy: pointSite.y, easing: "linear", callback: fade(2,pointSite.x, pointSite.y, pointModelisation.x, pointModelisation.y,"main","web" )},
            "11%":    {cy: pointModelisation.y, easing: "linear", callback: fade(68,pointModelisation.x, pointModelisation.y, pointBd.x, pointBd.y,"immerged","web") },
            "22%":      {cy: pointBd.y, easing: "linear", callback: fade(66, pointBd.x,pointBd.y, pointPHP.x,pointPHP.y, "immerged","web")},
            "33%":      {cy: pointPHP.y, easing: "linear", callback: fade(64, pointPHP.x,pointPHP.y, pointJS.x,pointJS.y, "immerged","web")},
            "44%":    {cy: pointJS.y, easing: "linear", callback: fade(62, pointJS.x,pointJS.y, pointDesign.x,pointDesign.y, "immerged","web")},
            "55%":    {cy: pointDesign.y, easing: "linear", callback: fade(60, pointDesign.x,pointDesign.y, pointUI.x,pointUI.y, "immerged","web")},
            "66%":     {cy: pointUI.y, easing: "linear", callback: fade(58, pointUI.x,pointUI.y, pointCSS.x,pointCSS.y, "immerged","web")},
            "77%":    {cy: pointCSS.y, easing: "linear", callback: fade(56, pointCSS.x,pointCSS.y, pointHTML.x,pointHTML.y, "immerged","web")},
            "88%":    {cy: pointHTML.y, easing: "linear", callback: fade(54, pointHTML.x,pointHTML.y, pointSite.x,pointSite.y, "immerged","web")},
            "100%":    {cy: pointSite.y, easing: "linear", callback: fade(2, pointHTML.x,pointHTML.y, pointSite.x,pointSite.y, "main","web")}
         }, 2500).animate({
            "0%" : {cy: pointSite.y, easing: "linear"},
            "11%": {cx: pointModelisation.x, easing: "linear"},
            "22%": {cx: pointBd.x, easing: "linear"},
            "33%": {cx: pointPHP.x, easing: "linear"},
            "44%": {cx: pointJS.x, easing: "linear"},
            "55%": {cx: pointDesign.x, easing: "linear"},
            "66%": {cx: pointUI.x, easing: "linear"},
            "77%": {cx: pointCSS.x, easing: "linear"},
            "88%": {cx: pointHTML.x, easing: "linear"},
            "100%": {cx: pointSite.x, easing: "linear"}
        }, 2500)
    ;};
    printTravel = function () {

        cPrint.stop().animate(
         {  "0%"        :{cy: pointPrint.y, easing: "linear", callback: fade(41,pointPrint.x, pointPrint.y, pointSupport.x, pointSupport.y,"main","print" )},
            "14.28%":    {cy: pointSupport.y, easing: "linear", callback: fade(31,pointSupport.x, pointSupport.y, pointMessage.x, pointMessage.y,"immerged","print") },
            "28.57%":      {cy: pointMessage.y, easing: "linear", callback: fade(33, pointMessage.x,pointMessage.y, pointEcriture.x,pointEcriture.y, "immerged","print")},
            "42.83%":    {cy: pointEcriture.y, easing: "linear", callback: fade(35, pointEcriture.x,pointEcriture.y, pointMiseEnPage.x,pointMiseEnPage.y, "immerged","print")},
            "57.12%":      {cy: pointMiseEnPage.y, easing: "linear", callback: fade(29, pointMiseEnPage.x,pointMiseEnPage.y, pointPrepresse.x,pointPrepresse.y, "immerged","print")},
            "71.39%":    {cy: pointPrepresse.y, easing: "linear", callback: fade(27, pointPrepresse.x,pointPrepresse.y, pointStuttgart.x,pointStuttgart.y, "immerged","print")},
            "85.67%":    {cy: pointStuttgart.y, easing: "linear", callback: fade(25, pointStuttgart.x,pointStuttgart.y, pointPrint.x,pointPrint.y, "immerged","print")},
            "100%":     {cy: pointPrint.y, easing: "linear", callback: fade(41, pointStuttgart.x,pointStuttgart.y, pointPrint.x,pointPrint.y, "main","print")}
         }, 1500).animate({
            "0%" :      {cy: pointPrint.y, easing: "linear"},
            "14.28%":    {cx: pointSupport.x, easing: "linear"},
            "28.57%":      {cx: pointMessage.x, easing: "linear"},
            "42.83%":    {cx: pointEcriture.x, easing: "linear"},
            "57.12%":      {cx: pointMiseEnPage.x, easing: "linear"},
            "71.39%":    {cx: pointPrepresse.x, easing: "linear"},
            "85.67%":    {cx: pointStuttgart.x, easing: "linear"},
            "100%":     {cx: pointPrint.x, easing: "linear"}
        }, 1500)
    ;};
    managementTravel = function () {

        cManagement.stop().animate(
         {  "0%"        :{cy: pointManagement.y, easing: "linear", callback: fade(1,pointManagement.x, pointManagement.y, pointGP.x, pointGP.y,"main","management" )},
            "12.5%":    {cy: pointGP.y, easing: "linear", callback: fade(17,pointGP.x, pointGP.y, pointPlanif.x, pointPlanif.y,"immerged","management") },
            "25%":      {cy: pointPlanif.y, easing: "linear", callback: fade(15, pointPlanif.x,pointPlanif.y, pointBusinessPlan.x,pointBusinessPlan.y, "immerged","management")},
            "37.5%":    {cy: pointBusinessPlan.y, easing: "linear", callback: fade(13, pointBusinessPlan.x,pointBusinessPlan.y, pointAnalyseMarche.x,pointAnalyseMarche.y, "immerged","management")},
            "50%":      {cy: pointAnalyseMarche.y, easing: "linear", callback: fade(9, pointAnalyseMarche.x,pointAnalyseMarche.y, pointMarketing.x,pointMarketing.y, "immerged","management")},
            "62.5%":    {cy: pointMarketing.y, easing: "linear", callback: fade(11, pointMarketing.x,pointMarketing.y, pointCompta.x,pointCompta.y, "immerged","management")},
            "75%":    {cy: pointCompta.y, easing: "linear", callback: fade(5, pointCompta.x,pointCompta.y, pointCommunication.x,pointCommunication.y, "immerged", "management")},     
            "81%":    {cy: pointCommunication.y, easing: "linear", callback: fade(7, pointCommunication.x,pointCommunication.y, pointStrategy.x,pointStrategy.y, "immerged","management")},        
            "87.5":    {cy: pointStrategy.y, easing: "linear", callback: fade(3, pointStrategy.x,pointStrategy.y, pointManagement.x,pointManagement.y, "immerged","management")},
            "111%":     {cy: pointManagement.y, easing: "linear", callback: fade(1, pointStrategy.x,pointStrategy.y, pointManagement.x,pointManagement.y, "main","management")}
         }, 1500).animate({
            "0%" :      {cy: pointManagement.y, easing: "linear"},
            "12.5%":    {cx: pointGP.x, easing: "linear"},
            "25%":      {cx: pointPlanif.x, easing: "linear"},
            "37.5%":    {cx: pointBusinessPlan.x, easing: "linear"},
            "50%":      {cx: pointAnalyseMarche.x, easing: "linear"},
            "62.5%":      {cx: pointMarketing.x, easing: "linear"},
            "75%":    {cx: pointCompta.x, easing: "linear"},
            "81%":    {cx: pointCommunication.x, easing: "linear"},
            "87.5%":    {cx: pointStrategy.x, easing: "linear"},
            "111%":     {cx: pointManagement.x, easing: "linear"}
        }, 1500)
    ;};
    // SVG MAIN POINTS
    var    mainPointsSet = r.set(
                r.circle(pointPhoto.x, pointPhoto.y, radiusMain),
                r.circle(pointVideo.x, pointVideo.y, radiusMain),
                r.circle(pointSite.x, pointSite.y,radiusMain),
                r.circle(pointPrint.x, pointPrint.y, radiusMain),
                r.circle(pointManagement.x, pointManagement.y, radiusMain)
        );
    var mainPointsArray = [pointPhoto,pointVideo,pointManagement,pointSite,pointPrint];


    //Photo Constellation SET
    var    photoSet = r.set(
                    r.circle(pointEtalonnage.x, pointEtalonnage.y, radius), //1
                    r.circle(pointEclairage.x, pointEclairage.y, radius),   //2
                    r.circle(pointCadrage.x, pointCadrage.y, radius),         
                    r.circle(pointComposition.x, pointComposition.y, radius),
                    r.circle(pointCouleur.x, pointCouleur.y,radius),
                    r.circle(pointFormat.x, pointFormat.y,radius)
                );
    //SITE WEB CONSTELLATION SET
    var webSet = r.set(
            r.circle(pointModelisation.x, pointModelisation.y, radius),
            r.circle(pointBd.x, pointBd.y,radius),
            r.circle(pointPHP.x, pointPHP.y,radius),
            r.circle(pointJS.x, pointJS.y,radius),
            r.circle(pointDesign.x,pointDesign.y,radius),
            r.circle(pointUI.x, pointUI.y,radius),
            r.circle(pointCSS.x, pointCSS.y, radius),
            r.circle(pointHTML.x, pointHTML.y,radius)
        ).hide();

    //VIDEO CONSTELLATION SET
    var videoSet = r.set(
            r.circle(pointScenario.x, pointScenario.y,radius),
            r.circle(pointSon.x,pointSon.y,radius),
            r.circle(pointStoryBoard.x, pointStoryBoard.y,radius),
            r.circle(pointPrisesVue.x,pointPrisesVue.y,radius),
            r.circle(pointColorimetrie.x, pointColorimetrie.y,radius),
            r.circle(pointMontage.x, pointMontage.y,radius)
        ).hide();
    //PRINT CONSTELATION SET
    var printSet = r.set(
            r.circle(pointSupport.x, pointSupport.y,radius),
            r.circle(pointMessage.x, pointMessage.y,radius),
            r.circle(pointEcriture.x, pointEcriture.y,radius),
            r.circle(pointMiseEnPage.x, pointMiseEnPage.y,radius),
            r.circle(pointPrepresse.x, pointPrepresse.y,radius),
            r.circle(pointStuttgart.x, pointStuttgart.y,radius)
        ).hide();
    //GP Constellation set
    var managementSet = r.set(
            r.circle(pointGP.x, pointGP.y,radius),
            r.circle(pointPlanif.x, pointPlanif.y,radius),
            r.circle(pointBusinessPlan.x, pointBusinessPlan.y,radius),
            r.circle(pointAnalyseMarche.x, pointAnalyseMarche.y,radius),
            r.circle(pointMarketing.x, pointMarketing.y,radius),
            r.circle(pointCompta.x, pointCompta.y,radius),
            r.circle(pointStrategy.x, pointStrategy.y,radius)
        ).hide();


    //Settings and clicks
    mainPointsSet[0].click(photoTravel);
    mainPointsSet[1].click(videoTravel);
    mainPointsSet[2].click(webTravel);
    mainPointsSet[3].click(printTravel);
    mainPointsSet[4].click(managementTravel)
    mainPointsSet.attr({fill: mainColor})

    photoSet.attr(immergedPointStyle);

    //Travelling circle
    var    c = r.circle(cercleTravel.x, cercleTravel.y, 10).attr({stroke: "#ada", "stroke-width": 4})
    var    cVideo = r.circle(pointVideo.x, pointVideo.y, 10).attr({stroke: "#ada", "stroke-width": 4})                 
    var    cWeb = r.circle(pointSite.x, pointSite.y, 10).attr({stroke: "#ada", "stroke-width": 4});
    var   cPrint = r.circle(pointPrint.x, pointPrint.y, 10).attr({stroke: "#ada", "stroke-width": 4});
    var    cManagement =  r.circle(pointManagement.x, pointManagement.y, 10).attr({stroke: "#ada", "stroke-width": 4});
       
     //CREATE ALL CIRCLES and TITLES
     var allPointsSet =  r.set();
     for (var i = allPointsArray.length - 1; i >= 0; i--) {
        if(allPointsArray[i].type == "main"){
            r.text(allPointsArray[i].x,allPointsArray[i].y+40, allPointsArray[i].title).attr(mainPointFont)
            allPointsSet.push(r.circle(allPointsArray[i].x, allPointsArray[i].y, radiusMain))
            
        }else{
           allPointsSet.push(r.circle(allPointsArray[i].x, allPointsArray[i].y, radius).attr(immergedPointStyle));
           allPointsSet.push(r.text(allPointsArray[i].x,allPointsArray[i].y+30, allPointsArray[i].title).attr(font));
        }        
     };
     
        // for (var i = allPointsSet.length - 1; i >= 0; i--) {
            
        //     console.log(i+ " "+ allPointsSet[i].attrs.text);
        //  };
       
});

});
