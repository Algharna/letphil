// Exercise 1: Generate a random number between 0 and 1
function randomZeroToOne() {
  // Your code here
  return Math.random();
}
console.log(randomZeroToOne());

// Exercise 2: Generate a random integer between two values, inclusive
function randomIntBetween(min, max) {
  // Your code here

  // 1. get random number between 0 and max - min
  const num = Math.floor(Math.random() * (max - min));
  // 2. add min to that total
  return num + min;
}

console.log(randomIntBetween(1, 30));

// Exercise 3: Calculate the square root of a number
function calculateSquareRoot(num) {
  // Your code here
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25));

// Exercise 4: Calculate the power of a number
function calculatePower(base, exponent) {
  // Your code here
  return Math.pow(base, exponent);
}

console.log(calculatePower(2, 2));

// Exercise 5: Round a number to the nearest integer
function roundNumber(num) {
  // Your code here
  return Math.round(num);
}

console.log(roundNumber(4.4));

// Exercise 6: Find the maximum number in an array
function findMax(arr) {
  // Your code here
  return Math.max(...arr);
}

console.log(findMax([1, 2, 3, 4, 5]));

// Exercise 7: Find the minimum number in an array
function findMin(arr) {
  // Your code here
  return Math.min(...arr);
}

console.log(findMin([1, 2, 3, 4, 5]));

// Exercise 8: Calculate the absolute value of a number
function calculateAbsoluteValue(num) {
  // Your code here
  return Math.abs(num);
}

console.log(calculateAbsoluteValue(-4));
