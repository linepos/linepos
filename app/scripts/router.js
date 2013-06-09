define([
	'backbone',
	'views/products'
], function(Backbone,
	products) {

	var AppRouter = Backbone.Router.extend({
		routes: {
			"product/form": products.renderForm
		}
	});

	return AppRouter;
});