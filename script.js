'use strict';

console.log(document.querySelector('.number').textContent);

let num = Math.floor(Math.random() * 20);
console.log(num);
//score count section

let score = 20;
let totalScore = 0;
let gamecount = 0;
//Check button segment
document.querySelector('.score').textContent = score;
document.querySelector('.check').addEventListener('click', function () {
  const a = document.querySelector('.guess').value;

  console.log(a);

  switch (true) {
    case !a:
      document.querySelector('.message').textContent = 'No number 💀';
      break;
    case a == num:
      document.querySelector('.message').textContent = 'correct';
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'green';
      gamecount++;
      break;
    case a > num:
      document.querySelector('.message').textContent = 'too high';
      score--;
      document.querySelector('.score').textContent = score;

      break;
    case a < num:
      document.querySelector('.message').textContent = 'too low';
      score--;
      document.querySelector('.score').textContent = score;
      break;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  if (gamecount <= 0) {
    document.querySelector('.message').textContent =
      'You havent even started 🤔';
  } else {
    if (score > totalScore) {
      totalScore = score;
    }

    resetCurrentGame();
    score = 20;
    document.querySelector('.highscore').textContent = totalScore;
    document.querySelector('.score').textContent = score;
    num = Math.floor(Math.random() * 10);
    console.log(num);
  }
});

function resetCurrentGame() {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  num = Math.floor(Math.random() * 10);
  console.log(num);
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.guess').textContent = 0;
}
