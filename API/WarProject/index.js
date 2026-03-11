let deckId;
const cardsContainer = document.getElementById("cards");
const newDeckBtn = document.getElementById("new-deck");
const drawCardBtn = document.getElementById("draw-cards");
const resultText = document.getElementById("result");
const remainingText = document.getElementById("remaining");
const computerScore = document.getElementById("computer-score");
const myScore = document.getElementById("my-score");
let computerScoree = 0;
let myScoree = 0;

function handleClick() {
  fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then((res) => res.json())
    .then((data) => {
      deckId = data.deck_id;
      drawCardBtn.disabled = false;
      computerScoree = 0;
      myScoree = 0;
      computerScore.textContent = `Computer score: ${0}`;
      myScore.textContent = `My Score: ${0}`;
      cardsContainer.children[0].innerHTML = `
                  <img src=${""} class="card" />
              `;
      cardsContainer.children[1].innerHTML = `
                  <img src=${""} class="card" />
              `;
    });
}

newDeckBtn.addEventListener("click", handleClick);

drawCardBtn.addEventListener("click", () => {
  fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        drawCardBtn.disabled = data.remaining < 1 ? true : false;
        cardsContainer.children[0].innerHTML = `
                  <img src=${data.cards[0]?.image} class="card" />
              `;
        cardsContainer.children[1].innerHTML = `
                  <img src=${data.cards[1]?.image} class="card" />
              `;
        if (data.cards.length > 0) {
          const winnerText = determineCardWinner(data.cards[0], data.cards[1]);
          resultText.textContent = winnerText;
        }
        remainingText.textContent = `Remaining cards: ${data.remaining}`;
        if (data.remaining < 1 && myScoree > computerScoree) {
          resultText.textContent = `Finally You won the game`;
        }
        if (data.remaining < 1 && myScoree < computerScoree) {
          resultText.textContent = `Finally computer won the game`;
        }
      }
    })
    .catch((err) => {
      console.log("error", err);
    });
});

function determineCardWinner(card1, card2) {
  const valueOptions = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE",
  ];
  const card1ValueIndex = valueOptions.indexOf(card1.value);
  const card2ValueIndex = valueOptions.indexOf(card2.value);
  console.log("card 1:", card1ValueIndex);
  console.log("card 2:", card2ValueIndex);

  if (card1ValueIndex > card2ValueIndex) {
    computerScoree++;
    computerScore.textContent = `Computer score: ${computerScoree}`;
    return `Computer wins!`;
  } else if (card1ValueIndex < card2ValueIndex) {
    myScoree++;
    myScore.textContent = `My Score: ${myScoree}`;
    return "You win!";
  } else {
    return "War!";
  }
}
