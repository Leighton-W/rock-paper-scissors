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
    playerChoice = prompt("Select rock, paper or scissors").toLowerCase();
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
    } else if (playerChoice == "paper" && computerChoice == "paper"){
        result = "Draw";
    } else if (playerChoice == "paper" && computerChoice == "rock"){
        result = "Win";
    } else if (playerChoice == "paper" && computerChoice == "scissors"){
        result = "Lose";
    } else if (playerChoice == "scissors" && computerChoice == "scissors"){
        result = "Draw";
    } else if (playerChoice == "scissors" && computerChoice == "paper"){
        result = "Win";
    } else if (playerChoice == "scissors" && computerChoice == "rock"){
        result = "Lose";
    }

    if (result == "Win"){
        playerScore += 1;
    } else if (result == "Lose"){
        computerScore += 1;
    } else {
        return;
    }
}

console.log(playerScore)
console.log(computerScore)


/*
Pseudocode
- function to play 5 rounds
- results of each game a stored in this function
- compares the results to declare a winner
*/

function playGame(){
    for (let i = 0; i < 5; i ++){
        getPlayerChoice();
        getComputerChoice();
        playRound(playerChoice, computerChoice);
    } 
}

playGame();
