var flow = function() {
	var fns = Array.prototype.slice.call(arguments, 0);
	var i;
	for(i = 0; i < fns.length; i++) {
		if (typeof fns[i] !== 'function') {
			throw new TypeError('please pass functions');
		}
	};
	return function() {
		var i, temp, args = Array.prototype.slice.call(arguments, 0);
		for(i = 0; i < fns.length; i++) {
			temp = [];
			temp.push(fns[i].apply(null, args));
			args = temp;
		};
		return args[0];
	};
};

module.exports = flow;

