//Dependencies

var path = require("path");

//Routes

module.exports = function(app) {

	//Routes that handle the HTML page to which the user is sent.

	//index route loads initial html
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	//cms route loads cms html
	app.get("/cms", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/cms.html"));
	});

	//index route loads index html
	app.get("/index", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	//authors route loads story-manager html

	app.get("/authors", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/story-manager.html"));
	});
};