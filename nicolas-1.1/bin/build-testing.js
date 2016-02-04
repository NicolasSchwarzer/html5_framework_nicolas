var systemCSS3 = require('./nicolas_modules/system/css3'),
	systemJavascript = require('./nicolas_modules/system/javascript'),

	applicationHTML5 = require('./nicolas_modules/application/html5'),
	applicationCSS3 = require('./nicolas_modules/application/css3'),
	applicationJavascript = require('./nicolas_modules/application/javascript'),
	applicationResource = require('./nicolas_modules/application/resource'),

	path = require('./nicolas_modules/path'),
	compass = require('./nicolas_modules/compass'),
	fs = require('fs'),

	componentReg = /^component/,
	name = process.argv[2];

require('./nicolas_modules/format');

name = String.standardizePageName(name);

function writeTestingDir(name) {

	var pagePath = path.applicationsHTML5Path();

	if (!path.isFile(pagePath + name + '.html')) {

		console.log('Error: 页面 ' + name + ' 不存在');

		return;
	}

	var testingPath = path.buildTestingPath() + name;

	fs.writeFileSync(testingPath + '.html', applicationHTML5.data(name));

	fs.writeFileSync(testingPath + '.css', compass.compile([systemCSS3.data(),
															applicationCSS3.data(name)
															].join('\n')));

	fs.writeFileSync(testingPath + '.js', [systemJavascript.data(),
										   applicationJavascript.data(name)].join('\n'));

	applicationResource.transferResources(name, true);

	console.log('页面 ' + name + ' 编译完成');
}

if (componentReg.test(name)) {

	console.log('Error: 请编译页面');

	return;
}

writeTestingDir(name);
