'use strict';
var test = require('ava');
Number.isSafeInteger = undefined;
var isSafeInteger = require('./');

test(function (t) {
	t.assert(isSafeInteger(3));
	t.assert(isSafeInteger(-3));
	t.assert(isSafeInteger(3.0));
	t.assert(isSafeInteger(-3.0));
	t.assert(isSafeInteger(Math.pow(2, 53) - 1));
	t.assert(!isSafeInteger(Math.pow(2, 53)));
	t.assert(!isSafeInteger(-Math.pow(2, 53)));
	t.assert(!isSafeInteger(3.1));
	t.assert(!isSafeInteger(NaN));
	t.assert(!isSafeInteger(Infinity));
	t.assert(!isSafeInteger('3'));
	t.end();
});
