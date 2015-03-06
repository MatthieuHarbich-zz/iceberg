$( ".close" ).click(function() {
	$("#profilContent").hide();
});



$( ".open" ).click(function() {
	$("#profilContent").show();
});



var skills = {"skills":[
    {"photo":"50"}, 
    {"video":"50"},
    {"danse":"50"}
]};

/**
console.log(Object.keys(skills.skills[0]));

$(".skills-1").width(skills.skills[0].photo);
$(".skillsName").append(Object.keys(skills.skills[0])[0]);
**/




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



//console.log(per_1.skills[0]);
//console.log(per_1.skills[0].skillsName);

var template_Skills = 		"{{#skills}}<div class=\"skills\">" +
							"<div class=\"skillsName\"><p>{{skillsName}}</p></div>"+
							"<div class=\"skillSet\">" +
                            "<div class=\"skill\" style=\"width:{{value}}px\"></div>" +
                            "</div>" +
                            "</div>{{/skills}}";

var html = Mustache.to_html(template_Skills, per_1);
$('#sampleArea').html(html);



var template_shortDesc = 		"<div class=\"shortDesc\">{{shortDesc}}</div>";

var html = Mustache.to_html(template_shortDesc, per_1);
$('#shortDesc').html(html);






