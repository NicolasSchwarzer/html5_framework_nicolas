$ = function(selector, startNode) {

	if (startNode && startNode.querySelector) {

		return startNode.querySelector(selector);

	}

	return document.querySelector(selector);

};

$$ = function(selector, startNode) {

	if (startNode && startNode.querySelectorAll) {

		return startNode.querySelectorAll(selector);

	}

	return document.querySelectorAll(selector);

};