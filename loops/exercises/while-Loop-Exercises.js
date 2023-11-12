//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let startingFuel = 0;
let numAstronautsAboard = 0;
let shuttleAltitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

const input = require('readline-sync');
let userFuelLevel = Number(input.question("Please enter the starting fuel level:\n"));
while (userFuelLevel <= 5000 || userFuelLevel >= 30000 || isNaN(userFuelLevel) === true) {
  userFuelLevel = input.question("Invalid entry. Please enter a valid fuel level:\n");
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
let userNumAstronauts = Number(input.question("Please enter the number of astronauts:\n"));
while (userNumAstronauts > 7 || userNumAstronauts < 0 || isNaN(userNumAstronauts) === true) {
  userNumAstronauts = input.question("Invalid entry. Please enter a valid number of astronauts:\n");
}
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

let altitude = 0;
while (userFuelLevel >= (userNumAstronauts * 100)) {
  userFuelLevel -= (userNumAstronauts * 100);
  // console.log(userFuelLevel);
  altitude += 50;
  // console.log(altitude);
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${altitude} km.`);
if (altitude >= 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}