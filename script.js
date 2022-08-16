'use strict';

//------------- Triển khai logic trong Game

// Math.random(): Số ngẫu nhiên từ 0.x - 1.x
// Math.random() * 20: Số ngẫu nhiên từ 0.x - 19.x
// (Math.random() * 20) + 1: + 1 để đếm từ 1.x - 20.x
// Math.trunc(): Làm tròn
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // Nếu chưa nhập số nào mà click
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    // Nếu số nhập khi click giống số bí mật
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      // Nếu số nhập khi click lớn hơn số bí mật
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❌ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      // Nếu số nhập khi click nhỏ hơn số bí mật
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❌ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
