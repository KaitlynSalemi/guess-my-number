'use strict';

const message = document.querySelector('.message');
const score = document.querySelector('.score');
let currentScore = 20;
const secretNumber = Math.trunc(Math.random() * 10 + 1);
// console.log(secretNumber);
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    message.textContent = 'Please enter a number!';

    // When the guess is correct
  } else if (guess === secretNumber) {
    message.textContent = 'Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = 'Too high!';
      currentScore--;
      score.textContent = currentScore;
    } else {
      message.textContent = 'You loose the game!';
      score.textContent = 0;
    }

    // When the guess is too low
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
