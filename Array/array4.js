// given an array og integers find the largesst contigous subarray that sums up to a given target sum

// input arr = [1,2,3,4,5]
// target sum =  9

function longestSubarray(arr, targetedSum) {
    let left = 0
    let currentSum = 0
    let maxLength = 0
    let maxSubarray = []
    for (let right = 0; right < arr.length; right++) {
        currentSum += arr[right]
        while (currentSum > targetedSum) {
            currentSum -= arr[left]
            left++
        }
        if (currentSum === targetedSum && right - left + 1 > maxLength) {
            maxLength = right - left + 1
            maxSubarray = arr.slice(left, right + 1)
        }
    }
    return maxSubarray

}
console.log(longestSubarray([1, 2, 3, 4, 5], 9));
