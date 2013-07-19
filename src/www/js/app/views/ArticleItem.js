define([
	'backbone',
	'templates/articleItem'
], function(Backbone, ArticleItemTemplate) {

	/**
	*
	*/
	var ArticleItem = Backbone.View.extend({

		tagName: 'tr',
		className: 'article-item',

		initialize: function(params) {
			this.model = params.model;
			this.template = ArticleItemTemplate;
		},

		/**
		* Render item
		*/
		render: function() {
			var html = this.template({model: this.model});
			this.$el.html(html);
		}

	});

	return ArticleItem;

});