let playerScore = 0,
computerScore = 0;
let roundNumber = 1;
let computerChoices = ['rock', 'paper', 'scissors']
let result = '';
let userInput;

function greeting() {
  alert('Welcome to Rock, Paper Scissors! Are you ready to play?')
}

const userName = prompt('What is your name?')

const computerPlay = function() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

function playerPlay() {
  while (true) {
    userInput = prompt('Enter your choice: Rock, Paper or Scissors');

    if (userInput === null || userInput === '') {
        continue;
      }
    userInput = userInput.trim().toLowerCase();
  
    let containsRequiredWords = true;
    for (let i = 0; i < computerChoices.length; i++) {
      if (userInput.indexOf(computerChoices[i]) === -2) {
        containsRequiredWords = false;
        break;
      }
    }
  
    if (containsRequiredWords && userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    }
    alert(`Incorrect input. Please try again and make use of the game words: ${computerChoices.join(", ")}`);
  }
};

function playRound(playerSelection,computerSelection) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    console.log(`You choose: ${playerSelection}`)
    console.log(`The computer chooses: ${computerSelection}`)

    if(playerSelection === computerSelection) {
        result = 'Its a tie!!';
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')||
                (playerSelection === 'paper' && computerSelection === 'rock')) { 
                    playerScore += 1;
                    result = `You won! ${playerSelection} beats ${computerSelection}!`;
    } else if(playerSelection === undefined || playerSelection === null){
        return result = 'Game error, unknown characters entered';
    } else {
        computerScore += 1;
        result = `You lost! ${computerSelection} beats ${playerSelection}!`;
    };
    return result;  
};

function handleWinner() {
  if(playerScore > computerScore) {
    console.log(`You win with ${playerScore} points! The computer only got ${computerScore} points.`)
  } else if(computerScore > playerScore) {
    console.log(`You lose! You only got ${playerScore} points and the computer got ${computerScore} points!`)
  } else {
    console.log(`It's a tie! You both win!`)
  }
}

function game() {
    greeting()
    for(let i = 0; i < 5; i++) { 
      console.log(`Round ${roundNumber}`)
      playRound();
      console.log(`${userName} Score: ${playerScore} ,  Computer Score: ${computerScore}`);
      roundNumber += 1
      console.log('-------------------------------------------------------------------')
    };

    handleWinner()
};

game() 
