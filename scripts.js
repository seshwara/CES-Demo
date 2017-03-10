$(document).ready(function(){

	// I tried to make an AJAX call to get the JSON result, but the API call is throwing a cross domain issue, which is a security from their side.
	// $.ajax({
	// 	type : "POST",
	// 	data : {},
	// 	jsonp: true,
	// 	url : "https://www.w3schools.com/js/mytutorials.txt",
	// 	dataType: "JSON",
	// }).done(function(response){
	// 	if(response != null && response != undefined){
	// 		console.log(response);
	// 	}
	// 	else{
	// 		console.log("No proper response, but result is 200 OK");
	// 	}
		
	// }).fail(function(xhr, status){
	// 	console.log("Server Error", status);
	// });

	
    //jQuery Accordion
	$("#jqueryAccordion").accordion({collapsible:true});
		
	// jQuery dialog box
	$("#thedialog").dialog({
		modal : true,
		autoOpen: false,
		height: 150,
		width: 600
	});
	
	//click function to listen jQuery click event and open modal
	$('#thelink').click(function(){
	 	$('div#thedialog').dialog('open');
	 	$(".ui-dialog-titlebar-close").text("X") 
	});

	//JSON object from w3schools
	var listObj = [
					{
					"display": "HTML Tutorial",
					"url": "https://www.w3schools.com/html/default.asp"
					},
					{
					"display": "CSS Tutorial",
					"url": "https://www.w3schools.com/css/default.asp"
					},
					{
					"display": "JavaScript Tutorial",
					"url": "https://www.w3schools.com/js/default.asp"
					},
					{
					"display": "jQuery Tutorial",
					"url": "https://www.w3schools.com/jquery/default.asp"
					},
					{
					"display": "SQL Tutorial",
					"url": "https://www.w3schools.com/sql/default.asp"
					},
					{
					"display": "PHP Tutorial",
					"url": "https://www.w3schools.com/php/default.asp"
					},
					{
					"display": "XML Tutorial",
					"url": "https://www.w3schools.com/xml/default.asp"
					}
				];

		for(i=0; i<listObj.length; i++){
			$(".resultGrid").append("<div class='links'> <a href="+listObj[i].url+" target='blank'>"+listObj[i].display+"</a></div>")
		}
});

//Function to show modal popup
function displaylink(varmodalnid)
{
	if(varmodalnid == "myBtn"){
		document.getElementById("modalBox").style.display = "block";
	}
	else if(varmodalnid == "close"){
		document.getElementById("modalBox").style.display = "none";
	}
}

//Function to close the javascript modal when we click on anywhere on the window
window.onclick = function(event) {
	if (event.target == modalBox) {
		document.getElementById("modalBox").style.display = "none";
		$(window).scrollTop(1200);
	}
}


