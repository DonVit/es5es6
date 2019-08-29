var n2f = require('num2fraction')

var sum = function(x,y){
    return x+y
}

var circleSquare = function(r){
    return Math.PI * Math.pow(r,2)
}

var fractionViewOf = function(n) {
    return n2f(n)
}

module.exports.sum = sum
module.exports.circleSquare = circleSquare
module.exports.fractionViewOf = fractionViewOf