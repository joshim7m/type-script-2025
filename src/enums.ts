// Enums - an enum is a special class that represents a group of constants(unchangeable varibales)
// enums come in two flavors [string, numeric] 
// Numeric enums(default) - enums will initialize the first value to 0 and add 1 to each additinal value

enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirections = CardinalDirections.North; // logs 0

// Numeric Enums - Initialized
enum Status {
  Pending = 0,
  Approved = 1,
  Canceled    // by default value 2
}

// Numeric Enums - Fully initialized
enum StatusCode {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}
//console.log(StatusCode.Accepted)

// String Enums
enum CardinalStringDirections {
  North = 'Norht',
  East = 'East',
  South = 'South',
  West = 'West'
}
