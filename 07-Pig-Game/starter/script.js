'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;
let randNumber = Math.trunc(Math.random() * 6) + 1;
let score = [0, 0];
let activePlayer = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function() {
    let dice = (randNumber = Math.trunc(Math.random() * 6) + 1);
    diceEl.classList.remove('hidden');
    // display the dice
    dice != 0 ? (diceEl.src = `dice-${dice}.png`) : '';
    // check if dice = 1 then switch to the next player
    if (dice != 1) {
        // add dice number to current score
        currentScore += dice;
        // dipslay dice number
        document.getElementById(`current--${activePlayer}`).textContent =
            currentScore;
    } else {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
});

btnHold.addEventListener('click', function() {
    score[activePlayer] += currentScore;
    if (score[activePlayer] >= 20) {
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.add('player--winner');
        document.getElementById(`score--${activePlayer}`).textContent =
            score[activePlayer];
        btnRoll.classList.add('hidden');
        btnHold.classList.add('hidden');
        diceEl.classList.add('hidden');
    } else {
        document.getElementById(`score--${activePlayer}`).textContent =
            score[activePlayer];
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
});

btnNew.addEventListener('click', function() {
    console.log(activePlayer);
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--winner');
    btnRoll.classList.remove('hidden');
    btnHold.classList.remove('hidden');
    diceEl.classList.remove('hidden');
    score = [0, 0];
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    activePlayer = 0;
    player0El.classList.remove('active--player');
    player1El.classList.add('active--player');
});