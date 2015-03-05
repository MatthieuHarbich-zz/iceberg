$(function(){

    Raphael.fn.line = function(startX, startY, endX, endY){
        return this.path('M' + startX + ' ' + startY + ' L' + endX + ' ' + endY).attr({"stroke": lineColor, 
           "stroke-width": 3, "stroke-dasharray":"."});
    };


    //CONSTANTS
            var font = {"font-size":14, "font-family":"Helvetica"};
            var mainPointFont = {"font-size": 20, "font-family": "Arial"}
            var radius = 12;
            var radiusMain = 25;
            var radiusImmerged = 15;
        //COLORS
            var immergedColor = "#CE1126";
            var mainColor = "#e7ff00"
            var lineColor = "#FFF"
        //POINTS & DESC
            var pointPhoto = {x:600+300, y:20+200, "type": "main", "desc":"c'est de la photo"}
            var cercleTravel = {x:600+300, y:20+200, "type": "immerged"}
            var pointEclairage = {x: 600+300, y: 400+200, "type": "immerged","desc":"eclairage c'est important"};
            var pointCadrage = {x:500+300, y:450+200, "type": "immerged","desc":"il faut penser a ca aussi"}
            var pointEtalonnage = {x:700+300, y:170+200, "type": "immerged","desc":"la couleur ca change tout!"}
            var pointComposition = {x:550+300, y:200+200, "type": "immerged","desc":"la regle des 3/4"}
    
    var allPoints = [pointPhoto, pointEtalonnage,pointEclairage, pointCadrage, pointComposition]      
    var layer = $("<li class='layer tooltip' data-depth=0.5></li>");

    //APPEND THE DESCRIPTIONS TO POINTS
    for (var i = allPoints.length - 1; i >= 0; i--) {
        var description = $("<p class='tooltip' data-id="+i+"></p>").text(allPoints[i].desc);
        
        layer.append(description);
        description.css("position","absolute");
        description.css("top", allPoints[i].y+'px');
        description.css("right", allPoints[i].x+200+'px');
        
        //description.appendTo('#descriptions');
        layer.appendTo('body');
    };
    

    Raphael(function () {

        var r = Raphael("holder",2000,2000);
        
        //TEXTS
            var etalonnageText = r.text(pointEtalonnage.x, pointEtalonnage.y+30, "ETALONNAGE").attr(font)
            var cadrageText = r.text(pointCadrage.x, pointCadrage.y+30, "CADRAGE").attr(font)
            var photoText = r.text(pointPhoto.x,pointPhoto.y+40, "PHOTO").attr(mainPointFont);
            var compositionText = r.text(pointComposition.x, pointComposition.y+30, "COMPOSITION").attr(font)
            var eclairageText = r.text(pointEclairage.x, pointEclairage.y+30, "ECLAIRAGE").attr(font);
            // TEXTS SET
            var texts = r.set(etalonnageText,cadrageText, photoText, eclairageText, photoText)



        fade = function (id,startX, startY, endX, endY,type) {
                return function () {
                    if(type == "main"){
                        var back = r.line(startX, startY, endX, endY);
                        var front = set[id].attr({fill: "#fff", r: radius})
                                .animate({fill: mainColor, r: radiusMain }, 200); 
                    }else{
                        var back = r.line(startX, startY, endX, endY);
                        var front = set[id].attr({fill: "#fff", r: radius})
                                .animate({fill: immergedColor, r: radiusImmerged }, 200);   
                    }
                        back.insertBefore(texts);
                };
        }; 



        travel = function () {
 
            c.stop().animate(
             {  "0%" :{cy: pointPhoto.y, easing: "linear", callback: fade(4,pointPhoto.x, pointPhoto.y, pointEclairage.x, pointEclairage.y,pointPhoto.type )},
                "20%": {cy: pointEclairage.y, easing: "linear", callback: fade(1,pointEclairage.x, pointEclairage.y, pointCadrage.x, pointCadrage.y,pointEclairage.type ) },
                "40%": {cy: pointCadrage.y, easing: "linear", callback: fade(2, pointCadrage.x,pointCadrage.y, pointComposition.x,pointComposition.y, pointCadrage.type)},
                "60%": {cy: pointComposition.y, easing: "linear", callback: fade(3, pointComposition.x,pointComposition.y, pointEtalonnage.x,pointEtalonnage.y, pointComposition.type)},
                "80%": {cy: pointEtalonnage.y, easing: "linear", callback: fade(0, pointEtalonnage.x,pointEtalonnage.y, pointPhoto.x,pointPhoto.y, pointEtalonnage.type)},
                "100%": {cy: pointPhoto.y, easing: "linear", callback: fade(4, pointEtalonnage.x,pointEtalonnage.y, pointPhoto.x,pointPhoto.y, pointPhoto.type)},
             }, 1000).animate({
                "0%" : {cy: pointPhoto.y, easing: "linear"},
                "20%": {cx: pointEclairage.x, easing: "linear"},
                "40%": {cx: pointCadrage.x, easing: "linear"},
                "60%": {cx: pointComposition.x, easing: "linear"},
                "80%": {cx: pointEtalonnage.x, easing: "linear"},
                "100%": {cx: pointPhoto.x, easing: "linear"}
            }, 1000)
        ;};
        // SVG 
        var    set = r.set(
                        r.circle(pointEtalonnage.x, pointEtalonnage.y, radius), //1
                        r.circle(pointEclairage.x, pointEclairage.y, radius),   //2
                        r.circle(pointCadrage.x, pointCadrage.y, radius),         
                        r.circle(pointComposition.x, pointComposition.y, radius),
                        r.circle(pointPhoto.x, pointPhoto.y, radiusMain));

                set[4].click(travel);
                set.attr({stroke: "none", fill: "#666"});
                set[4].attr({fill: mainColor})
                set.glow();
       
        var    c = r.circle(cercleTravel.x, cercleTravel.y, 10).attr({stroke: "#ada", "stroke-width": 4})
                   

    });

});
