// Rock, paper, scissors app for The Odin Project

// Get computer choice "getComputerChoice" and return as "computerSelection"
// Get player choice "playerChoice", must be case insensitive, return "playerSelection"
// Compare the two to determine winner in "playRound"
// Repeat for 5 rounds with "game" calling "playRound"
// Declare overall winner

const choices = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    computerSelection = choices[Math.floor(Math.random() * 3)];
    return computerSelection;
}

function getPlayerChoice() {
    for (; choices.includes(playerSelection) != true ;) {
        player = prompt("Choose Rock, Paper or Scissors:");
        playerSelection = player.toLowerCase();
    }
    return playerSelection;
}

function playRound() {
    getComputerChoice();
    getPlayerChoice();

    if (computerSelection === "rock" && playerSelection === "scissors" ||
    computerSelection === "paper" && playerSelection === "rock" ||
    computerSelection === "scissors" && playerSelection === "paper") {
        console.log(`computer: ${computerSelection}, player: ${playerSelection}`);
        computerScore++;
        console.log(`Computer wins! ${computerSelection} beats ${playerSelection}`);

    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`computer: ${computerSelection}, player: ${playerSelection}`);
        playerScore++;
        console.log(`You Win, ${playerSelection} beats ${computerSelection}`);

    } else {
        console.log(`computer: ${computerSelection}, player: ${playerSelection}`);
        console.log(`It's a draw, you both chose ${playerSelection}`);
    }
}

playRound();

// console.log("computer: " + getComputerChoice() + "\n player: " + getPlayerChoice());
// console.log("you: " + playerScore + " computer: " + computerScore);