// Create a js script to handle the submit button from survey.html
$("#submit").on("click", function(e) {
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

	// Create a variable "answers" to hold the reuslts
	var friends = {
		name: name,
		url: photo,
		scores: scores
	}

	$(".form-group").empty();

	// The Url of this website

	var thisUrl = "http://localhost:8080"; 

	// Make an Ajax call to post answers to server
	$.ajax({
		url:thisUrl + "/api/friends",
		body: friends,
		method: 'POST'
	}).done(function(response) {
		//Display the best match (name and photo) using the result of the Ajax post
		$("#best-name-match").text(response.name);
		$("#best-photo-match").attr("src", response.photo);

		// Display the modal with the best match
		$("best-match-modal").modal('toggle');
});
	e.preventDefault();
	return false
});

//module.exports = apiRoute;
