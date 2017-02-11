//********************************
// api-routes.js

var http = require("https");

// Routes 

// ==================================
module.exports = function(app) {

	// When the page loads, grab all our friends
	$.get("/api/all", function(data) {
		if (data.length !== 0) {
			for (var i = 0; i < data.length; i++) {
				var profile = $("<div>");
				profile.addClass("friend");
				profile.append("<p>" + data[i].name +"<p>");
				profile.append("<p>" + data[i].photo +"<p>");
				profile.append("<p>" + data[i].score +"<p>");
				$("friends-rep").prepend(profile);
			
	// Make Basic Calculate comparison
	var friendScore[i] = data[i].score;
	if (data.length > 1) {
		for (var i = 0; i < data.length-1, i++) {
			for (var j = 0; j < friendScore.length, j++){
				var friendComp[i][j] = friendScore[data.length][j] - friendScore[i][j]; 
				var friendAbs[i][j] = math.abs(friendComp[i][j]);
				var friendSum[i] = sum([friendAbs[i][1], friendAbs[i][2], friendAbs[i][3], friendAbs[i][4], friendAbs[i][5], friendAbs[i][6], friendAbs[i][7], friendAbs[i][8], friendAs[i][9], friendAbs[i][10]]);
				var friendSum = [];
				friendSum.push(friendSum[i])
					if(friendSum[i] === Math.min.apply(null, friendSum)){
					// Grab the result from the AJAX post so that the best match's name and photo are displayed.
					$("#bestMatchName").text(data[i].name);
					$('#bestMatchImage').attr("src", data[i].photo);
					// Show the modal with the best match 
					$("#bestMatchModal").modal('toggle');
					} else {
						console.log("start afresh");
					}
				}
			}
			}
		}
	};
});
}