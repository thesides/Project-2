$(function(){

	$("#createPost").on("click", function (event){

		event.preventDefault();
		//sends the initial post to the Posts Table in DB; should automatically take the id auto assigned to the story above and associate that with the post		
		
		var newPost = {
			body: $("#firstPost").val().trim()
		}
		
		console.log(newPost);

		$.ajax("/api/post", {
			type: "POST",
			data: newPost
		}).done(function(data){
			
			window.location.href = "/home";
		});
	});




});