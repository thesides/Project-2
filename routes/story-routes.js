var db = require("../models");
var express = require("express")
var app = express();
var body = require("body-parser");

module.exports = function (app) {
	//this creates a story chain; asks for a title and a first post; will not attach stroy id to post in DB
	app.post("/api/story", function (req, res) {
		console.log(req.body);

		db.Story.create({
			storyName: req.body.storyName
		}).done(function(data){
			res.json(data)
		});

		// db.Post.create({
		// 		body: req.body.firstPost,
		// 		include: [db.Story.id]
		// 	}).then(function(data){
		// 		res.json(data);
		// 	});
		
	});


}