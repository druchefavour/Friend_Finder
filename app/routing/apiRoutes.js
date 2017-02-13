//********************************
// api-routes.js

var http = require("https");

// Routes 

// ==================================
module.exports = function(app) {
	var friends = [];

	app.post("/api/friends", function(req, res) {
		var newFriends = req.body;
		newFriends.name = newFriends.name.replace(/\s+/g, "").toLowerCase();
		console.log(newFriends);
		friends.push(newFriends);
		res.json(newFriends);
		});

//999999999999999999999999999999999999999999999999999999999999999999999999999
	// When the page loads, grab all our friends
	app.get("/api/all", function(data) {
		if (data.length !== 0) {
			for (var i = 0; i < data.length; i++) {
				var profile = $("<div>");
				profile.addClass("friend");
				profile.append("<p>" + data[i].name +"<p>");
				profile.append("<p>" + data[i].photo +"<p>");
				profile.append("<p>" + data[i].score +"<p>");
				$("friends-rep").prepend(profile);
			// Make Basic Calculate comparison
			var friendScore = [];

			data[i].score = [data[i].score[0], data[i].score[1],data[i].score[2], data[i].score[3], data[i].score[4], data[i].score[5], data[i].score[6], data[i].score[7], data[i].score[8], data[i].score[9]];

			var friendSum = [];
			friendSum[i] = sum([math.abs((data[length].score[0])-(data[i].score[0])), math.abs((data[length].score[1])-(data[i].score[1])), math.abs((data[length].score[2])-(data[i].score[2])), math.abs((data[length].score[3])-(data[i].score[3])),math.abs((data[length].score[4])-(data[i].score[4])), math.abs((data[length].score[5])-(data[i].score[5])), math.abs((data[length].score[6])-(data[i].score[6])), math.abs((data[length].score[7])-(data[i].score[7])), math.abs((data[length].score[8])-(data[i].score[8])), math.abs((data[length].score[9])-(data[i].score[9]))]);

				friendSum.push(friendSum[i]);
				//0000000000000000000000000000000000000000000000000
				{
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
				//00000000000000000000000000000000000000000000000000000
			}
			}
		})
	//99999999999999999999999999999999999999999999999999999999999999999
	};

