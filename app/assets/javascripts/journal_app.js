window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		JournalApp.posts = new JournalApp.Collections.Posts();
		JournalApp.posts.fetch({
			success: function() {
				new JournalApp.AppRouter({
					collection: JournalApp.posts,
					content: '#content',
					sidebar: '#sidebar'
				});
				Backbone.history.start();
			}
		});
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
