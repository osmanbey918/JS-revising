// generate subarray with largestt sum
const array = [-1, 4, -2, 6, -7, -8, 5, 0, 4, -6];
let res = []
function subarray(array) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        let sum = array[i]
        for (let j = i + 1; j < array.length; j++) {
            sum += array[j]

            if (sum > max) {
                max = sum
                console.log(max);
                res=array.slice(i, j+1)
                console.log(res);
            }
        }
    }
    return max
}
console.log(subarray(array));
/// for effecient solution i nwwd to learn kadanes algorithm