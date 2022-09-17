'use strict';
let randomNumber = Math.floor(Math.random() * 20 + 1);
// console.log(randomNumber);
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  if (!guessedNumber || guessedNumber <= 0 || guessedNumber > 20) {
    displayMessage('Please enter a number between 1 & 20');
  } else if (guessedNumber === randomNumber) {
    document.querySelector('.check').style.display = 'none';
    displayMessage('Right Answer! You Won!');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    displayMessage(guessedNumber > randomNumber ? 'Too High' : 'Too Low');
    score--;
    document.querySelector('.score').textContent = score;
    if (score === 1) {
      displayMessage('Game Finished! Restarting');
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
  }
});
document.querySelector('.again').addEventListener('click', gameRestart);

function gameRestart() {
  randomNumber = Math.floor(Math.random() * 20 + 1);
  // console.log(randomNumber);
  document.querySelector('.check').style.display = 'block';
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = highScore;
}
