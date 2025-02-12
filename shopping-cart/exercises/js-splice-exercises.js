// JavaScript Exercises: `splice()` Method

// Exercise 1: Removing an Element with `splice()`
let fruits = ["Apple", "Banana", "Cherry", "Mango"];
// How would you remove "Cherry" from the array using `splice()`?
fruits.splice(2, 1);
console.log(fruits);
// Exercise 2: Removing Multiple Elements with `splice()`
let numbers = [10, 20, 30, 40, 50, 60];
// How would you remove 30 and 40 from the array using `splice()`?
numbers.splice(2, 2);
console.log(numbers);
// Exercise 3: Adding Elements with `splice()`
let colors = ["Red", "Green", "Blue"];
// How would you add "Yellow" between "Red" and "Green" using `splice()`?
colors.splice(1, 0, "Yellow");
console.log(colors);
// Exercise 4: Replacing Elements with `splice()`
let animals = ["Dog", "Cat", "Rabbit"];
// How would you replace "Cat" with "Elephant" using `splice()`?
animals.splice(1, 1, "Elephant");
console.log(animals);
// Exercise 5: Removing the First Element with `splice()`
let months = ["January", "February", "March", "April"];
// How would you remove the first element from the array using `splice()`?
months.splice(0, 1);
console.log(months);
// Exercise 6: Removing the Last Element with `splice()`
let scores = [90, 80, 70, 60];
// How would you remove the last element from the array using `splice()`?
scores.splice(3, 1);
console.log(scores);
// Exercise 7: Inserting Multiple Elements with `splice()`
let items = ["Pen", "Pencil", "Eraser"];
// How would you insert "Notebook" and "Marker" between "Pen" and "Pencil" using `splice()`?
items.splice(0, 0, "Notebook", "Marker");
console.log(items);
// Exercise 8: Clearing an Array with `splice()`
let letters = ["A", "B", "C", "D"];
// How would you clear all elements from the array using `splice()`?
letters.splice(0, 4);
console.log(letters);
