var es5sum = require('./src/func_es5.js').sum
var es5CircleSquare = require('./src/func_es5.js').circleSquare
var es5FractionViewOf = require('./src/func_es5.js').fractionViewOf

import {sum as es6sum, circleSquare as es6CircleSquare, fractionViewOf as es6FractionViewOf} from './src/func_es6.js'

console.log('test es5 sum 1+2='+es5sum(1,2))
console.log('test es6 sum 1+2='+es6sum(1,2))
console.log('test es5 circle square of radius 2 ='+es5CircleSquare(2))
console.log('test es6 circle square of radius 2 ='+es6CircleSquare(2))
console.log('test es5 fraction of radius .5 ='+es5FractionViewOf(.5))
console.log('test es6 fraction of radius .5 ='+es6FractionViewOf(.5))

document.write('welcome to my app');

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML ='div test output';
    return element;
}
  
document.body.appendChild(component());