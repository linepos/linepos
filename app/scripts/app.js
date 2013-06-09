define([
	'jquery',
	'underscore',
	'backbone',
	'router',
	'text!templates/layout/sidebar.html'
], function($, _, Backbone, Router,
	sidebarTemplate) {

	var App = Backbone.View.extend({
		initialize: function() {
			this.router = new Router();
			Backbone.history.start({pushState: true});

			this.renderLayout();
		},
		renderLayout: function(){
			var tmplOut = _.template(sidebarTemplate);
			$("#sidebar").html(tmplOut());
		}
	});

	return App;
});