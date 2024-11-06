// Declare and initialize the variables for exercise 1 here:
// Shuttle Specifications 
const date = "Monday 2019-03-18";
const time = "10:05:34 AM"; 
const astronautCount = 7; 
const astronautStatus = "ready"; 
const averageAstronautMassKg = 80.7; 
const crewMassKg = astronautCount * averageAstronautMassKg; 
const fuelMassKg = 760000; 
const shuttleMassKg = 74842.31; 
const totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg; 
const maximumMassLimit = 850000; 
const fuelTempCelsius = -225; 
const minimumFuelTemp = -300; 
const maximumFuelTemp = -150; 
const fuelLevel = "100%"; 
const weatherStatus = "clear"; 
const preparedForLiftOff = true;

// BEFORE running the code, predict what will be printed to the console by the following statements:
/*
console.log("Shuttle Specifications:"); 
console.log(`Date: ${date}`); 
console.log(`Time: ${time}`); 
console.log(`Astronaut Count: ${astronautCount}`); 
console.log(`Astronaut Status: ${astronautStatus}`); 
console.log(`Average Astronaut Mass: ${averageAstronautMassKg} kg`); 
console.log(`Crew Mass: ${crewMassKg} kg`); 
console.log(`Fuel Mass: ${fuelMassKg} kg`); 
console.log(`Shuttle Mass: ${shuttleMassKg} kg`); 
console.log(`Total Mass: ${totalMassKg} kg`); 
console.log(`Maximum Mass Limit: ${maximumMassLimit} kg`); 
console.log(`Fuel Temperature: ${fuelTempCelsius} °C`); 
console.log(`Fuel Level: ${fuelLevel}`); 
console.log(`Weather Status: ${weatherStatus}`); 
console.log(`Prepared for LiftOff: ${preparedForLiftOff}`);
*/
console.log("All systems are a go! Initiating space shuttle launch sequence." + "\n------------------------------");
if(astronautCount <= 7){  
    if(astronautStatus === "ready"){
      if(totalMassKg <= maximumMassLimit){
        if(fuelTempCelsius >= -300 && fuelTempCelsius <= -150){
          if(fuelLevel === "100%"){
            if(weatherStatus === "clear"){
              console.log(`Date:  ${date}`);
              console.log(`Time:  ${time}`);

   
              console.log(`Astronaut Count: ${astronautCount}`);
              console.log(`Crew Mass: ${astronautCount * averageAstronautMassKg} kg`);
              console.log(`Fuel Mass: ${fuelMassKg} kg`);
              console.log(`Shuttle Mass: ${shuttleMassKg} kg`);
              console.log(`Total Mass: ${totalMassKg} kg`);
              console.log(`Fuel Temperature: ${fuelTempCelsius} °C`);
              console.log(`Weather Status: ${weatherStatus}` + "\n------------------------------");
              console.log("Have a safe trip astronauts!");
          }
        }
      }
    }
  }
}








//KEEP THIS CODE
/*
const date = new Date();
console.log(date.toLocaleString('en-US', { timeZone: 'America/Chicago' }));
console.log(date.toLocaleString('en-GB', { timeZone: 'Europe/London' }));
*/
/*
const timeZones = Intl.supportedValuesOf('timeZone');
timeZones.forEach(timeZone => {
  console.log(timeZone);
});
*/
