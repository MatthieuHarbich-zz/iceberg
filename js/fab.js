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


console.log(Object.keys(skills.skills[0]));

$(".skills-1").width(skills.skills[0].photo);
$(".skillsName").append(Object.keys(skills.skills[0])[0]);




var data = {
    employees: [
    {   firstName: "4",
        lastName: "Coenraets"},
    {   firstName: "John",
        lastName: "Smith"}
    ]};
var template = "Employees:<div>{{#employees}}" +
                            "<div>{{firstName}} {{lastName}}</div>" +
                            "{{/employees}}</div>";
var html = Mustache.to_html(template, data);
$('#sampleArea').html(html);
