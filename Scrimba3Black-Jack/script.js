// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
// 1. Declare a variable called message and assign its value to an empty string

// 2. Reassign the message variable to the string we're logging out

let firstCard = 12;
let secondCard = 10;

let sum = firstCard + secondCard;

let complete = false
let isAlive = true 


if (sum < 21) {
  console.log("draw a new card");
 
} else if (sum === 21) {
  console.log("you win");
  complete=true
}else {
    console.log("you loose");
     isAlive=false
    
}

if(complete){
    console.log("you win $300")
}

if(!isAlive){
    console.log("you are out of the game")
}

