var flow = require('./flow.js');
var assert = require('assert');


describe('the `flow` method', function() {
	describe('when parameters are not all functions', function() {
		it('throws a type error', function() {
			assert.throws(function() {
				flow('1', function() {});
			}, TypeError);
		});
	});
	describe('when passing in more than one function as arguments', function() {
		it('invokes them from left to right', function() {

		});
		it('passes returned value as argument from previous function to next', function() {

		});
	});
});