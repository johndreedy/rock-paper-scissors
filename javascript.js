let playerSelection = "Rock";
let computerSelection = getComputerChoice();

function getPlayerChoice (playerInput) {
    let caseInsensitiveInput = playerInput.toLowerCase();
    return caseInsensitiveInput;
}

function getComputerChoice () {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    let randomSelectionIndex = Math.floor(Math.random() * computerOptions.length);
    let computerSelection = computerOptions[randomSelectionIndex];
    return computerSelection;
}

function playRound (playerSelection, computerSelection) {
    switch(playerSelection) {
        case "rock":
            break;
        case "paper":
            break;
        case "scissors":
            break;
        default:
            alert("Invalid value entered")
            break;
    }
}

console.log(getPlayerChoice(playerSelection));