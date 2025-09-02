// Activity 1: Array creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

// let array1 = [2, 5, 7, 9, 5];
// console.log(array1);

// Task 2: Access the 1st and last elements of the array and log them to 
// the console

// let array1 = [2, 5, 7, 9, 4];
// let Felement = array1[0];
// let Lelement = array1[array1.length -1];


// console.log(Felement);
// console.log(Lelement);

// Activity 2: Array methods (basic)

// Task 3: Use the push method to add a new number to the end of the array
// and log the updated array.

// let array = [10, 20, 30, 40, 50];

// array.push(60);

// console.log(array); 

// Task 4: Use the pop method to remove the last element of the array
// and log the updated array.

// let array = [10, 20, 30, 40, 50];

// array.pop(50);

// console.log(array); 

// Task 5: Use the shift method to remove the first element of the array
// and log the updated array.

// let array = [10, 20, 30, 40, 50];

// array.shift();

// console.log(array); 

// Task 6: Use the unshift method to add a new number to the beginning of the array
// and log the updated array.

// let array = [10, 20, 30, 40, 50];

// array.unshift(1);

// console.log(array); 

// Activity 3: Array methods (Intermediate)
// Task 7: Use the map method to ceate a new array where each number is doubled
// and log the new array.

// let array = [15, 30, 45, 60, 75];

// let doubledarray = array.map(num => num * 2);
// console.log(doubledarray);

// Task 8: Use the filter method to create a new array with only even numbers and
// log the new Array.

// let array = [1, ,2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenarray = array.filter(num => num % 2 === 0);
// console.log(evenarray);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array 
// and log the result.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9];

// let sumarray = array.reduce((accumulator, currentval) => accumulator + currentval, 0);
// console.log(sumarray);

// Activity 4: Array iteration.

// Task 10: Use a for loop to iterate over the array and log each element to the console.

// const array = [10, 20, 30, 40, 50];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// Task 11: Use the forEach method to iterate over the array and log each element to
// the console.

// const array = [10, 20, 30, 40, 50];

// array.forEach(element => {
//     console.log(element);
// });

// Activity 5: Multi dimensional arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array 
// to the console.

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(matrix);

// Task 13: Access and log a specific element from the two-dimensional array.

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// let rowindex = 2;
// let colindex = 0;

// let specificElement = matrix[rowindex][colindex];
// console.log(specificElement);