var after = function(n, func) {
	if (typeof func !== 'function') {
		if (typeof n === 'function' && !isNaN(func)) {
			var temp = n;
			n = func;
			func = temp;
		} else {
			throw new TypeError();
		}
	}
	var counter = 0;
	return function() {
		if (counter >= n) {
			func();
			counter = 0;
		} else {
			counter++;
		}
	}
};

module.exports = after;

