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
	var answers = {
		name: name,
		url: photo,
		scores: scores
	}

	e.preventDefault();
	console.log(answers);
	$(".form-group").empty();
}); 


/*$("#submit").on("click", function(e) {
	var name = $("#name-input").val();
	var photo = $("#photo-input").val();
	var scores = $("#scores-input").val();

// Create a variable "answers" to hold the reuslts

var answers = {
	"name" : name,
	"url" : photo,
	"scores" : scores
}

$.ajax({
	url: "/api/friends",
	body: survey,
	method: 'POST'
}).done(function(response) {
	console.log(response);
});
console.log(scores);
e.preventDefault();
return false;
});*/



