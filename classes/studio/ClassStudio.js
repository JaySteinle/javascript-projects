//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate{
  constructor(name, mass, scores){
    this.name = name;
    this.mass = mass;
    this.scores = Array.isArray(scores) ? scores: [];
    }
    addScore(score){
      this.scores.push(score);
    }

    average(){
      let total = 0;
      for(let i = 0; i < this.scores.length; i++){
        total = total + this.scores[i];
      //  console.log(this.scores[i]);      
      }
      return Math.round((total/this.scores.length) * 10) / 10;
      //return total/this.scores.length;
    }

    status(){
      const avg = this.average();
      if(avg >= 90){
        return 'Accepted';
      }else if(avg >= 80){
        return 'Reserve';
      }else if(avg >= 70){
        return 'Probationary';
      }else{
        return 'Rejected';
      }
    }
}

let bear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let maltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

// console.log(`${bear.name} has an average score of ${bear.average()}% and has a status of ${bear.status()}.`);
// console.log(`${maltese.name} has an average score of ${maltese.average()}% and has a status of ${maltese.status()}.`);
// console.log(`${gator.name} has an average score of ${gator.average()}% and has a status of ${gator.status()}.`);
// gator.addScore(100);
// gator.addScore(100);
// console.log(`${gator.name} has an average score of ${gator.average()}% and has a status of ${gator.status()}.`);

console.log('--------------------------------------------');

// gator.addScore(100);
// gator.addScore(100);
// gator.addScore(100);
// gator.addScore(100);

// while(gator.status() !== 'Accepted'){
//   gator.addScore(100);
//   console.log(`${gator.name} has an average score of ${gator.average()}% and has a status of ${gator.status()}.`);
// }
counter = 0;
while(gator.status() !== 'Reserve'){
  counter++
  gator.addScore(100);
}
console.log(`It took ${counter} times to reach Reserve status.`);
console.log(`${gator.name} has an average score of ${gator.average()}% and has a status of ${gator.status()}.`);
console.log('--------------------------------------------');

counter = 0;
while(gator.status() !== 'Accepted'){
  counter++
  gator.addScore(100);
}
console.log(`It took ${counter} times to reach Accepted status.`);
console.log(`${gator.name} has an average score of ${gator.average()}% and has a status of ${gator.status()}.`);


// console.log(bear.name);
// console.log(maltese.name);
// console.log(gator.name);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
//bear.addScore(83);
//console.log(bear.scores);

//console.log(bear.average());
//console.log(bear.status());

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.