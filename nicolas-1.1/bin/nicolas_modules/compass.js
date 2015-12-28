var fs = require('fs'),
	path = require('./path'),
	exports = module.exports;

exports.compile = function(data) {

	var src = path.templatesNicolasCompassPath(),
		dest = path.binNicolasCompassPath(),
		name = Date.now();

	if (!fs.existsSync(dest + '.nicolas-compass')) {

		path.copy(src, dest);
	}

	path.clear(dest + '.nicolas-compass/css3');
	path.clear(dest + '.nicolas-compass/stylesheets');

	fs.writeFileSync(dest + '.nicolas-compass/css3/' + name + '.scss', data);

	require('child_process').execSync('compass compile ' + dest + '.nicolas-compass/');

	return fs.readFileSync(dest + '.nicolas-compass/stylesheets/' + name + '.css');
}
