const input = require('readline-sync');

let str = "LaunchCode";
let strNew;

// Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original string is ${str} and the modified string is ${strNew}.`);

// Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numInput = input.question('Enter the number of letters that will be relocated: ');

// Convert numInput to a number
numInput = parseInt(numInput, 10);

// Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (isNaN(numInput) || numInput > str.length) {
    numInput = 3;
    console.log(`Invalid input. Defaulting to moving 3 characters.`);
}

// Perform the string modification
strNew = str.slice(numInput) + str.slice(0, numInput);

// Print the original and modified string
console.log(`The original string is ${str} and the modified string is ${strNew}.`);