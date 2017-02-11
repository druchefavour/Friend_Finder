// Here we require/import the HTTP module
var url = require("url");

var http = require("http");

var fs = require("fs");

// Here we define a port to listen to
 var PORT = 8020;
 // Here we use the Node HTTP package to create our server.

// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Here we start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

// The below statement is triggered (server-side) when a user visits the PORT URL
console.log("Server listening on: http://localhost:%s", PORT);

});
 
 // Here we create a generic function to handle requests and responses
 function handleRequest(request, response) {
 	// Capturing the url the request is made to.
 	var urlParts = url.parse(req.url);
 	// When we visit different urls, the switch statement call on different functions.
 switch (urlParts.pathname) {
     case "/":
       displayRoot(urlParts.home.html, req, res);
       break;
     case "/survey":
       displaySurvey(urlParts.survey.html, req, res);
       break;
     case "/edit":
       console.log("display edit");
       break;
     default:
       display404(urlParts.pathname, req, res);
   }
 }
 
 // When we visit the "http://localhost:8080/" path, this function is run.
 function displayRoot(url, req, res) {
   // Here we use the fs package to read our index.html file
   fs.readFile("home.html", function(err, data) {
   // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
   // an html file.
   res.writeHead(200, { "Content-Type": "text/html" });
   res.end(data);
});
}
 
 // When we visit the "http://localhost:8080/survey" path, this function is run.
 function displaySurvey(url, req, res) {
   // Here we use the fs package to read our index.html file
   fs.readFile("survey.html", function(err, data) {
   // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
   // an html file.
   res.writeHead(200, { "Content-Type": "text/html" });
   res.end(data);
});
 }
 
 // When we visit any path that is not specifically defined, this function is run.
 function display404(url, req, res) {
   res.writeHead(404, {
     "Content-Type": "text/html"
   });
   res.write("<h1>404 Not Found </h1>");
   res.end("The page you were looking for: " + url + " can not be found ");
 }
 
 
