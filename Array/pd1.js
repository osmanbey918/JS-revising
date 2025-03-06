// Problem 
// You have an aarray of strings representing names of users
//  each name in the format of first name and last name
//  Task is: 
//  convert each name to uppercase 
//  split each name into array of sperate firstname and second name 
//  create new array of sperate objects for each user

//input
const users = ['John Doe', 'Jabe Smith', 'Bob Johnson']
let userInUpperCase = users.toString().toUpperCase()
console.log(userInUpperCase);

const splitSeparate = userInUpperCase.split(',').map(user => user.split(' '))
console.log(splitSeparate);

const resArray = []
for (let i = 0; i < splitSeparate.length; i++) {
    let obj = {firstname:splitSeparate[i][0],
        lastname:splitSeparate[i][1]
    }
    resArray.push(obj)
}
console.log(resArray);



// Remove duplicates
// const duplicateArray = [1,1,2,3,4,4,5,6,7,8,44,55,55];
const duplicateArray = [0,0,1];
const ry = []
for (let i = 0; i < duplicateArray.length; i++) {
    if(duplicateArray[i] != duplicateArray[i+1]){
        ry.push(duplicateArray[i])
    }
    
}
console.log(ry);
