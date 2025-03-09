// Functions  - it has a specific syntax for typing function parameters and return values.
// Return Type
function getTime(): number {
  return new Date().getTime()
}

// Void Return Type - its indicate a function doesn't return any value
function printHello(): void {
  console.log('Hello')
}

// Parameters
function multiply(a: number, b: number){
  return a * b;
}

// Optional parameters
function add (a: number, b: number, c?: number){
  return a + b + (c || 0)
}

// Default Parameters
function pow(value: number, exponent: number = 10){
  return value ** exponent
}

// Named Parameters
function divide({dividend, divisor}: { dividend: number, divisor: number}){
  return dividend / divisor
}
console.log(divide({dividend: 20, divisor: 5}))

// Rest Parameters - always must be an array as rest parameters are always arrays
function bigAdd(a: number, b: number, ...rest: number[]){
  return a + b + rest.reduce((p, c) => p + c, 0)
}
console.log(bigAdd(12,12,2,11,23))

// Type Alias
type Negate = (value: number) => number;
const negateFunction: Negate = (value) => value * -1;
console.log(negateFunction(10))