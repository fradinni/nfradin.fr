define([
	'backbone'
], function(Backbone) {

	/**
	* Users list view
	*/
	var BlogView = Backbone.View.extend({

		events: {
			
		},

		loader: function(param) {
			if(param == 'show') {
				this.$('.ajax-loader').fadeIn();
			} else if(param = 'hide') {
				this.$('.ajax-loader').fadeOut();
			}
		},

		generateHtml: function(articles) {
			var html = "ok";
			_.each(articles, function(article) {
			});

			return html;
		},

		loadArticles: function(page, category) {
			this.loader('show');
			$.get(ApiURL + '/articles?page='+ (page ? page : '1') + (category ? '&category='+category : '')).done(_.bind(function(articles) {
				var html = this.generateHtml(articles);
				this.loader('hide');
				this.$el.append(html);
			}, this));
		},

		loadMoreArticles: function() {

		}

	});

	return BlogView;

});