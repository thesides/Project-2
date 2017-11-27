var db = require("../models");
var express = require("express")
var app = express();
var body = require("body-parser");

module.exports = function (app) {

	app.post("/api/post", function (req, res) {

		console.log(req.body);

		db.Post.create({
			body: req.body.body
		}).done(function(data){
			res.json(data);
		});
	});


}