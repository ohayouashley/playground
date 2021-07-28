/*Store Multiple Values in one Variable using JavaScript Arrays

With JavaScript array variables, we can store several pieces of 
data in one place.
You start an array declaration with an opening square bracket, 
end it with a closing square bracket, and put a comma between 
each entry, like this: */

var sandwhich = ["peanut butter", "jelly", "bread"];

/*Nest one Array within Another Array

You can also nest arrays within other arrays, like below: */

var playOffScore = [["Suns",98]["Bucks", 105]];
console.log(playOffScore); /*returns undefined*/

/* 

Access Array Data with Indexes

We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, 
except that instead of specifying a character, they are specifying an entry 
in the array. Like strings, arrays use zero-based indexing, so the first element 
in an array has an index of 0. */

var array = [50,60,70];
Array[0];
var data = array[0]; 

console.log(array);
console.log(data);

/*

Modify Array Data With Indexes

Unlike strings, the entries of arrays are mutable and can be changed freely.

	Example: */
	
	var ourArray = [50,40,30];
	ourArray[0] = 15;
    console.log(ourArray);
	
//ourArray now has the value [15, 40, 30].
/*Note: There shouldn't be any spaces between the array name and 
the square brackets, like array [0]. Although JavaScript is able to 
process this correctly, this may confuse other programmers reading your code. */

/*

Access Multi-Dimensional Arrays With Indexes

One way to think of a multi-dimensional array, is as an array of arrays. 
When you use brackets to access your array, the first set of brackets refers 
to the entries in the outer-most (the first level) array, and each additional 
pair of brackets refers to the next level of entries inside.*/

	//Example:
	
	var arr = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
	[[10,11,12], 13, 14]
	];
	arr[3];
	arr[3][0];
	arr[3][0][1];
    console.log(arr); 


//?????????

/*Manipulate arrays with push() (see below definitions)

An easy way to append data to the end of an array is via the push() function.
.push() takes one or more parameters and "pushes" them onto the end of the array.

	Examples: */

    var arr1 = [1,2,3];
arr1.push(4);
	var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
//arr1 now has the value [1, 2, 3, 4] and arr2 has the value ["Stimpson", "J", "cat", 
//["happy", "joy"]]. 

console.log(arr1);  
console.log(arr2);
