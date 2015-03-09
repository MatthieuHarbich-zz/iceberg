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














