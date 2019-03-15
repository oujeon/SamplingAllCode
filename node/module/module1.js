/**
 * Created by erp140 on 2018-12-21.
 */

exports.helloworld = function(){
    return "helloWorld";
}

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

module.exports = {
    add: add,
    substract: substract,
    multiply: multiply,
    divide: divide,
};