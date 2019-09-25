(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _func_es = require('./src/func_es6.js');

var es5sum = require('./src/func_es5.js').sum;
var es5CircleSquare = require('./src/func_es5.js').circleSquare;
var es5FractionViewOf = require('./src/func_es5.js').fractionViewOf;

var ar = [1, 2, 3, 4];
var far = function far(e) {
  return ar.find(function (el) {
    return el == e;
  });
};

console.log('test es5 sum 1+2=' + es5sum(1, 2));
console.log('test es6 sum 1+2=' + (0, _func_es.sum)(1, 2));
console.log('test es5 circle square of radius 2 =' + es5CircleSquare(2));
console.log('test es6 circle square of radius 2 =' + (0, _func_es.circleSquare)(2));
console.log('test es5 fraction of radius .5 =' + es5FractionViewOf(.5));
console.log('test es6 fraction of radius .5 =' + (0, _func_es.fractionViewOf)(.5));
console.log('find in array =' + far(1));

document.write('welcome to my app');

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = 'div test output';
  return element;
}

document.body.appendChild(component());
},{"./src/func_es5.js":2,"./src/func_es6.js":3}],2:[function(require,module,exports){
'use strict';

var n2f = require('num2fraction');

var sum = function sum(x, y) {
    return x + y;
};

var circleSquare = function circleSquare(r) {
    return Math.PI * Math.pow(r, 2);
};

var fractionViewOf = function fractionViewOf(n) {
    return n2f(n);
};

module.exports.sum = sum;
module.exports.circleSquare = circleSquare;
module.exports.fractionViewOf = fractionViewOf;
},{"num2fraction":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fractionViewOf = exports.circleSquare = exports.sum = undefined;

var _num2fraction = require("num2fraction");

var _num2fraction2 = _interopRequireDefault(_num2fraction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sum = exports.sum = function sum(x, y) {
  return x + y;
};

var circleSquare = exports.circleSquare = function circleSquare(r) {
  return Math.PI * Math.pow(r, 2);
};

var fractionViewOf = exports.fractionViewOf = function fractionViewOf(n) {
  return (0, _num2fraction2.default)(n);
};
},{"num2fraction":4}],4:[function(require,module,exports){
'use strict'

var abs = Math.abs
var round = Math.round

function almostEq(a, b) {
  return abs(a - b) <= 9.5367432e-7
}

//最大公约数 Greatest Common Divisor
function GCD(a, b) {
  if (almostEq(b, 0)) return a
  return GCD(b, a % b)
}

function findPrecision(n) {
  var e = 1

  while (!almostEq(round(n * e) / e, n)) {
    e *= 10
  }

  return e
}

function num2fraction(num) {
  if (num === 0 || num === '0') return '0'

  if (typeof num === 'string') {
    num = parseFloat(num)
  }


  var precision = findPrecision(num) //精确度
  var number = num * precision
  var gcd = abs(GCD(number, precision))

  //分子
  var numerator = number / gcd
  //分母
  var denominator = precision / gcd

  //分数
  return round(numerator) + '/' + round(denominator)
}

module.exports = num2fraction


},{}]},{},[1]);
