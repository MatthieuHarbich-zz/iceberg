$( ".close" ).click(function() {
	$("#profilContent").hide();
});









$( ".open" ).click(function() {
  $("#profilContent").show();

  $.getJSON('data.json', function(json) {
  		console.log("yeah");
  });



});










  
/*
var per_1 = {
		name: "John Smith",
		age: 26,
		shortDesc: "Curabitur consectetur, libero a consequat eleifend",
		avatare: "avt_url",
		profilPict: "pp_url",
		skills: [
				{ 
					skillsName: "Photo"	,
					value: "34" }, 
				{ 
					skillsName: "Video",	
					value: "56" }, 
				{ 
					skillsName: "Code",	
					value: "40" }, 
					{ 
					skillsName: "Management",	
					value: "12" }, 
				]
		
};
*/



//console.log(per_1.skills[0]);
//console.log(per_1.skills[0].skillsName);

/** TEMPLATE SKILLS + NAME **/
function toTemplate(data) {
	var per_1 = this.data;

var template_Skills = 		"{{#skills}}<div class=\"skills\">" +
							"<div class=\"skillsName\"><p>{{skillsName}}</p></div>"+
							"<div class=\"skillSet\">" +
                            "<div class=\"skill\" style=\"width:{{value}}px\"></div>" +
                            "</div>" +
                            "</div>{{/skills}}";

var html = Mustache.to_html(template_Skills, per_1);
$('#sampleArea').html(html);

/** TEMPLATE shortDesc **/

var template_shortDesc = 		"<div class=\"shortDesc\">{{shortDesc}}</div>";

var html = Mustache.to_html(template_shortDesc, per_1);
$('#shortDesc').html(html);



};


