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

// Challenge:

// The compareEquality function in the editor compares 
// two values using the equality operator. Modify the 
// function so that it returns the string Equal only when 
// the values are strictly equal.

	function compareEquality(a, b) {
		if (a === b) {
			return "Equal baby";
		}
		return "Not Equal baby";
	}
	
console.log(compareEquality(10, "10"));

//

// Comparison with the Inequality Operator

// 	- The inequality operator (!=) is the opposite of the 
//     equality operator. It means not equal and returns false 
//     where equality would return true and vice versa. Like the 
//     equality operator, the inequality operator will convert data types of 
//     values while comparing.

// 	Examples:
// 1 !=  2
// 1 != "1"
// 1 != '1'
// 1 != true
// 0 != false
// 	- In order, these expressions would evaluate to true, false, false, false, and false.


// Challenge
// 	- Add the inequality operator != in the if statement so that the function 
//     will return the string Not Equal when val is not equivalent to 99

	function testNotEqual(val) {
		if (val != 99) {
			return "Not Equal loser";
		}
		return "Equal loser";
	}
	
	console.log(testNotEqual(10));

//

// Comparison with the Strict Inequality Operator

// 	- The strict inequality operator (!==) is the logical 
//     opposite of the strict equality operator. It means "Strictly Not Equal" 
//     and returns false where strict equality would return true and vice versa. 
//     The strict inequality operator will not convert data types.

// 	- Examples
// 3 !==  3
// 3 !== '3'
// 4 !==  3
// 	- In order, these expressions would evaluate to false, true, and true.

// Challenge:
// 	- Add the strict inequality operator to the if statement so the function 
//     will return the string Not Equal when val is not strictly equal to 17
	
	function testStrictNotEqual(val) {
		if (val !== 17) {
			return "Not Equal jimmyjohn";
		}
		return "Equal jimmyjohn";
	}
	
console.log(testStrictNotEqual(10));

//

function testMeHunnie(val) {
    if (val !== 30) {
        return "Don't Play";
    }
        return "Yes please ok";
}

console.log(testMeHunnie(39));

//

/*

Comparisons with the Logical And Operator
	- Sometimes you will need to test more than one 
    thing at a time. The logical and operator (&&) returns true if and only 
    if the operands to the left and right of it are true.
	- The same effect could be achieved by nesting an if 
    statement inside another if:*/

// 		if (num > 5) {
//   if (num < 10) {
//     return "Yes";
//   }
// }
// return "No";
// 	// - will only return Yes if num is greater than 5 and 
//     // less than 10. The same logic can be written as:

// 		if (num > 5 && num < 10) {
//   return "Yes";
// }
//      return "No";
//

// Challenge:
// 	- Replace the two if statements with one statement, using 
//     the && operator, which will return the string Yes if val is 
//     less than or equal to 50 and greater than or equal to 25. Otherwise, 
//     will return the string No.

	// function testLogicalAnd(val) {
	
	// 	if (val <= 50 && >= 25) {
			
	// 		return "yes";
			
	// 	}
		
	// 	return "No";
	// }
	
// console.log(LogicalAnd(10));

//


// Comparisons with the Logical Or Operator

// 	- The logical or operator (||) returns true 
//     if either of the operands is true. Otherwise, it r
//     eturns false.
// 	- The logical or operator is composed of two pipe symbols: (||). 
//     This can typically be found between your Backspace and Enter keys.
// 	- The pattern below should look familiar from prior waypoints:

// 	if (num > 10) {
//   return "No";
// }
// if (num < 5) {
//   return "No";
// }
// return "Yes";
// 	- will return Yes only if num is between 5 and 10 
//     (5 and 10 included). The same logic can be written as:

// 		if (num > 10 || num < 5) {
//   return "No";
// }
// return "Yes";

// Challenge:

// 	- Combine the two if statements into one statement which
//      returns the string Outside if val is not between 10 and 20, inclusive.
//       Otherwise, return the string Inside.

		function testLogicalOr(val) {
		
		if (val < 10 || val > 20) {
			return "Outside";
		}
		
		
		return "Inside";
		
		}
		
		console.log(testLogicalOr(15));


function hotWeather(val) {
    if (val < 60 || val >75) {
        return "shorts";
    }
    return "pants";
}

console.log(hotWeather(80));

//

// Introducing Else Statements

// 	- When a condition for an if statement is true, 
//     the block of code following it is executed. What about when 
//     that condition is false? Normally nothing would happen. With an 
//     else statement, an alternate block of code can be executed.

// 		if (num > 10) {
//   return "Bigger than 10";
// } else {
//   return "10 or Less";
// }

// Challenge:
// 	- Combine the if statements into a single if/else statement.

		function testElse(val) {
			var result = "";
			
			if (val > 5) {
				result = "Bigger than 5";
			} else {
			result = "5 or smaller";
			 
			}
			
			return result;
            //what is the purpose of this?
}

console.log(testElse(6));

//

// Introducing Else If Statements

// 	- If you have multiple conditions that need to be addressed, you can 
//     chain if statements together with else if statements.

// 		if (num > 15) {
//   return "Bigger than 15";
// } else if (num < 5) {
//   return "Smaller than 5";
// } else {
//   return "Between 5 and 15";
// }

// Challnege:
// 	- Convert the logic to use else if statements.

		function testElseIf(val) {
			if (val > 10) {
				return "Greater than 10";
			
			} else if (val < 5) {
				return "smaller than 5";
				
			} else  {
			
			return "Between 5 and 10";
		}
    }
		
console.log(testElseIf(7));


//

function calories(val) {
    if (val > 1500) {
        return "gain one pound";

    } else if (val < 1500) {
        return "down a pound";
        
    } else if (val = 1500) {
        return "no change";
    } else {
        return "idk up to u i guess";
    }
}

console.log(calories(500));

//

// Challenge 1: User Age
/*
1. Our business wants to keep track of what age range a user falls into.
2. If they are 12 or younger log 'child'.
3. If not a child but the user's age is under 20 log 'teenager'.
4. If neither log 'adult'.
*/


const age = 20;
  
if (age <=12) {
	console.log("Child");
	
} else if (age < 20) {
	console.log("teenager");
} else {
    console.log("adult");

}

//

const bango = 3;

    if (bango === 1) {
        console.log("ichi");
    } else if (bango === 2) {
        console.log("ni");
    } else {
        console.log("san");
    }

    //

    