// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
// 1. Declare a variable called message and assign its value to an empty string

// 2. Reassign the message variable to the string we're logging out

// 1. Store the message-el paragraph in a variable called messageEl

let messageEl = document.getElementById("message-el")

let message = "";
let firstCard = 11;
let secondCard = 10;

let sum = firstCard + secondCard;

let complete = false;
let isAlive = true;
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {

  cardsEl.textContent +=  firstCard + " " + secondCard


  sumEl.textContent += sum
  
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    complete = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  if (complete) {
    console.log("you win $300");
  }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}
