
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(number) {
    outputText = ""
    if (number % 2 === 0) {
        outputText = outputText + "Launch"
    }
    if (number % 3 === 0) {
        outputText = outputText + "Code"
    }
    if (number % 5 === 0) {
        if (outputText === "") {
            outputText = outputText + "Rocks"
        } else {
        outputText = outputText + " Rocks"
        }
    }

    if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0) {
        return "Rutabagas! That doesn't work."
    }

    if (number % 2 === 0 && number % 5 === 0 && number % 3 !== 0 ) {
        return (outputText + "! (CRASH!!!!)")
    } else {return (outputText + "!")
    }

    }
}


module.exports = launchcode;

//   Here is what they need the launchcode object to contain:

// A key called organization with a value of "nonprofit".
// A key called executiveDirector with a value of "Jeff".
// A key called percentageCoolEmployees with a value of 100.
// A key called programsOffered with a value of ["Web Development", "Data Analysis", "Liftoff"].
// And a method called launchOutput(). This method will return a string.

// launchOutput() needs to meet the following conditions:

// When passed a number that is ONLY divisible by 2, return 'Launch!'
// When passed a number that is ONLY divisible by 3, return 'Code!'
// When passed a number that is ONLY divisible by 5, return 'Rocks!'
// When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'
// When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'
// When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'
// When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'
// When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'
// To make sure that you meet all of these conditions, you need to take it one test at a time.




