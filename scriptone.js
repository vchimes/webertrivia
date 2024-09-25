"use strict";

const answerKey = "josh allen iverson";
let score = 5;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const gameOver = function () {
  const userArea = document.querySelector(".user");
  userArea.style.display = "none";
};

const check = document
  .querySelector(".check")
  .addEventListener("click", function () {
    const guess = document.querySelector(".guess").value.toLowerCase();
    console.log(guess);

    if (!guess) {
      displayMessage("Please take a guess.");
    } else if (guess === answerKey) {
      displayMessage("That's correct!");
      gameOver();
    } else if (guess !== answerKey) {
      if (score > 1) {
        displayMessage("Incorrect.");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        gameOver();
        displayMessage("You lose!!!");
        document.querySelector(".score").textContent = 0;
      }
    }
  });
