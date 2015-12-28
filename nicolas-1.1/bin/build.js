var systemCSS3 = require('./nicolas_modules/system/css3'),
	systemJavascript = require('./nicolas_modules/system/javascript'),
	path = require('./nicolas_modules/path'),
	compass = require('./nicolas_modules/compass'),
	fs = require('fs');

function writeTestingDir() {

	var testingPath = path.buildTestingPath();

	fs.writeFileSync(testingPath + 'test.css', compass.compile(systemCSS3.data()));
	fs.writeFileSync(testingPath + 'test.js', systemJavascript.data());
}

writeTestingDir();
