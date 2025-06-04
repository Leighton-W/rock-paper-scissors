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
    let ranNumber = Math.floor(3 * Math.random()); 
    if (ranNumber == 0){
        computerChoice = "rock";
    } else if (ranNumber == 1){
        computerChoice = "paper";
    } else if (ranNumber == 2){
        computerChoice = "scissors";
    }
}


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


/*
Pseudocode
- function to play 5 rounds
- results of each game a stored in this function
- compares the results to declare a winner
*/

const score = document.createElement("div");
document.body.appendChild(score);

const pScore = document.createElement("p");
pScore.textContent = "Player Score is: " + playerScore;
score.appendChild(pScore);
const cScore = document.createElement("p");
cScore.textContent = "Computer Score is: " + computerScore;
score.appendChild(cScore);

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
document.body.appendChild(rockButton);

rockButton.addEventListener("click", () => {
    playerChoice = "rock";
    console.log(playerChoice);
    getComputerChoice();
    console.log(computerChoice);
    playRound(playerChoice, computerChoice);
    console.log(playerScore);
    console.log(computerScore);
    pScore.textContent = "Player Score is: " + playerScore;
    cScore.textContent = "Computer Score is: " + computerScore;
})

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
document.body.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
document.body.appendChild(scissorsButton);

