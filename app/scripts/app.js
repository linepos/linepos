define([
	'jquery',
	'underscore',
	'backbone',
	'views/products/productsView'
], function($, _, Backbone,
	ProductsView) {

	var App = Backbone.View.extend({

		initialize: function() {
			this.renderLayout();
		},

		renderLayout: function(){
			ProductsView.list();
			ProductsView.renderForm();
		}
	});

	return App;
});