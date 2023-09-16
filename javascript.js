function getComputerChoice () {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    let randomChoiceIndex = Math.floor(Math.random() * computerOptions.length);
    let computerChoice = computerOptions[randomChoiceIndex];
    return computerChoice;
}

console.log(getComputerChoice());