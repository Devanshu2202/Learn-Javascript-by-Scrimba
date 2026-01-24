let messageEl = document.getElementById("message-el");

let message = "";

let cards = [];

let sum = 0;

let hasBlackJack = false;
let isAlive = false;
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let player = {
  name: "Devanshu",
  chips: 33445,
};

function getRandomCard() {
  let randomCardNUmber = Math.floor(Math.random() * 13) + 1;

  if (randomCardNUmber === 1) {
    return 11;
  } else if (randomCardNUmber > 10) {
    return 10;
  } else {
    return randomCardNUmber;
  }
}

function startGame() {
  isAlive = true;

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  if (hasBlackJack) {
  }
  messageEl.textContent = message;
  playerEl.textContent = player.name + " $" + player.chips;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
  }

  renderGame();
}
