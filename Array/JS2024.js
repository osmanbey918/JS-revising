/*
New Features in ES2023 (ES14)

1. Array.prototype.findLast()
   - Returns the last element in the array that satisfies the provided testing function.
   - Example:
*/
const arr = [1, 2, 3, 4, 5, 6];
const lastEven = arr.findLast(x => x % 2 === 0);
console.log('findLast:', lastEven); // Output: 6

/*
2. Array.prototype.findLastIndex()
   - Returns the index of the last element in the array that satisfies the provided testing function.
   - Example:
*/
const lastEvenIndex = arr.findLastIndex(x => x % 2 === 0);
console.log('findLastIndex:', lastEvenIndex); // Output: 5

/*
3. Array.prototype.toReversed()
   - Returns a new array with the elements in reverse order (does not mutate the original array).
   - Example:
*/
const reversed = arr.toReversed();
console.log('toReversed:', reversed); // Output: [6, 5, 4, 3, 2, 1]
console.log('Original:', arr); // Output: [1, 2, 3, 4, 5, 6]

/*
4. Array.prototype.toSorted()
   - Returns a new array with the elements sorted (does not mutate the original array).
   - Example:
*/
const unsorted = [3, 1, 4, 2];
const sorted = unsorted.toSorted();
console.log('toSorted:', sorted); // Output: [1, 2, 3, 4]
console.log('Original:', unsorted); // Output: [3, 1, 4, 2]

/*
5. Array.prototype.toSpliced()
   - Returns a new array with some elements removed/replaced/added (does not mutate the original array).
   - Syntax: arr.toSpliced(start, deleteCount, ...items)
   - Example:
*/
const spliced = arr.toSpliced(2, 2, 99, 100);
console.log('toSpliced:', spliced); // Output: [1, 2, 99, 100, 5, 6]
console.log('Original:', arr); // Output: [1, 2, 3, 4, 5, 6]

/*
6. Array.prototype.with()
   - Returns a new array with the element at the given index replaced with a new value (does not mutate the original array).
   - Example:
*/
const withArr = arr.with(1, 42);
console.log('with:', withArr); // Output: [1, 42, 3, 4, 5, 6]
console.log('Original:', arr); // Output: [1, 2, 3, 4, 5, 6]

/*
7. Shebang (#!)
   - Used at the top of JavaScript files to indicate the script interpreter (mainly for Node.js scripts in Unix-like environments).
   - Example:
     #!/usr/bin/env node
   - Place this as the very first line in your .js file to allow direct execution in the terminal.
*/

// ...existing code...