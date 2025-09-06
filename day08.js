// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for
// // a person's name and age, and log the string to the console.
 
// const name = "Alice";
// const age = 30;

// const message = `Hello, my name is ${name} and I am ${age} years old.`;
// console.log(message);

// Task 2: Create a multi=line string using template literals and log it to the console.

// let multiLineString = `
// Hello, everyone!
// This is Hashmeena Farhan, 
// I'm learning JS and
// doing a 30 days Challenge,
// I hope It helps me in  
// my learning process a bit :)
// `;

// console.log(multiLineString);

// Activity 2: Destructuring
// Task 3: Use array destructuring to extract the first and second elements from
//  an array of numbers and log them to the console.

// let nums = [2, 3, 5, 6, 7 ,8];
// let [first, second] = nums;

// console.log(first);
// console.log(second);

// Task 4: Use object destructuring to extract the tiltle and author from a book
// object and log them to the console.

// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
//     genre: "Fiction"
// };

// const { title, author } = book;

// console.log(`Title: ${title}`);
// console.log(`Author: ${author}`);

// Activity 3: Spread and Rest Operators
// Task 5: Use the spread operator to create a new array that includes all 
// elements of an existing array plus additional elementts, and log the new array to the cocnsole.

// const originalArray = [1, 2, 3, 4, 5];

// const newArray = [...originalArray, 6, 7, 8];

// console.log(newArray);

// Task 6: Use the rest operator in afunction to accept an arivitrary number of 
// arguments, sum them, and return the result.

// function sum(...numbers) {
//     const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//     return total;
// }

// const result = sum(1, 2, 3, 4, 5);
// console.log(result);

//Activity 4 : Default parameters
// //Task 7: Write a function that takes two parameters and returns their product,
// with second parameter having a default value of 1. log the result of calling 
// this function with and without second parameter.

// function multiply(a, b = 1) {
//     return a * b;
// }

// const resultWithBoth = multiply(5, 3);
// console.log(`Result with both parameters: ${resultWithBoth}`); 

// const resultWithDefault = multiply(7);
// console.log(`Result with default second parameter: ${resultWithDefault}`); 

//Task 8: Use enhanced object literals ot creae an object with methods and properties,
// and log the object to the console.

// const person = {
//     name: 'John',
//     age: 30,

//     greet() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     },

//     updateAge(newAge) {
//         this.age = newAge;
//     }
// };

// console.log(person);

// console.log(person.greet());
// person.updateAge(31);
// console.log(person);

// Task 9: Create an object with computed property names based on variables and log
// the object to the console.

// const propName1 = 'firstName';
// const propName2 = 'lastName';

// const person = {
//     [propName1]: 'John',
//     [propName2]: 'Doe'
// };

// console.log(person);

