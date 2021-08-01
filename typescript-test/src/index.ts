// export {}

// console.log('it worked')

// const thing = [1,2,3]

//

// import { Bear } from './bear.model'; 

// const bear = new Bear(3);

// if (bear instanceof Bear) {
//     console.log("Hello from TypeScript");
// }

//

//TS Arrays

let stringVar: string[] = ["tiramisu"];

let numberVar: number[] = [1,2,3];

let booleanVar: boolean[] = [true, false]; 

console.log(stringVar);

//

// In order to write this as a nested array, you can use double brackets like so:

// let exampleVar: number[][] = [[1,2]];

// // In order to work with two data types in one. You can do this:

// let exampleVar2: (number | boolean)[] = [true, false]; 

//

// Tuples:  

// Tuples hold multiple types in one example:

const exampleTuple: [string, number] = ['https://www.YouTube.com/CodingTutorials360', 30];

//
//Ts Enums 

//Enums are an addition to ts. Way to store values. There are number enums and string enums and you can 
//use them to access data on different ts files in your folder.

//

//Ts Objects

//Ts Functions

//basic function to add two numbers together

//imports 1

import { Person } from './imports';

function add(val1: number, val2: number) {
    return val1 + val2;
}

add(1, 10);

function sayHello(person: Person) {
    return `Say Hello to My Little Friend, ${person.firstName}!`    
}

sayHello(new Person({firstName: 'Dylan'}));

//

//Ts parameters

// import 2
import { Person } from './person.model';

function add(val1: number, val2: number): number {
    return val1 + val2;
}

function sayHello(person: Person): string {
    return `Say Hello to My Little Friend, ${person.firstName}!`    
}

function voidExample(): void {
    add(1,2);
}

function neverExample(): never {
    throw Error;
}

//

//ts custom types

// ts interfaces
// ts barrels
// you can add a index.ts file and "barrel" multiple files together in your import to another file.
// import { Bear, Man, Pig } from './interfaces/index';
// if you have a bear.interface.ts and a man.interface.ts and a pig.interface.ts file you're wanting
//to combine to an import. This is a cleaner way to condense your code


//ts models
//intersection types are the ability to add multiple types to a single type as well as creating a new
// type. It's really as simple as meaning "combined types"

