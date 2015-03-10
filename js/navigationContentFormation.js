$(document).ready(function() {


$("#formationContent").hide();

var data_formation = $.getJSON('datas/formation.json', function(json) {
	    data_formation = json;

});


$(".openFormation").click(function() {
	var key = $(this).attr("data-nav");
	var size = data_formation.length;
	showContent(key, data_formation);
});
});

$(".close").click(function() {
	$("#formationContent").hide();
});




function showContent(key, data_formation){
	var key = key;

	$(".hide").empty();
	//$("#nextProfil").attr('data-nav', key);
	$("#formationContent").show();
	

	toTemplateFormation(data_formation, key);

};


/**TEMPLATES**/
function toTemplateFormation(data_formation, key) {

console.log(key);
data_formation = data_formation[key];

var template_formationName = 		"<h1><span class=\"icon-i-{{ico}} h1ico\"/>{{FormationName}}</h1>";
var html = Mustache.to_html(template_formationName, data_formation);
$('.formationTitle').html(html);

var template_formationDesc = 		"{{#FormationDesc}}<p>{{p}}</p>{{/FormationDesc}}";
var html = Mustache.to_html(template_formationDesc, data_formation);
$('.formationDesc').html(html);

var template_formationMedia = 		"{{#FormationImage}}<img src=\"img/{{FormationImage}}\"/>{{/FormationImage}}" +
									"<div class=\"formationMov\">{{FormationVideo}}</div>";
var html = Mustache.to_html(template_formationMedia, data_formation);
$('.formationMedia').html(html);




};