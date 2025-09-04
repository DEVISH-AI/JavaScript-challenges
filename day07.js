// Activity 1: Object creation and access
// Task 1: create an object representing a book with properties like title,
//  author and year and log the object to console

// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960
// };

// console.log(book);

// Task 2: access and log the title and athor properties of the book Object

// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960
// };

// console.log(book.title);
// console.log(book.author);

// Activity 2: Object Methods
// Task 3: add a method to the book object that returns a string with the book's
//  title and author, log the result of calling this method

// let book = {
//     title: "To kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960
// };
// console.log(`${book.title} by ${book.author}`);

// // by method:
// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
//     getSummary: function() {
//         return `${this.title} by ${this.author}`;
//     }
// };

// console.log(book.getSummary());

// Task 4: add a method to the book object that takes a parameter(year) and
//  updates the book's year property

// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,

//     getSummary() {
//         return `${this.title} by ${this.author}`;
//     },

//     updateYear(newYear) {
//         this.year = newYear;
//     }
// };

// book.updateYear(2020);
// console.log(book);

// Activity 3: Nested Objects
// Task 5:  create a nested object representing a library with properties like
//  name and books (an array of book object) log the library object

// const library = {
//     name: "City Library",
//     books: [
//         {
//             title: "To Kill a Mockingbird",
//             author: "Harper Lee",
//             year: 1960,
//             getSummary() {
//                 return `${this.title} by ${this.author}`;
//             },
//             updateYear(newYear) {
//                 this.year = newYear;
//             }
//         },
//         {
//             title: "1984",
//             author: "George Orwell",
//             year: 1949,
//             getSummary() {
//                 return `${this.title} by ${this.author}`;
//             },
//             updateYear(newYear) {
//                 this.year = newYear;
//             }
//         },
//         {
//             title: "The Great Gatsby",
//             author: "F. Scott Fitzgerald",
//             year: 1925,
//             getSummary() {
//                 return `${this.title} by ${this.author}`;
//             },
//             updateYear(newYear) {
//                 this.year = newYear;
//             }
//         }
//     ]
// };

// console.log(library);

// Task 6: access and log the name of the library and the titles of all the
//  books in the library

// const library = {
//     name: "City LIbrary",
//     books: [
//         {
//             title: "To KIll a Mockingbird",
//         },
//         {
//             title: "1920",
//         },
//         {
//             title: "The Great Gatsby",
//         }
//     ]
// }

// console.log(`Library Name: ${library.name}`);

// library.books.forEach((book, index) => {
//     console.log(`Book ${index + 1} Title: ${book.title}`);
// });

// Activity 4: The this Keyword
// Task 7: add a method to the book object that uses the this keyword and 
// returns a string with book's title and year and log the result of calling this method

// const library = {
//     name: "City Library",
//     books: [
//         { title: "To Kill a Mockingbird", year: 1960 },
//         { title: "1984", year: 1949 },
//         { title: "The Great Gatsby", year: 1925 }
//     ]
// };

// library.books.forEach(book => {
//     book.getTitleAndYear = function() {
//         return `${this.title} was published in ${this.year}`;
//     };
//     console.log(book.getTitleAndYear());
// });

// Activity 5: Object iteration
// Task 8: Use a for...in loop to iterate over teh properties of the book object
// and log each property and its value.

// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
//     getSummary() {
//         return `${this.title} by ${this.author}`;
//     }
// };

// for (const key in book) {
//     if (book.hasOwnProperty(key)) { 
//         console.log(`${key}: ${book[key]}`);
//     }
// }

// Task 9: Use object.keys and object.values methods to log all the keys and 
// values of the book object

// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
//     getSummary() {
//         return `${this.title} by ${this.author}`;
//     }
// };

// const keys = Object.keys(book);
// console.log("Keys:", keys);

// const values = Object.values(book);
// console.log("Values:", values);
