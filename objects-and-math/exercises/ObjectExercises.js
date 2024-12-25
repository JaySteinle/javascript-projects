let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {
      return Math.floor(Math.random() * 11);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {
      return Math.floor(Math.random() * 11);
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {
      return Math.floor(Math.random() * 11);
   }
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {
      return Math.floor(Math.random() * 11);
   }
};

let waterBear = {
   name: "Alistair",
   species: "Tartigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {
      return Math.floor(Math.random() * 11);
   }
};

// After you have created the other object literals, add the astronautID property to each one.
// Add a move method to each animal object
// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, dog, waterBear];

// Print out the relevant information about each animal.
console.log(crew);

// Start an animal race!
console.log(crew[0].move());
console.log(crew[1].move());
console.log(crew[2].move());  
console.log(crew[3].move());
console.log(crew[4].move());


/*
console.log(`${crew[0].name} is a ${crew[0].species}. They are ${crew[0].age} years old and ${crew[0].mass} kilograms. Their ID is ${crew[0].astronautID}.` );
console.log(`${crew[1].name} is a ${crew[1].species}. They are ${crew[1].age} years old and ${crew[1].mass} kilograms. Their ID is ${crew[1].astronautID}.` );
console.log(`${crew[2].name} is a ${crew[2].species}. They are ${crew[2].age} years old and ${crew[2].mass} kilograms. Their ID is ${crew[2].astronautID}.` );
console.log(`${crew[3].name} is a ${crew[3].species}. They are ${crew[3].age} years old and ${crew[3].mass} kilograms. Their ID is ${crew[3].astronautID}.` );
console.log(`${crew[4].name} is a ${crew[4].species}. They are ${crew[4].age} years old and ${crew[4].mass} kilograms. Their ID is ${crew[4].astronautID}.` );
*/

function fitnessTest(candidates){
   let results = [], numSteps, turns;

   for (let i = 0; i < candidates.length; i++){
      numSteps = 0;
      turns = 0;
      while (numSteps < 20){
         numSteps += candidates[i].move();
         turns++;
      }
      results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
}
console.log(fitnessTest(crew));