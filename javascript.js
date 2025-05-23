console.log("Hello World!")

/*
Pseudocode
- one variable for player score
- one variable for computer score
- both variables initialised at 0
*/

let playerScore = 0;
let computerScore = 0;


/*
Pseudocode 
- variable to store computer choice
- function to randomly choose one of the 3 options
- update variable to contain the selected choice
*/

let computerChoice;

function getComputerChoice(){
    ranNumber = Math.floor(3 * Math.random()); 
    if (ranNumber == 0){
        computerChoice = "rock";
    } else if (ranNumber == 1){
        computerChoice = "paper";
    } else if (ranNumber == 2){
        computerChoice = "scissors";
    }
}

getComputerChoice();
console.log(computerChoice);


/*
Pseudocode
- variable to store player choice
- prompt to ask player for choice
- function to update variable to save player choice
*/

let playerChoice;

function getPlayerChoice(){
    playerChoice = prompt("Select rock, paper or scissors");
}

getPlayerChoice();
console.log(playerChoice);


/*
Pseudocode
- function to start game
- collects player and computer inputs
- compares the inputs
- announces a winner
- increase score for winner
*/

let result;

function playRound(playerChoice, computerChoice){
    if (playerChoice == "rock" && computerChoice == "rock"){
        result = "Draw";
    } else if (playerChoice == "rock" && computerChoice == "paper"){
        result = "Lose";
    } else if (playerChoice == "rock" && computerChoice == "scissors"){
        result = "Win";
    }
}

playRound(playerChoice, computerChoice)
console.log(result)

