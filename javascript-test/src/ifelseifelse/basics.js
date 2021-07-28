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
  test(true);
  test(false);
  
  console.log(test);

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

//     function TrueOrFalse(wasthatTrue) {
//         If (isItTrue) 
//         return "Yes,It's true";
//     };
//         return "No, it's false";

// //

// function trueOrFalse(wasThatTrue) {
//     If (wasThatTrue) {
//         Return "Yes, that was true";
//     };
//     Return "No, that was false";

// };
    
// Console.log(trueOrFalse(true));