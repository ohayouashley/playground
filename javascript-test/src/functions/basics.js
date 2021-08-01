//  /*

// //   Write Reusable JavaScript with Functions

// // 	- In JavaScript, we can divide up our code into reusable parts called functions.
// // Here's an example of a function:*/

// // function functionName() {

// //     console.log("Hello World");
  
// //   }
// //   /*	- You can call or invoke this function by using its name followed 
// //   by parentheses, like this: functionName(); Each time the function is 
// //   called it will print out the message Hello World on the dev console. 
// //   All of the code between the curly braces will be executed every time 
// //   the function is called.*/
  
  
// //   function ourReusableFunction() {
// //   console.log("Heyya, World");
// //   }
// //   ourReusableFunction();

// //


// // // -write a function with multiple arguments. 

function add(a,b) {
    return (a+b);
}

// var a = 4;
// var b = 6;

// add(a,b);


console.log(add(4,6)); 

// // const result = add(5,32);

// // console.log(result);

// // console.log(a,b);

// //

// // let kennedy = "cat";
// // let kipper = "dog";

// // function animals(kennedy, kipper) {
// //     console.log(kennedy,kipper);
// // }

// // //

// function multipleReturns(val) {
//     if (val > 5) {
//         return "Bigger than 5";
//     }
//     return "5 or Smaller";
// }
  
//   // Change this value to test
// //   multipleReturns(4);

// //   console.log(multipleReturns(4));

//   // three numbers - add them together and divide by third number . if the fourth number is > 5 
//   //multiply by the number and if less than five, divide and return.

//   function numbers(num1, num2, num3, num4) {
//     if (num4 > 5) {
//         return ((num1 + num2) / num3) * num4

//      } else if (num4 < 5) {
//         return ((num1 + num2) / num3) / num4
//      } else {
//          return num4
//      }
//   }

//  let result = numbers(3,3,2,5); 

//   console.log(result); 

//

// Create a function that takes two numbers as arguments and return their sum.
// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10

// function addBoth(a,b) {
//    return a+b; 
// }

// let result = addBoth(4,5);

// console.log(result);