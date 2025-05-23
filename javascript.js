console.log("Hello World!")

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
        computerChoice = "scissor";
    }
}

getComputerChoice();
console.log(computerChoice);

