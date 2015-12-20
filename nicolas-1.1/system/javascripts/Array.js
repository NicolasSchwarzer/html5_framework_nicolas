/**
 * 将类数组数据转换成数组数据
 * @param	{Object}	data				类数组
 * @param	{Number}	start	(optional)	起始下标, 默认为0
 * @return	{Array}
 * */
Array.toArray = function(data, start) {

	var i = start || 0, length = data.length,
		result = [];

	for (; i < length; ++i) {

		result.push(data[i]);
	}

	return result;
};

/**
 * 循环遍历数组
 * @param	{Array}		data	数组
 * @param	{Function}	func 	回调函数
 * @return	{Boolean}
 * */
Array.forEach = function(data, func) {

	var i = 0, length = data.length,
		args = Array.toArray(arguments).slice(2);

	for (; i < length; ++i) {

		if (func(data[i], i, data, args) === false) {

			return false;
		}
	}

	return true;
};

/**
 * 删除数组重复项
 * @param	{Array}	data	数组
 * @return	{Array}
 * */
Array.unique = function(data) {

	var i = 0, length = data.length,
		item,
		result = [];

	for (; i < length; ++i) {

		item = data[i];

		if (result.indexOf(item) === -1) {

			result.push(item);
		}
	}

	return result;
};
