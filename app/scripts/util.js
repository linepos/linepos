define([
	'underscore',
	'backbone'
], function(_, Backbone){
	var util = {

		getFlatObject: function(arr) {
			if(arr.length) {
				arr = _.map(arr, function(item) {
					return _.map (item, function(subitem) {
						if(typeof subitem == "object") {
							return _.flatten(subitem);
						} else {
							return subitem;
						}
					});
				});

				return arr;
			}

			return false;
		},

		getFlatKeys: function(arr) {
			if(arr.length) {
				arr = _.map(arr[0], function(item, key) {
					return key;
				});

				return arr;
			}

			return false;
		}

	};

	return util;
});