import test from 'ava';

Number.isSafeInteger = undefined;
const m = require('./');

test(t => {
	t.true(m(3));
	t.true(m(-3));
	t.true(m(3.0));
	t.true(m(-3.0));
	t.true(m(Math.pow(2, 53) - 1));
	t.false(m(Math.pow(2, 53)));
	t.false(m(-Math.pow(2, 53)));
	t.false(m(3.1));
	t.false(m(NaN));
	t.false(m(Infinity));
	t.false(m('3'));
});
