var deepCopy = require('./merge.js').deepCopy;
var merge = require('./merge.js').merge;
var assert = require('assert');

describe('the `deepCopy` function', function() {
	var dest, src;
	it('copies one level properties that dest object does not have', function() {
		src = {prop: 'foo'};
		dest = {};
		dest = deepCopy(dest, src);
		assert.deepEqual(dest, {prop: 'foo'});
	});
	it('copies nested properties that dest object does not have', function() {
		src = {
			foo: {
				nested: 1
			}
		};
		dest = { bar: 2};
		dest = deepCopy(dest, src);
		assert.deepEqual(dest, {
			foo: {
				nested: 1
			},
			bar: 2
		});
	});

	it('overwrites one level properties that dest object has', function() {
		src = {foo: 1};
		dest = {foo: 4};
		dest = deepCopy(dest, src);
		assert.deepEqual(dest, {foo: 1});
	});

	it('merges nested properties that dest object has', function() {
		src = {
			foo: {
				nested: 1
			}
		};
		dest = {
			foo: {
				another: 2
			}
		};
		dest = deepCopy(dest, src);
		assert.deepEqual(dest, {
			foo: {
				nested: 1,
				another: 2
			}
		});
	});

});

describe('the `merge` method', function() {
	var dest, src1, src2;
	it('merges one level properties from source objects', function() {
		dest = {
			foo: 1
		};
		src1 = {
			bar: 2
		};
		src2 = {
			mia: 3
		};
		var output = merge(dest, src1, src2);
		assert.deepEqual(output, {
			foo: 1,
			bar: 2,
			mia: 3
		});
	});
	it('merges nested properties from source objects', function() {
		dest = {};
		src1 = {
			foo: {
				mia: 1
			}
		};
		src2 = {
			foo: {
				bar: 2
			}
		}
		var output = merge(dest, src1, src2);
		assert.deepEqual(output, {
			foo: {
				mia: 1,
				bar: 2
			}
		});
	});
	it('when merging overwrites previous source object with newer ones', function() {
		dest = {};
		src1 = {
			foo: 1
		};
		src2 = {
			foo: 2
		};
		var output = merge(dest, src1, src2);
		assert.deepEqual(output, {
			foo: 2
		});
	});

});


