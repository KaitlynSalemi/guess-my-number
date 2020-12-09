'use strict';

// const message = document.querySelector('.message');
// const score = document.querySelector('.score');
let currentScore = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScoreTo = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);

  // When there is no input
  if (!guess) {
    displayMessage('Please enter a number!');

    // When the guess is correct
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (currentScore > highscore) {
      highscore = currentScore;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (currentScore > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      currentScore--;
      setScoreTo(currentScore);
    } else {
      message.textContent = 'You loose the game!';
      setScoreTo(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  currentScore = 20;
  secretNumber = Math.trunc(Math.random() * 10 + 1);
  displayMessage('Start guessing...');
  setScoreTo(currentScore);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
