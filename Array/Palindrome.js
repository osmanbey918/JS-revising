// find if str is palindrome or not 
// two pointer approach
function palindrome(str) {
    const arr = str.split('');
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] == arr[right]) {
            left++;
            right--;
        } else return false
    }
    return true
}
console.log(palindrome('madam'));
console.log(palindrome('madamm'));
console.log(palindrome('civic'));
console.log(palindrome('aa'));
console.log(palindrome('a'));
console.log(palindrome('   '));
// time  complexity O(n/2) = O(n)

// one line solution
function palindromeoneline(s) {
    return s === s.split('').reverse().join('')
}