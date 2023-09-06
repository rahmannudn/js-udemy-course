'use strict';
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess');

let score, randNumber;
let highScore = 0;

function reset() {
    // generate random number between 1 and 20
    score = 20;
    randNumber = Math.trunc(Math.random() * 20) + 1;
    guessEl.value = '';
    numberEl.textContent = '?';
    scoreEl.textContent = score;
    messageEl.textContent = 'Start guessing...';
    document.querySelector('body').style.background = '#222';
}

function displayMessage(message) {
    messageEl.textContent = message;
}

reset();

btnCheck.addEventListener('click', function() {
    const guessNumber = Number(guessEl.value);
    // checking if guessNumber == randNumber then win

    // if guess number is wrong then display wrong message and decrease the score
    if (!guessNumber) {
        messageEl.textContent = 'No Number!';
    } else if (guessNumber !== randNumber) {
        if (score != 0) {
            // if (guessNumber > randNumber) {
            //     messageEl.textContent = 'Too High';
            // } else if (guessNumber < randNumber) {
            //     messageEl.textContent = 'Too Low';
            // }
            displayMessage(guessNumber > randNumber ? 'Too High' : 'Too Low');
            score--;
            scoreEl.textContent = score;
        } else if (score == 0) {
            displayMessage(' GAME OVER! ');
            document.querySelector('body').style.background = 'rgb(240, 76, 64)';
        }
    } else if (guessNumber == randNumber) {
        messageEl.textContent = 'Correct Number';
        highScore = score > highScore ? score : highScore;
        highscoreEl.textContent = highScore;
        document.querySelector('body').style.background = 'rgb(47, 214, 69)';
        numberEl.textContent = randNumber;
    }
});

btnAgain.addEventListener('click', reset);