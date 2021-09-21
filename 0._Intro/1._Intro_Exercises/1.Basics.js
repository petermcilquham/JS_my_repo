// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Peter";
const lastName = "Hansen";

// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log("My first name is", firstName, "and my last name is", lastName);
console.log(`My first name is ${firstName} and my last name is ${lastName}`);

// type coercion

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2020";
const number = 1;

// Add the year plus the number
// The result should be 2021
// You cannot touch line 1 or 2

const newYear = parseInt(year) + number;
const newYear2 = Number(year) + number;
const newYear3 = + year + number;

console.log(newYear);
console.log(newYear2);
console.log(newYear3);

//console.log(parseInt("102a43434")); // parses as 102 stops before a
//console.log(Number("102a")); // this is obviously not a Number so 102


// --------------------------------------
