// Double equals and triple equals:

// JS is a dynamically typed language meaning we have no 
// problem taking a type of # variable and setting it to a boolean. 
// Most languages are statically typed which means to make it into a 
// boolean, you'd need to reassign it. 

let example1 = 10;
let example2 = 12;
console.log(typeof example1);
console.log(typeof example2);
console.log(example1 == example2);

// ** when you do the double equals its just asking whether the values are the same. 

// With a === (strictly equals) - it will check that 10 is = to 10 but if the data 
// type matches and if it doesn't IE "10" string value and 10 number value, it will return false.

