// Code your selectRandomEntry function here:

function selectRandomEntry(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Code your buildCrewArray function here:

function buildCrewArray() {
  let idNumbers = [291, 414, 503, 599, 796, 890];
  let crewIDs = [];

  while (crewIDs.length < 3) {
    let selectedId = selectRandomEntry(idNumbers);
    if (!crewIDs.includes(selectedId)) {
      crewIDs.push(selectedId);
    }
  }

  return crewIDs;
}

let crewIDs = buildCrewArray();
console.log(crewIDs);

function getCrewMembers(selectedIDs, candidates){
  let crew = [];

  for(let i = 0; i < selectedIDs.length; i++){
    for(let j = 0;j < candidates.length;j++){
      if(candidates[j].astronautID === selectedIDs[i]){
        crew.push(candidates[j]);
        break;
      }
    }
  }
  return crew;
}

/* Alternate solution for the buildCrewArray function:
// Code your selectRandomEntry function here:

function selectRandomEntry(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

// Code your buildCrewArray function here:

function buildCrewArray() {
  let idNumbers = [291, 414, 503, 599, 796, 890];
  let crewIDs = new Set();

  while (crewIDs.size < 3) {
    let selectedId = selectRandomEntry(idNumbers);
    crewIDs.add(selectedId);
  }

  return Array.from(crewIDs);
}

let crewIDs = buildCrewArray();
console.log(crewIDs);
*/


// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:

let selectedIDs = buildCrewArray();
let crew = getCrewMembers(selectedIDs, animals);

console.log(crew);

console.log(`${crew[0].name}, ${crew[1].name}, and ${crew[2].name} is going to space.`)