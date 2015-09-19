~function() {

	window.addEventListener('nicolasReady', function() {

		var header = $('[data-nicolas-type="Viewport"] > header');

		function toggleClsAnimation(el) {

			el.toggleCls('expand-animation expanded');

			if (el.hasCls('expanded')) {

				el.removeCls('collapse-animation');

			}
			else {

				el.addCls('collapse-animation');

			}

		}

		header.addEventListener('touchstart', function(e) {

			var target = e.target,
				el = target.findParent('[data-nicolas-type="Viewport"] > header > div');

			if (el && !el.hasCls('header-expand-collapse-controller')) {

				el.radioCls('selected');

			}
			else if (el && el.hasCls('header-expand-collapse-controller')) {

				toggleClsAnimation(header);
				toggleClsAnimation(el);

			}

		});

	});

}();