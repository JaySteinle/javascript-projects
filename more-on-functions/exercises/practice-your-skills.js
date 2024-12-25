//Create an anonymous function and set it equal to a variable.

let myFunction = function(myVar) {
    if(typeof myVar === 'number') {
        return myVar * 3;
    } else if(typeof myVar === 'string') {   
        return 'ARRR!';
    } else {
        return myVar;
    }
}
    // Test the function
console.log(myFunction(1)); // Should print 3
console.log(myFunction('hello')); // Should print 'ARRR!'
console.log(myFunction(true)); // Should print true

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];
let newArr = arr.map(myFunction);
console.log(newArr);