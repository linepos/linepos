define([
	'backbone'
], function(Backbone) {

	var products = Backbone.View.extend({
		renderForm: function() {
			console.log("patron");
		}
	});

	return new products();
});