$(document).ready(function() {

$("#profilContent").hide();
$("#formationContent").hide();
$("#skillsSample").hide();


var data_profil = $.getJSON('datas/profils.json', function(json) {
	    data_profil = json;
});

//var data_profils = data_profil;

/**
$( ".open" ).hover(function() {
  	var key = $(this).attr("data_profil-nav");
  	console.log(key);
  	$("#skillsSample").show();
    //toTemplateSkills(data_profil, key);
    data_profil = data_profils[key]; 
	var template_profilSampleQuickShow = "{{#skills}}<div class=\"skills\">" +
							"<div class=\"skillsName\"><span class=\"icon-i-{{skillsName}} + \"></div>"+
							"<div class=\"skillSet\">" +
                            "<div class=\"skill\" style=\"width:{{value}}px\"></div>" +
                            "</div>" +
                            "</div>{{/skills}}";
	var html = Mustache.to_html(template_profilSampleQuickShow, data_profil);
	$('.profilSampleQuickShow').html(html);

  }, function() {
  	$("#skillsSample").hide();
  	
  }
);
**/

$(".diveWithMe").click(function() {
	$(".hide").empty();
	$("#profilContent").hide();
});


$(".openProfil").click(function() {
	$("#formationContent").hide();
	$("#profilContent").hide();

	var key = $(this).attr("data-nav");
	var size = data_profil.length;
	showContentProfil(key, data_profil);
	setPrevNext(key, size, data_profil);
});

$(".prev").click(function() {
	$(".hide").empty();
	$("#formationContent").hide();
	var key = $(this).attr("data-nav");
	var size = data_profil.length;
	setPrevNext(key, size, data_profil);
	showContentProfil(key, data_profil);
});


$(".next").click(function() {
	$(".hide").empty();
	$("#formationContent").hide();
	var key = $(this).attr("data-nav");
	var size = data_profil.length;
	setPrevNext(key, size, data_profil);
	showContentProfil(key, data_profil);
});
});


function showContentProfil(key, data_profil){
	var key = key;

	$(".hide").empty();
	//$("#nextProfil").attr('data_profil-nav', key);
	$("#formationContent").hide();
	$("#profilContent").show();
	toTemplateProfils(data_profil, key);

};


function setPrevNext(key, size, data_profil){
	var key = key;
	var size = size;
	var data_profil = data_profil;

	if (key == (size -1)) {

		$(".prev").attr("data-nav", key - 1);
		$(".next").attr("data-nav", 0 );

	} else if (key == 0) {

		$(".prev").attr("data-nav", (size - 1));
		$(".next").attr("data-nav", ((key*1)+1));


	} else {

		$(".prev").attr("data-nav", (key - 1));
		$(".next").attr("data-nav", ((key*1)+1) );

	};

	$( ".openProfil").removeClass('selected');
	$( ".openProfil[data-nav*='" + key + "']" ).addClass('selected');

	$( ".diveWithMe").attr('data-name', data_profil[key].btn_name);


};




/**TEMPLATES**/
function toTemplateProfils(data_profil, key) {


	data_profil = data_profil[key];

var template_profilSkills = 		"{{#skills}}<div class=\"skills\">" +
							"<div class=\"skillsName\"><span class=\"icon-i-{{skillsName}} + \"></div>"+
							"<div class=\"skillSet\">" +
                            "<div class=\"skill\" style=\"width:{{value}}px\"></div>" +
                            "</div>" +
                            "</div>{{/skills}}";

var html = Mustache.to_html(template_profilSkills, data_profil);
$('.profilSkills').html(html);

var template_profilDesc = 				"<h1>{{name}}<span class=\"age\">({{age}})</span></h1>" +
										"{{#background}}<h2>Background</h2><p>{{background}}</p>{{/background}}" +
										"<h2>Hobby</h2><p>{{hobby}}</p>" +
										"<h2>Rôle</h2><p>{{r\u00f4le}}</p>" +
										"{{#famille}}<h2>Famille</h2><p>{{famille}}</p>{{/famille}}" +
										"<p>{{#skillsperso}}<span class=\"skillsList\"> {{skillTag}} </span>{{/skillsperso}}</p>";
										

var html = Mustache.to_html(template_profilDesc, data_profil);
$('.profilDesc').html(html);

var template_profilPicture = 		"<img src=\"img/{{btn_name}}.jpg\"/>";

var html = Mustache.to_html(template_profilPicture, data_profil);
$('.profilPicture').html(html);

var template_profilMov = 		"<div class=\"js-video [vimeo, widescreen]\">"+
								"<iframe src=\"https://player.vimeo.com/video/51365855?color=ffffff&title=0&byline=0&portrait=0\" width=\"100%\" height=\"auto\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>" +
								"</div>";
var html = Mustache.to_html(template_profilMov, data_profil);
$('.profilMov').html(html);

};

function toTemplateSkills (data_profil, key){
	
};


