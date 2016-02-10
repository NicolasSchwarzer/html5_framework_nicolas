/**
 *
 * @author Nicolas Wan
 *
 * Object API
 *
 * public static Boolean isObject(Mixed data);
 *
 * public static undefined|Mixed forEach(Object data, Function func [, Mixed param1 [, ...[, Mixed paramN]]]);
 *
 * public static Object copyTo(Object dest, Object source [, Array names]);
 *
 * public static Object applyTo(Object dest, Object source);
 *
 * public static Object join([Object param1 [, ...[, Object paramN]]]);
 *
 * */

~function() {

	Object.isObject = function(data) {

		return Object.prototype.toString.call(data) === '[object Object]';
	};

	Object.forEach = function(data, func) {

		var name,
			args = Array.from(arguments),
			start, result;

		args.splice(0, 2);
		args.splice(start = args.length, 0, 1, 2, 3);

		for (name in data) {

			if (data.hasOwnProperty(name)) {

				args[start] = name;
				args[start + 1] = data[name];
				args[start + 2] = data;

				result = func.apply(undefined, args);

				if (result !== undefined) {

					return result;
				}
			}
		}
	};

	function copyTo(dest, source, name) {

		var from, to;

		if (typeof name === 'object') {

			from = name.from;
			to = name.to;
		}
		else {

			from = name;
			to = name;
		}

		dest[to] = source[from];
	}

	Object.copyTo = function(dest, source, names) {

		names = names || Object.keys(source);

		Array.forEach(names, copyTo, dest, source);

		return dest;
	};

	function applyTo(dest, source, name) {

		if (!dest.hasOwnProperty(name)) {

			dest[name] = source[name];
		}
	}

	Object.applyTo = function(dest, source) {

		Array.forEach(Object.keys(source), applyTo, dest, source);

		return dest;
	};

	function join(result, data) {

		Object.applyTo(result, data);
	}

	Object.join = function() {

		var result = {};

		Array.forEach(arguments, join, result);

		return result;
	};
}();
