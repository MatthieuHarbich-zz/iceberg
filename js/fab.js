var navi = ["mike", "pierre", "jacque", "jean"];
//console.log(navi[0]);
//console.log(navi.lenght);




$(document).ready(function() {
$("#profilContent").hide();
$("#formationContent").hide();

$("#nextProfil").click(function() {
	var key = $( this ).attr('data-nav');
	showContent(key);

});



$( ".close" ).click(function() {
	$("#profilContent").hide();
});


$(".open").click(function() {
	$("#formationContent").hide();
	var key = $(this).attr('data-nav');
	showContent(key);
	setPreviousNext(key);
});

});

function setPreviousNext(key){
	var key = key;
	console.log("clef:" + key);
	$("#nextProfil").attr('data-nav', "mike");

	$("#nextProfil").attr('data-nav', "mike");
	$("#previousProfil").attr('data-nav', "jacques");

};


function showContent(key){
	var key = key;

	$(".hide").empty();

	$("#nextProfil").attr('data-nav', key);
	
	$("#profilContent").show();

  $.getJSON('data_' + key +'.json', function(json) {
  	toTemplate(json);
  });
};







/** TEMPLATE SKILLS + NAME **/
function toTemplate(data) {

	console.log(data);

var template_profilSkills = 		"{{#skills}}<div class=\"skills\">" +
							"<div class=\"skillsName\"><span class=\"icon-i-{{skillsName}} + \"></div>"+
							"<div class=\"skillSet\">" +
                            "<div class=\"skill\" style=\"width:{{value}}px\"></div>" +
                            "</div>" +
                            "</div>{{/skills}}";

var html = Mustache.to_html(template_profilSkills, data);
$('.profilSkills').html(html);

/** TEMPLATE shortDesc **/

var template_profilDesc = 				"<h1>{{name}}<span class=\"age\">({{age}})</span></h1>" +
										
										"<div class=\"shortDesc\">{{#shortDesc}}<p>{{.}}</p>{{/shortDesc}}</div>";

var html = Mustache.to_html(template_profilDesc, data);
$('.profilDesc').html(html);

/** TEMPLATE profilPicture **/

var template_profilPicture = 		"<img src=\"media/{{profilPict}}\"/>";

var html = Mustache.to_html(template_profilPicture, data);
$('.profilPicture').html(html);

/** TEMPLATE profilMov **/

var template_profilMov = 		"<div class=\"js-video [vimeo, widescreen]\">"+
								"<iframe src=\"https://player.vimeo.com/video/51365855?color=ffffff&title=0&byline=0&portrait=0\" width=\"100%\" height=\"auto\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>" +
								"</div>";
var html = Mustache.to_html(template_profilMov, data);
$('.profilMov').html(html);


};







