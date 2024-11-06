// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeed = 17500;
let kmToMars = 225000000;
let kmToMoon = 384400;
let milesTo_km = .624;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars_km);
console.log(typeof distanceToMoon_km);
console.log(typeof milesTo_km);
// Calculate a space mission below
let milesToMars = kmToMars * milesTo_km;
let timeToMars = milesToMars / shuttleSpeed;
let milesToMoon = kmToMoon * milesTo_km;
let timeToMoon = milesToMoon / shuttleSpeed;

// Print the results of the space mission calculations below
console.log(shuttleName = " will take " + timeToMars + " days to reach Mars.");
// Calculate a trip to the moon below
console.log(shuttleName = " will take " + timeToMoon + " hours to reach the moon.");
// Print the results of the trip to the moon below