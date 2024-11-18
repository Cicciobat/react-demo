// commonFunctions.js

// --- Array Methods ---

// 1. forEach - Execute a function for each element in an array
[1, 2, 3].forEach(num => console.log(num)); // Output: 1, 2, 3

// 2. map - Transform each element in an array
const squared = [1, 2, 3].map(num => num ** 2);
console.log(squared); // Output: [1, 4, 9]

// 3. filter - Create a new array with elements that match a condition
const evens = [1, 2, 3, 4].filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]

// 4. find - Find the first element that satisfies a condition
const found = [1, 2, 3, 4].find(num => num > 2);
console.log(found); // Output: 3

// 5. reduce - Reduce an array to a single value
const sum = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10

// --- String Methods ---

// 1. split - Split a string into an array
const words = "Hello world!".split(" ");
console.log(words); // Output: ['Hello', 'world!']

// 2. includes - Check if a string contains a substring
console.log("Hello world!".includes("world")); // Output: true

// 3. replace - Replace part of a string
const result = "Hello world!".replace("world", "there");
console.log(result); // Output: "Hello there!"

// 4. toUpperCase / toLowerCase - Convert case of a string
console.log("hello".toUpperCase()); // Output: "HELLO"
console.log("WORLD".toLowerCase()); // Output: "world"

// --- Object Methods ---

// 1. Object.keys - Get an array of object keys
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // Output: ['a', 'b']

// 2. Object.values - Get an array of object values
console.log(Object.values(obj)); // Output: [1, 2]

// 3. Object.entries - Get an array of [key, value] pairs
console.log(Object.entries(obj)); // Output: [['a', 1], ['b', 2]]

// --- Utility Functions ---

// 1. setTimeout - Execute a function after a delay
setTimeout(() => console.log("Hello after 2 seconds"), 2000);

// 2. setInterval - Execute a function repeatedly at intervals
const intervalId = setInterval(() => console.log("Repeating..."), 1000);
setTimeout(() => clearInterval(intervalId), 5000); // Stops after 5 seconds

// 3. Math.random - Generate a random number between 0 and 1
console.log(Math.random()); // Output: e.g., 0.472947

// 4. Math.floor - Round down to the nearest integer
console.log(Math.floor(4.7)); // Output: 4

// --- JSON Methods ---

// 1. JSON.stringify - Convert an object to JSON string
const jsonObject = { a: 1, b: 2 };
console.log(JSON.stringify(jsonObject)); // Output: '{"a":1,"b":2}'

// 2. JSON.parse - Convert JSON string back to an object
const jsonString = '{"a":1,"b":2}';
console.log(JSON.parse(jsonString)); // Output: { a: 1, b: 2 }
