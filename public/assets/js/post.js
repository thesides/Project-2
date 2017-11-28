

var newPost = function (body, StoryId) {
	this.body = body;
	this.StoryId = StoryId;
};

$(function(){

	var storyId = require("./story.js");

	$("#createPost").on("click", function (event){

		event.preventDefault();
		
		$("#createPost").on("click", function (event) {

			var postBody = $("#newPost").val().trim();
			var story = storyId.storyId;

			var newPost = new newPost (postBody, story);

			$.ajax("/api/post", {
				type: "POST",
				data: newPost
			}).done(function (data) {

			//call get all posts
			console.log(data);
			window.location.href = "/post";
			});
		});

	});
});