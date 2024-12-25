//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.
let findMinNumber = (arr) => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
        min = arr[i];
        }
    }
    return min;
    }

console.log(findMinNumber(nums1));
console.log(findMinNumber(nums2));
console.log(findMinNumber(nums3));

//It uses the sort method with a comparison function: function(a, b) { return a - b; } to sort the array in ascending order.
let sortedArray = (arr) => arr.sort((a, b) => a - b);

function createSortedArray(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}

console.log(sortedArray(nums1))
console.log(nums1)
//console.log(/* your code here */);

let asd = {
    abc:    123,
    defsdff: 456,
};
console.log(asd.abc)
