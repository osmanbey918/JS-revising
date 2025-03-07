//Find first duplicate in array 
const array = [1, 2, 4, 3, 5, 3, 6, 2] // expected output is 3
// const array = [1, 2, 3, 4, 5, 6, 7, 8] // expected output is -1
function firstDuplicate(array) {
    let obj = {}
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]] !== undefined) {
            return array[i]
        } else {
            obj[array[i]] = i
        }
    }
    return -1
}
console.log(firstDuplicate(array));


function firstDuplicate2(array) {
    let set = new Set()
    for (let i = 0; i < array.length; i++) {
        if (set.has(array[i])) {
            return array[i]
        } else set.add(array[i])
    }
    return -1
}
console.log(firstDuplicate2(array));


