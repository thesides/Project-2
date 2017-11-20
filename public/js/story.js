$(document).ready(function() {

	// Variables
	var storyName = $("#story-name");
	var storyList = $("tbody");
	var storyContainer = $(".story-container");

  	// Timer Logic
	var timer; 
	var userTimer = {
		counter: 120,

		countdown: function() {
			userTimer.counter--;
			$("#counter").html(userTimer.counter);
			if (userTimer.counter === 0) {
				console.log(userId + " - TIME UP");
				userTimer.done();
			}
		},

		start: function() {
			timer = setInterval(userTimer.countdown, 1000);

			$("wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

			$("#start").remove();
		},

		done: function() {
			//move to next user's turn to post
		}
	};

  	// Click events
	//Nav Bar
		//Search -- ??

		//Login -- prompt modal

	//Left Column
		//Archive -- ??

	//Form	 
	$(document).on("submit", "#user-form", userFormSubmit);
	$(document).on("click", ".join-story", joinStory);

	//Get stories for specific user
	var url = window.location.search;
	var userId;
	if(url.indexOF("?user_id=") != -1) {
		userId = url.split("=") [1];
		getStories(userId);
	} else {
		renderEmpty();
	};

	
	//Invoke function to get initial list of stories for user
	getStories(); 

	// Function to get form data on click
	function userFormSubmit(event) {
		event.preventDefault();

		if(!storyName.val().trim()) {
			return;
		};

		//set up object to pass form data into the post function
		storyData({
			name: storyName.val().trim()
		});
	};

	// Function to add new story to database
	function newStory(storyData) {
		$.post("/api/stories", storyData)
		.then(getStories);
	};

	// Function to create new table row for each new / joined story
	function createStoryRow(storyData) {
	    var newTr = $("<tr>");
	    newTr.data("story", storyData);
	    newTr.append("<td>" + storyData.name + "</td>");
	    newTr.append("<td>" + storyData.time + "</td>")
	    newTr.append("<td><a href='/index?story_id=" + storyData.id + "'>View Story</a></td>");
	    newTr.append("<td><a href='/cms?story_id=" + authorData.id + "'>Create a Post</a></td>");
	    return newTr;		
	};

  	// Function to grab stories from database
	function getStories(user) {
		userId = user || "";
		if (userId) {
			userId = "/?user_id" + userId;
		}		
	    $.get("/api/stories" + userId, function(data) {
	      console.log("Stories", data);
	      var rowsToAddArray = [];
	      data.forEach(function() {
	      	rowsToAddArray.push(createStoryRow(data))
	      })
	      renderStories(rowsToAddArray);
	      storyName.val("");
	};

	//Function to render stories
	function renderStories(rows) {
		storyList.children().not(":last").remove();
		storyContainer.children(".alert").remove();
		if(rows.length) {
			console.log(rows);
			authorList.prepend(rows);
		} else {
			renderEmpty();
		}
	};

	// Function to display message if no stories in database
	function renderEmpty() {
		var emptyDiv = $("<div>");
		emptyDiv.addClass("alert alert-danger");
		emptyDiv.text("You must create or join a story before you can post!");
		storyContainer.append(emptyDiv);
	};

}