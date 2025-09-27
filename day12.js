// Activity 1: Basic Handling with Try-Catch
// Task 1: Write a function that intentionally throws an error and use try-catch
// block to handle the error and log an appropriate message to the console.

// function throwError() {
//     // Intentionally throwing an error
//     throw new Error("This is a custom error message.");
// }

// try {
//     throwError();
// } catch (error) {
//     // Handling the error
//     console.log("Caught an error:", error.message);
// }

// Task 2: Create a funciton that divides two numbers and throws an error if the denominator
// is zero. Use a try-catch block to handle this error.

// function divideNumbers(numerator, denominator) {
//     if (denominator === 0) {
//         throw new Error("Cannot divide by zero.");
//     }
//     return numerator / denominator;
// }

// try {
//     let result = divideNumbers(10, 0); // Change the denominator to test different cases
//     console.log("Result:", result);
// } catch (error) {
//     console.log("Caught an error:", error.message);
// }

// Activity 2: Finally BLock
// Task 3: Write a script that includdes a try-catch and a finally block. 
// Log messages in the try, catch, and finally blocks to observe the execution flow.

// function testTryCatchFinally() {
//     try {
//         console.log("Inside try block: Attempting to execute code.");
//         // Intentionally throwing an error for demonstration
//         throw new Error("Something went wrong!");
//     } catch (error) {
//         console.log("Inside catch block: Caught an error:", error.message);
//     } finally {
//         console.log("Inside finally block: This will run regardless of whether an error occurred or not.");
//     }
// }

// // Call the function to see the execution flow
// testTryCatchFinally();

// Activity 3: custom Error Objects
// Task 4: Create a custon error class that extends the built-in Error class. 
// Throw an instance of this custom error in a function and handle it using a try-catch block.

// // Define a custom error class
// class CustomError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "CustomError"; // Custom name for the error
//     }
// }

// // Function that throws the custom error
// function throwError() {
//     throw new CustomError("This is a custom error message.");
// }

// // Using try-catch to handle the error
// try {
//     throwError(); // Call the function that throws the error
// } catch (error) {
//     if (error instanceof CustomError) {
//         console.log(`Caught a CustomError: ${error.message}`);
//     } else {
//         console.log(`Caught an unexpected error: ${error.message}`);
//     }
// } finally {
//     console.log("This will always execute regardless of whether an error was thrown or not.");
// }

// Task 5: Write a function that validates user input (e.g, checking if a string is not empty) 
// and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

// // Define a custom error class for validation
// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }

// // Function to validate user input
// function validateInput(input) {
//     if (!input || input.trim() === "") {
//         throw new ValidationError("Input cannot be empty.");
//     }
//     return "Input is valid!";
// }

// // Test the function with different inputs
// try {
//     const userInput = ""; // Change this to test different scenarios
//     const result = validateInput(userInput);
//     console.log(result);
// } catch (error) {
//     if (error instanceof ValidationError) {
//         console.log(`Validation error: ${error.message}`);
//     } else {
//         console.log(`Unexpected error: ${error.message}`);
//     }
// } finally {
//     console.log("Validation check completed.");
// }

// Activity 4: Error Handling in Promised
// Task 6: Create a promise to randomly resolves or rejects. Use .catch() to 
// handle the rejection and log an appropriate message to the console.

// // Create a promise that randomly resolves or rejects
// let randomPromise = new Promise((resolve, reject) => {
//     // Simulate a random decision with a 50% chance to resolve or reject
//     const randomNumber = Math.random();

//     if (randomNumber > 0.5) {
//         resolve("Promise resolved successfully!");
//     } else {
//         reject("Promise rejected!");
//     }
// });

// // Handle the promise
// randomPromise
//     .then(message => {
//         console.log(message); // Log the resolved message
//     })
//     .catch(error => {
//         console.log(error); // Log the error message if rejected
//     });

// Task 7: Use try-catch within an async function to handle errors from a promise
// that randomly resolves or reject, and log the error message.

// // Function that returns a promise that randomly resolves or rejects
// function randomPromise() {
//     return new Promise((resolve, reject) => {
//         // Randomly decide whether to resolve or reject
//         const shouldResolve = Math.random() > 0.5;
//         setTimeout(() => {
//             if (shouldResolve) {
//                 resolve("The promise was resolved successfully!");
//             } else {
//                 reject("The promise was rejected!");
//             }
//         }, 1000); // 1 second delay
//     });
// }

// // Async function that uses try-catch to handle errors
// async function handleRandomPromise() {
//     try {
//         const result = await randomPromise();
//         console.log(result); // Log the resolved value
//     } catch (error) {
//         console.error("Caught an error:", error); // Log the error message
//     }
// }

// // Call the async function
// handleRandomPromise();


// Activity 5: Fraceful Error Handling in Fetch
// Task 8: Use fetch API to request data from an invalid URL and handle the error 
// using .catch(). Log an appropriate error message to the console.

// // Function to fetch data from an invalid URL
// function fetchFromInvalidURL() {
//     // Replace 'https://invalid.url' with an actual invalid URL
//     fetch('https://invalid.url')
//         .then(response => {
//             if (!response.ok) {
//                 // If the response is not ok, throw an error
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }
//             return response.json(); // If the response is ok, parse it as JSON
//         })
//         .then(data => {
//             console.log(data); // Log the data if the request is successful
//         })
//         .catch(error => {
//             console.error("Fetch error:", error); // Log the error message if the request fails
//         });
// }

// // Call the function to initiate the fetch request
// fetchFromInvalidURL();

// Task 9: Use the fetch API to request data from an unvalid URL within async function and handle 
// the error using try-catch. log an appropriate error message.

// // Function to fetch data from an invalid URL
// async function fetchData() {
//     try {
//         // Request data from an invalid URL
//         let response = await fetch('https://invalid-url.example.com');
        
//         // Check if the response is not ok
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         // Parse the JSON from the response
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         // Handle errors
//         console.error('There was a problem with the fetch operation:', error);
//     }
// }

// // Call the function
// fetchData();
