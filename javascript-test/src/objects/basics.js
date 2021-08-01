let beachThings = {
  shore: "shell",
  sea: "water",
}

console.log(beachThings)

let example1 = {
  firstName: "Ashley",
  lastName: "Chase",
}

console.log(example1)

//Use the DOT property:

console.log(example1.firstName)

/*
Everything is an object. 

There are primitive objects which include:

Numbers 
Booleans
Strings
Null
Undefined

The objects category include everything else

Math
Date 
JSON
 window
Document
Or objects that you create
Arrays 
Functions
Sometimes: numbers, booleans, and strings are objects too.*/

/*An object is a collection of properties and arrays are a collections of values ordered by an index. We use different syntax to call on the different values in an object. 

Practice:*/

let example2 = {
  firstName: "Ashley", //firstName: key | "Ashley": value
  lastName: "Chase", //Each "row" is a key value pair
  address: {
    city: "Covina",
    state: "California",
  },

  age: 29,
  cats: ["Kennedy", "Knightly", "Birdie", "Blake"],
}

console.log(example2)

//console.log(example2.age);

/*Build JavaScript Objects

	- You may have heard the term object before.
	- Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.
	- Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
Here's a sample cat object: */

var myCat = {
  legs: 4,
  whiskers: 10,
  name: "Kennedy",
  age: 7,
  mood: "sassy",
  enemies: ["water", "Late meals"],
}

console.log(myCat)

/*

Accessing Object Properties with Dot Notation

	- There are two ways to access the properties of an 
    object: dot notation (.) and bracket notation ([]), 
    similar to an array.
	- Dot notation is what you use when you know the name of 
    the property you're trying to access ahead of time.
	- Here is a sample of using dot notation (.) to read an 
    object's property:*/

var myObj = {
  prop1: "val1",
  prop2: "val2",
}

var prop1val = myObj.prop1
var prop2val = myObj.prop2
/*prop1val would have a value of the string val1, and prop2val would 
have a value of the string val2.*/

console.log(prop1val)

/*

Challenge:
	- Read in the property values of testObj using dot notation. 
    Set the variable hatValue equal to the object's property hat and 
    set the variable shirtValue equal to the object's property shirt.*/

// Setup
var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
}
// Only change code below this line
var hatValue = testObj.hat // Change this line
var shirtValue = testObj.shirt

console.log(hatValue)
console.log(shirtValue)

//

var myDay = {
  workouttime: "30mins",
  workoutstyle: "chloeting",
  read: "Out",
  work: "JavaScript",
}

var workOutTimeValue = myDay.workouttime

//console.log(workOutTimeValue);

var foodSchedule = {
  breakfast: "miso soup",
  lunch: "kimchi salad",
  dinner: "chicken curry",
}

var breakFast = foodSchedule.breakfast

console.log(breakFast)

/*

Accessing Object Properties with Bracket Notation

	- The second way to access the properties of an object is bracket notation ([]). 
    If the property of the object you are trying to access has a space in its name, 
    you will need to use bracket notation.
	- However, you can still use bracket notation on object properties without spaces.
	- Here is a sample of using bracket notation to read an object's property:
    */
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "No Space": "USS Enterprise",
}

myObj["Space Name"]
myObj["More Space"]
myObj["No Space"]
/*- myObj["Space Name"] would be the string Kirk, myObj['More Space'] would be the 
    string Spock, and myObj["NoSpace"] would be the string USS Enterprise.
Note that property names with spaces in them must be in quotes (single or double).*/

console.log(myObj)

//Challenge create an object using bracket notation

var luggage = {
  "Jazz luggage": "Lavender",
  "Piers luggage": "Green",
  "Ash luggage": "Pink",
}

luggage["Jazz luggage"]
luggage["Piers luggage"]
luggage["Ash luggage"]

console.log(luggage)

/*Challenge:
Read the values of the properties an entree and the drink of testObj
 using bracket notation and assign them to entreeValue and drinkValue
  respectively.*/

var testObj = {
  myentree: "salmon",
  myappetizer: "wontons",
  mydessert: "cake",
}

var objValue = testObj["myentree"]
var objValue = testObj["myappetizer"]
var objValue = testObj["mydessert"] //will return the last code written

console.log(objValue)

//

/*

  Accessing Object Properties with Variables

	- Another use of bracket notation on objects is to 
    access a property which is stored as the value of a 
    variable. This can be very useful for iterating through 
    an object's properties or when accessing a lookup table.
	- Here is an example of using a variable to access a property:
    */
var dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle",
}

var myDog = "Hunter"
var myBreed = dogs[myDog]
console.log(myBreed)

/*
	- The string Doberman would be displayed in the console.


	- Another way you can use this concept is when the property's name is 
    collected dynamically during the program execution, as follows:

*/
var someObj = {
  propName: "John",
}

function propPrefix(str) {
  var s = "prop"
  return s + str
}

var someProp = propPrefix("Name")

console.log(someObj[someProp])

/*
	- someProp would have a value of the string propName, 
    and the string John would be displayed in the console.
Note that we do not use quotes around the variable name when 
using it to access the property because we are using the value of the 
variable, not the name. */

/*Updating Object Properties
	- After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.
	- For example, let's look at ourDog:*/
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
}
/*- Since he's a particularly happy dog, let's change his name to the string Happy Camper. 
    Here's how we update his object's 
    name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; 
    Now when we evaluate ourDog.name, instead of getting Camper, we'll get his new name, 
    Happy Camper.*/

/*Challenge:
	- Update the myDog object's name property. Let's change her name from Coder to Happy Coder. 
    You can use either dot or bracket notation.*/
var myDog = {
  name: "Peeta",
  legs: 4,
  tails: 1,
  friends: ["No one"],
}

ourDog.name = "Woofers"

console.log(ourDog.name)

//

/*Add New Properties to a JavaScript Object
	- You can add new properties to existing JavaScript objects 
    the same way you would modify them.
	- Here's how we would add a bark property to ourDog: */
ourDog.bark = "bow-wow"
//or
ourDog["bark"] = "bow-wow"
/*- Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.
		Example:*/

var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
}

ourDog.bark = "bow-wow"

// - Add a bark property to myDog and set it to a dog sound, such as "woof".
// You may use either dot or bracket notation.

var myDog = {
  name: "Inu",
  legs: 4,
  tails: 1,
  friends: ["karoshi"],
}

myDog.bark = "woof"

console.log(myDog)

//

const catalog = {
  plants: [
    {
      common: "bloodroot",
      botanical: "sanguinaria canadensis",
      zone: 4,
      light: "mostly shady",
      price: "2.44",
      availability: 03,
    },
    {
      common: "bloodroot",
      botanical: "sanguinaria canadensis",
      zone: 4,
      light: "mostly shady",
      price: "2.44",
      availability: 03,
    },
  ],
}
