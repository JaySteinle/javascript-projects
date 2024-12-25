let num = Math.round(Math.random()*10);

console.log(num);


let giraffe = {
   species: "Reticulated Giraffe",
   name: "Cynthia",
   weight: 1500,
   age: 15,
   diet: "leaves"
 };

 function birthday(animal) {
     animal.age = animal.age + 1;
     return animal;
 }

 console.log(giraffe.age);

 birthday(giraffe);

 console.log(giraffe.age);

 let tortoiseOne = {
   age: 150,
   species: "Galapagos Tortoise",
   diet: ["pumpkins", "lettuce", "cabbage"]
};

let tortoiseTwo = {
   age: 150,
   species: "Galapagos Tortoise",
   diet: ["pumpkins", "lettuce", "cabbage"]
};

console.log(tortoiseOne == tortoiseTwo);

/*let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};

// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.

for(let item in tortoiseOne){
    console.log(item + ": " + tortoiseOne[item]);
}
*/
