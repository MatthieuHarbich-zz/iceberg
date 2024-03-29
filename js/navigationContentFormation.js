$(document).ready(function() {


$("#formationContent").hide();

var data_formation = $.getJSON('datas/formation.json', function(json) {
	    data_formation = json;

});


$(".openFormation").click(function() {
	var key = $(this).attr("data-nav");
	var size = data_formation.length;
	showContentFormation(key, data_formation);
});
});

$(".close").click(function() {
	$("#formationContent").hide();
	$("#profilContent").hide();

});




function showContentFormation(key, data_formation){
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
									'{{#FormationVideo}}<div class=\"formationMov\"><iframe src="https://player.vimeo.com/video/{{FormationVideo}}?title=0&byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>{{/FormationVideo}}';
var html = Mustache.to_html(template_formationMedia, data_formation);
$('.formationMedia').html(html);




};