define([
	'backbone',
	'router'
], function(Backbone, Router) {

	var App = Backbone.View.extend({
		initialize: function() {
			this.router = new Router();

			Backbone.history.start({pushState: true});
		}
	});

	return App;
});