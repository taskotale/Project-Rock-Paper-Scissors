const startBtn = document.querySelector('#btn-start').addEventListener('click', getPlayerDetails);
let playerName = '';
const setName = document.querySelector('#set-name')
setName.textContent = playerName;
let playingUntil = '';


function getPlayerDetails() {
    const numberOfRounds = document.getElementById('number-of-rounds').value;
    const playerNameInput = document.getElementById('player-name').value;
    if ((numberOfRounds) === '') {
        return alert('Please insert until what score you want to play!')
    }
    if ((playerNameInput) === '') {
        return alert('Please enter your name!')
    }
    playerName = playerNameInput;
    playingUntil = parseInt(numberOfRounds);
    setName.textContent = playerName;
    showGame()
}

//make changes on screen show/hide

function showGame() {
    document.querySelector('#start-game').classList.add("hide-start-game");
    document.querySelector('#game-container').classList.remove('hide-game-container');
    document.querySelector('#options').classList.remove('options-hidden');
}

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
roundWinner.classList.add('round-score');

function showRoundWinner() {
    const roundResult = getRoundWinner(playerSelection, getComputerSelection());
    roundWinner.innerText = `Round Winner:\n ${roundResult}`;
    roundWinnerContainer.appendChild(roundWinner);
    countRounds();
}

//comparing selections, finding the winner per round
let winnerDetector = '';
function getRoundWinner(playerInput, computerInput) {
    let roundResult = '';
    if (playerInput === computerInput) {
        return roundResult = 'it\'s a tie!';
    }
    if (playerInput === 'rock' && computerInput === 'scissors' ||
        playerInput === 'paper' && computerInput === 'rock' ||
        playerInput === 'scissors' && computerInput === 'paper') {
        winnerDetector = 'p';
        return roundResult = `${playerName} wins, ${playerInput} beats ${computerInput}`;
    }
    winnerDetector = 'c';
    return roundResult = `Computer wins, ${computerInput} beats ${playerInput}`;
}

let roundCounter = document.querySelector('#round-counter');
let round = 1;
function countRounds() {
    round += 1;
    roundCounter.textContent = `Round: ${round}`;
    countRoundWinner();
}

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
    getGameWinner(playingUntil);
}

let playerScore = document.querySelector('#player-score');
let computerScore = document.querySelector('#computer-score');


function showCurrentScore() {
    playerScore.textContent = `${playerScoreCount}`;
    computerScore.textContent = `${computerScoreCount}`;
}

let gameWinner = document.querySelector('#winner');
const resetButton = document.createElement('BUTTON');
resetButton.textContent = 'START NEW GAME !'
resetButton.classList.add('reset-button');
resetButton.addEventListener('click', () => location.reload(true))

let endGame = document.querySelector('#current-score');
function getGameWinner(numberOfWins) {
    if (playerScoreCount === numberOfWins) {
        gameWinner.textContent = `${playerName} Wins in ${round} rounds!`
        disableButtons();
        endGame.classList.add('end-game')
        return gameWinner.appendChild(resetButton);
    }
    if (computerScoreCount === numberOfWins) {
        gameWinner.innerText = `Computer Wins in ${round} rounds!\r\n `
        disableButtons();
        endGame.classList.add('end-game')
        return gameWinner.appendChild(resetButton);
    }
}

function disableButtons() {
    const disable = document.getElementById("options").getElementsByTagName('button');
    for (var i = 0; i < disable.length; i++) {
        disable[i].disabled = true;
    }
}

