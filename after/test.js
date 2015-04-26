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
});


