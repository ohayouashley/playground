//Create a simple boolean
let example1 = false;
console.log(example1);

/*BOOLEAN CHALLENGE: examples of true and false values. Comment what you think 
these outputs are going to be:

let example1 = false;
let example2 = true;
let example3 = null;
let example4 = undefined;
let example5 = '';
let example6 = NaN;
let example7 = -5;
let example8 = 0; */

/*


console.log(Boolean(example1)); **returns false

console.log(Boolean(example2)); ** returns true

console.log(Boolean(example3)); **returns false 
	- Null is like a place holder. Value that we are referencing that says a developer is going to set this as a value later. It will return false.

console.log(Boolean(example4)); **returns false
	- Usually means the variable was not defined. Variable or property that doesn't exist that you're trying to reference. Typically means there's a bug in your code. 

console.log(Boolean(example5)); **returns false
	- String will come out false because you need a space in between the quotes to determine this is a string. An empty character will return false. If you put a space or a proper string, will return true.

console.log(Boolean(example6)); **returns false
	- NaN = Not a number - not going to return a value properly. 

console.log(Boolean(example7)); ** returns true
Negative and positive numbers will return True. The only number that will return false is 0
*/

/*

Understanding Boolean Values

	- Another data type is the Boolean. Booleans may only be one 
    of two values: true or false. They are basically little on-off 
    switches, where true is on and false is off. These two states are mutually exclusive.
	- Note: Boolean values are never written with quotes. The strings "true" 
    and "false" are not Boolean and have no special meaning in JavaScript.

Challenge:

	- Modify the welcomeToBooleans function so that it returns true instead of false 
    when the run button is clicked. */

function welcomeToBooleans() {
	
return true;

}

//console.log(welcomeToBooleans);

/*Returning Boolean Values from Functions
You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison, like this:*/

function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
//But there's a better way to do this. Since === returns true or false, 
//we can return the result of the comparison:

function isEqual(a,b) {
  return a === b;
}

//Fix the function isLess to remove the if/else statements.

function isLess(a, b) {
    // Only change code below this line
    return (a < b); 
    // Only change code above this line
}
  
  isLess(10, 15);

 