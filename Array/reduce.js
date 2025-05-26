/*
Array.prototype.reduce - Deep Explanation

The `reduce` method executes a reducer function on each element of the array, resulting in a single output value.
It is often used to accumulate values, such as summing numbers, flattening arrays, or building objects.

Syntax:
array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

- callback: A function that is called for each element in the array.
    - accumulator: The accumulated value returned by the last invocation of the callback, or initialValue on the first call.
    - currentValue: The current element being processed.
    - currentIndex: The index of the current element.
    - array: The array reduce was called upon.
- initialValue (optional): Value to use as the first argument to the first call of the callback.

If initialValue is not provided, the first element in the array is used as the initial accumulator value, and iteration starts from the second element.

Common Use Cases:
- Summing all numbers in an array
- Multiplying all numbers in an array
- Flattening an array of arrays
- Counting instances of values in an object
- Grouping objects by a property

*/

// Example 1: Sum all numbers in an array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum:', sum); // Output: Sum: 15

// Example 2: Flatten an array of arrays
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log('Flattened:', flat); // Output: Flattened: [1, 2, 3, 4, 5]

// Example 3: Count occurrences of values in an array
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log('Fruit count:', count); // Output: Fruit count: { apple: 3, banana: 2, orange: 1 }

// Problem: Given an array of objects representing people with their ages, find the average age using reduce.

// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];

// const totalAge = people.reduce((acc, person) => acc + person.age, 0);
// const averageAge = totalAge / people.length;
// console.log('Average age:', averageAge); // Output: Average age: 30