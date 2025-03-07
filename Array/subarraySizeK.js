const array = [1, 2, 3, 4, 5, 6];
const array2 = [-1, -2, -3, -6, -9, -1, -1, -1, 1];
const k = 3;
function subarray(array) {
    if(k >array.length){return null}
    let res = []
    let max = -Infinity;
    for (let i = 0; i < array.length - k + 1; i++) {
        let cur = array.slice(i, k + i)
        let cr = cur.reduce((t, m) => t += m)
        if (cr > max) {
            max = cr
            res = cur
        }

    }
    return max
}
console.log(subarray(array));
console.log(subarray(array2));
console.log(subarray([]));
