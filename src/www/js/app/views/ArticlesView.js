define([
	'backbone',
	'./ArticleItem'
], function(Backbone, ArticleItem) {

	/**
	* Users list view
	*/
	var ArticlesView = Backbone.View.extend({

		/**
		* Render list items
		*/
		render: function() {
			
			// Clear html
			this.$el.html('');

			// Render each model
			var self = this;
			_.each(this.collection.models, function(model) {
				var articleItem = new ArticleItem({ model: model });
				articleItem.render();
				self.$el.append(articleItem.$el);
			});
		}

	});

	return ArticlesView;

});