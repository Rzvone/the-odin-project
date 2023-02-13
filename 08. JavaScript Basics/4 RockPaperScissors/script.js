function getComputerChoice (){
    let item = ['rock', 'paper', 'scissors'];
    let decision = Math.floor(Math.random() * item.length);

    return item[decision];
}

function getPlayerSelection () {
    let item = ['rock', 'paper', 'scissors'];
    let decision = Math.floor(Math.random() * item.length);

    return item[decision];
}



function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        return `This is a draw`;
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return `Player has Won! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        return `Computer has Won! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        return `Computer has Won! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return `Player has Won! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        return `Computer has Won! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return `Player has Won! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`
    } else {
        return `Please enter: Rock Paper or Scissors`
    }
}



const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();


function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      let result = playRound(playerSelection, computerSelection);
        
      if (result === "Player") {
        playerScore++;
        console.log(result)
      } else if (result === "Computer") {
        computerScore++;
      }
  
      console.log(`Round ${i + 1}: Player chose ${playerSelection} and Computer chose ${computerSelection}. Player wins!`);
    }
  
    if (playerScore > computerScore) {
      console.log(`The final score is Player: ${playerScore} and Computer: ${computerScore}. Player wins!`);
    } else if (computerScore > playerScore) {
      console.log(`The final score is Player: ${playerScore} and Computer: ${computerScore}. Computer wins!`);
    } else {
      console.log(`The final score is Player: ${playerScore} and Computer: ${computerScore}. It's a tie!`);
    }

}



console.log(game(playRound(playerSelection, computerSelection)));