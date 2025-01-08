//TODO: Add Your Code Below
<<<<<<< HEAD
window.onload = function(){
    const astronaut = [
=======
window.onload = function() {
    const astronauts = [
>>>>>>> b87edeae1a5892640505b2d15848f74533cc753e
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
<<<<<<< HEAD
    ]

    // Sort astronauts by hours in space in descending order
<<<<<<<< HEAD:fetch - Copy/studio/script.js
    astronauts.sort((a, b) => b.hoursInSpace - a.hoursInSpace);


========
    astronaut.sort((a, b) => b.hoursInSpace - a.hoursInSpace);
    
    //Create container
>>>>>>>> b87edeae1a5892640505b2d15848f74533cc753e:fetch/studio/script.js
    const container = document.getElementById("container");
    
    //Add count of Astronauts
    const countDiv = document.createElement("div");
    countDiv.innerHTML = `<h2>Total Astronauts: ${astronaut.length}</h2>`;

<<<<<<<< HEAD:fetch - Copy/studio/script.js
=======
    ];

    // Sort astronauts by hours in space in descending order
    astronauts.sort((a, b) => b.hoursInSpace - a.hoursInSpace);

    const container = document.getElementById("container");

>>>>>>> b87edeae1a5892640505b2d15848f74533cc753e
    // Add a count of astronauts
    const countDiv = document.createElement("div");
    countDiv.innerHTML = `<h2>Total Astronauts: ${astronauts.length}</h2>`;
    
<<<<<<< HEAD
=======

>>>>>>> b87edeae1a5892640505b2d15848f74533cc753e
    astronauts.forEach(astronaut => {
        const astronautDiv = document.createElement("div");
        astronautDiv.className = "astronaut";
        astronautDiv.innerHTML = `
            <div class="bio">
                <h2>${astronaut.firstName} ${astronaut.lastName}</h2>
                <ul>
                    <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                    <li style="color: ${astronaut.active ? 'green' : 'black'}">Active: ${astronaut.active ? "Yes" : "No"}</li>
                    <li>Skills: ${astronaut.skills.join(", ")}</li>
                </ul>
            </div>
            <img src="${astronaut.picture}" alt="${astronaut.firstName} ${astronaut.lastName}" height="250" onerror="this.onerror=null;this.src='default.jpg';">
<<<<<<< HEAD
========
    astronaut.forEach(astronaut  => {
        const astronautDiv = document.createElement("div");
        astronautDiv.className = "astronaut"
        astronautDiv.innerHTML = `
        <div class="bio">
            <h2>${astronaut.firstName} ${astronaut.lastName}</h2>;
            <ul>
                <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                <li style = "color: ${astronaut.active ? 'green' : 'red'}">Active: ${astronaut.active ? 'Yes' : 'No'}</li>
                <li>Skills: ${astronaut.skills.join(", ")}</li>
            </ul>
        </div>
        <img src="${astronaut.picture}" height="250">
>>>>>>>> b87edeae1a5892640505b2d15848f74533cc753e:fetch/studio/script.js
        `;
        container.appendChild(astronautDiv);
    });
    
    container.appendChild(countDiv);

<<<<<<<< HEAD:fetch - Copy/studio/script.js
=======
        `;
        container.appendChild(astronautDiv);
    });

>>>>>>> b87edeae1a5892640505b2d15848f74533cc753e
    container.appendChild(countDiv);
    
    document.addEventListener("DOMContentLoaded", function() {
        fetch("<https://handlers.education.launchcode.org/static/astronauts.json>").then(function(response) {
<<<<<<< HEAD
========
    document.addEventListener("DOMContentLoaded", function(){
        fetch("<https://handlers.education.launchcode.org/static/astronauts.json>").then(function(response){
>>>>>>>> b87edeae1a5892640505b2d15848f74533cc753e:fetch/studio/script.js
            response.json().then(function(json){

            });
        });
    });
};
=======
            response.json().then(function(json){

            })
        });

    });
}
>>>>>>> b87edeae1a5892640505b2d15848f74533cc753e
