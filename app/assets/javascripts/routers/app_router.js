JournalApp.AppRouter = Backbone.Router.extend({
	routes: {
		"": "showPostsIndex",
		"posts/new": "newPost",
		"posts/:id": "displayPost"
	},
	
	initialize: function (options) {
		this.content = options.content,
		this.sidebar = options.sidebar
	},
	
	newPost: function () {
		var newPost = new JournalApp.Models.Post();
		var newView = new JournalApp.Views.NewPost({
			model: newPost,
			collection: JournalApp.posts
		});
		newView.render();
		$('.content').html(newView.$el);
	},
	
	displayPost: function (id) {
		var postView = new JournalApp.Views.PostShow({
			model: JournalApp.posts.get(id)
		});
		postView.render();
		$('.content').append(postView.$el);
	},
	
	showPostsIndex: function () {
		var indexView = new JournalApp.Views.PostsIndex({
			collection: JournalApp.posts
		});
		alert("hello");
		indexView.render();
		
		$('.sidebar').html(indexView.$el);
	}
});