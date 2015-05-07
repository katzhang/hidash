var flow = require('./flow.js');
var assert = require('assert');
var sinon = require('sinon');


describe('the `flow` method', function() {
	describe('when parameters are not all functions', function() {
		it('throws a type error', function() {
			assert.throws(function() {
				flow('1', function() {});
			}, TypeError);
			assert.throws(function() {
				flow(function() {}, 'b');
			}, TypeError);
		});
	});
	describe('when passing in more than one function as arguments', function() {
		it('invokes them from left to right', function() {
			var counter = 1;
			var leftFunction = function() {
				return ++counter;
			};
			var rightFunction = function() {
				return counter * counter;
			};
			var output = flow(leftFunction, rightFunction)();
			assert.equal(output, 4);

		});
		it('passes returned value as argument from previous function to next', function() {
			var leftFunction = function(a) {
				return ++a;
			};

			var rightFunction = sinon.spy();

			var output = flow(leftFunction, rightFunction)(3);
			assert.equal(rightFunction.calledWithExactly(4), true);
		});
	});
});