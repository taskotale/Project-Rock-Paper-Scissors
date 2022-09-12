let playerSelection = prompt('Type your choice', 'Rock, Paper or Scissors').toLowerCase();

// making a viable choice

function checkPlayerSelection (signChoice) {
    if (signChoice !== 'rock' && signChoice !== 'paper' && signChoice !== 'scissors') {
        signChoice = prompt('not supported, please choose:', 'Rock, Paper or Scissors').toLowerCase();
    checkPlayerSelection(signChoice); 
    }
    playerSelection=signChoice;
}

checkPlayerSelection(playerSelection);

// random selection for computer 

const possibleChoices = ['rock','paper','scissors'];
const computerSelection = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];

console.log(playerSelection, computerSelection);

//comparing selections, finding the winner


function getRoundWinner (playerInput,computerInput){
    if (playerInput===computerInput) {
        console.log('it\'s a tie')
    } else if (playerInput==='rock' && computerInput==='scissors'|| 
                playerInput==='paper' && computerInput==='rock'||
                playerInput==='scissors' && computerInput==='paper') {
        console.log('player wins')
    } else {
        console.log('comp wins');
    }
}    
getRoundWinner(playerSelection,computerSelection);
        






