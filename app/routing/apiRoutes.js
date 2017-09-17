var friendsArray = require("../data/friends.js");

function apiRoutes(){

	this.getFriends = function (app, path) {

		app.get("/api/friends", function(req, res){

			res.json(friendsArray);

		});

	}

	this.postFriends = function (app, path) {

		app.post("/api/friends", function(req, res){

			



		});

	}

}

module.exports = apiRoutes;