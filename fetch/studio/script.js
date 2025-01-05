//TODO: Add Your Code Below
window.onload = function() {
    const astronauts = [
        {
            "id": 1,
            "active": false,
            "firstName": "Mae",
            "lastName": "Jemison",
            "skills": [
                "Physician", "Chemical Engineer"
            ],
            "hoursInSpace": 190,
            "picture": "mae-jemison.jpg"
        },
        {
            "id": 2,
            "active": false,
            "firstName": "Frederick",
            "lastName": "Gregory",
            "skills": [
                "Information Systems", "Shuttle Pilot", "Fighter Pilot", "Helicopter Pilot", "Colonel USAF"
            ],
            "hoursInSpace": 455,
            "picture": "frederick-gregory.jpg"
        },
        {
            "id": 3,
            "active": false,
            "firstName": "Ellen",
            "lastName": "Ochoa",
            "skills": [
                "Physics", "Electrical Engineer"
            ],
            "hoursInSpace": 979,
            "picture": "ellen-ochoa.jpg"
        },
        {
            "id": 4,
            "active": false,
            "firstName": "Guion",
            "lastName": "Bluford",
            "skills": [
                "Aerospace Engineer", "Philosophy", "Physics", "Colonel USAF",
                "Fighter Pilot"
            ],
            "hoursInSpace": 686,
            "picture": "guion-bluford.jpg"
        },
        {
            "id": 5,
            "active": false,
            "firstName": "Sally",
            "lastName": "Ride",
            "skills": [
                "Physicist", "Astrophysics"
            ],
            "hoursInSpace": 343,
            "picture": "sally-ride.jpg"
        },
        {
            "id": 6,
            "active": true,
            "firstName": "Kjell",
            "lastName": "Lindgren",
            "skills": [
                "Physician", "Surgeon", "Emergency Medicine"
            ],
            "hoursInSpace": 15,
            "picture": "kjell-lindgren.jpg"
        },
        {
            "id": 7,
            "active": true,
            "firstName": "Jeanette",
            "lastName": "Epps",
            "skills": [
                "Physicist", "Philosophy", "Aerospace Engineer"
            ],
            "hoursInSpace": 0,
            "picture": "jeanette-epps.jpg"
        }
    ];

    const container = document.getElementById("container");

    astronauts.forEach(astronaut => {
        const astronautDiv = document.createElement("div");
        astronautDiv.innerHTML = `
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <p>Skills: ${astronaut.skills.join(", ")}</p>
            <p>Hours in Space: ${astronaut.hoursInSpace}</p>
            <img src="${astronaut.picture}" alt="${astronaut.firstName} ${astronaut.lastName}" height="250" onerror="this.onerror=null;this.src='default.jpg';">
        `;
        container.appendChild(astronautDiv);
    });

    document.addEventListener("DOMContentLoaded", function() {
        fetch("<https://handlers.education.launchcode.org/static/astronauts.json>").then(function(response) {
            response.json().then(function(json){

            })
        });

    });
}