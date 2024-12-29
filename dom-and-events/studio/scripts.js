// Write your JavaScript code here.
function init () {
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");

    const rocket = document.getElementById("rocket");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    let height = Number(spaceShuttleHeight.innerHTML);

    const takeoff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");

    takeoff.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(response) {
            let height = Number(document.getElementById("spaceShuttleHeight").innerHTML);
        
            let currentTop = parseInt(window.getComputedStyle(rocket).top);
    
            rocket.style.top = (currentTop - 10) + "px";

            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = "10000";
        }
    });

    landing.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
        rocket.style.top = "250px";
        rocket.style.left = "0px";
    });

    missionAbort.addEventListener("click", function() {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if(response) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
            rocket.style.top = "250px";
            rocket.style.left = "0px";
        }
    });
    

    up.addEventListener("click", function() {
        let height = Number(document.getElementById("spaceShuttleHeight").innerHTML);
        
        let currentTop = parseInt(window.getComputedStyle(rocket).top);

        rocket.style.top = (currentTop - 10) + "px";
        
        height += 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = height;
    });

    down.addEventListener("click", function() {
        let height = Number(document.getElementById("spaceShuttleHeight").innerHTML);
        
        if (height <= 0) {
            return; // Do not move down if height is less than or equal to 0
        }
    
        let currentTop = parseInt(window.getComputedStyle(rocket).top);
        rocket.style.top = (currentTop + 10) + "px";
        
        height -= 10000;
        if (height < 0) {
            height = 0;
        }
        document.getElementById("spaceShuttleHeight").innerHTML = height;
    });

    right.addEventListener("click", function() {
        let currentLeft = parseInt(window.getComputedStyle(rocket).left);
        rocket.style.left = (currentLeft + 10) + "px";
    });

    left.addEventListener("click", function() {
        let currentLeft = parseInt(window.getComputedStyle(rocket).left);
        rocket.style.left = (currentLeft - 10) + "px";
    });
}

// Remember to pay attention to page loading!


window.addEventListener("load", init);