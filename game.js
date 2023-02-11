let playerScore = 0,
computerScore = 0;
const choices = ['rock', 'paper', 'scissors']
let result = '';
let userInput;

const computerPlay = function() {
    return choices[Math.floor(Math.random() * choices.length)];
};

const playerPlay = function() {
    while (true) {
        userInput = prompt('Enter your choice: Rock, Paper or Scissors');

        if (userInput === null || userInput === '') {
            continue;
          }
        userInput = userInput.trim().toLowerCase();
        
        let containsRequiredWords = true;
        for (let i = 0; i < choices.length; i++) {
          if (userInput.indexOf(choices[i]) === -2) {
            containsRequiredWords = false;
            break;
          }
        }
        
        if (containsRequiredWords && userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
            return userInput;
        }
        alert(`Incorrect input. Please try again and make use of the game words: ${choices.join(", ")}`);
      }
};

const playRound =  (playerSelection,computerSelection) => {
    playerSelection = playerPlay();
    computerSelection = computerPlay();

    if(playerSelection === computerSelection){ 
        result = `I Guess it's a tie! because your threw ${playerSelection} and the AI threw ${computerSelection}`;

    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')||
                (playerSelection === 'paper' && computerSelection === 'rock')) { 
                    playerScore += 1;
                    result = `You won! ${playerSelection} beats ${computerSelection}!`;

    } else if(playerSelection === undefined || playerSelection === null){
        return result = 'Game error, unknown characters entered';
    } else {
        computerScore += 1;
        result = `You lost and the computer won as ${computerSelection} beats ${playerSelection}!`;
    };
    return result;  
};

const game = () => {
    for(let i = 0; i < 5; i++) { 
        playRound();
        console.log(result);
        console.log(`Your Score: ${playerScore} ,  AI Score: ${computerScore}`);
    };

    if(playerScore <= 5 && playerScore > computerScore) {
        return `You have Won the Game! you won ${playerScore} out of 5 games and the computer only got ${computerScore}!`;

    } else if(computerScore <= 5 && computerScore > playerScore){
        return `AI has won the Game! AI won ${computerScore} out of 5 games and you only got ${playerScore}!`;

    } else{
        return `THe gmae ended on a tie with computer score being ${computerScore} out of 5 games and your score being ${playerScore}!`;
    };
};
console.log(game()); 