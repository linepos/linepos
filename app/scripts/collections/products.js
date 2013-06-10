define([
	'backbone',
	'models/product'
], function(Backbone,
	Product) {

	var Products = Backbone.Collection.extend({
		model: Product
	});

	return Products;
});