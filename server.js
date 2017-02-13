// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
//Require useful npm packages

var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

// Setting up the Express App
var app = express();
var PORT = 8080;

// Serve static content for the app from the "public" directory in the application directory.
//app.use(app.router);
app.use(express.static('app/public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type : "application/vnd.api+json"}))

// Require routes files from the client
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// Listen for response and log a message to the user upon success
app.listen(PORT, function() {
	console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT); 
});
