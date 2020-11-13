'use strict';

const message = document.querySelector('.message');
const score = document.querySelector('.score');
let currentScore = 20;
const secretNumber = Math.trunc(Math.random() * 10 + 1);
// console.log(secretNumber);
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);
  if (!guess) {
    message.textContent = 'Please enter a number!';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = 'Too high!';
      currentScore--;
      score.textContent = currentScore;
    } else {
      message.textContent = 'You loose the game!';
      score.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = 'Too low!';
      currentScore--;
      score.textContent = currentScore;
    } else {
      message.textContent = 'You loose the game!';
      score.textContent = 0;
    }
  }
});
