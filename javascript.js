const possibleChoices = ['rock', 'paper', 'scissors'];

// random selection for computer 

function getComputerSelection() {
    const computerSelection = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    return computerSelection;
}

let playerSelection = document.querySelector('#options').addEventListener('click', function (e) {
    playerSelection = (e.target.name);
    showRoundWinner();
})

const roundWinnerContainer = document.querySelector('#round-winner');
const roundWinner = document.createElement('p');

function showRoundWinner() {
    const roundResult = getRoundWinner(playerSelection, getComputerSelection());
    roundWinner.textContent = roundResult;
    roundWinnerContainer.appendChild(roundWinner);
    countRounds();
}

//comparing selections, finding the winner per round
let winnerDetector = '';
function getRoundWinner(playerInput, computerInput) {
    let roundResult = '';
    if (playerInput === computerInput) {
        return roundResult = 'it\'s a tie';
    }
    if (playerInput === 'rock' && computerInput === 'scissors' ||
        playerInput === 'paper' && computerInput === 'rock' ||
        playerInput === 'scissors' && computerInput === 'paper') {
        winnerDetector = 'p';
        return roundResult = `player wins, ${playerInput} beats ${computerInput}`;
    }
    winnerDetector = 'c';
    return roundResult = `comp wins, ${computerInput} beats ${playerInput}`;
}

let roundCounter = document.querySelector('#round-counter');
let round = 1;
function countRounds() {
    round += 1;
    roundCounter.textContent = `Round: ${round}`;
    countRoundWinner();
}

//let currentScore = document.querySelector('#current-score');
let playerScoreCount = 0;
let computerScoreCount = 0;

function countRoundWinner() {
    if (winnerDetector === 'p') {
        playerScoreCount += 1;
    }
    else if (winnerDetector === 'c') {
        computerScoreCount += 1;
    }
    showCurrentScore();
    getGameWinner();
}

let playerScore = document.querySelector('#player-score');
let computerScore = document.querySelector('#computer-score');


function showCurrentScore() {
    playerScore.textContent = `${playerScoreCount}`;
    computerScore.textContent = `${computerScoreCount}`;
}

let gameWinner = document.querySelector('#winner');
const resetButton = document.createElement('BUTTON');
resetButton.textContent = 'Start new game!'
resetButton.classList.add('reset-button');
resetButton.addEventListener('click', () => location.reload(true))

function getGameWinner() {
    if (playerScoreCount === 5) {
        gameWinner.textContent = `Player Wins in ${round} rounds!`
        disableButtons();
        return gameWinner.appendChild(resetButton);
    }
    if (computerScoreCount === 5) {
        gameWinner.textContent = `Computer Wins in ${round} rounds!`
        disableButtons();
        return gameWinner.appendChild(resetButton);
    }
}

function disableButtons() {
    const disable = document.getElementById("options").getElementsByTagName('button');
    for (var i = 0; i < disable.length; i++) {
        disable[i].disabled = true;
    }
}

