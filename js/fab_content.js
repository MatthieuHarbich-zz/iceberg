/* $(document).ready(function() {
$("#formationContent").hide();



$( ".close" ).click(function() {
	$("#formationContent").hide();
});


$(".formationNav").click(function() {
	var key = $(this).attr('data-nav');

	$(".hide").empty();
	$("#profilContent").hide();

	showContentFormation(key);

	});
});


function showContentFormation(key){
	var key = key;

	$(".hide").empty();

	$("#formationContent").show();

  $.getJSON('data_' + key +'.json', function(json) {
  	toTemplateFormation(json);
  });
};
*/

/** TEMPLATE SKILLS + NAME **/

/*
function toTemplateFormation(data) {
	console.log(data);

var template_title = 		"<h1>{{title}}</h1>";
var html = Mustache.to_html(template_title, data);

$('.formationTitle').html(html);

*/
/** TEMPLATE shortDesc **/
/**
var template_mediaDesc = 				"{{#shortDesc}}<p>{{.}}</p>{{/shortDesc}}";
var html = Mustache.to_html(template_mediaDesc, data);

$('.formationDesc').html(html);

var template_contentMedia = 		"<img src=\"media/{{media}}\"/>";
var html = Mustache.to_html(template_contentMedia, data);
$('.formationMedia').html(html);
};
**/






