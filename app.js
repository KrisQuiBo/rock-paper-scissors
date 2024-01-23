// the computer is your opponent and needs to randomly select either rock paper or scissors
document.addEventListener("DOMContentLoaded", function() {
   game();
  });
let computerScore = 0;
let playerScore = 0;
  function game() {
    for(i=0;i<5;i++) { 
        playRound(playerSelection, computerSelection);     
        if(computerScore==playerScore) {
            console.log("tied that play");
        }
        console.log(`Computer choice: ${computerSelection}, Computer score: ${computerScore}, Player score ${playerScore}`)
    }
    if(computerScore > playerScore) {
        console.log(`Commputer score: ${computerScore}. Computer Wins!`)
    } else if(playerScore > computerScore) {
        console.log(`Player score: ${playerScore}. Player Wins!`)
    } else {
        console.log("tied the round")
    }
} 
function getComputerChoice() {
    let deciderNumber = Math.floor(Math.random() * (3));
    let rockPaperScissors = ["rock", "paper", "scissors"];
    let computerSelection = rockPaperScissors[deciderNumber];
    return computerSelection;
 }

let computerSelection;
let playerSelection;

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("rock, paper, or scissors?").toLowerCase();

    return playerSelection == computerSelection ?  console.log("tied that play")
    : playerSelection == "rock" && computerSelection == "scissors" ? playerScore++
    : playerSelection == "scissors" && computerSelection == "paper" ?  playerScore++
    : playerSelection == "paper" && computerSelection == "rock" ?  playerScore++
    : playerSelection == "scissors" && computerSelection == "rock" ? computerScore++
    : playerSelection == "rock" && computerSelection == "paper" ? computerScore++
    : playerSelection == "paper" && computerSelection == "scissors" ? computerScore++
    : "game over"     
}
    


