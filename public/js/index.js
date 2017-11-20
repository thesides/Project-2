$(document).ready(function() {

	// Variables
	var currentStoryContainer = $(".current-story-container");
	var stories;

  	// Click events	

	//Nav Bar

	//Left Column	
		
	//Form	 


	//Get stories for the user that's logged in
	var url = window.location.search;
	var userId;
	if(url.indexOF("?user_id=") != -1) {
		userId = url.split("=") [1];
		getStories(userId);
	} else {
		displayEmpty();
	};

  	// Function to grab stories from database
	function getStories(user) {
		userId = user || "";
		if (userId) {
			userId = "/?user_id" + userId;
		}		
	    $.get("/api/stories" + userId, function(data) {
	      console.log("Stories", data);
	      stories = data;
	      if(!stories || !stories.length) {
	      	displayEmpty(user);
	      } else {
	      	initializeRows();
	      }
	    });
	};

	// Function to append all stories to the current-story-container
	function initializeRows() {
		currentStoryContainer.empty();
		var storiesToAdd = [];

		stories.forEach(function() {
			storiesToAdd.push(createNewRow(stories))
		});
		currentStoryContainer.append(storiesToAdd);
	};

	// Function to add most recent post's HTML for each story
	function createNewRow(post) {
		var formattedDate = new Date(post.createdAt);
		formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");

		var newPostPanel = $("<div>");
		newPostPanel.addClass("panel panel-default");

		var newPostPanelHeading = $("<div>");
		newPostPanelHeading.addClass("panel-heading");

		var storyTitle = $("<h2>");

		var postDate = $("<small>");

		var postUser = $("<h5>");
		postUser.text("User: "  post.User.name);
		postUser.css({
			float: "right",
			color: "blue",
			"margin-top": "-10px"
		});

		var newPostPanelBody = $("<div");
		newPostPanelBody.addClass("panel-body");

		var newPostBody = $("<p>");
	    newPostTitle.text(post.title + " ");
	    newPostBody.text(post.body);
	    newPostDate.text(formattedDate);
	    newPostTitle.append(newPostDate);
	    newPostPanelHeading.append(deleteBtn);
	    newPostPanelHeading.append(editBtn);
	    newPostPanelHeading.append(newPostTitle);
	    newPostPanelHeading.append(newPostAuthor);
	    newPostPanelBody.append(newPostBody);
	    newPostPanel.append(newPostPanelHeading);
	    newPostPanel.append(newPostPanelBody);
	    newPostPanel.data("post", post);

	    return newPostPanel;	
	};

	// Function to display message if no stories in database
	  function displayEmpty(id) {
	    var query = window.location.search;
	    var partial = "";
	    if (id) {
	      partial = " for User #" + id;
	    }
	    currentStoryContainer.empty();
	    var messageh2 = $("<h2>");
	    messageh2.css({ "text-align": "center", "margin-top": "50px" });
	    messageh2.html("No posts yet" + partial + ", navigate <a href='/cms" + query +
	    "'>here</a> in order to get started.");
	    currentStoryContainer.append(messageh2);
	  };




}