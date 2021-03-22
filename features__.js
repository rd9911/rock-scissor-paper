let playerScore = 0;
let computerScore = 0;
const playerScoreDOM = document.querySelector('.player');
const computerScoreDOM = document.querySelector('.computer');

// computer will choose one of ['Rock', 'Scissors', 'Paper']
function computerPlay() {
    let choices = ['Rock', 'Scissors', 'Paper'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index]
}

// function that compares computer and player's choice and determine the winner of the round.
function game(playerSelection, computerSelection = computerPlay()) {

    if (playerSelection === computerSelection) {
        console.log('Draw');

    } else if ((playerSelection === 'Rock') && (computerSelection === 'Paper')) {
        computerScore++;
        computerScoreDOM.textContent = computerScore;
        console.log('Computer wins! Paper beats Rock.');

    } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
        playerScore++;
        playerScoreDOM.textContent = playerScore;
        console.log('You win! Rock beats Scissors.');

    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
        playerScore++;
        playerScoreDOM.textContent = playerScore;
        console.log('You win! Scissors beat Paper.');

    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Rock')) {
        computerScore++;
        computerScoreDOM.textContent = computerScore;
        console.log('Computer wins! Rock beats Scissors.');

    } else if ((playerSelection === 'Paper') && (computerSelection === 'Scissors')) {
        computerScore++;
        computerScoreDOM.textContent = computerScore;
        console.log('Computer wins! Scissors beat Paper.');

    } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
        playerScore++;
        playerScoreDOM.textContent = playerScore;
        console.log('You win! Paper beats Rock.');
    }
}

// main function that will run the code for 5 times and determine the winner.
function main(input) {
    const body = document.querySelector('body');
    const divResult = document.createElement('div'); // result announcment
    const announcment = document.createElement('h3');
    
    game(input);

    if (playerScore === 5) {
        announcment.textContent = 'You are a winner! Congratulations!!!';
    } else if (computerScore === 5) {
        announcment.textContent = 'Computer is a winner! Computers are power!!!';
    }
    
    divResult.appendChild(announcment);
    body.appendChild(divResult);
}


const btns = document.querySelectorAll('button');
    btns.forEach((btn) => btn.addEventListener('click', () => {
        main(btn.textContent)

    }))







