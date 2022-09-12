// random selection for computer 
function getComputerSelection(){
    const possibleChoices = ['rock','paper','scissors'];
    const randomChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
    return randomChoice;
}



// making a viable choice, checking if can be used

function getPlayerSelection () {
    let playerChoice = prompt('Type your choice', 'Rock, Paper or Scissors').toLowerCase();
    return playerChoice
}

function checkPlayerSelection (validChoice) {
    if (validChoice !== 'rock' && validChoice !== 'paper' && validChoice !== 'scissors') {
        validChoice = prompt('not supported, please choose:', 'Rock, Paper or Scissors').toLowerCase();
        checkPlayerSelection(validChoice); 
    };
    playerChoice=validChoice;
    return playerChoice
}



//comparing selections, finding the round winner


function getRoundWinner (playerInput,computerInput){
    if (playerInput===computerInput) {
        console.log('it\'s a tie');
    } else if (playerInput==='rock' && computerInput==='scissors'|| 
                playerInput==='paper' && computerInput==='rock'||
                playerInput==='scissors' && computerInput==='paper') {
        console.log(`player wins, ${playerInput} beats ${computerInput}`)
    } else {
        console.log(`comp wins, ${computerInput} beats ${playerInput}`);
    }
}    

    for (let i = 0; i<5; i++){
        let computerSelection = getComputerSelection();
        let playerSelection = checkPlayerSelection(getPlayerSelection());
        getRoundWinner(playerSelection,computerSelection);
    }

