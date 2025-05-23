console.log("Hello World!")

/*
Pseudocode 
- variable to store computer choice
- function to randomly choose one of the 3 options
- update variable to contain the selected choice
*/


let computerChoice;

function getComputerChoice(){
    computerChoice = Math.floor(Math.random());
}

getComputerChoice();
console.log(computerChoice);

