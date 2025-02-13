// Exercise 1: Basic `push()`
let cars = [];
// Add three car brands to the `cars` array using `push()`
cars.push("Toyota", "Honda", "Ford");
console.log(cars); // Expected output: ["Toyota", "Honda", "Ford"]

// Exercise 2: Using `push()` to Add Multiple Elements
let cities = ["New York", "Los Angeles"];
// Add three more cities to the `cities` array using `push()`
cities.push("Chicago", "Houston", "Phoenix");
console.log(cities); // Expected output: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]

// Exercise 3: Pushing Elements in a Loop
let numbers = [];

// Use a loop to push numbers 1 to 5 into the `numbers` array
for (let i = 1; i < 5; i++) {
  numbers.push(i);
}
console.log(numbers); // Expected output: [1, 2, 3, 4, 5]

// Exercise 4: Using `push()` with Objects
let students = [];
const Alice = {
  name: "Alice",
  age: 22,
};
const Bob = {
  name: "Bob",
  age: 24,
};

// Add two student objects to the `students` array using `push()`
students.push(Alice, Bob);
console.log(students); // Expected output: [{ name: "Alice", age: 22 }, { name: "Bob", age: 24 }]

// Exercise 5: Using `push()` with Arrays
let nestedArray = [];
const arrNum = [1, 2, 3];
const arrAlphabet = ["a, b, c"];
const arrBoolean = [true, false, true];
// Add three arrays to the `nestedArray` using `push()`
nestedArray.push(arrNum, arrAlphabet, arrBoolean);
console.log(nestedArray); // Expected output: [[1, 2, 3], ["a", "b", "c"], [true, false, true]]

// Exercise 6: Using `push()` with Conditional Statements
let evenNumbers = [];

// Use a loop and conditional statement to push even numbers from 1 to 10 into the `evenNumbers` array
for (let i = 0; i < 11; i++) {
  evenNumbers.push(i++);
}

console.log(evenNumbers); // Expected output: [2, 4, 6, 8, 10]

// Exercise 7: Using `push()` to Merge Arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Use a loop to push elements from `array2` into `array1`
for (let i = 0; i < array2.length; i++) {
  array1.push(array2[i]);
}
console.log(array1); // Expected output: [1, 2, 3, 4, 5, 6]

// Exercise 8: Using `push()` with User Input (Prompt)
let userInputs = [];
const submit = document.createElement("button");
submit.id = "submit";
submit.innerText = "Submit";

// Use a loop to prompt the user for input three times and push the input into the `userInputs` array
const inputDiv = document.getElementById("input-div");
let promptInput = [];
for (i = 0; i < 3; i++) {
  promptInput[i] = document.createElement("input");
  promptInput[i].type = "text";
  promptInput[i].id = `promptInput${i}`;
  inputDiv.appendChild(promptInput[i]);
  inputDiv.appendChild(submit);
}

// console.log(userInputs); // Expected output: Array of user inputs
submit.addEventListener("click", function () {
  userInputs.push(promptInput0.value, promptInput1.value, promptInput2.value);
  console.log(userInputs);
});
