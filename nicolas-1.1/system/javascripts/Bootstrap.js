/**
 *
 * @author Nicolas Wan
 *
 * Component Life Cycle
 *
 * */

~function() {

	window.addEventListener('DOMContentLoaded', function() {

		NICOLAS.initialize();
	});

	window.addEventListener('load', function() {

		NICOLAS.ready();

		window.dispatchEvent2('ready');
	});

	window.addEventListener('unload', function() {

		NICOLAS.destroy();
	});

}();
