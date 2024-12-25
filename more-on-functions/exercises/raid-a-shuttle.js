function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 100000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

/* Steal some fuel from the shuttle: */

//a). Define an anonymous function and set it equal to a variable with a normal, non-suspicious name. The function takes one parameter. This will be the fuel level on the shuttle.

//b). You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.

let nonSuspiciousFunction = function(a) {
  if (checkFuel(a) === 'green') {
    return a - 100001;
  } else if (checkFuel(a) === 'yellow') {
    return a - 50001;
  } else {
    return a;
  }
};

// a). Define another anonymous function with an array as a parameter, and set it equal to another innocent variable.
let irs = function(levelOfFuel, itemsInCargo) {
  let stolenItems = [];
  if (checkFuel(levelOfFuel) === 'green') {
    levelOfFuel = nonSuspiciousFunction(levelOfFuel);
  } else if (checkFuel(levelOfFuel) === 'yellow') {
    levelOfFuel = nonSuspiciousFunction(levelOfFuel);
  }
  let item1 = itemsInCargo.pop();
  let item2 = itemsInCargo.pop();
  stolenItems.push(item1, item2);
  itemsInCargo.unshift('worthless item', 'worthless item');
  return stolenItems;
};

// c). Once you figure out how much fuel to pump out, return that value.
//let fuelLevel = 200000; // Example fuel level
//let cargoHold = ['gold', 'silver', 'diamonds', 'platinum']; // Example cargo hold

// d). Decide where to best place your function call to gather our new fuel.
let stolenItems = irs(fuelLevel, cargoHold);
console.log(`Raided ${nonSuspiciousFunction(fuelLevel)} kg of fuel from the tanks, and stole ${stolenItems[0]} and ${stolenItems[1]} from the cargo hold.`);
console.log(cargoHold)