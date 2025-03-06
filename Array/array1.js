// JavaScript Array Methods
const str1 = 'abcdefgh'
const unsortArray = [55, 66, 9, 4, 245, 89, 85, 34, 0, 65, 2, 0]
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = ['a, b, c, d, e, f, g, h, i, j'];
const arr3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const arrLength = (arr) => {
    return arr.length
}
// console.log("array.length", arrLength(arr1));
// console.log('====================================');
const arrConcat = (arr1, arr2) => {
    const conCatArray = arr1.concat(arr2)
    return conCatArray
}
// console.log("Concated Array Method", arrConcat(arr1, arr2));
// console.log('====================================');

const arrJoin = (arr1, arr2) => {
    const res = arr1.join(' ') + arr2.join(' ')
    return res

}
// console.log("Array join Method", arrJoin(arr3, arr1));
// console.log('====================================');
// console.log("Sorted Array", unsortArray.sort());
// console.log("reverseSorted", unsortArray.sort((a, b) => b - a));
// console.log('reverse', arr1.reverse());
// console.log('====================================');
// console.log('array shift', arr1.shift());
// console.log('array shift', arr1.unshift('banana'));
// console.log('====================================',arr1);
const shiftArray =  arr3.shift()
// console.log('shifted array', shiftArray, arr3);


