// Activity 1: Function Declaration
// Task 1:

// function evenodd (num){
//     if (num % 2 === 0){
//         console.log(`${num} is even`);
//     } else { 
//         console.log(`${num} is odd `);
//     }
// }

// evenodd(8);
// evenodd(9);

// Task 2:

// function squareofnum (num){
//         return num*num;
// }

// let result = squareofnum(9);
// console.log(`the square of 9 is ${result}`);

// Activity 2: Function Expression
// Task 3:

// const maxof2num = function(num1 , num2) {
//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// };

// let max = maxof2num(89 , 76);
// console.log(`the max of 89 and 76 is: ${max}`);

// Task 4:

// const concatestr = (str1 , str2)=> {
//     let  result = (str1 + " " + str2)
//     console.log(result)
// }

// concatestr("Hashmina" , "Farhan.");

// Activity 3: Arrow function
// Task 5:

// let sum = (num1 , num2) => { 
//  console.log (`sum is ${num1 + num2}`);
// }
// sum(54, 78);

// Task 6:

// const containcharac = (str , char) =>{
//     let result = str.includes(char);
//     console.log(result)
// }

// containcharac("Laptop" , "p");

// Activity 4: Function paremeters and default values
// Task 7:

// const multiply = (num1, num2 = 1) => num1 * num2;

// // Example usage:
// let product = multiply(5, 3);
// console.log(`The product of 5 and 3 is: ${product}`); // Output: The product of 5 and 3 is: 15

// product = multiply(7);
// console.log(`The product of 7 and the default value is: ${product}`); // Output: The product of 7 and the default value is: 7

// Task 8:

// const greet = (name, age = 18) => `Hello, ${name}! You are ${age} years old.`;

// // Example usage:
// let message = greet("Alice", 25);
// console.log(message); // Output: Hello, Alice! You are 25 years old.

// message = greet("Bob");
// console.log(message); // Output: Hello, Bob! You are 18 years old.

// Activity 5: Higher-Order Functions
// Task 9:

// const repeatfunNtimes = (func, n) => {
//     for (let i=0; i < n; i++){
//         func();
//     }
// }
// function sayhello (){
//     console.log("Hello G~")
// }

// repeatfunNtimes(sayhello, 10)

// Task 10:

// const applyFunctions = (func1, func2, value) => {
//     const result1 = func1(value);
//     const result2 = func2(result1);
//     return result2;
// };

// // Example usage:
// const addFive = (x) => x + 5;
// const multiplyByTwo = (x) => x * 2;

// const result = applyFunctions(addFive, multiplyByTwo, 3);
// console.log(result); // Output: (3 + 5) * 2 = 16


