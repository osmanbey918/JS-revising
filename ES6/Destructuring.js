// // destructuring is a process of copying the specific elements of arrays or strings or object

// // destructuring array
// let friends = ['usman', 'ahmed', 'ali', 'khan', 'imran']
// let [bestfriend1, bestfriend2] = friends
// let [bestfriend, , , bestfriend3] = friends

// console.log(bestfriend1, bestfriend2);
// // for skiping elements in array we simply use ,
// console.log(bestfriend, bestfriend3);

// // Create an Array
// const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// // Destructuring
// let { [3]: fruit1, [1]: fruit2 } = fruits;
// console.log(fruit1, fruit2);

// // destructuring array and storing rest in rest
// let nums = [1, 2, 3, 6, 77, 88, 99, 77, 55]
// let [n1, , n3, ...restnum] = nums
// console.log(n1, n3, restnum);

// // destructuring is also used for swapping ELEMENETS 
// let firstName = "John";
// let lastName = "Doe";

// // Destructing
// [firstName, lastName] = [lastName, firstName];

// Destructuring objects
// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};

// Destructuring
let { firstName, lastName, country = 'Pakistan' } = person;
console.log(firstName, lastName, country);