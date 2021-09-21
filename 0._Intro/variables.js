// "use strict";

// const message = "Hello World";
// this will be caught by strict mode
// delete message;

// NEVER do this
// insaneVariable = "This is not good";

console.log(word);
var word = "Clippie wants to help youuuuuuuuuu~";

let age = 27;

const person = {
    name: "Christina"
};

// I can do this despite it being const
person.name = "John";
person.favoriteFood = "Lasagne";
delete person.favoriteFood;
// console.log(person);

// I can't do the following
// person = { sound: "bzzzzz" };

const immutablePerson = Object.freeze(person);
immutablePerson.name = "New Name"; // this does nothing
// console.log(immutablePerson); 

// NEVER use var (anymore)
var oldSchoolJavascript = -10;

// create a new scope
{
    let someValue = "Some value";
    {
        // let someValue = "Other value";
        // console.log(someValue);
    }
    // console.log(someValue);
}


{
    var someValue = true;
    {
        var someValue = false;
        // console.log(someValue);
    }
    // console.log(someValue);
}



for (let i = 0; i <= 5; i++) {
    setTimeout(function runsAfterTheLoop() {
        // console.log(i);
    }, 1000);
}

// don't do this
// the result might suprise you!
for (var i = 0; i <= 5; i++) {
    setTimeout(function runsAfterTheLoop() {
        console.log(i);
    }, 1000);
}

/* 
i++ -> 1
i++ -> 2
i++ -> 3
....
i++ -> 6
One second has passed
timeOut calls function i (in a more global scope) is 6 thus is prints out 6 six times 
*/
