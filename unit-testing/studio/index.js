
let launchcode = {
    organization: 'non-profit',
    executiveDirector: 'Jeff',
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "LiftOff"],
    launchOutput: function(num) {
        if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
            return 'LaunchCode Rocks!';
        } else if (num % 2 === 0 && num % 3 === 0) {
            return 'LaunchCode!';
        } else if (num % 3 === 0 && num % 5 === 0) {
            return 'Code Rocks!';
        } else if (num % 2 === 0 && num % 5 === 0) {
            return 'Launch Rocks! (CRASH!!!!)';
        } else if (num % 2 === 0) {
            return 'Launch';
        } else if (num % 3 === 0) {
            return 'Code!';
        } else if (num % 5 === 0) {
            return 'Rocks!';
        } else {
            return "Rutabagas! That doesn't work.";
        }
    }
};

module.exports = launchcode;