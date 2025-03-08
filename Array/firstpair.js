// Problem
// Find the first pair that will add upp to given sum 

const arr = [2, 7, 11, 15]
let sum = 9;
function firstPair(arr, sum) {
    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] + arr[i + 1] == sum) {
                return [arr[i], arr[i + 1]]
            }

        }
        return -1
    }
    return -1
}
console.log(firstPair(arr, sum));
console.log(firstPair([3, 5, 8, 10], 13));
console.log(firstPair([1, 2, 3, 4, 10], 10));


// using hash map
function FirstPair(arr, sum) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        const complement = sum - arr[i]
        if (complement in map) {
            return [complement, arr[i]]
        }
        map[arr[i]] = true

    }
    return null
}

console.log(FirstPair(arr, sum));
console.log(FirstPair([3, 5, 8, 10], 13));
console.log(FirstPair([1, 2, 3, 4, 10], 10));


// using two pointers 
// this only for to find pair
function FirstPairsum(arr, sum) {
    const sortarr = arr.sort((a, b) => a - b)
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let currsum = sortarr[left] + sortarr[right];
        if (currsum > sum) right--;
        if (currsum < sum) left++;
        if (currsum == sum) return [sortarr[left], sortarr[right]]
    }
    return null
}


console.log(FirstPairsum(arr, sum));
console.log(FirstPairsum([3, 5, 8, 10], 13));
console.log(FirstPairsum([1, 2, 3, 4, 10], 10));

