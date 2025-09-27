// Activity 1: Creating and Exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use this
// module in another script.

// import { add } from './script.js';

// let sum = add(8, 9);
// console.log(sum);

// Task 2: Create a module that exports an object representing a person with properties
// and methods. Import and use this module in anothr script.

// import person from './script.js';

// // Use the person object
// person.greet(); // Output: Hello, my name is John Doe and I am 30 years old.

// person.updateAge(31);
// person.greet(); // Output: Hello, my name is John Doe and I am 31 years old.

// Acitivity 2: Named and Default Exports
// Task 3: Create a module that exports multiple funtions using named exports. 
// Import and use these functions in another script.

// import { add, subtract, multiply, divide } from './script.js';

// console.log(add(5, 3)); // Output: 8
// console.log(subtract(5, 3)); // Output: 2
// console.log(multiply(5, 3)); // Output: 15
// console.log(divide(5, 3)); // Output: 1.6666666666666667
 
// Task 4: Create a module that exports a single funtion using default exports. 
// Import and use these funtions in another script.

// main.js
// import greet from './script.js';

// console.log(greet('hushmina')); // Output: Hello, Alice!

// Activity 3: Importing Entire Modules
// Task 5: Create a module that exports multiple constants and funtions. Import
// the entire module as an object in another script and use its properties.

// import * as script from './script.js';

// console.log(`PI: ${script.PI}`);
// console.log(`Add: ${script.add(5, 3)}`);
// console.log(`Subtract: ${script.subtract(5, 3)}`);

// Activity 4: Using Third-Party Modules
// Task 6: Install a third-party module (e.g, lodash) using npm. Import and use a 
// function from this module in a script.

// Import the 'lodash' module
// import _ from 'lodash';

// // Use a function from lodash, for example, '_.reverse'
// const array = [1, 2, 3, 4, 5];
// const reversedArray = _.reverse(array.slice()); // Use a slice to avoid mutating the original array

// console.log('Reversed Array:', reversedArray);

// Task 7: Install a third-party module (e.g, axios) using npm. Import and use this
// module to make a netword request in a script.

// Import the 'axios' module
// import axios from 'axios';

// // Define a function to make a network request
// async function fetchData() {
//   try {
//     // Make a GET request to a public API
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    
//     // Log the response data
//     console.log('Data:', response.data);
//   } catch (error) {
//     // Handle any errors
//     console.error('Error fetching data:', error);
//   }
// }

// // Call the function to fetch data
// fetchData();

// Activity 5: Module Bundling (Optional)
// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple Javascript files 
// into a single File. write a script to demostrate the bundling process.