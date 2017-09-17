var path = require("path");

function htmlRoutes(){

	this.route = function (app) {

		app.get("/*", function(req, res){

			//res.end("show html file..");

			var route = req.originalUrl;
			//console.log(route);

			if (route === "/survey") {

				res.sendFile(path.join(__dirname, '../public', 'survey.html'));

			} else {

				res.sendFile(path.join(__dirname, '../public', 'home.html'));

			}

		})

	}

}

module.exports = htmlRoutes;
