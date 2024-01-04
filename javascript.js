// this is a message for github pages to indicate that I am using the rps-ui branch

let playerPointScore = 0;
let computerPointScore = 0;

let playerSelection;
let computerSelection;

let gameOver = false;

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

function validatePointScore(playerPointScore, computerPointScore) {
    if (playerPointScore >= 5 || computerPointScore >= 5) {
        gameOver = true;
    }
}

// set gameOver to true if point score reached

function tryExitGame () {
    if (gameOver == true) {
        if (playerPointScore >= 5) {
            alert("You win! Refresh page to play again.")
        } else {
            alert("You lose! Refresh page to play again.")
        }
    }
}

function roundWin (playerSelection, computerSelection, itemVerb) {
    playerPointScore += 1;
    validatePointScore(playerPointScore, computerPointScore);
    alert(`You win! ${playerSelection} ${itemVerb} ${computerSelection}.`)
    alert(`Player score ${playerPointScore}, computer score ${computerPointScore}.`)
    tryExitGame();
    return;
}

function roundLose (playerSelection, computerSelection, itemVerb) {
    computerPointScore += 1;
    validatePointScore(playerPointScore, computerPointScore);
    alert(`You lose! ${computerSelection} ${itemVerb} ${playerSelection}.`)
    alert(`Player score ${playerPointScore}, computer score ${computerPointScore}.`)
    tryExitGame();
    return;
}

function roundDraw (playerSelection, computerSelection) {
    validatePointScore(playerPointScore, computerPointScore);
    alert(`Draw! ${playerSelection} is equal to ${computerSelection}. Play again!`)
    alert(`Player score ${playerPointScore}, computer score ${computerPointScore}.`)
    tryExitGame();
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

function game(playerPointScore, computerPointScore) {
    while (gameOver === false) {
        if (playerPointScore < 5 && computerPointScore < 5) {
            playerSelection = prompt("Rock, paper or scissors?");
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
        }
    }
}

game(playerPointScore, computerPointScore);