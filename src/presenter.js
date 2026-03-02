import Tennis from "./tennis";

const scoreDisplay = document.querySelector("#score-display");
const player1Button = document.querySelector("#player1-button");
const player2Button = document.querySelector("#player2-button");
const resetButton = document.querySelector("#reset-button");

let tennis = new Tennis();

function updateScore() {
  scoreDisplay.textContent = tennis.score();
}

player1Button.addEventListener("click", () => {
  tennis.player1Scores();
  updateScore();
});

player2Button.addEventListener("click", () => {
  tennis.player2Scores();
  updateScore();
});

resetButton.addEventListener("click", () => {
  tennis = new Tennis();
  updateScore();
});
