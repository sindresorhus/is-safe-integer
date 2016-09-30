# is-safe-integer [![Build Status](https://travis-ci.org/sindresorhus/is-safe-integer.svg?branch=master)](https://travis-ci.org/sindresorhus/is-safe-integer)

> ES2015 [`Number.isSafeInteger()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger) [ponyfill](https://ponyfill.com)


## Install

```
$ npm install --save is-safe-integer
```


## Usage

```js
var isSafeInteger = require('is-safe-integer');

isSafeInteger(3);
//=> true

isSafeInteger(100719925474099143523412);
//=> false

isSafeInteger(Infinity);
//=> false
```


## Related

- [number-is-integer](https://github.com/sindresorhus/number-is-integer) - ES2015 `Number.isInteger()` ponyfill


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
