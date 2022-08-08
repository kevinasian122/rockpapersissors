





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
    let str = playerSelection +", "+ computerSelection;
    
    if (playerSelection === "paper"){
        if (computerSelection === "Rock"){
            playerClick();
            return "You Win! Paper beats Rock";
        }
        else if(computerSelection === "Scissors"){
            computerClick();
            return "You Lose! Scissors beats Paper";
        }
        else{
            return str + ", it's a tie!";
        }
    }
    if (playerSelection === "rock"){
        if (computerSelection === "Paper"){
            computerClick();
            return "You Lose! Paper beats Rock";
        }
        else if(computerSelection === "Scissors"){
            playerClick();
            return "You Win! Rock beats Scissors";
        }
        else{
            return str + ", it's a tie!";
        }
    }
    if (playerSelection === "scissors"){
        if (computerSelection === "Rock"){
            computerClick();
            return "You Lose! Rock beats Scissors";
        }
        else if(computerSelection === "Paper"){
            playerClick();
            return "You Win! Scissors beats Paper";
        }
        else{
            return str + ", it's a tie!";
        }
    }
}


const div = document.querySelector(".results");

let plclick = 0;
let coclick = 0;
function playerClick(){
    plclick++;
    document.querySelector(".pclick").innerHTML = "player: " + plclick;
    
}
function computerClick(){
    coclick++;
    document.querySelector(".cclick").innerHTML = "computer: " + coclick;
}


const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    const result = document.createElement('div');
    result.textContent = playRound("rock", getComputerChoice());
    div.appendChild(result);
    getWinner();
    
    
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    const result = document.createElement('div');
    result.textContent = playRound("scissors", getComputerChoice());
    div.appendChild(result);
    getWinner();
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    const result = document.createElement('div');
    result.textContent = playRound("paper", getComputerChoice());
    div.appendChild(result);
    getWinner();
});

function getWinner(){
    const winner = document.createElement('div');
    if(plclick === 5){
        winner.textContent = "You are the winner!"
    }
    else if (coclick === 5){
        winner.textContent = "The computer is the winner!"
    }
    div.appendChild(winner);
}

