var fs = require('fs'),
	path = module.paths[0].replace(/bin\/nicolas_modules\/system\/node_modules$/, 'system\/javascripts\/'),
	exports = module.exports;

function schema() {

	var schemaPath = path + 'SCHEMA.json';

	return JSON.parse(fs.readFileSync(schemaPath));
}

function files() {

	var keys = schema(),
		i = 0, length = keys.length,
		result = [];

	for (; i < length; ++i) {

		result.push(path + keys[i] + '.js');
	}

	return result;
}

exports.data = function() {

	var dirs = files(),
		i = 0, length = dirs.length,
		result = [];

	for (; i < length; ++i) {

		result.push(fs.readFileSync(dirs[i]));
	}

	return result.join('\n');
}
