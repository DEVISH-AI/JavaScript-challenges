// Activity 1: class Definition
// Task 1: Define a class Person with properties name and age, and a method to 
// return a greeting message. Create an instance of the class and log the greeting message.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getGreeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }

// // Create an instance of the Person class
// let person1 = new Person('John', 25);

// // Log the greeting message to the console
// console.log(person1.getGreeting());

// Task 2: Add a method to the Person class that updates the age property and logs
// the updated age.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getGreeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }

//     updateAge(newAge) {
//         this.age = newAge;
//         console.log(`Updated age: ${this.age}`);
//     }
// }

// // Create an instance of the Person class
// let person1 = new Person('John', 25);

// // Log the greeting message to the console
// console.log(person1.getGreeting());

// // Update the age and log the updated age
// person1.updateAge(30);

// Activity 2: Class Inheritance
// Task 3: Define a class Student that extends the Person class. Add a property
// studentId and a method to return student ID. Create an instance of the Student class and
// log the student ID.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getGreeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }

//     updateAge(newAge) {
//         this.age = newAge;
//         console.log(`Updated age: ${this.age}`);
//     }
// }

// class Student extends Person {
//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//     }

//     getStudentId() {
//         return `Student ID: ${this.studentId}`;
//     }
// }

// // Create an instance of the Student class
// let student1 = new Student('Alice', 20, 'S12345');

// // Log the student ID to the console
// console.log(student1.getStudentId());

// Task 4: Override the greeting method in the Student class to include the student
// ID in the message. Log the overridden greeting message.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getGreeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }

//     updateAge(newAge) {
//         this.age = newAge;
//         console.log(`Updated age: ${this.age}`);
//     }
// }

// class Student extends Person {
//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//     }

//     getStudentId() {
//         return `Student ID: ${this.studentId}`;
//     }

//     getGreeting() {
//         return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }
// }

// // Create an instance of the Student class
// let student1 = new Student('Alice', 20, 'S12345');

// // Log the overridden greeting message to the console
// console.log(student1.getGreeting());

// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person class that returns a generic greetion message. 
// Call this static method without creation an instance of the class and log the message.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getGreeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }

//     updateAge(newAge) {
//         this.age = newAge;
//         console.log(`Updated age: ${this.age}`);
//     }

//     static getGenericGreeting() {
//         return "Hello! This is a generic greeting message.";
//     }
// }

// class Student extends Person {
//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//     }

//     getStudentId() {
//         return `Student ID: ${this.studentId}`;
//     }

//     getGreeting() {
//         return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }
// }

// // Call the static method without creating an instance of the class
// console.log(Person.getGenericGreeting());

// Task 6: Add a static property to the Student class to keep track of the number of 
// students created. Increment this property in the constructor and log  the total number of students.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getGreeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }

//     updateAge(newAge) {
//         this.age = newAge;
//         console.log(`Updated age: ${this.age}`);
//     }

//     static getGenericGreeting() {
//         return "Hello! This is a generic greeting message.";
//     }
// }

// class Student extends Person {
//     static studentCount = 0; // Static property to keep track of the number of students

//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//         Student.studentCount++; // Increment the static property
//     }

//     getStudentId() {
//         return `Student ID: ${this.studentId}`;
//     }

//     getGreeting() {
//         return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }

//     static getStudentCount() {
//         return `Total number of students: ${Student.studentCount}`;
//     }
// }

// // Creating instances of Student class
// let student1 = new Student("Alice", 20, "S001");
// console.log(student1.getGreeting());
// console.log(Student.getStudentCount());

// let student2 = new Student("Bob", 22, "S002");
// console.log(student2.getGreeting());
// console.log(Student.getStudentCount());

// Activity 4: Getters and Setters
// Task 7: Add a getter method to the Person class to return the full name (assume a 
// firstName and lastName property). Create an instance and log the full name using the getter.

// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     getGreeting() {
//         return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
//     }

//     updateAge(newAge) {
//         this.age = newAge;
//         console.log(`Updated age: ${this.age}`);
//     }

//     static getGenericGreeting() {
//         return "Hello! This is a generic greeting message.";
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// class Student extends Person {
//     static studentCount = 0;

//     constructor(firstName, lastName, age, studentId) {
//         super(firstName, lastName, age);
//         this.studentId = studentId;
//         Student.studentCount++;
//     }

//     getStudentId() {
//         return `Student ID: ${this.studentId}`;
//     }

//     getGreeting() {
//         return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }

//     static getStudentCount() {
//         return `Total number of students: ${Student.studentCount}`;
//     }
// }

// // Creating an instance of Person class and logging the full name using the getter
// let person1 = new Person("John", "Doe", 30);
// console.log(person1.fullName); // Logs "John Doe"
// console.log(person1.getGreeting());

// // Creating instances of Student class
// let student1 = new Student("Alice", "Smith", 20, "S001");
// console.log(student1.getGreeting());
// console.log(Student.getStudentCount());

// let student2 = new Student("Bob", "Johnson", 22, "S002");
// console.log(student2.getGreeting());
// console.log(Student.getStudentCount());

// Task 8: Add a setter method to the Person class to update the name properties (firstName
// and lastName). Update the name using the setter and log the updated full name.

// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     getGreeting() {
//         return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
//     }

//     updateAge(newAge) {
//         this.age = newAge;
//         console.log(`Updated age: ${this.age}`);
//     }

//     static getGenericGreeting() {
//         return "Hello! This is a generic greeting message.";
//     }

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     set updateName({ firstName, lastName }) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// class Student extends Person {
//     static studentCount = 0;

//     constructor(firstName, lastName, age, studentId) {
//         super(firstName, lastName, age);
//         this.studentId = studentId;
//         Student.studentCount++;
//     }

//     getGreeting() {
//         return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }

//     static getStudentCount() {
//         return `Total number of students: ${Student.studentCount}`;
//     }
// }

// // Creating an instance of Person class and updating the name using the setter
// let person1 = new Person("John", "Doe", 30);
// console.log(person1.fullName); // Logs "John Doe"
// person1.updateName = { firstName: "Jane", lastName: "Doe" }; // Using the setter
// console.log(person1.fullName); // Logs "Jane Doe"
// console.log(person1.getGreeting());

// // Creating instances of Student class
// let student1 = new Student("Alice", "Smith", 20, "S001");
// console.log(student1.getGreeting());
// console.log(Student.getStudentCount());

// let student2 = new Student("Bob", "Johnson", 22, "S002");
// console.log(student2.getGreeting());
// console.log(Student.getStudentCount());
