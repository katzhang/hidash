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


