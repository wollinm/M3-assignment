/* Magdalena Wollin]
The “Grade Assigner” Application
Usage: Use else if or switch statements
Collect the a number between 1 and 100 from the user.
Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
If the score is between 60 and 69, write out “You received a D” into the console.
If the score is between 70 and 79, write out “You received a C” into the console.
If the score is between 80 and 89, write out “You received a B” into the console.
If the score is between 90 and 100, write out “You received an A” into the console.
If the score is less than 60, write out “You received an F” into the console. 
*/
//Get 2 numbers from user and display the larger one
number = prompt('Enter a number between 1 and 100?');
//Check if it's a valid number
invalidNumber = isNaN(number);
validNumber = !invalidNumber
//if it's a number then continue else display message and exit
if (validNumber) {
    // check if valid range number, if not display message and exit
    if (number < 0 || number > 100) { 
    document.write('Only numbers between 1 and 100 are accepted.')
    } else{
        //document.write(`Grading...`);
        //document.write(number);
        //grade score
        switch (true){
            case (number < 60):
                //document.write('You received an F')
                console.log('You received an F')
                break;
            case (number >= 60 && number <=69):
                //document.write('You received a D')
                console.log('You received an D')
                break;
            case (number >= 70 && number <=79):
                //document.write('You received an C')
                console.log('You received an C')
                break;
            case (number >= 80 && number <=89):
                //document.write('You received an B')
                console.log('You received an B')
                break;    
            case (number > 90):
                //document.write('You received an A')
                console.log('You received an A')
                break;
        }
    }
  } else {
    document.write('Value entered is not a number. Only numbers between 1 and 100 are accepted.');
} 