var exports = module.exports,
	fs = require('fs'),
	path = require('../path'),
	jsdom = require('jsdom').jsdom,

	htmlPath = path.componentHTML5Path(),
	cssPath = path.componentCSS3Path(),
	javascriptPath = path.componentJavascriptsPath(),
	resourcePath = path.componentResourcesPath();

require('../format');

exports.getComponentHTML = function(name) {

	var targetPath = htmlPath + String.standardizeName('component.' + name) + '.html';

	if (!path.isFile(targetPath)) {

		return;
	}

	return jsdom(fs.readFileSync(targetPath));
};
