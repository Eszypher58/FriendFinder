var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friendsArray = require("./app/data/friends.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

var app = express();
var port = 8080;

var findMin = function (req, res, next) {

	console.log(req.method);

	if (req.method === "POST") {

	var score = req.body.scores;
	//console.log(score);

	//console.log(friendsArray.length);

	var currMin = 50;
	var index = 0;

	for (var i = 0; i < friendsArray.length; i++) {

		var current = friendsArray[i].scores;
		console.log("inside first for", current);
		var counter = 0;

		for (var j = 0; j < score.length; j++) {

			counter = counter + Math.abs(parseInt(score[j])-parseInt(current[j]));
			console.log("counter is", counter);

		}

		if (currMin > counter) {

			currMin = counter;
			index = i;

			console.log("currMin is", currMin);
			console.log("currrent index is", index);

			res.selectedperson = index;

		}


	}

}

	next();

}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(findMin);


var routeHtml = new htmlRoutes();
var routeApi = new apiRoutes();
//console.log(home);
routeApi.getFriends(app, friendsArray);
routeApi.postFriends(app, friendsArray);
routeHtml.route(app);
//routeHtml.survey(app, pathToPublic);




app.listen(port, function(){

  console.log("server running on port:" + port);

})
