'use strict';

const message = document.querySelector('.message');
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
    message.textContent = 'Too high!';
  } else if (guess < secretNumber) {
    message.textContent = 'Too low!';
  }
});
