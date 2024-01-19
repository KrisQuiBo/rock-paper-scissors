// the computer is your opponent and needs to randomly select either rock paper or scissors

 function getComputerChoice() {
    let deciderNumber = Math.floor(Math.random() * (3));
    let rockPaperScissors = ["rock", "paper", "scissors"];
    let computerSelection = rockPaperScissors[deciderNumber];
    return computerSelection;
 }

 const computerSelection = getComputerChoice();
console.log(computerSelection);
function playRound(playerSelection, computerSelection) {
        return playerSelection == computerSelection ? "tie!"
          : playerSelection == "rock" && computerSelection == "scissors" ? "Player wins"
          : playerSelection == "paper" && computerSelection == "scissors" ? "computer wins"
          : playerSelection == "scissors" && computerSelection == "paper" ? "player"
          : playerSelection == "scissors" && computerSelection == "rock" ? "Comp"
          : playerSelection == "rock" && computerSelection == "paper" ? "Comp"
          : playerSelection == "paper" && computerSelection == "rock" ? "player"
        : "game over"
}



