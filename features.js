function computerPlay() {
    let choices = ['rock', 'scissors', 'paper'];
    let index = Math.floor(Math.random() * choices.length);
    return choices[index]
}
const result = computerPlay()
console.log(result)

function game(playerSelection, computerSelection) {
    let playerSelection = prompt('So what are you gonna choose: [Rock], [Scissors', 'Paper').toLowerCase()
    let computerSelection = computerPlay()
    if (playerSelection !== null) {
        if (playerSelection === computerSelection) {
            return 'Draw';
        } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
            return 'Computer wins! Paper beats rock.';
        } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
            return 'You win! Rock beats scissors.';
        } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
            return 'You win! Scissors beat paper.';
        } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
            return 'Computer wins! Rock beats scissors.'
        } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
            return 'Computer wins! Scissors beat paper.';
        } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
            return 'You win! Paper beats rock.';
        }
    } else {
        console.log('Please refresh the site and enter your choice again!');
    }
}