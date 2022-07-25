





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
        else if(computerSelection === "Paper"){
            return "You Win! Scissors beats Paper";
        }
        else{
            return "it's a tie!";
        }
    }
}

function game(){
    for(let i = 0; i<5; i++){
        let player = window.prompt("enter your choice of rock, paper, or scissors!");
        let computer = getComputerChoice();
        console.log(playRound(player, computer));
    }
}

game();