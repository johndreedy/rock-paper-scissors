const COMPUTER_ICON = document.querySelector('.computer-icon');
const PLAYER_ICON = document.querySelector('.player-icon');

const COMPUTER_TEXT = document.querySelector('.computer-text');
const PLAYER_TEXT = document.querySelector('.player-text');

let roundPlayedText = document.querySelector('.rps-round-text');
let playerScoreText = document.querySelector('.player-score-text');
let computerScoreText = document.querySelector('.computer-score-text');

let playerPointScore = 0;
let computerPointScore = 0;

const ROCK_BUTTON = document.querySelector('.rock');
ROCK_BUTTON.addEventListener('click', () => {
    playRound("Rock", getComputerChoice());
  });

const PAPER_BUTTON = document.querySelector('.paper');
PAPER_BUTTON.addEventListener('click', () => {
    playRound("Paper", getComputerChoice());
  });

const SCISSORS_BUTTON = document.querySelector('.scissors');
SCISSORS_BUTTON.addEventListener('click', () => {
    playRound("Scissors", getComputerChoice());
  });

function getComputerIcon (computerSelection) {
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
    getComputerIcon(computerSelection);
    return computerSelection;
}

function playRound (playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            PLAYER_ICON.src = 'images/rock.png';
            PLAYER_TEXT.textContent = "Rock";
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
            PLAYER_ICON.src = 'images/paper.png';
            PLAYER_TEXT.textContent = "Paper";
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
            PLAYER_ICON.src = 'images/scissors.png';
            PLAYER_TEXT.textContent = "Scissors";
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
    }
}

function roundWin (playerSelection, computerSelection, itemVerb) {
    playerPointScore += 1;
    playerScoreText.textContent = `Player score: ${playerPointScore}`
    roundPlayedText.textContent = `You win! ${playerSelection} ${itemVerb} ${computerSelection}.`;
    decideGame();
    return;
}

function roundLose (playerSelection, computerSelection, itemVerb) {
    computerPointScore += 1;
    computerScoreText.textContent = `Computer score: ${computerPointScore}`
    roundPlayedText.textContent = `You lose! ${computerSelection} ${itemVerb} ${playerSelection}.`;
    decideGame();
    return;
}

function roundDraw (playerSelection, computerSelection) {
    roundPlayedText.textContent = `Draw! ${playerSelection} is equal to ${computerSelection}.`;
    decideGame();
    return;
}

function decideGame () {
    if (playerPointScore >= 5) {
        ROCK_BUTTON.setAttribute('disabled', 'disabled');
        PAPER_BUTTON.setAttribute('disabled', 'disabled');
        SCISSORS_BUTTON.setAttribute('disabled', 'disabled');

        roundPlayedText.textContent = `You win! Refresh page to play again.`;

    } else if (computerPointScore >= 5) {
        ROCK_BUTTON.setAttribute('disabled', 'disabled');
        PAPER_BUTTON.setAttribute('disabled', 'disabled');
        SCISSORS_BUTTON.setAttribute('disabled', 'disabled');

        roundPlayedText.textContent = `You lose! Refresh page to play again.`;

    } else {
        return;
    }
}