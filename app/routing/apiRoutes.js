//********************************
// api-routes.js
//*********************************

// LOAD DATA
// This will link our routes to a series of "data" sources

//var stuffINeed = require("./ess.js");
var friendsData = require("../public/data/friendsRepo.js");
var path = require('path');

// Routes 

// ==================================
module.exports = function(app) {
	// API GET Requests
	
	// When users visit a page, (say localhost:8080/api/all ... they are shown a JSON of the data from friendRep.js)

	app.get('/api/searchFriend', function(req, res) {
		var chosen = req.param.friends;

		if (chosen) {
			for (var i=0; i < friendsData.length; i++) {
				if (chosen === friendsData[i].name) {
					res.json(friendsData[i]);
					return;
				}
			}
			res.send("no friend found");
		}	
	else{
		res.json(friendsData);
	}
	});

		// API POST Requests
		// When a user submits a form data is submited as (a JSON object).
		// The object is pushed to the appropriate Javascript array

		// When user fills out a survey request... data is sent to the server...

		// Server saves the data to the array "friendsArray" in friendsRepo.js file)
		//========================================================
		//Server would respond to users survey results and then calculate the difference between existing scores and the users scores
		//The app would chose the user with the least differences as the best friend match

		app.post('/api/searchFriend', function(req, res){

		//Create variable that holds the best match and updates as it loops through the options

		var bestFriend = {
			name: "",
			photo: "",
			friendDifference: 500
		};
		//The code below will post and parse the result of the survey
		var newFriends = req.body;
		var friendsName = newFriends.name;
		var friendPhoto = newFriends.photo;
		var friendScores = newFriends.scores;

		//The code below calculates the difference between the users's scores and the scores of each user in the database

		var totalDifference = 0;

		//The code below would loop through the friend possibilities in the database

		for  (var i=0; i<friendsArray.length; i++){
			console.log(friendsArray[i].name);
			totalDifference = 0;

			//The code below would loop through all of the scores for each friend

			for (var j=0; j< friendsArray[i].scores[j]; j++){

			//The code below would calculate the total difference between the scores and sums into the totalDifference

			totalDifference += Math.abs(
				parseInt(friendScores[j])-
				parseInt(friendsArray[i].scores[j]));

				//if sum of diff is less then the differences of the current 'best match'

				if(totalDifference <=bestFriend.friendsDifference){
				//resets the best match to the new friend

				bestFriend.name = friendsArray[i].name;
				bestFriend.photo = friendsArray[i].photo;
				bestFriend.friendDifference = totalDifference;
			}
		}
	}
	//saves the user's data to the database 
	friendsArray.push(newFriends);

	//return a JSON with user's best match to be used by html
	res.json(bestFriend);

});

//	app.post('/api/add', function(req, res) {
//		var newFriends = req.body;
//		friendsData.push(newFriends);
//		res.json(newFriends);
//		});
//};
	//99999999999999999999999999999999999999999999999999999999999999999

