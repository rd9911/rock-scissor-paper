function computerPlay() {
    let choices = ['rock', 'scissors', 'paper'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index]
}

function playerPlay() {
    let playerSelection = prompt('So what are you gonna choose: [Rock], [Scissors', 'Paper').toLowerCase()
    return playerSelection;
}


function game(playerSelection, computerSelection) {
    let computerSelection = computerPlay();
    let playerScore = 0;
    let computerScore = 0;

    if (playerSelection !== null) {
        if (playerSelection === computerSelection) {
            console.log('Draw');
        } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
            computerScore++;
            console.log('Computer wins! Paper beats rock.');
        } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
            playerScore++;
            console.log('You win! Rock beats scissors.');
        } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
            playerScore++;
            console.log('You win! Scissors beat paper.');
        } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
            computerScore++;
            console.log('Computer wins! Rock beats scissors.');
        } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
            computerScore++;
            console.log('Computer wins! Scissors beat paper.');
        } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
            playerScore++;
            console.log('You win! Paper beats rock.');
        }
    } else {
        console.log('Please refresh the site and enter your choice again!');
    }
}

function main() {
    for (let i=1; i<6; i++) {
        game(playerPlay, computerSelection);
    }
}