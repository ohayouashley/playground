//Increment a Number with JS using i++
//Challenge: Add one to 88
var myVar = 55;
++myVar; 
console.log(myVar); 

/*	2. Create decimal numbers with JS
Decimal numbers are sometimes referred to as gloating point numbers or floats
    Not all real numbers can accurately be represented in floating point. 
    This can lead to rounding errors */

/*	Challenge: Create a variable myDecimal and give it a decimal value with a fractional part 
(e.g. 5.7)*/

var ourDecimal = 5.7;
var myDecimal = 2.6;

console.log(myDecimal);

/*		3. In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.
		
		Challenge: 
		Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:
I am a "double quoted" string inside "double quotes".
*/
var myString = "I am a \"double quote\" inside a \"quote\"";
console.log(myString);

/* 4. Assign three lines of text into a single variable using escape sequences.
firstline
    secondline
thirdline */

var myVar = "FirstLine\n\t\\SecondLine\tThirdLine";
console.log(myVar);

// 5. Concactenation 

var myString = "Ashley " + "Chase";
console.log(myString);

/*		We can also use the += operator to concatenate a string onto the end 
of an existing string variable. This can be very helpful to break a long string 
over several lines.
Note: Watch out for spaces. Concatenation does not add spaces between concatenated 
strings, so you'll need to add them yourself. */

var str1 = "I come first";
str1+= " I come second";
console.log(str1);

//Try with numbers

var num1 = "Can I please have this number of cheeseburgers: ";
num1+= 5;
console.log(num1);

/*		Appending Variables to Strings:
		
		Just as we can build a string over multiple lines out of string
         literals, we can also append variables to a string using the
          plus equals (+=) operator.

		Example:
		var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
ourStr would have the value freeCodeCamp is awesome!. */

var thisString = "Hi there";
var noThisString = " boiiiiii";
thisString += noThisString;
console.log(thisString, noThisString);

/*		Find the length of a string:
		
		You can find the length of a String value by writing .length 
        after the string variable or string literal.
		console.log("Alan Peter".length);
		The value 10 would be displayed in the console.
		For example, if we created a variable var firstName = "Ada", we could
        find out how long the string Ada is by using the firstName.length property.
		
Challenge: Use the .length property to count the number of characters in the lastName variable 
and assign it to lastNameLength. */

var lastNameLength = 0;
var lastName ="Nicholson";
lastName = lastNameLength; 
//???????????

/*		Use bracket notation to find the first character in a string.
		
		- Most modern programming languages, like JavaScript,
         don't start counting at 1 like humans do. They start at 0.
          This is referred to as Zero-based indexing.
		- For example, the character at index 0 in the word Charles
         is C. So if var firstName = "Charles", you can get the value 
         of the first letter of the string by using firstName[0].
			i. Var firstName="charles";
			ii. Var firstLetter = firstName[0]; (this will return the 
            value C because it is 0)
	
Challenge: Use bracket notation to find the first character in the
 lastName variable and assign it to firstLetterOfLastName. */

 var firstLetterOfLastName = "";
 var lastName = "Nicholson";
 firstLetterOfLastName = lastName[0];

 //????????????????

 /*Understand string immutability: In JavaScript, 
 String values are immutable, which means that they 
 cannot be altered once created. If you want to alter a string
 you need to replace the whole string. Example if you want to change
 hamburger to cheeseburger you would alter it like this:*/

var food = "hamburger"
food = "cheeseburger"
console.log(food);

/* Use bracket notation to find the last character in a string.

In order to get the last letter of a string, you can subtract one 
from the string's length.
For example, if var firstName = "Ada", you can get the value of the 
last letter of the string by using firstName[firstName.length - 1]. 

Example 1:*/

var firstName = "Ada";
var lastLetter = firstName[firstName.length - 1]; /*lastLetter would have a value of the string a.*/
console.log(lastLetter);

//Example 2:

var foods = ["strawberries", "cherris"];
console.log(foods.length);

