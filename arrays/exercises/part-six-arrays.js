//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

const {transferableAbortSignal} = require("util");

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['Hydrogen', 'H', 1.008];
let element2 = ['Helium', 'He', 4.0026];
let element3 = ['Lithium', 'Li', 6.94];
//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table = [element1, element2, element3];
console.log(table);
//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[1]);
console.log(table[1][1]);
//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
