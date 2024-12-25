const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    // Prompt the user, using the prompt string that was passed
    let userInput = input.question(prompt);

    // Call the boolean function isValid to check the input
    while (!isValid(userInput)) {
    console.log("Invalid input. Try again.");
    userInput = input.question(prompt);
    }

    return userInput;
}

// A boolean function for validating input
let isEven = function(n) {
    return Number(n) % 2 === 0;
};

console.log(getValidInput('Enter an even number:', isEven));

function getValidInput(prompt, isValid) {

    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
    console.log("Invalid input. Try again.");
    userInput = input.question(prompt);
    }

    return userInput;
}

let isValidPassword = function(password) {
    // Check if the password is at least 8 characters long, starts with 'b', and contains at least one vowel
    const vowelRegex = /[aeiou]/i;
    if (password.length >= 8 && password.charAt(0) === 'b' && vowelRegex.test(password)) {
        return true;
    }

    return false;
};

console.log(getValidInput('Create a password:', isValidPassword));