"use strict";
// three main premitives = boolean, number and string
// also two commin premitives = bigint and symbol
// ## type assignment - Explicit and Implicit
// Explicit type - writting out the type
let firstName = 'Dylan';
// Implicit type - TypeScript will guess the type, based on the assigned value
let lastName;
// Unable to Infer
const json = JSON.parse("55");
console.log(typeof json); // number
// Special types - any, unknown, never, undefined & null
let v = true;
v = 'string';
Math.round(v);
