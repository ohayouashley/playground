/*Selecting from Many Options with Switch Statements
If you have many options to choose from, use a switch statement.
A switch statement tests a value and can have many case statements 
which define various possible values. Statements are executed from the first 
matched case value until a break is encountered.

Here is an example of a switch statement:*/

// switch(lowercaseLetter) {
//     case "a":
//       console.log("A");
//       break;
//     case "b":
//       console.log("B");
//       break;
//   }

function caseInSwitch(val) {
    var answer ="";
    switch(val) {
        case 1:
            answer = "alpha"
            break; 
    
        case 2:
            answer = "beta"
            break;
        
        case 3:
            answer = "gamma"
            break;

        case 4:
            answer = "delta"
            break;
    }

    return answer
}

console.log(caseInSwitch(4));

//

// Adding a Default Option in Switch Statements
// In a switch statement you may not be able to specify all 
// possible values as case statements. Instead, you can add the default 
// statement which will be executed if no matching case statements are found. 
// Think of it like the final else statement in an if/else chain.

// A default statement should be the last case.

// switch (num) {
//     case value1:
//       statement1;
//       break;
//     case value2:
//       statement2;
//       break;
//   ...
//     default:
//       defaultStatement;
//       break;
//   }

/*
CHALLENGE   
Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff

*/

function switchOfStuff(val) {
    var answer = "";
    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
    
        default:
        answer = "crackerjacks"; 
    }
      return answer;  
    }
  
  // Change this value to test
  console.log(switchOfStuff("s"));

  //

  function whatEndearmentAmIAllowed(val) {
      var answer = ""
      switch (val) {
          case "Sundays":
            answer = "my pearl";
            break;
          case "Everyday":
            answer = "Lizzie";
            break;
            case "Only on special occasions":
                answer = "Goddess devine";
                break;
                default: 
                    answer = "my dear";
                    break;
      }
        return answer;
        
      }
  
      console.log(whatEndearmentAmIAllowed("Sundays"));

      //

// Multiple Identical Options in Switch Statements
// If the break statement is omitted from a switch statement's case, 
// the following case statement(s) are executed until a break is encountered. 
// If you have multiple inputs with the same output, you can represent them in a 
// switch statement like this:
function because(val) {
var result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

return result
}
    // return result 

console.log(because(4));


//Challenge

// Cases for 1, 2, and 3 will all produce the same result.

// Write a switch statement to set answer for the following ranges:
// 1-3 - Low
// 4-6 - Mid
// 7-9 - High

// Note: You will need to have a case statement for each number in the range.

function sequencialSizez(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            result = "Low";
            break;
            case 4:
            case 5:
            case 6:
                result = "Med";
                break;
            case 7:
            case 8:
            case 9:
                result = "High";
                break;
            
            default:
                result = "Somewhere in between";
                break;
    }

    return result
}

console.log(sequencialSizez(10));

//

// Replacing If Else Chains with Switch
// If you have many options to choose from, a switch 
// statement can be easier to write than many chained 
// if/else if statements. The following:

// if (val === 1) {
//   answer = "a";
// } else if (val === 2) {
//   answer = "b";
// } else {
//   answer = "c";
// }

// can be replaced with:

// switch(val) {
//   case 1:
//     answer = "a";
//     break;
//   case 2:
//     answer = "b";
//     break;
//   default:
//     answer = "c";
// }

// CHALLENGE
// Change the chained if/else if statements into a switch statement.


function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line
  
    // if (val === "bob") {
    //   answer = "Marley";
    // } else if (val === 42) {
    //   answer = "The Answer";
    // } else if (val === 1) {
    //   answer = "There is no #1";
    // } else if (val === 99) {
    //   answer = "Missed me by this much!";
    // } else if (val === 7) {
    //   answer = "Ate Nine";
    // }
  
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42: 
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "missed me by this much";
            break;
        case 7:
            answer = "ate 9";
            break;

    }
        
    // Only change code above this line
    return answer;
  }
  
  console.log(chainToSwitch(7));

//   //

//   Return Early Pattern for Functions
// When a return statement is reached, the execution of the current function 
// stops and control returns to the calling location.

// Example

// function myFun() {
//   console.log("Hello");
//   return "World";
//   console.log("byebye")
// }
// myFun();
// The above will display the string Hello in the console, and return the string World. 
// The string byebye will never display in the console, because the function exits at the 
// return statement.


// CHALLENGE
// Modify the function abTest so that if a or b are less than 0 the function will immediately 
// exit with a value of undefined.

// Hint
// Remember that undefined is a keyword, not a string.

// Setup
function abTest(a, b) {
    // Only change code below this line
  if (a < 0 || b < 0) {
      return undefined;
  }
  
  
    // Only change code above this line
  
return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));

}
  
  console.log(abTest(-2,2));

  //

// Iterate with JavaScript While Loops
// You can run the same code multiple times by using a loop.

// The first type of loop we will learn is called a while loop because it runs while a specified 
// condition is true and stops once that condition is no longer true.

// var ourArray = [];
// var i = 0;
// while(i < 5) {
//   ourArray.push(i);
//   i++;
// }
// In the code example above, the while loop will execute 5 times and append the numbers 0 
// through 4 to ourArray.

// Let's try getting a while loop to work by pushing values to an array.

// Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

// Iterate with JavaScript For Loops
// You can run the same code multiple times by using a loop.

// The most common type of JavaScript loop is called a for loop because it runs for a 
// specific number of times.

// For loops are declared with three optional expressions separated by semicolons:

// for (a; b; c), where a is the intialization statement, b is the condition statement, 
// and c is the final expression.

// The initialization statement is executed one time only before the loop starts. It is 
// typically used to define and setup your loop variable.

// The condition statement is evaluated at the beginning of every loop iteration and will 
// continue as long as it evaluates to true. When the condition is false at the start of the 
// iteration, the loop will stop executing. This means if the condition starts as false, your 
// loop will never execute.

// The final expression is executed at the end of each loop iteration, prior to the next condition 
// check and is usually used to increment or decrement your loop counter.

// In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. 
// We'll increment i by 1 in each loop iteration with i++ as our final expression.

// var ourArray = [];
// for (var i = 0; i < 5; i++) {
//   ourArray.push(i);
// }
// ourArray will now have the value [0,1,2,3,4].

