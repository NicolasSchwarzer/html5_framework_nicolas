~function() {

	window.addEventListener('DOMContentLoaded', function() {

		var e = document.createEvent('Event'),
			windowEl = this,
			viewport = document.querySelector('[data-nicolas-type="Viewport"]');

		viewport.style.width = windowEl.innerWidth + 'px';
		viewport.style.height = windowEl.innerHeight + 'px';

		document.body.addEventListener('touchmove', function(e) {

			e.preventDefault();

		});

		e.initEvent('nicolasReady', true, true);
		windowEl.dispatchEvent(e);

	});

}();