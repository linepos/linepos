define([
	'backbone',
	'storage'
], function(Backbone, Storage) {

	var Product = Backbone.Model.extend({
		url: Storage.buildUrl("products"),

		initialize: function(){
		}

	});

	return Product;
});