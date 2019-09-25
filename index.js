import 'core-js';

var es5sum = require('./src/func_es5.js').sum
var es5CircleSquare = require('./src/func_es5.js').circleSquare
var es5FractionViewOf = require('./src/func_es5.js').fractionViewOf

import {sum as es6sum, circleSquare as es6CircleSquare, fractionViewOf as es6FractionViewOf} from './src/func_es6.js'

const ar=[
    {a:10,b:100},
    {a:20,b:200},
    {a:30,b:300},
    {a:40,b:400},
]
const far=(e)=>ar.find(el=>el.a==e)

console.log('test es5 sum 1+2='+es5sum(1,2))
console.log('test es6 sum 1+2='+es6sum(1,2))
console.log('test es5 circle square of radius 2 ='+es5CircleSquare(2))
console.log('test es6 circle square of radius 2 ='+es6CircleSquare(2))
console.log('test es5 fraction of radius .5 ='+es5FractionViewOf(.5))
console.log('test es6 fraction of radius .5 ='+es6FractionViewOf(.5))
console.log('find in array ='+far(10).b)

document.write('welcome to my app');

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML ='div test output';
    return element;
}
  
document.body.appendChild(component());