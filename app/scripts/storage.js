define([
	'backbone'
], function(Backbone) {

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
				success: $.proxy(function(json){
					callback(json);
				}, this)
			});
		}
	});

	return new Storage();
});