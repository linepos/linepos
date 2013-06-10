define([
	'jquery',
	'underscore',
	'backbone',
	'views/productsView'
], function($, _, Backbone,
	ProductsView) {

	var Router = Backbone.Router.extend({
		routes: {
			"product/form": ProductsView.renderForm,
			"product/form/:id": ProductsView.renderForm,
			"product/update": ProductsView.create,
			"product/list": ProductsView.list
		}
	});

	var App = Backbone.View.extend({
		initialize: function() {
			this.router = new Router();
			Backbone.history.start();

			this.renderLayout();
		},
		renderLayout: function(){
			ProductsView.list();
		}
	});

	return App;
});