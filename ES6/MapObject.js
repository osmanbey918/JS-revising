// Being able to use an Object as a key is an important Map feature.
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits);

// A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.

// You can create a JavaScript Map by:

// Passing an Array to new Map()
// Create a Map and use Map.set()

// we can create a map by assing map constructor

// we can set or input values to map using set method
fruits.set('kiwi', 1000)
console.log(fruits);
// map also used for set existing values
fruits.set('apples', 2000)

// now the get method is used for get the values of name
// fruits.get('apples')
console.log(fruits.get('apples'));

// Maps are also object 
console.log(typeof fruits);


// remaining map method 
console.log(fruits.size);
fruits.delete('apples')
console.log(fruits);

// Map also has a property of has
console.log(fruits.has('kiwi'));
// fruits.clear() is used for emptying map


let textloop = "";
fruits.forEach (function(value, key) {
  textloop += key + ' =  ' + value;
})
console.log(textloop);


let texte = "";
for (const x of fruits.entries()) {
  texte += x;
}
console.log(texte);


// List all keys
let text1 = "";
for (const x of fruits.keys()) {
  text1 += '   ' + x;
}
console.log(text1);


let text = "";
for (const x of fruits.values()) {
  text += '   ' + x;
}
console.log(text);