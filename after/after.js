var after = function(n, func) {
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

var sayHi = function() {
	console.log('hi');
};

var afterred = after(2, sayHi);

afterred();
afterred();
afterred();
afterred();
afterred();
