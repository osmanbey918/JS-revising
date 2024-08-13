// function valid(para) {
//     let stack = [];
//     let map = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };

//     for (let i = 0; i < para.length; i++) {
//         let char = para[i];

//         if (map[char]) {
//             // If it is an opening bracket, push it onto the stack
//             stack.push(char);
//         } else {
//             // If it is a closing bracket
//             let topElement = stack.pop();
//             if (char !== map[topElement]) {
//                 // If the closing bracket does not match the top element of the stack
//                 return false;
//             }
//         }
//     }

//     // If the stack is empty, all brackets were properly matched
//     return stack.length === 0;
// }

// console.log(valid('()()(()))')); // false
// console.log(valid('()')); // true
// console.log(valid('{[()]}')); // true
// console.log(valid('{[(])}')); // false
// console.log(valid('((({[]})))')); // true


function valid(para) {
    let stack = [];
    
    for (let i = 0; i < para.length; i++) {
        if (para[i] === '(') {
            // Push opening parentheses onto the stack
            stack.push(para[i]);
        } else if (para[i] === ')') {
            // Check if stack is empty when encountering a closing parenthesis
            if (stack.length === 0) {
                return false;
            }
            // Pop the opening parenthesis from the stack
            stack.pop();
        }
    }

    // If the stack is empty, all parentheses are properly closed
    return stack.length === 0;
}

console.log(valid('()()(()))')); // false
console.log(valid('()')); // true
console.log(valid('(()(()))')); // true
console.log(valid('(()')); // false
console.log(valid(')(')); // false
