$( ".close" ).click(function() {
	$("#profilContent").hide();
});



$( ".open" ).click(function() {
  $("#profilContent").show();

  $.getJSON('data.json', function(json) {
  	toTemplate(json);
  });
});






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
$('#profilSkills').html(html);

/** TEMPLATE shortDesc **/

var template_profilDesc = 				"<h1>{{name}}<span class=\"age\">({{age}})</span></h1>" +
										
										"<div class=\"shortDesc\">{{#shortDesc}}<p>{{.}}</p>{{/shortDesc}}</div>";

var html = Mustache.to_html(template_profilDesc, data);
$('#profilDesc').html(html);

/** TEMPLATE profilPicture **/

var template_profilPicture = 		"<img src=\"media/avatar_1.jpg\"/>";

var html = Mustache.to_html(template_profilPicture, data);
$('#profilPicture').html(html);

/** TEMPLATE profilMov **/

var template_profilMov = 		"<img src=\"media/mico.jpg\"/>";

var html = Mustache.to_html(template_profilMov, data);
$('#profilMov').html(html);



};







