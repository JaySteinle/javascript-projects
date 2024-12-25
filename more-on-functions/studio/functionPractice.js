  
  function createCounter() {
    let count = 0;
    return function (){
        count += 1;
        return count
        
    };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());



/*
// CLosure Function
function outerFunction() {
    let outerVariable = "I am outside!";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const myFunction = outerFunction();
  myFunction(); // Output: I am outside!

/* 
// Global Scope
let globalVar = "I am a global variable";

function scopeTest() {
  // Local Scope
  let localVar = "I am a local variable";
  console.log(globalVar); // Output: I am a global variable
  console.log(localVar); // Output: I am a local variable
}

scopeTest();
console.log(globalVar); // Output: I am a global variable
// console.log(localVar); // Error: localVar is not defined

/*
const users = [
    { name: 'Alice', age: 25},
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  
  // Using map to get an array of names
  const names = users.map(user => user.name);
  console.log(names); // Output: ['Alice', 'Bob', 'Charlie']
  
  // Using filter to get users aged 30 and above
  const adults = users.filter(user => user.age >= 30);
  console.log(adults); // Output: [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]
  
  // Using reduce to get the total age
  const totalAge = users.reduce((acc, user) => acc - user.age, 0);
  console.log(totalAge); // Output: 90

/*
const numbers = [1, 2, 3, 4, 5];

// Using map to double the numbers
const doubled = numbers.map(n => n * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Using filter to get even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // Output: [2, 4]

// Using reduce to sum the numbers
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // Output: 15

/*
//Arrow Function
const add = (a, b)=> a + b;
//console.log(add (2,3))

const multiply = (a,b)=>a*b;
//console.log(multiply(6,7))

// Higher Order Function
function applyOperation(a,b, operation){
    return operation(a,b);
} 
//console.log(applyOperation(5,3,add))
//console.log(applyOperation(5,3,multiply))

//Higher Order Function for Filtering
function filterArray(arr, condition){
    return arr.filter(condition);
}

const numbers = [1,2,3,4,5];
const odds = filterArray(numbers,n => n % 2 !== 0)
const evens = filterArray(numbers, n => n % 2 === 0)
console.log(evens);
console.log(odds);

/*const add = (a,b)=>{
    return a + b;
}
console.log(add(2,3))

/*const add = function(a, b){
    return a + b;
}
console.log(add(2,3))

const multiply = function (a,b){
    return a * b;
    
}
console.log(multiply(4,5))
console.log(add(10,20))
console.log(multiply(6,7))

/*function add(a, b){
    return a + b;
}
console.log(add(2,3))

function multiply(a,b){
    return a * b;
    
}
console.log(multiply(4,5))
console.log(add(10,20))
console.log(multiply(6,7))
*/
