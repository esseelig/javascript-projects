let num = 1001;

//Returns 'undefined'.
console.log(String(num).length);

//Use type conversion to print the length (number of digits) of an integer.

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

let numDecimal = 123.45;
console.log((String(numDecimal).length - 1));

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(num).includes(".")) {
    console.log((String(num).length - 1));
} else {
    console.log(String(num).length);
}