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
}

let bear = new CrewCandidate('Bear', 135, [88, 85, 90]);
let maltese = new CrewCandidate('Maltese', 1.5, [93, 88, 97]);
let gator = new CrewCandidate('Gator', 225, [75, 78, 62]);

console.log(bear);
console.log(maltese);
console.log(gator);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
bear.addScore(83);
console.log(bear.scores);

bear.average();
console.log(bear.average());
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.