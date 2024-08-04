let fruits = ['mango', 'banana', 'kiwi', 'apple', 'grapes']
let nums = [12,5,8,2,19,22,34,43,45,54,33,13,22,33]

// Array.length
// Array.join('')
// Array.sort()
// Array.toSorted()
// Array.reverse()
// Array.toReversed()
// Array.push()
// Array.join()
// Array.shift()
// Array.unshift()
// Array.cocat(arr1,arr2,...so on)
// Array.slice(startingIndex, endingIndex)
// Array.splice(startingIndex, lengthOfIndex to delete, newElement,)
// Array.toSpliced(same as above)
// Array.toString()
// Array.isArray()
// Array.at(i) return value at index
// Array.flat() return 2D array in linear Array
// Array.flatMap() const myArr = [1, 2, 3, 4, 5, 6]; const newArr = myArr.flatMap(x => [x, x * 10]);
// Array.copyWithin() const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"]; fruits.copyWithin(2, 0, 2);
// Array.indexOf()          array.indexOf(item, start)
// Array.lastIndexOf()      array.indexOf(item, start)
// Array.includes('value')         

// Array.find
// it will return first element that statifies condition
// let newarr = nums.find((item) => item > 18)
// console.log(newarr);

// Array.findLast()
// it will return from last
// let newarrlast = nums.findLast((item) => item > 18)
// console.log(newarrlast);

// Array.findLastIndex()
// it will return index
// let pos = nums.findLastIndex(x => x > 40);
// console.log(pos);

// Array iteration
// Array.forEach()
// let res = ''
// let forEacharr = nums.forEach((item) => {if(item > 18) res += item + "  "})
// console.log(res);

// Array.map()
// let maparr = nums.map(value => value > 18)
// console.log(maparr);

// Array.filter()
// let filter = nums.filter(item => item > 18)
// console.log(filter);

// Array.reduce()
// let reduce = nums.reduce((total, num) => total + num)
// console.log(reduce);

// Array.reduceRight()
// it run R to L
// let reduceright = nums.reduceRight((total, num) => total + num)
// console.log(reduceright);

// Array.every()
// let every = nums.every(item => item > 18)
// console.log(every);

// Array.some()
// let some = nums.some(item => item > 18)
// console.log(some);

// Array.from('anmdn)
let newnums = Array.from('1929884')
console.log(newnums);

// Array.keys()
let keys = fruits.keys()
let res = ''
for (const x of keys) {
    res += x + " "
}
console.log(res);


// Array.keys()
let entries = fruits.entries()
for (const x of entries) {
    console.log(x);
}

//  Array with() method as a safe way to update elements in an array without altering the original array.
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths);

// Array spread(...arr1) operator
console.log([...nums,...fruits]);

(function () {
    let x = "Hello!!";  // I will invoke myself
    console.log(x);
  })();

  const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe":
  console.log(person.fullName.call(person1));
  console.log(person.fullName.bind(person1));

  const hasmap = new Map();
  for (let idx = 0; idx < nums.length; idx++) {
      // Check if the difference betweend duplicates is less than k
      if (idx - hasmap.get(nums[idx]) <= k) {
          return true;
      }
      hasmap.set(nums[idx], idx);
  }
  return false;
;
  
  let array = [1,2,5,55,44,33,55]
  let [firstnum,lastnum] = array
  console.log(firstnum,lastnum);
  