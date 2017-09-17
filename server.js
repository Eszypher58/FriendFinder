var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

var app = express();
var port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var routeHtml = new htmlRoutes();
var routeApi = new apiRoutes();
//console.log(home);
routeApi.getFriends(app);
routeHtml.route(app);
//routeHtml.survey(app, pathToPublic);




app.listen(port, function(){

  console.log("server running on port:" + port);

})
