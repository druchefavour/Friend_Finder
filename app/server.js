// Dependencies
//Require useful npm packages

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type : "application/vnd.api+json"}))

// Require js files from the client
//var orm = require("./config/orm.js");