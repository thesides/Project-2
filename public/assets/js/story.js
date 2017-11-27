$(function(){

	//Add a new story thread
	$("#createStory").on("click", function (event) {

		event.preventDefault();

		console.log("BLAHAHHAHA");
		//new story title ask
		var newStory = {
			storyName: $("#newTitle").val().trim()
		}
		

		//sends new story title to Story Table in DB; this title gets a Story ID
		$.ajax("/api/story", {
			type: "POST",
			data: newStory
		}).done(function(data){
			
			console.log("new story created");
			window.location.href = "/post";
		});

		// //sends the initial post to the Posts Table in DB; should automatically take the id auto assigned to the story above and associate that with the post		
		// var newPost = {
		// 	body: $("#firstPost").val().trim()
		// }
		// console.log(newPost);

		// $.ajax("/api/story", {
		// 	type: "POST",
		// 	data: newPost
		// }).then(function(data){
		// 	console.log(data)
		// });

	});



});