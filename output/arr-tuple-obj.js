"use strict";
// Array
const names = [];
names.push('Daylan');
//names.push(3) // error
// Readonly - the readonly keyword can prevent arrays from being changed
const fruites = ['Apple', 'Banana'];
// fruites.push('Grape'); // error
// Type Inference = ts can infer the type of an array if it has value
const numbers = [1, 2, 3];
numbers.push(4);
//numbers.push('2') // error
// TypeScript Tuples - A tuple is a typed array with a pre-defined length and types for each index.
// define the tuple
let myTuple;
// initialize correctly
myTuple = [5, true, 'tuple is awesome'];
// ourTuple = [false, 'Coding God was mistaken', 5]; // error - order is matter
// Named tuples - it allow us to provide context for our values at each index
const graph = [55.2, 42.3];
// Destructing tuples
const graph2 = [33.2, 44.3];
const [x, y] = graph2;
// Object types - ts has a specific systax for typing objects
const car = {
    type: 'Toyota',
    model: 'Corolla',
    year: 2009
};
// Optional properties
const car2 = {
    type: 'Toyota'
};
car2.mileage = 2000;
// Index Signatures - Index signatures can be used for objects without a defined list of properties
const nameAgeMap = {};
nameAgeMap.Jack = 25;
