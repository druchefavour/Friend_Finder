// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes

module.exports = function(app) {
	// Home route loads home.html
	app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname,'../public/home.html'));
});

    // Supplementary route loads survey.html
    app.get('/survey',function(req,res) {
    res.sendFile(path.join(__dirname,'../public/survey.html'));
    });

    // Tertiary route loads friends.html
    app.get('/api/friends',function(req,res) {
    res.sendFile(path.join(__dirname,'../public/api/friends.html'));
});
}
