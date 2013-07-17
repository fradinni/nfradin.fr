define([
	'backbone',
], function(Backbone) {

	/**
	* Users list view
	*/
	var EditorView = Backbone.View.extend({

		events: {
			"click .save": "save"
		},

		enhance: function() {
			console.log(this.$el);
			CKEDITOR.replace( 'editor', {
		 		height: '350px'
		 	});
		},

		save: function(event) {
			event.preventDefault();

			var title = this.$('#title').val(),
				text = CKEDITOR.instances.editor.getData(),
				category = this.$('#category').val();

			if(category != "null" && title != "") {
				$.post(ApiURL + '/articles', {
					title: title,
					category: category,
					text: text
				});
			} else {
				alert('Missing parameters');
			}
		}

	});

	return EditorView;

});