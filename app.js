// Rock, paper, scissors app for The Odin Project

// Get computer choice "getComputerChoice" and return as "computerSelection"
// Get player choice "playerChoice", must be case insensitive, return "playerSelection"
// Compare the two to determine winner in "playRound"
// Repeat for 5 rounds with "game" calling "playRound"
// Declare overall winner

const choices = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection = null;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    computerSelection = choices[Math.floor(Math.random() * 3)];
    return computerSelection;
}

function getPlayerChoice() {
    for (; choices.includes(playerSelection) != true ;) {
        player = prompt("Choose Rock, Paper or Scissors:", "rock" );
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
        computerSelection = null;
        playerSelection = null;

    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`computer: ${computerSelection}, player: ${playerSelection}`);
        playerScore++;
        console.log(`You Win, ${playerSelection} beats ${computerSelection}`);
        computerSelection = null;
        playerSelection = null;

    } else {
        console.log(`computer: ${computerSelection}, player: ${playerSelection}`);
        console.log(`It's a draw, you both chose ${playerSelection}`);
        computerSelection = null;
        playerSelection = null;
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    for (rounds = 0; rounds <= 4; rounds++) {
        playRound()
        console.log(`Round: ${rounds + 1} of 5`)
    }
    if (playerScore > computerScore) {
        console.log(`You win!!\nYou: ${playerScore} - Compuer: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lose!!\nComputer: ${computerScore} - You: ${playerScore}`);
    } else {
        console.log(`It's a draw!!\nComputer: ${computerScore} - You: ${playerScore}`);
    }
}

game();

// console.log("computer: " + getComputerChoice() + "\n player: " + getPlayerChoice());
// console.log("you: " + playerScore + " computer: " + computerScore);