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
let replay = document.querySelector("#replay");
let compChoice = document.querySelector(".compChoice");
let playChoice = document.querySelector(".playChoice");
let player = document.querySelector('.playerScore');
let computer = document.querySelector('.computerScore');
let tie = document.querySelector('.tie');
let playerWin = document.querySelector('.playerWin');
let compWin = document.querySelector('.compWin');
let gameOver = document.querySelector('.gameOver');
let playerSelection;
let computerSelection;


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
                
                if(computerScore == 3) {
                    compChoice.textContent = `Computer: WINNER`;
                    compWin.style.visibility = "visible";
                    gameOver.style.visibility = "visible";
                    // alert('Game OVER!');
                   
                  
                    player.textContent = `Score: ${playerScore}`;
                    computer.textContent = `Score: ${computerScore}`
                    return
                } else if(playerScore == 3) {
                    playChoice.textContent = `You: WINNER`;
                    playerWin.style.visibility = "visible";
                    gameOver.style.visibility = "visible";
                    return;
                }
            }); 
           
        });          
        replay.addEventListener('click', rePlay);
    }
    //temporarily display tie message
    function showMessage() {
        tie.style.visibility = "visible";
        setTimeout(() => {hideMessage()}, 2000);
    }
    function hideMessage() {
        tie.style.visibility = "hidden";
    }

    // reset gameboard 
    function rePlay() { 
        
        computerScore = 0;
        playerScore = 0;
        player.textContent = `Score: ${playerScore}`;
        computer.textContent = `Score: ${computerScore}`;
        playChoice.textContent = `YOU: `;
        compChoice.textContent = `COMPUTER: `;
        playerWin.style.visibility = "hidden";
        compWin.style.visibility = "hidden";
        gameOver.style.visibility = "hidden";
    }

    playRound();


