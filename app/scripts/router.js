define([
	'backbone',
	'views/products'
], function(Backbone,
	products) {
	
	var AppRouter = Backbone.Router.extend({
		routes: {
			"product/new": products.new()
		}
	});

	return AppRouter;
});