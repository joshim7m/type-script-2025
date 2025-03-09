"use strict";
// Functions  - it has a specific syntax for typing function parameters and return values.
// Return Type
function getTime() {
    return new Date().getTime();
}
// Void Return Type - its indicate a function doesn't return any value
function printHello() {
    console.log('Hello');
}
// Parameters
function multiply(a, b) {
    return a * b;
}
// Optional parameters
function add(a, b, c) {
    return a + b + (c || 0);
}
// Default Parameters
function pow(value, exponent = 10) {
    return value ** exponent;
}
// Named Parameters
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
console.log(divide({ dividend: 20, divisor: 5 }));
// Rest Parameters - always must be an array as rest parameters are always arrays
function bigAdd(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(bigAdd(12, 12, 2, 11, 23));
const negateFunction = (value) => value * -1;
console.log(negateFunction(10));
