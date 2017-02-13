//********************************
// api-routes.js
//*********************************

// LOAD DATA
// This will link our routes to a series of "data" sources

var http = require("../data/friendsRepo.js");
var path = require('path');

// Routes 

// ==================================
module.exports = function(app) {
	// API GET Requests
	
	// When users visit a page, (say localhost:8080/api/all ... they are shown a JSON of the data from friendRep.js)

	app.get('/api/friends', function(req, res) {
		res.json(friends);

		// API POST Requests
		// When a user submits a form data is submited as (a JSON object).
		// The object is pushed to the appropriate Javascript array

		// When user fills out a survey request... data is sent to the server...

		// Server saves the data to the array "friendsArray" in friendsRepo.js file)
		//========================================================

	app.post("/api/friends", function(req, res) {
		console.log(req.body);
	});

		//fs.writeFile('app/public/api/newFriends.html',data, function(err){
		//	if(err) console.error(err);
	
	
	
	   
		//friends.push(newFriends);
		
		//profile = res.json(newFriends);
		
		//var profile = res.json(newFriends);
		/*$("#friends-rep").prepend(res.json(newFriends));
		if (res.length !== 0) {
			for (var i = 0; i < res.length; i++) {
				var profile = $("<div>");
				profile.addClass("friend");
				profile.append("<p>" + res[i].name +"<p>");
				profile.append("<p>" + res[i].photo +"<p>");
				profile.append("<p>" + res[i].score +"<p>");
				$("#friends-rep").prepend(profile);
		
		};
	}*/

})



//999999999999999999999999999999999999999999999999999999999999999999999999999
	// When the page loads, grab all our friends
	app.get("/api/all", function(req, res) {
		if (res.length !== 0) {
			for (var i = 0; i < res.length; i++) {
				var profile = $("<div>");
				profile.addClass("friend");
				profile.append("<p>" + res[i].name +"<p>");
				profile.append("<p>" + res[i].photo +"<p>");
				profile.append("<p>" + res[i].score +"<p>");
				$("#friends-rep").prepend(profile);
			// Make Basic Calculate comparison
			var friendScore = [];

			res[i].score = [res[i].score[0], res[i].score[1], res[i].score[2], res[i].score[3], res[i].score[4], res[i].score[5], res[i].score[6], res[i].score[7], res[i].score[8], res[i].score[9]];

			var friendSum = [];
			friendSum[i] = sum([math.abs((res[length].score[0])-(res[i].score[0])), math.abs((res[length].score[1])-(res[i].score[1])), math.abs((res[length].score[2])-(res[i].score[2])), math.abs((res[length].score[3])-(res[i].score[3])),math.abs((res[length].score[4])-(res[i].score[4])), math.abs((res[length].score[5])-(res[i].score[5])), math.abs((res[length].score[6])-(res[i].score[6])), math.abs((res[length].score[7])-(res[i].score[7])), math.abs((res[length].score[8])-(res[i].score[8])), math.abs((res[length].score[9])-(res[i].score[9]))]);

				friendSum.push(friendSum[i]);
				//0000000000000000000000000000000000000000000000000
				{
					if(friendSum[i] === Math.min.apply(null, friendSum)){
					// Grab the result from the AJAX post so that the best match's name and photo are displayed.
					$("#bestMatchName").text(res[i].name);
					$('#bestMatchImage').attr("src", res[i].photo);
					// Show the modal with the best match 
					$("#bestMatchModal").modal('toggle');
					} else {
						console.log("start afresh");
					}
				}
				//00000000000000000000000000000000000000000000000000000
			}
			}
		})
	//99999999999999999999999999999999999999999999999999999999999999999
	};

