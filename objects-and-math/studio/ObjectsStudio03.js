// Code your crewMass function here:
function crewMass(crew){
  let totalMass = crew.reduce((sum, member) => sum + member.mass, 0);
  return Math.round(totalMass * 10) / 10;
}

// Code your fuelRequired function here:
let rocketMass = 75000

const fuelRequired = function (rocketMass, crew) {
  let totalCrewMass = crewMass(crew);
  let totalMass = rocketMass + totalCrewMass;
  let baseFuel = totalMass * 9.5;

  // Calculate extra fuel based on species
  let extraFuel = crew.reduce((sum, member) => {
    if (member.species === 'dog' || member.species === 'cat') {
      return sum + 200;
    } else {
      return sum + 100;
    }
  }, 0);

  let totalFuel = baseFuel + extraFuel;
  return Math.ceil(totalFuel); // Round up to the nearest integer
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];
 
 // Calculate the total mass of the selected crew
let totalCrewMass = crewMass(crew);
console.log(`The total mass of the selected crew is ${totalCrewMass} kg`);

// Calculate the fuel required
let requiredFuel = fuelRequired(rocketMass, crew);
console.log(`Fuel Required is ${requiredFuel}`);
console.log(`The mission has a launch mass of ${rocketMass + crewMass(crew)} kg and requires ${requiredFuel} kg of fuel.`)