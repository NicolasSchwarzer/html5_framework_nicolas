~function() {

	var prototype = this;

	prototype.is = function(selector) {

		var parentEl,
			me = this,
			el = me;

		while(parentEl = el.parentElement) {

			if (Array.toArray(parentEl.querySelectorAll(selector)).indexOf(me) !== -1) {

				return true;

			}

			el = parentEl;

		}

		return false;

	};

	prototype.findParent = function(selector) {

		var el = this;

		do {

			if (el.is(selector)) {

				return el;

			}

			el = el.parentElement;

		}while(el);

	}

}.call(HTMLElement.prototype);