const possibleChoices = ['rock', 'paper', 'scissors'];

// random selection for computer 

function getComputerSelection() {
    const randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    return randomChoice;
}

// making a viable choice for user/player

function getPlayerSelection() {
    let playerChoice = prompt('Type your choice', 'Rock, Paper or Scissors').toLowerCase();
    return playerChoice
}

// checking if selection is valid

function checkPlayerSelection(validChoice) {
    if (validChoice !== 'rock' && validChoice !== 'paper' && validChoice !== 'scissors') {
        validChoice = prompt('not supported, please choose:', 'Rock, Paper or Scissors').toLowerCase();
        checkPlayerSelection(validChoice);
    };
    playerChoice = validChoice;
    return playerChoice
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

// a game made of 5 rounds

for (let i = 1; i <= 5; i++) {
    console.log(i);
    let computerSelection = getComputerSelection();
    let playerSelection = checkPlayerSelection(getPlayerSelection());
    console.log('player: ' + playerSelection + '; computer: ' + computerSelection);
    console.log(getRoundWinner(playerSelection, computerSelection));
}

