JournalApp.Views.NewPost = Backbone.View.extend({
	template: JST['posts/new'],
	
	events: {
		"submit form": "submitForm"
	},
	
	render: function () {
		var renderedContent = this.template({
			post: this.model
		});
		this.$el.html(renderedContent);
		
		return this;
	},
	
	submitForm: function (event) {
		event.preventDefault();
		var payload = $(event.currentTarget).serializeJSON();
		var post = new JournalApp.Models.Post(payload.post);

		// if (post.isNew()) {
		// 	this.collection.create(post, 
		// 												{ wait: true, 
		// 													success: function() {
		// 														alert("success!");
		// 													} 
		// 												});	
		// 
		// } else {
		// 	this.render();
		// }		
		post.save({}, {
			success: function() {
				JournalApp.posts.add(post);
				alert("success!");
			}
		});
		

		// post.save({}, {
		// 	success: function() {
		// 		alert("you submitted a new post!");
		// 	}
		// });
		
		// return this;
		Backbone.history.navigate("/", { trigger: true });
	}
});