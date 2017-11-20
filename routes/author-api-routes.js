var db = require("../models");

module.exports = function(app) {

	app.get("/api/stories", function(req, res) {

		db.Author.findAll({
			include: [db.Post]
		}).then(function(dbAuthor) {
			res.json(dbAuthor);
		});

	});

	app.get("/api/stories/:id", function(req, res) {

		db.Author.findOne({
			where: {
				id: req.params.id
			},
			include: [db.Post]
		}).then(function(dbAuthor) {
			res.json(dbAuthor);
		});

	});

	app.post("/api/stories", function(req, res) {

		db.Author.create(req.body).then(function(dbAuthor) {
			res.json(dbAuthor);
		});

	});

	app.delete("api/stories/:id", function(req, res) {

		db.Author.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(dbAuthor) {
			res.json(dbAuthor);
		});

	});

};