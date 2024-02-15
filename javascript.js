/*

// this is a message for github pages to indicate that I am using the rps-ui branch

function roundWin (playerSelection, computerSelection, itemVerb) {
    playerPointScore += 1;
    alert(`You win! ${playerSelection} ${itemVerb} ${computerSelection}.`)
    alert(`Player score ${playerPointScore}, computer score ${computerPointScore}.`)
    return;
}

function roundLose (playerSelection, computerSelection, itemVerb) {
    computerPointScore += 1;
    alert(`You lose! ${computerSelection} ${itemVerb} ${playerSelection}.`)
    alert(`Player score ${playerPointScore}, computer score ${computerPointScore}.`)
    return;
}

function roundDraw (playerSelection, computerSelection) {
    alert(`Draw! ${playerSelection} is equal to ${computerSelection}. Play again!`)
    alert(`Player score ${playerPointScore}, computer score ${computerPointScore}.`)
    return;
}

// swtich statement to compare player vs computer selection
// lots of repeated code, would like to refactor this if I have the time

function playRound (playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Scissors") {
                roundWin(playerSelection, computerSelection, "blunts");
                return;
            } else if (computerSelection == "Paper") {
                roundLose(playerSelection, computerSelection,"wraps");
                return;
            } else {
                roundDraw(playerSelection, computerSelection);
                return;
            }

        case "Paper":
            if (computerSelection == "Rock") {
                roundWin(playerSelection, computerSelection, "wraps");
                return;
            } else if (computerSelection == "Scissors") {
                roundLose(playerSelection, computerSelection,"cuts");
                return;
            } else {
                roundDraw(playerSelection, computerSelection);
                return;
            }
        
        case "Scissors":
            if (computerSelection == "Paper") {
                roundWin(playerSelection, computerSelection, "cuts");
                return;
            } else if (computerSelection == "Rock") {
                roundLose(playerSelection, computerSelection,"blunts");
                return;
            } else {
                roundDraw(playerSelection, computerSelection);
                return;
            }
        default:
            alert("Invalid value entered.")
            return;
    }
}

function game() {
    playerSelection = prompt("Rock, paper or scissors?");
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

*/

const COMPUTER_ICON = document.querySelector('.computer-icon');
const PLAYER_ICON = document.querySelector('.player-icon');

const COMPUTER_TEXT = document.querySelector('.computer-text');
const PLAYER_TEXT = document.querySelector('.player-text');

let playerPointScore = 0;
let computerPointScore = 0;

const ROCK_BUTTON = document.querySelector('.rock');
ROCK_BUTTON.addEventListener('click', () => {
    PLAYER_ICON.src = 'images/rock.png';
    PLAYER_TEXT.textContent = "Rock";
    playRound("Rock", getComputerChoice());
  });

const PAPER_BUTTON = document.querySelector('.paper');
PAPER_BUTTON.addEventListener('click', () => {
    PLAYER_ICON.src = 'images/paper.png';
    PLAYER_TEXT.textContent = "Paper";
    playRound("Paper", getComputerChoice());
  });

const SCISSORS_BUTTON = document.querySelector('.scissors');
SCISSORS_BUTTON.addEventListener('click', () => {
    PLAYER_ICON.src = 'images/scissors.png';
    PLAYER_TEXT.textContent = "Scissors";
    playRound("Scissors", getComputerChoice());
  });

function setComputerIcon (computerSelection) {
    switch (computerSelection) {
        case "Rock":
            COMPUTER_ICON.src = 'images/rock.png';
            COMPUTER_TEXT.textContent = "Rock";
            break;

        case "Paper":
            COMPUTER_ICON.src = 'images/paper.png';
            COMPUTER_TEXT.textContent = "Paper";
            break;

        case "Scissors":
            COMPUTER_ICON.src = 'images/scissors.png';
            COMPUTER_TEXT.textContent = "Scissors";
            break;

        default:
            COMPUTER_ICON.src = 'images/blank.png';
            break;
    }
}

function getComputerChoice () {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    let randomSelectionIndex = Math.floor(Math.random() * computerOptions.length);
    let computerSelection = computerOptions[randomSelectionIndex];
    return computerSelection;
}

function playRound (playerSelection, computerSelection) {
    
    setComputerIcon(computerSelection);

    switch (playerSelection) {
        case "Rock":
        break;

        case "Paper":
        break;

        case "Scissors":
        break;

        default:
        break;
    }
}