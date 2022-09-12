let playerSelection = prompt('Type your choice', 'Rock, Paper or Scissors').toLowerCase();

// making a viable choice

function checkPlayerSelection () {
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
    } else {
    playerSelection = prompt('not supported, please choose:', 'Rock, Paper or Scissors').toLowerCase();
    checkPlayerSelection();
    }
}
checkPlayerSelection();

// random selection for computer 

const possibleChoices = ['rock','paper','scissors'];
const computerSelection = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];

console.log(playerSelection, computerSelection);

//comparing selections, finding the winner

function getRoundWinner() {
    switch (playerSelection, computerSelection){
        case 'rock','scissors': console.log ('player wins')
        break;
        case 'rock', 'paper': console.log('computer wins');
        break;
        case 'paper', 'scissors': console.log('computer wins');
        break;
        case 'paper', 'rock': console.log('player wins');
        break;
        case 'scissors', 'paper': console.log('player wins');
        break;
        case 'scissors', 'rock': console.log('computer wins');
        break;
        default: console.log('it is a tie');
    }
}
getRoundWinner();
        
        






