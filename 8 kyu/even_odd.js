/*
»Odd or Even 
»Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */

//The following function checks whether the given integer input is evenly divisible by 2 or not.

function evenOrOdd (number) { 
    if (number % 2 == 0) {         //checks if a number is evenly divisible by 2
        return("Even")            //returns even, if divisible
    } else {
        return("Odd")            //else, it returns odd
    }
}

//e.g.
//console.log(evenOrOdd(38))
//returns Even

//console.log(evenOrOdd(13))
//returns Odd

