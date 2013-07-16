define([
	'backbone',
	'templates/categoryItem'
], function(Backbone, CategoryItemTemplate) {

	/**
	*
	*/
	var CategoryItem = Backbone.View.extend({

		tagName: 'tr',
		className: 'category-item',

		initialize: function(params) {
			this.model = params.model;
			this.template = CategoryItemTemplate;
		},

		/**
		* Render item
		*/
		render: function() {
			var html = this.template({model: this.model});
			this.$el.html(html);
		}

	});

	return CategoryItem;

});