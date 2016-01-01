var fs = require('fs'),
	path = require('../path'),
	jsdom = require('jsdom').jsdom,
	exports = module.exports;

function generateHTML5Head(name, headNode) {

	var doc = headNode.ownerDocument,
		resultNode = doc.createElement('head'),
		nodes = headNode.children, node,
		i = 0, length = nodes.length,
		reg = new RegExp('^' + name + '\\/[^\\/]+');

	resultNode.innerHTML = ['<meta charset="UTF-8">',
			                '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">',
			                '<meta name="apple-mobile-web-app-capable" content="yes">',
			                '<meta name="apple-touch-fullscreen" content="yes">',
			                '<meta name="apple-mobile-web-app-status-bar-style" content="black">',
			                '<meta name="format-detection" content="telephone=no,email=no">',
			                '<meta name="x5-orientation" content="portrait">'].join('');

	for (; i < length; ++i) {

		node = nodes[i];

		switch (node.tagName) {

			case 'TITLE':
				resultNode.appendChild(node.cloneNode(true));
				break;

			case 'LINK':
				if (reg.test(node.getAttribute('href'))) {

					resultNode.appendChild(node.cloneNode());
				}
				break;

			case 'SCRIPT':
				if (reg.test(node.getAttribute('src'))) {

					resultNode.appendChild(node.cloneNode());
				}
				break;

			default:
				break;
		}
	}

	resultNode.innerHTML += '<link rel="stylesheet" type="text/css" href="' + name + '.css">' +
			                '<script type="text/javascript" src="' + name + '.js"></script>';

	return resultNode.outerHTML;
}

function generateHTML5Body(name, bodyNode) {

	return bodyNode.outerHTML;
}

function generateHTML5(name, data) {

	var doc = jsdom(data);
	
	return ['<!DOCTYPE html>',
			'<html>',
			generateHTML5Head(name, doc.head),
			generateHTML5Body(name, doc.body),
			'</html>'].join('');
}

exports.data = function(name) {

	return generateHTML5(name, fs.readFileSync(path.applicationsHTML5Path() + name + '.html'));
};
