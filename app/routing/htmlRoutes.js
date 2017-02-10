// Create a js script to handle the submit button from survey.html
$("#submit").on("click", function(e) {
	var name = $("#name-input").val();
	var photo = $("#photo-input").val();
	var scores = $("#scores-input").val();
};

// Create a variable "answers" to hold the reuslts

var result {
	"name" : name,
	"photo" : photo,
	"scores" : scores
};

console.log(answers);
