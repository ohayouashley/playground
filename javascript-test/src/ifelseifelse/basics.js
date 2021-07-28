/*If, Else If, Else, and & Or in JavaScript

Introducing Else StatementsPassed
When a condition for an if statement is true, 
the block of code following it is executed. What about 
when that condition is false? Normally nothing would happen. 
With an else statement, an alternate block of code can be executed.
*/
// if (num > 10) {
//   return "Bigger than 10";
// } else {
//   return "10 or Less";
// };
// Challenge: Combine the if statements into a single if/else statement.


function testElse(val) {
    var result = "";
    // Only change code below this line
    
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }
    
    // Only change code above this line
    return result;
}
  
  // Change this value to test
  testElse(4);

/*Use Conditional Logic with If Statements 

	- If statements are used to make decisions in code. The keyword if tells 
    JavaScript to execute the code in the curly braces under certain conditions, 
    defined in the parentheses. These conditions are known as Boolean conditions 
    and they may only be true or false.
	- When the condition evaluates to true, the program executes the statement inside 
    the curly braces. When the Boolean condition evaluates to false, the statement inside 
    the curly braces will not execute.
	
Pseudocode
	if (condition is true) {
	  statement is executed
}*/

//Example

function test (myCondition) {
    if (myCondition) {
       return "It was true";
    }
    return "It was false";
  }
//   test(true);
//   test(false);
const result = test(true)
  //console.log(result);


function testElseIf (timer) {
    if (timer) {
        return "sound alarm";
    } else {
        return "vibrate alarm";
    }
}

const wakeup = testElseIf(true)
    console.log(wakeup);

    //

    // Comparison with the Equality Operator

	// - There are many comparison operators in JavaScript. 
    // All of these operators return a boolean true or false value.
	// - The most basic operator is the equality operator ==. The equality operator 
    // compares two values and returns true if they're equivalent or false if they are 
    // not. Note that equality is different from assignment (=), which assigns the value 
    // on the right of the operator to a variable on the left.
	
function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}

const myVar = equalityTest(6)
    console.log(myVar);

// 	- If myVal is equal to 10, the equality operator returns true, 
//     so the code in the curly braces will execute, and the function 
//     will return Equal. Otherwise, the function will return Not Equal. 
//     In order for JavaScript to compare two different data types (for example, numbers and strings), 
//     it must convert one type to another. This is known as Type Coercion. Once it does, however, it 
//     can compare terms as follows:
	
// 1   ==  1
// 1   ==  2
// 1   == '1'
// "3" ==  3


//   - test(true) returns the string It was true, 
//   and test(false) returns the string It was false.
//   When test is called with a value of true, the if statement 
//   evaluates myCondition to see if it is true or not. Since it is true, 
//   the function returns It was true. When we call test with a value of 
//   false, myCondition is not true and the statement in the curly braces 
//   is not executed and the function returns It was false. 

// Challenge:

// - Create an if statement inside the function to return Yes, that was true if the 
// parameter wasThatTrue is true and return No, that was false otherwise.


function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    };
    return "No, that was false";

};
    
console.log(trueOrFalse(true));

//


// Challenge:

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

 /*
 
 Practice comparing different values

	- In the last two challenges, we learned about the equality operator
     (==) and the strict equality operator (===). Let's do a quick review 
     and practice using these operators some more.
	- If the values being compared are not of the same type, the equality
     operator will perform a type conversion, and then evaluate the values. 
     However, the strict equality operator will compare both the data type 
     and value as-is, without converting one type to the other.
	- Examples:
	3 == '3' returns true because JavaScript performs type conversion from 
    string to number. 3 === '3' returns false because the types are different 
    and type conversion is not performed.
	- Note: In JavaScript, you can determine the type of a variable or a value 
    with the typeof operator, as follows:
	
typeof 3
typeof '3'
		
typeof 3 returns the string number, 
and typeof '3' returns the string string.*/