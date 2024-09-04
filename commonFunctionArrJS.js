// 1. Array Methods

let arr = [1,2,3,4];

// map(): Transforms each element in an array based on a callback function.
const doubled = arr.map(x => x * 2);
console.log(doubled);

// filter(): Filters elements in an array based on a condition.
const evens = arr.filter(x => x % 2 === 0);

// reduce(): Reduces an array to a single value based on a callback function.
const sum = arr.reduce((acc, x) => acc + x, 0);

//forEach(): Iterates over each element in an array.  
arr.forEach(x => console.log(x));

//some(): Checks if at least one element in the array satisfies a condition.
const hasNegative = arr.some(x => x < 0);

//every(): Checks if every element in the array satisfies a condition.
const allPositive = arr.every(x => x > 0);

//sort(): Sorts an array (with an optional comparator function).
arr.sort((a, b) => a - b); // Numerical sort

//find(): Finds the first element that satisfies a condition.
const firstEven = arr.find(x => x % 2 === 0);

//includes(): Checks if an array contains a specific element.
const containsValue = arr.includes(3);