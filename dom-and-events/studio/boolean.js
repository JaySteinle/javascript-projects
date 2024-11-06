let engineIndicatorLight = "red blinking";
let SpaceSuitsOn = true;
let ShuttleCabinReady = true;
let CrewStatus = SpaceSuitsOn && ShuttleCabinReady;
let ComputerStatusCode = 200;
let ShuttleSpeed = 15000;

let fuelLevel=6000;
let engineTemperature = 1000;
engineIndicatorLight = !"Red Blinking";

if(fuelLevel > 20000){
    console.log("Full tank. Engines good.");
}
else if(fuelLevel > 10000){
    console.log("Fuel level above 50%.  Engines good.");
}
else if(fuelLevel > 5000){
    console.log("Fuel level above 25%. Engines good.");
}

else if(fuelLevel <= 5000 || engineTemperature > 2500){
    console.log("Check fuel level. Engines running hot.");
}

else{
    console.log("Fuel and engine status pending...");
}






/*
if (ShuttleSpeed > 17500) {
    console.log("ALERT: Escape velocity reached!");
 } else if (ShuttleSpeed < 8000) {
    console.log("ALERT: Cannot maintain orbit!");
 } else {
    console.log("Stable Speed");
 }

/*
if (ComputerStatusCode === 200) {
    console.log("Please stand by. Computer is rebooting.");
 } else if (ComputerStatusCode === 400) {
    console.log("Success! Computer online.");
 } else {
    console.log("ALERT: Computer offline!");
 }

    /*
if (CrewStatus) {
    console.log("Crew Ready");
 } else {
    console.log("Crew Not Ready");
 }

if (engineIndicatorLight === "green") {
    console.log("engines have started");
 } else if (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
 } else {
    console.log("engines are off");
 }
    */