let playerSelection = prompt("Rock, paper or scissors?");
let computerSelection = getComputerChoice();

let playerPointScore = 0;
let computerPointScore = 0;

function getPlayerChoice (playerInput) {
    let caseInsensitiveInput = playerInput.toLowerCase();
    let capitalisedInput = caseInsensitiveInput.charAt(0).toUpperCase() + caseInsensitiveInput.slice(1);
    return capitalisedInput;
}

function getComputerChoice () {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    let randomSelectionIndex = Math.floor(Math.random() * computerOptions.length);
    let computerSelection = computerOptions[randomSelectionIndex];
    return computerSelection;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = getPlayerChoice(playerSelection);
    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Scissors") {
                alert(`You win! ${playerSelection} cuts ${computerSelection}.`)
                return playerPointScore += 1;
            } else if (computerSelection == "Paper") {
                alert(`You lose! ${computerSelection} wraps ${playerSelection}.`)
                return computerPointScore += 1;
            } else {
                 alert(`Draw! ${playerSelection} is equal to ${computerSelection}. Play again!`)
                break;
            }

        case "Paper":
            if (computerSelection == "Rock") {
                alert(`You win! ${playerSelection} wraps ${computerSelection}.`)
                return playerPointScore += 1;
            } else if (computerSelection == "Scissors") {
                alert(`You lose! ${computerSelection} blunts ${playerSelection}.`)
                return computerPointScore += 1;
            } else {
                alert(`Draw! ${playerSelection} is equal to ${computerSelection}. Play again!`)
                break;
            }
        
        case "Scissors":
            if (computerSelection == "Paper") {
                alert(`You win! ${playerSelection} cuts ${computerSelection}.`)
                return playerPointScore += 1;
            } else if (computerSelection == "Rock") {
                alert(`You lose! ${computerSelection} blunts ${playerSelection}.`)
                return computerPointScore += 1;
            } else {
                alert(`Draw! ${playerSelection} is equal to ${computerSelection}. Play again!`)
                break;
            }
        default:
            alert("Invalid value entered.")
            break;
    }
}

playRound(playerSelection, computerSelection);

