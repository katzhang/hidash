var after = require('./after.js');
var assert = require('assert');

describe('the `after` function', function() {
	var aftered, counter;
	var addOne = function() {
		counter++;
	};
	beforeEach(function() {
		counter = 0;
		aftered = after(2, addOne);
	});
	it('invokes wrapped function after > n number of calls', function() {
		aftered(counter);
		aftered(counter);
		aftered(counter);
		assert.equal(counter, 1);
	});
	it('doesn`t invoke wrapped function after n number of calls', function() {
		aftered(counter);
		aftered(counter);
		assert.equal(counter, 0);
	});

	it('doesn`t invoke wrapped function after < n number of calls', function() {
		aftered(counter);
		assert.equal(counter, 0);
	});

	describe('when given wrong types of arguments', function() {
		it('throws a type error', function() {
			assert.throws(function() {
				after(1, 1);
			}, TypeError);
		});

	});

	describe('when given reverse order of arguments', function() {
		it('does not throw an error', function() {
			assert.doesNotThrow(function() {
				after(console.log, 1);
			}, Error);
		});
	});
});


