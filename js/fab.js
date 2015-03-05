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



var data = {
    employees: [
    {   photo: "4",
        video: "5"},
         {   photo: "12",
        video: "5"}
    ]};

 
var template = "{{#employees}}<div class=\"skills\">" +
							"<div class=\"skillsName\"><p>{{photo}}</p></div>"+
                            "<div class=\"skills-1\" attr=\"{{photo}}\"></div>" +
                            "</div>{{/employees}}";


var html = Mustache.to_html(template, data);
$('#sampleArea').html(html);
