// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  // A key called organization with a value of "nonprofit".
  test("organization should have value of 'nonprofit'", () => {
    expect(launchcode.organization).toEqual("nonprofit");
  });

  // A key called executiveDirector with a value of "Jeff".
  test("executiveDirector should have value of 'Jeff'", () => {
    expect(launchcode.executiveDirector).toEqual("Jeff");
  });

// A key called percentageCoolEmployees with a value of 100.
test("percentageCoolEmployees should have value of 100", () => {
  expect(launchcode.percentageCoolEmployees).toEqual(100);
});

// A key called programsOffered with a value of ["Web Development", "Data Analysis", "Liftoff"].
test("programsOffered should have length of 3 and proper values", () => {
  expect(launchcode.programsOffered).toContain("Web Development");
  expect(launchcode.programsOffered).toContain("Data Analysis");
  expect(launchcode.programsOffered).toContain("Liftoff");
  expect(launchcode.programsOffered.length).toEqual(3);
});

// And a method called launchOutput(). This method will return a string.

// launchOutput() needs to meet the following conditions:

// When passed a number that is ONLY divisible by 2, return 'Launch!'

test("When passed a number that is ONLY divisible by 2, launchOutput() returns 'Launch!'", () => {
  expect(launchcode.launchOutput(2)).toEqual('Launch!');
});

// When passed a number that is ONLY divisible by 3, return 'Code!'

test("When passed a number that is ONLY divisible by 3, launchOutput() returns 'Code!'", () => {
  expect(launchcode.launchOutput(3)).toEqual('Code!');
});

// When passed a number that is ONLY divisible by 5, return 'Rocks!'

test("When passed a number that is ONLY divisible by 5, launchOutput() returns 'Rocks!'", () => {
  expect(launchcode.launchOutput(5)).toEqual('Rocks!');
});

// When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'

test("When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'", () => {
  expect(launchcode.launchOutput(6)).toEqual('LaunchCode!');
});

// When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'

test("When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'", () => {
  expect(launchcode.launchOutput(15)).toEqual('Code Rocks!');
});

// When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'

test("When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'", () => {
  expect(launchcode.launchOutput(10)).toEqual('Launch Rocks! (CRASH!!!!)');
});

// When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'

test("When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'", () => {
  expect(launchcode.launchOutput(30)).toEqual('LaunchCode Rocks!');
});

// When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'

test("When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'", () => {
  expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.");
});


// To make sure that you meet all of these conditions, you need to take it one test at a time.




  
});