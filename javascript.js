/*

// this is a message for github pages to indicate that I am using the rps-ui branch

let playerPointScore = 0;
let computerPointScore = 0;

let playerSelection;
let computerSelection;

// makes sure that player input is case insensitive 
// converts all characters to lowercase and capitalises first letter

function getPlayerChoice (playerInput) {
    let caseInsensitiveInput = playerInput.toLowerCase();
    let capitalisedInput = caseInsensitiveInput.charAt(0).toUpperCase() + caseInsensitiveInput.slice(1);
    return capitalisedInput;
}

// random computer selection

function getComputerChoice () {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    let randomSelectionIndex = Math.floor(Math.random() * computerOptions.length);
    let computerSelection = computerOptions[randomSelectionIndex];
    return computerSelection;
}

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
    playerSelection = getPlayerChoice(playerSelection);
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

let displayText = document.querySelector('.display-text');

const ROCK_BUTTON = document.querySelector('.rock');
ROCK_BUTTON.addEventListener('click', () => {
    displayText.textContent = "You pressed rock!"
  });

const PAPER_BUTTON = document.querySelector('.paper');
PAPER_BUTTON.addEventListener('click', () => {
    displayText.textContent = "You pressed paper!"
  });

const SCISSORS_BUTTON = document.querySelector('.scissors');
SCISSORS_BUTTON.addEventListener('click', () => {
    displayText.textContent = "You pressed scissors!"
  });