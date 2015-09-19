Array.toArray = function(data, start, end) {

	if (end) {

		return Array.prototype.slice.apply(data, [start || 0, end]);

	}
	else {

		return Array.prototype.slice.call(data, start || 0);

	}

}