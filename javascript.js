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

function showRoundWinner(){
    const roundResult = getRoundWinner(playerSelection, getComputerSelection());
    roundWinner.textContent = roundResult;
    roundWinnerContainer.appendChild(roundWinner);
}


//comparing selections, finding the winner per round

function getRoundWinner(playerInput, computerInput) {
    let roundResult = '';
    if (playerInput === computerInput) {
        return roundResult = 'it\'s a tie';
    }
    if (playerInput === 'rock' && computerInput === 'scissors' ||
        playerInput === 'paper' && computerInput === 'rock' ||
        playerInput === 'scissors' && computerInput === 'paper') {
        return roundResult = `player wins, ${playerInput} beats ${computerInput}`
    }
    return roundResult = `comp wins, ${computerInput} beats ${playerInput}`;
}
