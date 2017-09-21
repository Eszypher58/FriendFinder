//setup dependecies and variables
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friendsArray = require("./app/data/friends.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

var app = express();
var port = process.env.PORT || 8080;

//express middleware to find the index of best match from friendList. the index of best match is then attached to res.selectedperson.
var findMin = function (req, res, next) {

	//only run when method is post, skip for all other methods
	if (req.method === "POST") {

		var score = req.body.scores;
		var currMin = 50; //max obtained from a user who answers 5 to all ten questions
		var index = 0;

		//loop through friendsArray to get the scores of ith element 
		for (var i = 0; i < friendsArray.length; i++) {

			var current = friendsArray[i].scores;
			var counter = 0;

			//compare the score of ith element to the submitted score. absolute value of score difference is accumulated in counter
			for (var j = 0; j < score.length; j++) {

				counter = counter + Math.abs(parseInt(score[j])-parseInt(current[j]));
			
			}

			//check if a lower difference is obtained, if it is, set currMin to the lower difference. attach the index to res.seletedperson
			if (currMin > counter) {

				currMin = counter;
				index = i;
				res.selectedperson = index;

			}

		}

	}

	next();

}

//chain all the necessary middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(findMin);

//handle request routing
var routeHtml = new htmlRoutes();
var routeApi = new apiRoutes();

routeApi.getFriends(app, friendsArray);
routeApi.postFriends(app, friendsArray);
routeHtml.route(app);

//start listening
app.listen(port, function(){

  console.log("server running on port:" + port);

})
