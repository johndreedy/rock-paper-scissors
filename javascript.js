let playerPointScore = 0;
let computerPointScore = 0;

let playerSelection;
let computerSelection;

let gameOver = false;

// makes sure that player input is case insensitive 
// converts all to lowercase and capitalises first letter

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


function game(playerPointScore, computerPointScore) {
    while (gameOver === false) {
        if (playerPointScore < 5 && computerPointScore < 5) {
            playerSelection = prompt("Rock, paper or scissors?");
            computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
        }
    }
}

function validatePointScore(playerPointScore, computerPointScore) {
    if (playerPointScore >= 5 || computerPointScore >= 5) {
        gameOver = true;
    }
}

// swtich statement to compare player vs computer selection

function playRound (playerSelection, computerSelection) {
    playerSelection = getPlayerChoice(playerSelection);
    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Scissors") {
                playerPointScore += 1;
                validatePointScore(playerPointScore, computerPointScore);
                alert(`You win! ${playerSelection} blunts ${computerSelection}.`)
                alert(`Player score ${playerPointScore}, computer score ${computerPointScore}.`)
                return;
            } else if (computerSelection == "Paper") {
                computerPointScore += 1;
                validatePointScore(playerPointScore, computerPointScore);
                alert(`You lose! ${computerSelection} wraps ${playerSelection}.`)
                alert(`Player score ${playerPointScore}, computer score ${computerPointScore}.`)
                return;
            } else {
                validatePointScore(playerPointScore, computerPointScore);
                alert(`Draw! ${playerSelection} is equal to ${computerSelection}. Play again!`)
                alert(`Player score ${playerPointScore}, computer score ${computerPointScore}.`)
                return;
            }

        case "Paper":
            if (computerSelection == "Rock") {
                playerPointScore += 1;
                validatePointScore(playerPointScore, computerPointScore);
                alert(`You win! ${playerSelection} wraps ${computerSelection}.`)
                alert(`Player score ${playerPointScore}, computer score ${computerPointScore}.`)
                return;
            } else if (computerSelection == "Scissors") {
                computerPointScore += 1;
                validatePointScore(playerPointScore, computerPointScore);
                alert(`You lose! ${computerSelection} cuts ${playerSelection}.`)
                alert(`Player score ${playerPointScore}, computer score ${computerPointScore}.`)
                return;
            } else {
                validatePointScore(playerPointScore, computerPointScore);
                alert(`Draw! ${playerSelection} is equal to ${computerSelection}. Play again!`)
                alert(`Player score ${playerPointScore}, computer score ${computerPointScore}.`)
                return;
            }
        
        case "Scissors":
            if (computerSelection == "Paper") {
                playerPointScore += 1;
                validatePointScore(playerPointScore, computerPointScore);
                alert(`You win! ${playerSelection} cuts ${computerSelection}.`)
                alert(`Player score ${playerPointScore}, computer score ${computerPointScore}.`)
                return;
            } else if (computerSelection == "Rock") {
                computerPointScore += 1;
                validatePointScore(playerPointScore, computerPointScore);
                alert(`You lose! ${computerSelection} blunts ${playerSelection}.`)
                alert(`Player score ${playerPointScore}, computer score ${computerPointScore}.`)
                return;
            } else {
                validatePointScore(playerPointScore, computerPointScore);
                alert(`Draw! ${playerSelection} is equal to ${computerSelection}. Play again!`)
                alert(`Player score ${playerPointScore}, computer score ${computerPointScore}.`)
                return;
            }
        default:
            alert("Invalid value entered.")
            return;
    }
}

game(playerPointScore, computerPointScore);