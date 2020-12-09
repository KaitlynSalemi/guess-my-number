'use strict';

const message = document.querySelector('.message');
const score = document.querySelector('.score');
let currentScore = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);

  // When there is no input
  if (!guess) {
    message.textContent = 'Please enter a number!';

    // When the guess is correct
  } else if (guess === secretNumber) {
    message.textContent = 'Correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (currentScore > highscore) {
      highscore = currentScore;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When the guess is too high
  } else if (guess > secretNumber) {
    if (currentScore > 1) {
      message.textContent = 'Too high!';
      currentScore--;
      score.textContent = currentScore;
    } else {
      message.textContent = 'You loose the game!';
      score.textContent = 0;
    }

    // When the guess is too low
  } else if (guess < secretNumber) {
    if (currentScore > 1) {
      message.textContent = 'Too low!';
      currentScore--;
      score.textContent = currentScore;
    } else {
      message.textContent = 'You loose the game!';
      score.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  currentScore = 20;
  secretNumber = Math.trunc(Math.random() * 10 + 1);
  message.textContent = 'Start guessing...';
  score.textContent = currentScore;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
