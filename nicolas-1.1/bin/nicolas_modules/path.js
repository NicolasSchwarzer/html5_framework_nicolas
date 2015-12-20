var fs = require('fs'),
	exports = module.exports,

	paths = module.paths[0].split(/\//),
	length = paths.length, i = 0;

	basePath = [];

while (true) {

	if (paths[(length--) - 1] === 'bin') {

		break;
	}
}

for (; i < length; ++i) {

	basePath.push(paths[i]);
}

basePath = basePath.join('/').replace(/^\s*\//, '/');

exports.uniquePaths = function(paths) {

	var i = 0, length = paths.length,
		path,
		result = [];

	for (; i < length; ++i) {

		path = paths[i];

		if (result.indexOf(path) === -1) {

			result.push(path);
		}
	}

	return result;
}

exports.systemCSS3Path = function() {

	return basePath + '/system/css3/';
}

exports.systemStylesheetsPath = function() {

	return basePath + '/system/stylesheets/';
}

exports.systemJavascriptsPath = function() {

	return basePath + '/system/javascripts/';
}
