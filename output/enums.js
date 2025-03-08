"use strict";
// Enums - an enum is a special class that represents a group of constants(unchangeable varibales)
// enums come in two flavors [string, numeric] 
// Numeric enums(default) - enums will initialize the first value to 0 and add 1 to each additinal value
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
let currentDirections = CardinalDirections.North; // logs 0
// Numeric Enums - Initialized
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Approved"] = 1] = "Approved";
    Status[Status["Canceled"] = 2] = "Canceled"; // by default value 2
})(Status || (Status = {}));
// Numeric Enums - Fully initialized
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
})(StatusCode || (StatusCode = {}));
//console.log(StatusCode.Accepted)
// String Enums
var CardinalStringDirections;
(function (CardinalStringDirections) {
    CardinalStringDirections["North"] = "Norht";
    CardinalStringDirections["East"] = "East";
    CardinalStringDirections["South"] = "South";
    CardinalStringDirections["West"] = "West";
})(CardinalStringDirections || (CardinalStringDirections = {}));
