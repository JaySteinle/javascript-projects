function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener("click", function() {
        paragraph.innerHTML = "Houston, we have liftoff!";
    });

    missionAbort.addEventListener("mouseover", function() {
        missionAbort.style.backgroundColor = "red";
    });
    
    missionAbort.addEventListener("mouseout", function() {
        missionAbort.style.backgroundColor = "";
    });

    if(missionAbort.addEventListener("click", function() {
        let response = window.confirm("Are you sure you want to abort the mission?");
        if(response) {
            paragraph.innerHTML = "Mission aborted! Space Shuttle returning home.";
        }
    }));

    
    // OR
   /*
    document.getElementById("abortMission").onmouseover = function() {
        missionAbort.style.backgroundColor = "red";
    }

    document.getElementById("abortMission").onmouseout = function() {
        missionAbort.style.backgroundColor = "";
    }*/
}

window.addEventListener("load", init);
