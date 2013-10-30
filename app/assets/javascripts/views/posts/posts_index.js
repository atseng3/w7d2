JournalApp.Views.PostsIndex = Backbone.View.extend({
	template: JST['posts/index'],
	
	initialize: function (options) {
		this.listenTo(this.collection, "add remove", this.render);
		// this.listenTo(this.collection, "change:title", this.render);
		// this.listenTo(this.collection, "reset", this.render);
	},
	
	events: {
		"click button": "deletePost"
	},
	
	deletePost: function (event) {
		alert("you tried to delete this post! BUT you CANT!");
		// var post = parseInt($(event.target).attr("data-id"));
	},
	
	render: function () {
		var renderedContent = this.template({
			title: "All the posts",
			posts: this.collection
		});
		
		this.$el.html(renderedContent);
		return this;
	}
});