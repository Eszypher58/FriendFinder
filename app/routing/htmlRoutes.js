//handles serving html files

var path = require("path");

function htmlRoutes(){

	this.route = function (app) {

		app.get("/*", function(req, res){

			var route = req.originalUrl;

			if (route === "/survey") {

				res.sendFile(path.join(__dirname, '../public', 'survey.html'));

			} else {

				res.sendFile(path.join(__dirname, '../public', 'home.html'));

			}

		})

	}

}

module.exports = htmlRoutes;
