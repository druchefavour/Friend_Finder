
$("#submit").on("click", function(e) {
	event.preventDefault();
	// Grab the form elements

	var name = $("#name-input").val().trim();
	var photo = $("#photo-input").val().trim();
	var scores = [
	parseInt($("#scores-input1").val().trim()), 
	parseInt($("#scores-input2").val().trim()), 
	parseInt($("#scores-input3").val().trim()),
	parseInt($("#scores-input4").val().trim()),
	parseInt($("#scores-input5").val().trim()),
	parseInt($("#scores-input6").val().trim()),
	parseInt($("#scores-input7").val().trim()),
	parseInt($("#scores-input8").val().trim()),
	parseInt($("#scores-input9").val().trim()),
	parseInt($("#scores-input10").val().trim()),
	];

	// Make a friends object to hold the results
	var newFriends = {
		name: name,
		photo: photo,
		scores: scores
	};

	console.log("These are your scores: " + newFriends.scores);

	//==============================================
	// Push the user info to friendsRepo.js. 
	// This is a javascript file created with an array of objects that holds the form output from survey.js
	// It is very similar to the standard ajax function we used. 
	// Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
	// The callback is the response of the server. In our case, we set up code in apiRoutes that "returns" true or false
	//================================================

	// Here we get the location of the root page. 
	// We use this instead of explicitly saying the URL is localhost:8080 because the url will change when we deploy.

	//var currentURL = window.location.origin;


	// Send an AJAX POST-request with jQuery
	$.post('api/friends', newFriends).done(function(data) {
		alert("Adding friend...");

		$("#bestMatchName").text(data.name);
		$("#bestMatchImage").attr("src", data.photo);
		$("#bestMatchModal").modal('toggle');

	//Empty each input box by replacing the value with an empty string
       $("#name-input").val("");
       $("#photo-input").val("");
       $("#scores-input1").val("");
       $("#scores-input2").val("");
       $("#scores-input3").val("");
       $("#scores-input4").val("");
       $("#scores-input5").val("");
       $("#scores-input6").val("");
       $("#scores-input7").val("");
       $("#scores-input8").val("");
       $("#scores-input9").val("");
       $("#scores-input10").val("");

	});

	return false;
});

// ******************************************