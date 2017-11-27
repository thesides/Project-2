$(function(){

	//Add a new author
	$(".submit").on("click", function (event) {

		event.preventDefault();

		//grabs new user info and creates in users table of DB
		var newAuthor = {
			userName: $("#newAuthor").val().trim(),
			password: $("#newPassword").val().trim()
		}
		console.log(newAuthor);

		$.ajax("/api/authors", {
			type: "POST",
			data: newAuthor
		}).then(function(data){
			console.log("created new author with id: " + data.id);
		});
	});



});