
var express = require("express");
var app = express();
// Create a get to display survey.html
//GET requests
var htmlRoutes = function () {
	app.get('/',function(req,res) {
    res.sendFile(path.join(__routing,'survey.html'))
});
}


module.exports = htmlRoutes;