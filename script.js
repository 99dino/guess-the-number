"use strict";

let secret = Math.trunc(Math.random() * 50) + 1;
// document.querySelector(".number").textContent = secret;
let score = 50;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No number";
    return;
  }
  score--;
  if (guess === secret) {
    score++;
    highscore = score > highscore ? score : highscore;
    document.querySelector(".number").textContent = secret;
    document.querySelector(".message").textContent = "u guessed it correct";
    document.querySelector("body").style.backgroundColor = "#56a140";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".highscore").textContent = highscore;
  } else if (2 * guess < secret) {
    document.querySelector(".message").textContent = "too low";
  } else if (guess < secret) {
    document.querySelector(".message").textContent = "quite low";
  } else if (guess > 2 * secret) {
    document.querySelector(".message").textContent = "too high";
  } else if (guess > secret) {
    document.querySelector(".message").textContent = "quite high";
  }
  document.querySelector(".score").textContent = score;
  if (score <= 0) {
    document.querySelector(".message").textContent = "u lost the game";
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 50;
  secret = Math.trunc(Math.random() * 50) + 1;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
});

console.log(document.querySelector(".message").textContent);
