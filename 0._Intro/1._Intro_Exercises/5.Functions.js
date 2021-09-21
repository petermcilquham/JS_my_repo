//functions

function greetings() {
    console.log("Hello World")
}
greetings()

//anonymous function (a function with no name)
const anonymousFunction = function() {
    console.log("Hello World")
}

console.log(anonymousFunction)
anonymousFunction()

//call back function
function interact(anyFunctionReference) {
    //why call back? it allows the function to run with default code 
    //and when it's ready it calls OUR function what we give to it
    //imagine that before the next line some code is running here...
    function doSomething(){
        console.log("hej")
    }
    doSomething()
    anyFunctionReference()
}
//interact(anonymousFunction()) //paranteser efter "anonymousFunction" kalder funktionen med det samme
interact(() => console.log("poke")) //lambda udgaven af nedenstående:
// interact(function (){
//     console.log("poke");
// })