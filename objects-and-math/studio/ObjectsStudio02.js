
// Code your orbitCircumference function here:
let r = 0
function getCircumference(r) {
  return Math.round(2 * Math.PI * r);
}
//console.log(getCircumference(2000));

//console.log(`Calculating circumference for radius: ${r}`);


// Code your missionDuration function here:
function missionDuration(orbitCompleted, orbitRadius = 2000, orbitSpeed = 28000){
  let circumference = 2 * Math.PI * orbitRadius;
  let distance = circumference * orbitCompleted;
  let time = (distance / orbitSpeed)*100 / 100;
  
  return Math.round(time*100) / 100;
  //OR
  //return time.toFixed(2);
}
//console.log(missionDuration(5));

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
//console.log(`The mission will travel ${getCircumference(2000)} km around the planet, and it will take ${missionDuration(5)} hours to complete.`)

// Code your oxygenExpended function here:
function oxygenExpended(candidate, orbits, orbitRadius = 2000, orbitSpeed = 28000){
  let duration = missionDuration(orbits, orbitRadius, orbitSpeed);
  let oxygenUsed = candidate.o2Used(duration);
  return oxygenUsed.toFixed(3);
}

// Candidate data & crew array.
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
 let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];


// Select a random crew member

let selectedCrewMember = selectRandomEntry(animals);

// Calculate the oxygen expended for a spacewalk lasting three orbits
let orbits = 3;
let orbitRadius = 2000;
let orbitSpeed =28000;
let oxygenConsumption = oxygenExpended(selectedCrewMember, orbits, orbitRadius, orbitSpeed);

/*
console.log(`The mission will travel ${getCircumference(orbitRadius)} km around the planet, and it will take ${missionDuration(orbits, orbitRadius, orbitSpeed)} hours to complete.`);
console.log(`The selected crew member is ${selectedCrewMember.name}.`);
console.log(`The spacewalk will last for ${missionDuration(orbits, orbitRadius, orbitSpeed)} hours.`);


console.log(`${selectedCrewMember.name} will consume ${oxygenConsumption} kg of O2 during the spacewalk.`);
*/

let findMinNumber = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Calculate the oxygen used for a specific duration (e.g., 10 hours) for each animal
let duration = 10; // hours
let o2UsedArray = animals.map(animal => animal.o2Used(duration));

// Find the minimum oxygen used
let minO2Used = findMinNumber(o2UsedArray);

// Find the animal that used the minimum oxygen
let minO2UsedAnimal = animals[o2UsedArray.indexOf(minO2Used)];

console.log(`The minimum O2 used for ${duration} hours is ${minO2Used} kg by ${minO2UsedAnimal.name} the ${minO2UsedAnimal.species}`);

// Sample array to find the minimum number
let sampleArray = [5, 3, 9, 1, 6];
console.log(`The minimum number in the array is ${findMinNumber(sampleArray)}`);

// Debugging statements
//console.log('Animals array:', animals);

/*
if (Array.isArray(animals) && animals.length > 0 && animals[0].hasOwnProperty('o2Used')) {
  console.log(animals[0].o2Used);
} else {
  console.error('Error: animals array is not defined, empty, or the first element does not have the property o2Used');
}
  */
