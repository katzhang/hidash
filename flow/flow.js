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

// var add = function(a, b) {
// 	return a + b;
// };

// var multiply = function(a) {
// 	return a * a;
// };

// var addMulti = flow(add, multiply);
// console.log(addMulti(1, 2));

module.exports = flow;

