define([
	'backbone',
	'templates/articleItem'
], function(Backbone, ArticleItemTemplate) {

	/**
	*
	*/
	var BlogItem = Backbone.View.extend({

		tagName: 'div',
		className: 'post',

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

	return BlogItem;

});