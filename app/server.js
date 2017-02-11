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

// Search for Specific Friends (or all friends) - provides JSON
 app.get("/api/friends?", function(req, res) {
 	var chosenFriend = req.params.friends;
 	if (chosenFriend) {
 		console.log(chosenFriend);

 		for (var i = 0; i < friends.length; i++) {
 			if (chosenFriend === friends[i].name) {
 				res.json(friends[i]);
 				return;
 			}
 		}

 		res.json(false);
 	}

 	else {
 		res.json(friends);
 	}
 });
/*app.get("/", function(req, res) {
	res.send("Welcome to the Star Wars Page!");
 });

app.get("/api/friends", function(req, res) {
	res.send("Welcome to the Star Wars Page!");
 });*/

// Listen for response and log a message to the user upon success
app.listen(PORT, function() {
	console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT); 
});
