// to track scores after each round
    let playerScore = 0;
    let computerScore = 0;

// computer will choose one of ['rock', 'scissors', 'paper']
function computerPlay() {
    let choices = ['rock', 'scissors', 'paper'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index]
}

// player enters his choice.
function playerPlay() {
    let playerSelection = prompt('So what are you gonna choose: [Rock], [Scissors', 'Paper').toLowerCase()
    return playerSelection;
}

// function that compares computer and player's choice and determine the winner of the round.
function game(playerSelection, computerSelection) {

    if ((playerSelection !== null) && (['rock', 'scissors', 'paper'].includes(playerSelection))) {
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

// main function that will run the code for 5 times and determine the winner.
function main() {
    for (let i=1; i<6; i++) {
        game(playerPlay, computerSelection);
    }

    if (playerScore > computerScore) {
        console.log('You are a winner! Congratulations!!!');
      } else if (playerScore < computerScore) {
        console.log('Computer is a winner! Computers are power!!!');
      } else if (playerScore === computerScore) {
        console.log('Draw. Try again!');
      }
}

main()