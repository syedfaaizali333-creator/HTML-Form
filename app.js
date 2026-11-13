"use strict";

// Q1: Create a function that takes an array of numbers and returns a new array where each number is squared. Use map method.
const squareAll = (numbers) => numbers.map((n) => n ** 2);

console.log("Q1:", squareAll([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]

// Q2: Write a function that takes an array of objects with name and age properties. Filter out only the users whose age is greater than 18.
const getAdults = (users) => users.filter(({ age }) => age > 18);

const users = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 17 },
  { name: "Ahmed", age: 18 },
  { name: "Hina", age: 30 },
];
console.log("Q2:", getAdults(users)); // Ali and Hina (18 is NOT greater than 18)

// Q3: Given an array of products with price, use reduce to calculate the total price of all products.
const products = [
  { title: "Laptop", price: 1200 },
  { title: "Mouse", price: 25 },
  { title: "Keyboard", price: 75 },
];
const totalPrice = products.reduce((total, { price }) => total + price, 0);
console.log("Q3: Total price =", totalPrice); // 1300

// Q4: Create an array of students with marks. Sort the array in descending order based on marks.
const students = [
  { name: "Ali", marks: 78 },
  { name: "Sara", marks: 92 },
  { name: "Ahmed", marks: 65 },
  { name: "Hina", marks: 88 },
];
// [...students] copies the array so the original order is not changed
const sortedStudents = [...students].sort((a, b) => b.marks - a.marks);
console.log("Q4:", sortedStudents);

// Q5: Write a function that takes an array of strings and finds the first string with length greater than 5 using find method.
const findLongString = (strings) => strings.find((str) => str.length > 5);

console.log("Q5:", findLongString(["cat", "apple", "banana", "watermelon"])); // "banana"
console.log("Q5 (no match):", findLongString(["a", "bb", "ccc"])); // undefined

// Q6: Create an object named person with properties firstName, lastName and a method fullName that returns the full name using this keyword. Explain how this works in this context.
const person = {
  firstName: "Muhammad",
  lastName: "Ali",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log("Q6:", person.fullName()); // "Muhammad Ali"

/*
  Explanation:
  `this` is decided by HOW a function is called, not where it is written.
  When we call person.fullName(), the object before the dot (person) becomes `this`.
  So this.firstName is person.firstName and this.lastName is person.lastName.
  If we pull the method out (const f = person.fullName; f();) there is no object
  before the dot anymore, so `this` is lost (undefined in strict mode) and it breaks.
*/

// Q7: What will be the output of this code and why? Create an example to show the difference between regular function and arrow function when using this inside an object.
const user = {
  userName: "Sara",
  regularFunction: function () {
    return this.userName;
  },
  arrowFunction: () => {
    return this.userName;
  },
  // arrow function inside a regular method: it borrows `this` from the method
  delayedGreeting() {
    const inner = () => this.userName;
    return inner();
  },
};

console.log("Q7 regular:", user.regularFunction()); // "Sara"
console.log("Q7 arrow:", user.arrowFunction()); // undefined
console.log("Q7 arrow inside method:", user.delayedGreeting()); // "Sara"

/*
  Explanation:
  - regularFunction gets its own `this` when called. user.regularFunction() sets
    `this` to user, so it returns "Sara".
  - An arrow function has NO `this` of its own. It uses the `this` of the place where
    it was written. An object literal {} does not create a `this`, so the arrow
    function uses the outer `this` (the module or window), which has no userName.
    So it returns undefined.
  - Inside delayedGreeting (a regular method) the arrow function `inner` uses the
    method's `this`, which is user. That is why this case works.
  Rule: use regular functions for object methods, arrow functions for callbacks.
*/

// Q8: Write a function that takes an array of numbers, filters even numbers, then doubles them using map, and finally returns the sum of those doubled numbers using reduce. Do it in a chain.
const sumOfDoubledEvens = (numbers) =>
  numbers
    .filter((n) => n % 2 === 0)
    .map((n) => n * 2)
    .reduce((sum, n) => sum + n, 0);

console.log("Q8:", sumOfDoubledEvens([1, 2, 3, 4, 5, 6])); // (2+4+6)*2 = 24

// Q9: Create an array of employees with name, department and salary. Write code to:
const employees = [
  { name: "Ali", department: "IT", salary: 70000 },
  { name: "Sara", department: "HR", salary: 55000 },
  { name: "Ahmed", department: "Finance", salary: 62000 },
  { name: "Hina", department: "HR", salary: 48000 },
  { name: "Usman", department: "IT", salary: 90000 },
];

//   a) Find an employee who works in HR department
const hrEmployee = employees.find(({ department }) => department === "HR");
console.log("Q9a:", hrEmployee); // first HR employee: Sara

//   b) Sort employees by salary in ascending order
const sortedBySalary = [...employees].sort((a, b) => a.salary - b.salary);
console.log("Q9b:", sortedBySalary);

// Q10: Create a function that takes an object and returns an array of its keys and values separately, then create a new object from an array of key-value pairs. Use Object.keys, Object.values, and Object.fromEntries.
const splitObject = (obj) => ({
  keys: Object.keys(obj),
  values: Object.values(obj),
});

const car = { brand: "Toyota", model: "Corolla", year: 2022 };
const { keys, values } = splitObject(car);
console.log("Q10 keys:", keys); // ["brand", "model", "year"]
console.log("Q10 values:", values); // ["Toyota", "Corolla", 2022]

const pairs = [
  ["name", "Ali"],
  ["age", 25],
  ["city", "Lahore"],
];
console.log("Q10 fromEntries:", Object.fromEntries(pairs)); // { name: "Ali", age: 25, city: "Lahore" }

// Bonus: rebuild the original object from its own keys and values
console.log("Q10 rebuilt:", Object.fromEntries(keys.map((key, i) => [key, values[i]])));
