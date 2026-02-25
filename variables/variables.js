// const
const name = "Serhii";
console.log(name);
// name = "Andrii" - const can't be changed
//------------------
// let
let age =25;
console.log('Age: '+age);
age=age+5;
console.log('Age: '+age);
//------------------
// var - deprecated
console.log(height); // undefined - because of hoisting mechanism
var height = 15;

//console.log(width) // error - width is not initialized
//let width = 10;


/*
hoisting
can address to variable declared as var if it's not initialized before invocation

can be represented as 

var height;
console.log(height); 
height = 15;

*/
//------------------

// scope area

{
    let k = 10;
    const l = 20;
    var m = 30;
    console.log(k);
    console.log(l);
    console.log(m);
}
//console.log(m); // for var - it works because var has functional scope availability
//console.log(k); // error - variable is out of scope
//console.log(l); // error - variable is out of scope

function foo(){
{
    var varVariable = 50;
    console.log("In scope value: "+varVariable); // = 30 if function is invoked
}
console.log("Out of scope value: "+varVariable); // = 30 if function is invoked
}
foo();
//console.log("Out of function value: "+varVariable); // error if function is invoked because var has functional scope availability
//-------------------




