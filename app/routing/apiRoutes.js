//handles api calls

function apiRoutes(){

	this.getFriends = function (app, array) {

		app.get("/api/friends", function(req, res){

			res.json(array);

		});

	}

	//use the index attached in findMin middleware and return the json corresponding to the ith element in array. add the user to friendList.
	this.postFriends = function (app, array) {

		app.post("/api/friends", function(req, res){

			var index = res.selectedperson;

			array.push(req.body);

			res.json(array[index]);

		});

	}

}

module.exports = apiRoutes;