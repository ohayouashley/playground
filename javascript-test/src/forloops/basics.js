// Iterate with JavaScript While Loops
// You can run the same code multiple times by using a loop.

// The first type of loop we will learn is called a while loop because i
// t runs while a specified condition is true and stops once that condition is 
// no longer true.


// var ourArray = [];
// var i = 8;
// while(i < 14) {
//   ourArray.push(i);
//   i++;
// }

// console.log(ourArray);

// // // In the code example above, the while loop will execute 5 times and append the numbers 0 through
// // //  4 to ourArray.

// // // Let's try getting a while loop to work by pushing values to an array.


// // // CHALLENGE:
// // // Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

// // var myArray = [];

// // // Only change code below this line.
// // var i = 5;
// // while(i >= 0) {
// //   myArray.push(i);
// //   i--;
// // }
// // console.log(myArray);

// //

// // Iterate with JavaScript For Loops
// // You can run the same code multiple times by using a loop.

// // The most common type of JavaScript loop is called a for loop because it runs for a 
// // specific number of times.

// // For loops are declared with three optional expressions separated by semicolons:

// // for (a; b; c), where a is the intialization statement, b is the condition statement, 
// // and c is the final expression.

// // The initialization statement is executed one time only before the loop starts. It is 
// // typically used to define and setup your loop variable.

// // The condition statement is evaluated at the beginning of every loop iteration and will 
// // continue as long as it evaluates to true. When the condition is false at the start of the 
// // iteration, the loop will stop executing. This means if the condition starts as false, your 
// // loop will never execute.

// // The final expression is executed at the end of each loop iteration, prior to the next condition 
// // check and is usually used to increment or decrement your loop counter.

// // In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. 
// // We'll increment i by 1 in each loop iteration with i++ as our final expression.

// // var ourArray = [];
// // for (var i = 0; i < 5; i++) {
// //   ourArray.push(i);
// // }

// // console.log(ourArray);

// //ourArray will now have the value [0,1,2,3,4].

// // CHALLENGE:
// // Use a for loop to push the values 1 through 5 onto myArray.

// // const it = makeRangeIterator(1, 10, 2);

// // let result = it.next();
// // while (!result.done) {
// //  console.log(result.value); // 1 3 5 7 9
// //  result = it.next();
// // }

// // console.log("Iterated over sequence of size: ", result.value); 

// // console.log(makeRangeIterator);

// // for (let i = 0; i < array.length; i++); 

// // i is the same. It's just a variable that you're using
// //let i = 0 is the beginning of your sequence so you are starting at 0
// // i < array.length is the duration of your sequence ie. how long it's going to go for 
// // i++ is how much you are increasing by. In this case you are telling JS to increase by one.

// // for (initialization; condition; do after each);

// // Setup
// var myKrray = [];

// // Only change code below this line

// for (var i = 1; i < 6; i++) {
//   myKrray.push(i);

// }

// console.log(myKrray);

// //make sure your semicolons are in the right place. 

// var ourArray = [];
// for (var i = 0; i < 5; i++) {
//   ourArray.push(i);
// }

// console.log(ourArray);


// //

// // Iterate Odd Numbers With a For Loop

// // For loops don't have to iterate one at a time. By changing our 
// // final-expression, we can count by even numbers.

// // We'll start at i = 0 and loop while i < 10. We'll increment i by 2 
// // each loop with i += 2.

// var ourArray = [];
// for (var i = 0; i < 10; i += 2) {
//   ourArray.push(i);
// }
// console.log(ourArray);
// // ourArray will now contain [0,2,4,6,8]. Let's change our 
// // initialization so we can count by odd numbers.


// // CHALLENGE:
// // Push the odd numbers from 1 through 9 to myArray using a for loop.

// var oddNumbers = [];
// for (var i = 1; i < 10; i += 2) {
//     oddNumbers.push(i);
// }
// console.log(oddNumbers);

// //

// // Count Backwards With a For Loop
// // A for loop can also count backwards, so long 
// // as we can define the right conditions.

// // In order to decrement by two each iteration, we'll 
// // need to change our initialization, condition, and final expression.

// // We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each 
// // loop with i -= 2.

// var herArray = [];
// for (var i = 10; i > 0; i -= 2) {
//   herArray.push(i);
// }
// console.log(herArray);

// // ourArray will now contain [10,8,6,4,2]. Let's change our initialization and 
// // final expression so we can count backwards by twos to create an array of descending 
// // odd numbers.


// // CHALLENGE:
// // Push the odd numbers from 9 through 1 to myArray using a for loop.

// var hisArray = [];
// for (var i = 9; i > 0; i -= 2) {
//     hisArray.push(i);
// }

// console.log(hisArray);

// //

// // Iterate Through an Array with a For Loop

// // A common task in JavaScript is to iterate through the contents 
// // of an array. One way to do that is with a for loop. This code will 
// // output each element of the array arr to the console:

// // var arr = [10, 9, 8, 7, 6];
// // for (var i = 0; i < arr.length; i++) {
// //    console.log(arr[i]);
// // }


// //
// // Above you're console logging (arr(i)); not just arr because you're needing to console.log
// // out the whole loop including the i variable. Below you're just console logging out the one variable.
// var cats = ["kennedy", "birdie", "knightly", "blake"];
//     console.log(cats);
// // Remember that arrays have zero-based indexing, which means the last 
// // index of the array is length - 1. Our condition for this loop is i < arr.length, 
// // which stops the loop when i is equal to length. In this case the last iteration 
// // is i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 6 to the console. 
// // Then i increases to 5, and the loop terminates because i < arr.length is false.


// //  CHALLENGE:
// // Declare and initialize a variable total to 0. Use a for loop to add the value of each 
// // element of the myArr array to total.

// // // Setup
// // var myPlants = [2, 3, 4, 5, 6];
// // for (var i = 0; i < myPlants.length; i++) {
// //     console.log(myPlants[i]);
// // }

// // // //Why are these two different? Why is JS reading myPlants as a function and not a variable?

// // var arr = [10, 9, 8, 7, 6];
// // for (var i = 0; i < arr.length; i++) {
// //    console.log(arr[i]);
// // }

// // Example
// var ourArr = [ 9, 10, 11, 12];
// var ourTotal = 0;

// for (var i = 0; i < ourArr.length; i++) {
//   ourTotal += ourArr[i];
// }

// console.log(ourTotal);

// // // Setup
// var myArr = [ 2, 3, 4, 5, 6];

// var total = 0;

// for (var i = 0; i < myArr.length; i++) {
//   total += myArr[i];
// }

// console.log(total);

//

// Nesting For Loops
// If you have a multi-dimensional array, you can use the same 
// logic as the prior waypoint to loop through both the array and any 
// sub-arrays. Here is an example:

// var arr = [
//   [1,2], [3,4], [5,6]
// ];
// for (var i=0; i < arr.length; i++) {
//   for (var j=0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// // Create you're own product loop. (Salary)
// function multiplyAll(salary) {
// var product = 1;

// var salary = [
//     [24],[8,5], [4,12],
// ];
// for (var i = 0; i < salary.length; i++) {
//     for (var j=0; j < salary[i].length; j++) {
//         product *= salary[i][j];
//     }
// }
//  return product;

// }

// var product = multiplyAll([[24],[8,5], [4,12]]);

// console.log(product); 

// function multiplyMost(bugs) {
//     var produce = 1;
//     var bugCount = [
//         [32],[34,34],[22]
//     ]
// }

// This outputs each sub-element in arr one at a time. Note that 
// for the inner loop, we are checking the .length of arr[i], since arr[i] 
// is itself an array.

// CHALLENGE:
// Modify function multiplyAll so that it returns the product of all the numbers 
// in the sub-arrays of arr.

// var myArray = [];

// // Only change code below this line

// for (var i = 1; i < 6; i++) {
//   myArray.push(i);

// }

// console.log(myArray);

// //


// function multiply(money) {
//     let result = 0;

//         for (let i = 0; i < money.length; i++) {
//             for (let j = 0; j < money.length; i++);
//                 result *= money[i][j];
//         }

//     return result;
// }

// let result = multiply[[4, 5, 6][4]];

// console.log(result);

//CODECAMP

function multiplyAll(arr) {
    var product = 1;
    
    for (var i=0; i < arr.length; i++) {
      for (var j=0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
  
    return product;
  }
  
  var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
  
  console.log(product);

  //



