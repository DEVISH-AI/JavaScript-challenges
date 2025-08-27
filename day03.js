// Day 03 : Control Structures

// Activity 1 : If Else Statements

// Task 1 : Write a program to check if a number is positive, negative or 
// zero and log the result to the console.

// let a = -1;

// if (a > 0) {
// console.log("Positive")
// } else if (a < 0) {
//     console.log("negative")
// } else {
//     console.log("Zero")
// }


// Task 2: Write a program to check if a person is eligible 
// to vote (age >= 18) and log the result to the console.

// let age = 2

// if ( age >= 18){
//     console.log("Eligible")
// } else {
//     console.log("Not Eligible")
// }

// Activity 2 : Nested If Else Statements
// Task 3 : write a program to find the largest of three numbers
// using nested if - else statements

// let n1 = 1;
// let n2 = 2;
// let n3 = 3;
// let largest;

// if (n1 >= n2) {
//     if (n1 >= n3){
//     largest = n1;
// } else {
//     largest = n3;
// }
// } else {
//     if (n2 >= n3){
//         largest = n2
// } else {
//     largest = n3;}
// }
// console.log(`largest number is: ${largest}`)

// Activity 3 : Switch Case
// Task 4 : Write a program that uses a switch case to determine the day
// of the week based on a number (1 - 7 ) and log the day name to the console


// let day =5;
// let dayName;

// switch (day) {
//     case 1:
//       dayName = "Monday";
//       break;
//     case 2:
//       dayName = "Tuesday";
//       break;
//     case 3:
//       dayName = "Wednesday";
//       break;
//     case 4:
//       dayName = "Thursday";
//       break;
//     case 5:
//       dayName = "Friday";
//       break;
//     case 6:
//       dayName = "Saturday";
//       break;
//     case 7:
//       dayName = "Sunday";
//       break;
//     default:
//         dayName = "day that we didn't want to come";
// }

// console.log(`Today is ${dayName}!`);

// Task 5 : Write a program that uses a switch case to assign a grade
//  (A, B, C, D, F,) based on a score and log the grade to the console.

// let Score = 75;
// let Grade;

// switch (true) {
//     case (Score >= 90) :
//     Grade = "A";
//     break;
//     case (Score >= 80) :
//     Grade = "B";
//     break;
//     case (Score >= 60) :
//     Grade = "C";
//     break;
//     case (Score >= 50) :
//     Grade = "D";
//     break;
//     case (Score >= 40) :
//     Grade = "E";
//     break;
//    default: Grade = "F";
// }
//     console.log(`Your Grade is ${Grade} for the Score ${Score}`)

    // Activity 4 : Conditional (Ternary) Operator

    // Task 6 : write a program that uses the ternary operator to check if a
    // number is even or odd and log the result to the console.

//     leta = 0;
    
//     let output = ((a % 2 == 0) ) ? "Even" : "Odd";

// console.log(output);


// Activity 5 : Combining Conditions

// Task 7 : Write a program to check if a year is a leap year using multiple
// conditions ( divisible by 4, but not 100 unless also divisible by 400)
// and log the result to console.

// let year = 2024;
// let leapYear;

// if (year % 4 === 0){
//     if(year % 100 !== 0){
//         leapYear = "Leap year"
//     }
// } else if (year % 400 === 0){
//     leapYear = "Leap year"
// } else if ( year % 100 === 0){
//      (year % 400 !== 0)
// } else {
//     leapYear = "Not a LeapYear"
//     }

// console.log( leapYear) 

// Alternative way

// let year = 2024; // Change this value to test different years

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(`${year} is a leap year.`);
// } else {
//     console.log(`${year} is not a leap year.`);
//}
