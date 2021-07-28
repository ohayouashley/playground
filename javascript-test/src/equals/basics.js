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

//

// / Challenge:

// 	- Add the equality operator to the indicated line so that the function 
//     will return the string Equal when val is equivalent to 12.

function testEqual(val) {
	if (val == 12) {
		return "Equal";
	}
	return "Not Equal";
	}
	
testEqual(10);


const number = testEqual(10);
    console.log(number);


    //


    function myAge(val) {
        if (val == 30) {
            return "False";
        } else {
        return "True"
        }
    }

    const howOldAmI = myAge(30);
    console.log(howOldAmI);

    //

/*


Comparison with the Strict Equality Operator

	- Strict equality (===) is the counterpart 
    to the equality operator (==). However, unlike 
    the equality operator, which attempts to convert 
    both values being compared to a common type, the 
    strict equality operator does not perform a type 
    conversion.
	- If the values being compared have different types, 
    they are considered unequal, and the strict equality 
    operator will return false.
	
Examples
3 ===  3
3 === '3'
		
- These conditions would return true and false respectively.
- In the second example, 3 is a Number type and '3' is a String type.

Challenge:
	- Use the strict equality operator in the if statement 
    so the function will return the string Equal when val is 
    strictly equal to 7*/


	function testStrict (val) {
		if (val === 7) {
			return "Equal";
		}
		return "Not Fucking Equal";
	}
	
testStrict(10);

const strict = testStrict(8);
    console.log(strict);

    //
