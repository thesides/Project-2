var db = require("../models");
var express = require("express")
var app = express();
var body = require("body-parser");

module.exports = function (app) {

	//find all users and return them
	app.get("/api/user", function (req, res) {

		db.User.findAll({}).then(function(allUsers){
			res.json(allUsers);
		});
	});
	
	//this creates a new user and password
<<<<<<< HEAD:routes/user-routes.js
	app.post("/api/newuser", function (req, res) {
=======
	app.post("/api/user", function (req, res) {
>>>>>>> 417dfd6757b24d8fe86568e855ee2097f7592eaf:routes/api-routes.js
		console.log(req.body);

		db.User.create({
			userName: req.body.name,
			password: req.body.password,
			email: req.body.email
		}).then(function(data){
			res.render("loggedInUserView", data);
		});
	});
}