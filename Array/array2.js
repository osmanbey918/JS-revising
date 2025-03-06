// JavaScript Array Methods
const str1 = 'abcdefgh'
const unsortArray = [55, 66, 9, 4, 245, 89, 85, 34, 0, 65, 2, 0]
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = ['a, b, c, d, e, f, g, h, i, j'];
const arr3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const Array2D = [1, 3, 5, [3, 5, 6, [6455, 3], 99], 9, 0]


const slicedArary = arr3.slice(2, 4)
console.log(slicedArary);


const spliceArray = arr3.splice(5, 0, 'banqnq')
console.log(spliceArray);
console.log(arr3);


const STrToArary = arr3.toString()
console.log(STrToArary);


console.log(arr3.at(1));
console.log(Array2D.flat()); // only work upto 2d array


const newArr = arr1.flatMap(x => [x * 10]);
// console.log(newArr);


const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
//  fruits.copyWithin(2, 0, 2);
// Array.copyWithin() 
// Array.indexOf()          array.indexOf(item, start)
// Array.lastIndexOf()      array.indexOf(item, start)
// Array.includes('value')     
// console.log( fruits.copyWithin(3,0,6));
console.log(fruits.indexOf('Apple'));
console.log(fruits.includes('Apple'));




// Array iteration
// Array.forEach()
let res = ''
let forEacharr = unsortArray.forEach((item) => { if (item > 18) res += item + "  " })
console.log(res);


let userTOFind = 'usman';
let users = ['ali', 'usman', 'ahmad']
let newUser = users.filter((user) => user !== userTOFind)
console.log(newUser);


// // Array.reduce()
let array100 = Array.from(Array(100).keys(), x => x + 1);
let reduce = array100.reduce((total, num) => total + num,0)
console.log(reduce);


// // Array.every()
let every = arr1.every(item => item > 18)
console.log(every);

let some = arr1.some(item => item > 9)
console.log(some);


const newnums = Array.from('1929884')
console.log(newnums);