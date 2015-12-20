~function() {

	/**
	 * 向数组尾部添加一个不重复的项
	 * @param	{Array}					data	目标数组
	 * @param	{Array || 任意其它类型}	item	项
	 * @return	{Boolean}
	 * */
	Array.push = function(data, item) {

		var oldLength = data.length;

		if (item instanceof Array) {

			Array.forEach(item, push, data);
		}
		else {

			push(item, null, null, [data]);
		}

		if (data.length > oldLength) {

			return true;
		}

		return false;
	};

	function push(item) {

		var data = arguments[3][0];

		if (data.indexOf(item) === -1) {

			data.push(item);
		}
	}

	/**
	 * 将数组中的指定项删除
	 * @param	{Array}					data	目标数组
	 * @param	{Array || 任意其它类型}	item	项
	 * @return	{Boolean}
	 * */
	Array.remove = function(data, item) {

		var oldLength = data.length;

		if (item instanceof Array) {

			Array.forEach(item, remove, data);
		}
		else {

			remove(item, null, null, [data]);
		}

		if (data.length < oldLength) {

			return true;
		}

		return false;
	};

	function remove(item) {

		var data = arguments[3][0],
			index;

		if ((index = data.indexOf(item)) !== -1 ) {

			data.splice(index, 1);
		}
	}

	/**
	 * 将数组的全部项删除
	 * @return	{Boolean}
	 * */
	Array.removeAll = function(data) {

		if (data.length) {

			data.length = 0;

			return true;
		}

		return false;
	};
}();
