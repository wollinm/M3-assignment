// Magdalena Wollin
//Larger or Smaller?
//Usage: Use simple conditional statements
//Create an application that accepts two integers within two separate prompts. Then, //display only the larger of the two within the browser window. Don’t forget to handle //the fact that the two could be equal.


//Global variables
let number1;
let number2;
let validNumber1;
let validNumber2;
let invalidNumber;
let validNumber;

//Get 2 numbers from user and display the larger one
number1 = prompt('What is the first number?');
number2 = prompt('What is the second number?');

invalidNumber1 = isNaN(number1);
invalidNumber2 = isNaN(number2);
invalidNumber = invalidNumber1 || invalidNumber2 ;
validNumber = !invalidNumber

//document.write(invalidNumber1);
//document.write(invalidNumber2);
//document.write(invalidNumber);
//document.write(validNumber);
//if number entered continue, else display message and exit
if (validNumber) {
  //assign largerNumber to first number entered
  largerNumber = number1;
  //if number 2 is greater than number 1 assign as larger number
  if (number2 > number1) { 
    largerNumber = number2;
  }
  //Display the result
  document.write(`Comparing numbers...`);
  //if the numbers are the same display message
  if (number1 == number2) {
    document.write(`the numbers are the same`);
  } else {
    document.write(`the larger number is ${largerNumber}`);
  }
} else {
    document.write('Both values must be numbers');
}