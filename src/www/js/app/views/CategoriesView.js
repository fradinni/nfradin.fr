define([
	'backbone',
	'./CategoryItem'
], function(Backbone, CategoryItem) {

	/**
	* Users list view
	*/
	var CategoriesView = Backbone.View.extend({

		/**
		* Render list items
		*/
		render: function() {
			
			// Clear html
			this.$el.html('');

			// Render each model
			var self = this;
			_.each(this.collection.models, function(model) {
				var categoryItem = new CategoryItem({ model: model });
				categoryItem.render();
				self.$el.append(categoryItem.$el);
			});
		}

	});

	return CategoriesView;

});