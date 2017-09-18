//var friendsArray = require("../data/friends.js");

function apiRoutes(){

	this.getFriends = function (app, array) {

		app.get("/api/friends", function(req, res){

			res.json(array);

		});

	}

	this.postFriends = function (app, array) {

		app.post("/api/friends", function(req, res){

			var index = res.selectedperson;

			console.log(index);

			var score = req.body.score

			array.push(req.body);

			res.json(array[index]);

		});

	}

}

module.exports = apiRoutes;