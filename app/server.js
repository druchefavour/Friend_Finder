// Dependencies
//Require useful npm packages
var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 8080;

// Serve static content for the app from the "public" directory in the application directory.
//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type : "application/vnd.api+json"}))

// Require routes files from the client
//var htmlRoutes = require("./routing/htmlRoutes.js")(app);
//var apiRoutes = require("./routing/apiRoutes.js")(app);
app.get("/", function(req, res) {
 // res.send("Welcome to the Star Wars Page!")
   res.sendfile(__dirname + '/public/home.html');
});

app.get("/survey", function(req, data) {
  res.sendFile(path.join(__dirname, "public/survey.html"));
 });

// Search for Specific Friends (or all friends) - provides JSON
 /*app.get("/api/:newFriends?", function(req, res) {
 	var chosenFriend = req.params.newFriends;
 	if (chosenFriend) {
 		console.log(chosenFriend);

 		for (var i = 0; i < newFriends.length; i++) {
 			if (chosenFriend === newFriends[i].name) {
 				res.json(newFriends[i]);
 				return;
 			}
 		}

 		res.json(false);
 	}

 	else {
 		res.json(newFriends);
 	}
 });*/
// Create New Characters - takes in JSON input
app.post("/api/newFriends", function(req, res) {
   var newFriends = req.body;
   newFriends.name = newFriends.name.replace(/\s+/g, "").toLowerCase();
   console.log(newFriends);

  //newFriends.push(newFriends);
 
   res.json(newFriends);
   //res.write(newFriends);
   res.sendFile(path.join(__dirname, "/api/newFriends"));
 });


// Search for Specific Friends (or all friends) - provides JSON
 app.get("/api/newFriends?", function(req, res) {
 	var chosenFriend = req.params.newFriends;
 	if (chosenFriend) {
 		console.log(chosenFriend);

 		for (var i = 0; i < newFriends.length; i++) {
 			if (chosenFriend === newFriends[i].name) {
 				res.json(newFriends[i]);
 				return;
 			}
 		}

 		res.json(false);
 	}

 	else {
 		res.json(newFriends);
 	}
 });

// Create New Characters - takes in JSON input
 
// Listen for response and log a message to the user upon success
app.listen(PORT, function() {
	console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT); 
});
