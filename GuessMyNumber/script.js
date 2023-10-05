"use strict";
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "type a number";
  }
  if (guess === randomNumber) {
    displayMessage("You Won Nigger!");
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
      highScore = score;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? "Too High" : "Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost Nigger, Try Again!");
      document.querySelector(".number").textContent = randomNumber;
      document.querySelector("body").style.backgroundColor = "#e62a2a";
      document.querySelector(".number").style.width = "30rem";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = null;
  document.querySelector(".message").textContent = "Start Guessing Nigger...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
