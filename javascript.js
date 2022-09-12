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
const getComputerSelection = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];

console.log(playerSelection, getComputerSelection);

//comparing selections, finding the winner

function comparingSelection() {
    
}






