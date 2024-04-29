// document.addEventListener("DOMContentLoaded", function() {
 //call the game function upon dom content load
    // game();

 //initialize variables for global accessibility 
let computerScore = 0;
let playerScore = 0;
const playerRock = document.querySelector("#rock");
const playerScissors = document.querySelector("#scissors");
const playerPaper = document.querySelector("#paper");
const buttons = document.querySelectorAll("button");
let compChoice = document.querySelector(".compChoice");
let playChoice = document.querySelector(".playChoice");
let player = document.querySelector('.playerScore');
let computer = document.querySelector('.computerScore');
let tie = document.querySelector('.tie');
let playerSelection = 0;
let computerSelection = 0;

// call the play round function and execute 5 times, console log the results of each play and the winner of the round

//   function game() {
//     // for(i=0;i<5;i++) { 
//         playRound(playerSelection, computerSelection);     
//         if(computerScore==playerScore) {
//             console.log("BOOM");
//         }
//         // console.log(`Computer score: ${computerScore}, Player score ${playerScore}`)
//     }
//     if(computerScore > playerScore) {
//         console.log(`Computer score: ${computerScore}. Computer Wins!`)
//     } else if(playerScore > computerScore) {
//         console.log(`Player score: ${playerScore}. Player Wins!`)
//     } else {
//         console.log("tied the round")
//     }
// } 
// the computer is your opponent and needs to randomly select either rock paper or scissors
function getComputerChoice() {
    let deciderNumber = Math.floor(Math.random() * (3));
    let rockPaperScissors = ["rock", "paper", "scissors"];
    computerSelection = rockPaperScissors[deciderNumber];
    // console.log(computerSelection)
    return computerSelection;
 }

// computer and person play a round of rock-paper-scissors aka Rochambeau with 7 possible outcomes per play including ties

function playRound() {
        buttons.forEach(button => {
            button.addEventListener("click", (e) => {
                //get player and computer selection to evaluate the round
                playerSelection = e.target.textContent;
                computerSelection = getComputerChoice();
    
                playerSelection == computerSelection ?  showMessage()
                : playerSelection == "rock" && computerSelection == "scissors" ||
                playerSelection == "scissors" && computerSelection == "paper" ||
                playerSelection == "paper" && computerSelection == "rock" ?  playerScore++
                : playerSelection == "scissors" && computerSelection == "rock" ||
                playerSelection == "rock" && computerSelection == "paper" ||
                playerSelection == "paper" && computerSelection == "scissors" ? computerScore++
                : console.log('game over');
   
                console.log(`Computer score: ${computerScore}, Player score ${playerScore}`)   
                compChoice.textContent = `Computer: ${computerSelection}`;
                playChoice.textContent = `You: ${playerSelection}`;
                player.textContent = `Score: ${playerScore}`;
                computer.textContent = `Score: ${computerScore}`
                
                if(computerScore == 6 || playerScore == 6) {
                    alert('Game OVER!');
                    computerScore = 0;
                    playerScore = 0
                    player.textContent = `Score: ${playerScore}`;
                    computer.textContent = `Score: ${computerScore}`
                    return
                }
            }); 
           
        });          
    }
    //temporarily display tie message
    function showMessage() {
        tie.style.visibility = "visible";
        setTimeout(() => {hideMessage()}, 2000);
    }
    function hideMessage() {
        tie.style.visibility = "hidden";
    }

    playRound();


