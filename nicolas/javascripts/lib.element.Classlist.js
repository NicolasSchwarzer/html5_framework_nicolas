~function() {

	var prototype = this,
		clsRe = /\s+/;

	function applyCls(el, method, cls) {

		cls = cls.trim();

		if (clsRe.test(cls)) {

			cls.split(clsRe).forEach(function(data) {

				applyCls(el, method, data);

			});

		}
		else {

			el.classList[method](cls);

		}

	}

	prototype.addCls = function(cls) {

		applyCls(this, 'add', cls);

	};

	prototype.hasCls = function(cls) {

		var el = this;

		cls = cls.trim();

		if (clsRe.test(cls)) {

			var classes = cls.split(clsRe),
				length = classes.length,
				i = 0;

			for (; i < length; i++) {

				if (el.hasCls(classes[i]) === false) {

					return false;

				}

			}

			return true;

		}
		else {

			return el.classList.contains(cls);

		}

	};

	prototype.removeCls = function(cls) {

		applyCls(this, 'remove', cls);

	};

	prototype.radioCls = function(cls) {

		var el = this,
			currentEl,
			brothers = el.parentElement.children,
			length = brothers.length,
			i = 0;

		for (; i < length; i++) {

			currentEl = brothers[i];

			if (currentEl !== el) {

				currentEl.removeCls(cls);

			}
			else {

				currentEl.addCls(cls);

			}

		}

	};

	prototype.toggleCls = function(cls) {

		var el = this;

		if (el.hasCls(cls)) {

			el.removeCls(cls);

		}
		else {

			el.addCls(cls);

		}

	};

	prototype.toggleClsForEach = function(cls) {

		var el = this,
			classes = cls.trim().split(clsRe);

		classes.forEach(function(data) {

			el.toggleCls(data);

		});

	}

}.call(HTMLElement.prototype);