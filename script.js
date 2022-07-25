

getComputerChoice();
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



function getComputerChoice(){
    let num = Math.floor(Math.random()*100)-1;
    let choice = "";
    if (num<=33){
        choice = "Rock";
    }
    else if (num <=66){
        choice = "Paper";
    }
    else{
        choice = "Scissors";
    }
    return choice;
}

function playRound (playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === "paper"){
        if (computerSelection === "Rock"){
            return "You Win! Paper beats Rock";
        }
        else if(computerSelection === "Scissors"){
            return "You Lose! Scissors beats Paper";
        }
        else{
            return "it's a tie!";
        }
    }
    if (playerSelection === "rock"){
        if (computerSelection === "Paper"){
            return "You Lose! Paper beats Rock";
        }
        else if(computerSelection === "Scissors"){
            return "You Win! Rock beats Scissors";
        }
        else{
            return "it's a tie!";
        }
    }
    if (playerSelection === "scissors"){
        if (computerSelection === "Rock"){
            return "You Lose! Rock beats Scissors";
        }
        else if(computerSelection === "paper"){
            return "You Win! Scissors beats Paper";
        }
        else{
            return "it's a tie!";
        }
    }
}