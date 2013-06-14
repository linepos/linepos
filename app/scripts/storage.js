define([
	'jquery',
	'backbone',
	'form2js'
], function($, Backbone,
	form2js) {

	var Storage = Backbone.View.extend({
		account: 'linepos',
		apiKey: '508c64e7e4b035ff0786233f',
		buildUrl: function(collection) {
			var url = 'https://api.mongolab.com/api/1/databases/';
			url += this.account + '/collections/' + collection + '?apiKey=' + this.apiKey;
			return url;
		},
		list: function(collection, callback) {
			$.ajax({
				url: this.buildUrl(collection),
				success: function(json){ callback(json); }
			});
		},
		create: function(collection, $form, callback) {
			var formObject = form2js($form.get(0));

			$.ajax({
				url: this.buildUrl("products"),
				data: JSON.stringify(formObject.product),
				type: "POST",
				contentType: "application/json",
				success: callback
			});
		}
	});

	return new Storage();
});
