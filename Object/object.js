var isLongPressedName = function (name, typed) {
    let ob = {}
    let n = name.length > typed.length ? name.length : typed.length
    for (let i = 0; i < name.length; i++) {
        let char = name[i];
        if (ob[char]) {
            ob[char] += 1;
        } else {
            ob[char] = 1;
        }
    }
    console.log(n)
    return false

};
console.log(isLongPressedName('aleeex', 'alex'))


// // let str = 'aaaayttuopouiyy'
// // var obj = new Object()
// // for (let i = 0; i < str.length; i++) {
// //     if (obj[str[i]]) {
// //         obj[str[i]] += 1
// //     } else {
// //         obj[str[i]] = 1
// //     }
// // }
// // // console.log(obj);

// // let st = 'aaaayttuopouiyy'
// // let mapobj = new Map()
// // for (let i = 0; i < str.length; i++) {
// //     if (mapobj[str[i]]) {
// //         mapobj[str[i]] += 1
// //     } else {
// //         mapobj[str[i]] = 1
// //     }
// // }
// // mapobj.set('uou',80)
// // console.log(mapobj);
// // mapobj.set('pop',80)
// // let res = ''


// // // console.log(new Array(mapobj.values()));



// // for (const [s,y] of mapobj) {
// //     res += ' ' + s  + ' '  + y
// // }
// // console.log(res);


// let map = new Map();
// map.set(1,90)
// map.set(7,'us')
// map.set(5,true)
// console.log(map);
// console.log(map.has(1));
// map.delete(7)
// console.log(map);
// // map.clear()

// console.log(map.get(7));
// console.log(map.values());



// var f = function (target, nums) {
//     nums.sort((a, b) => b - a)
//     let nn = 0
//     let c = 0
//     for (let i = 0; i < nums.length; i++) {
//         nn += nums[i]
//         c++
//         if(nn >= target){
//             return c
//         }
//     }
//     return 0
// }
// console.log(f(213, [12,28,83,4,25,26,25,2,25,25,25,12]));
