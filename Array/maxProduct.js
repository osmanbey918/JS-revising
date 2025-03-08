// Problem find the maximum product of two numbers in array

function maxProduct(arr) {
    let sortarr = arr.sort((a, b) => a - b);
    if (sortarr[0] < 0 && sortarr[0 + 1] < 0) {
        let nprod = sortarr[0 + 1] * sortarr[0]
        let pprod = sortarr[sortarr.length - 1] * sortarr[sortarr.length - 2]
        return nprod > pprod? nprod:pprod
    }
    return sortarr
}
console.log(maxProduct([1, 2, 3, 4, 5, 6, 7]));
console.log(maxProduct([0, 0, 0]));
console.log(maxProduct([-1, -2, -3, -4, -5]));
console.log(maxProduct([-1, -2, -3, -4, -5, 0, 1, 5, 7, 3, 4, 2,-9]));
//time complexity OnLogn