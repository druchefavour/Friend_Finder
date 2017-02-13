
$("#submit").on("click", function(e) {
	event.preventDefault();

	var name = $("#name-input").val();
	var photo = $("#photo-input").val();
	var scores = [
	parseInt($("#scores-input1").val()), 
	parseInt($("#scores-input2").val()), 
	parseInt($("#scores-input3").val()),
	parseInt($("#scores-input4").val()),
	parseInt($("#scores-input5").val()),
	parseInt($("#scores-input6").val()),
	parseInt($("#scores-input7").val()),
	parseInt($("#scores-input8").val()),
	parseInt($("#scores-input9").val()),
	parseInt($("#scores-input10").val()),
	];

	// Make a newFriendsobject to hold the results
	var newFriends = {
		name: name,
		url: photo,
		score: scores
	};

	console.log(newFriends);

//var urlParts = "http://localhost:8080"; 

	// Send an AJAX POST-request with jQuery
	$.post("api/friends", newFriends)
	// On success, run the following code
	.done(function(data) {
		var profile = $("<div>");
		profile.addClass("friend");
		profile.append(newFriends);
		$("friends-rep").prepend(profile);
         alert("Adding friend...");    
       });
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
// ******************************************