// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second
// timeout and log the message to the console.

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved after 2 seconds");
//     }, 2000);
// });

// myPromise.then(message => {
//     console.log(message);
// });

// Task 2: Create a promise that rejects with an error message after a 2-second
// timeout and handle the error using .catch()

// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Promise rejected after 2 seconds");
//     }, 2000);
// });

// myPromise
//     .then(message => {
//         console.log(message);
//     })
//     .catch(error => {
//         console.error(error);
//     });

// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from server.
// Chain the promises to log messages in a specific order.

// let fetchData = (data, delay) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Fetched ${data}`);
//         }, delay);
//     });
// };

// fetchData('Data 1', 1000)
//     .then(result => {
//         console.log(result);
//         return fetchData('Data 2', 1000);
//     })
//     .then(result => {
//         console.log(result);
//         return fetchData('Data 3', 1000);
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });

// Activity 3: Using Async/Await
// TAsk 4: Write an async function that waits for a promise to resolve and then logs the
// resolved value.

// // Create a promise that resolves after 2 seconds
// let myPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise resolved!");
//     }, 2000);
// });

// // Define the async function
// async function fetchData() {
//     try {
//         let result = await myPromise; // Wait for the promise to resolve
//         console.log(result); // Log the resolved value
//     } catch (error) {
//         console.error("Error:", error); // Handle any errors
//     }
// }

// // Call the async function
// fetchData();

// Task 5: write an async function that handles a rejected promise using try-catch and 
// logs the error message.

// function createRejectedPromise() {
//     return new Promise((_, reject) => {
//         setTimeout(() => reject('Something went wrong!'), 2000);
//     });
// }

// async function handleRejectedPromise() {
//     try {
//         let result = await createRejectedPromise();
//         console.log(result); // This won't execute
//     } catch (error) {
//         console.error('Error:', error); // Logs 'Error: Something went wrong!'
//     }
// }

// // Call the function
// handleRejectedPromise();

// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response 
// data to the console using promises.

// let url = 'https://jsonplaceholder.typicode.com/posts/1';

// let fetchData = () => {
//     return fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error('Error fetching data:', error));
// };

// fetchData();


// Task 7: Use the fetch API to get data from a public API and log the response 
// data to the console using async/await.

// let url = 'https://jsonplaceholder.typicode.com/posts/1';

// let fetchData = async () => {
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };

// fetchData();

// Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log 
// all their values.

// let promise1 = new Promise((resolve) => setTimeout(() => resolve('Value 1'), 1000));
// let promise2 = new Promise((resolve) => setTimeout(() => resolve('Value 2'), 2000));
// let promise3 = new Promise((resolve) => setTimeout(() => resolve('Value 3'), 3000));

// let fetchAll = async () => {
//     try {
//         let results = await Promise.all([promise1, promise2, promise3]);
//         console.log(results); // Logs: ['Value 1', 'Value 2', 'Value 3']
//     } catch (error) {
//         console.error('Error with one or more promises:', error);
//     }
// };

// fetchAll();

// Task 9: Use Promise.race to log the value of the first promise that resolves
// among multiple promises.

// let promise1 = new Promise((resolve) => setTimeout(() => resolve('First Promise'), 3000));
// let promise2 = new Promise((resolve) => setTimeout(() => resolve('Second Promise'), 1000));
// let promise3 = new Promise((resolve) => setTimeout(() => resolve('Third Promise'), 2000));

// let racePromises = async () => {
//     try {
//         let result = await Promise.race([promise1, promise2, promise3]);
//         console.log(result); // Logs: 'Second Promise'
//     } catch (error) {
//         console.error('Error with one of the promises:', error);
//     }
// };

// racePromises();
