// in ES6 new arrow function is introduced 
// which is good for single line or callback

let even = n => n % 2 === 0; // one line arrow function
console.log(even(20));


let odd = () => {
    for (let i = 0; i < 100; i++) {
        if (i % 2 !== 0) {
            //resOdd.push(i)
            console.log(i);
        }
    }
}
odd()