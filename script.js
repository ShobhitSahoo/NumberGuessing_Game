'use strict';

const message = document.querySelector('.message');
const scoreDOM = document.querySelector('.score');
const numberDOM = document.querySelector('.number');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        message.textContent = '🚫 No Number Found!!!!';
    } else if (guess === secretNumber) {
        message.textContent = '🎉 Correct Number...';

        numberDOM.textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#31d101';
        numberDOM.style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            message.textContent = (guess > secretNumber) ? '📈 Too High!' : '📉 Too Low!';
            score--;
            scoreDOM.textContent = score;
        } else {
            message.textContent = '😭 You Lost The Round...';
            scoreDOM.textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    message.textContent = 'Start Guessing...';
    scoreDOM.textContent = score;
    numberDOM.textContent = '?';
    document.querySelector('.guess').textContent = '';
    document.querySelector('body').style.backgroundColor = '#222';
    numberDOM.style.width = '15rem';
})