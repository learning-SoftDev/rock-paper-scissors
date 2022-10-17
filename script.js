//For indexing
const textArray = ['rock', 'paper', 'scissors'];
const imageArray = ['✊', '✋', '✌'];


//Getting a random computer choice
function getComputerChoice(){
  const randomNumber = Math.floor(Math.random()*textArray.length);
  const computerInput = textArray[randomNumber];
  return computerInput
}; 

//WinLose Logic

function playRound(playerSelection,computerSelection){
  if((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors')
  || (playerSelection === 'scissors' && computerSelection === 'rock')){
    computerScoreNum+=1;
    return 'You Lose';
  } else if (playerSelection === computerSelection){
    return 'Draw'
  } else {
    playerScoreNum+=1;
    return 'You Win!';
  }
};

function resetScore(){
  computerScoreNum=0;
  playerScoreNum=0;
  matchHistoryResult = '';
  matchHistoryPlayer = '';
  matchHistoryComputer = '';
  matchRunning = '';
  //finalResult.textContent = '';
}

function playMatch() {
  finalResult.textContent = ''; 
  const computerInput = getComputerChoice();
  const indexPlayer = textArray.findIndex(object => {
      return object === this.value
  });
  const indexComputer = textArray.findIndex(object => {
      return object === computerInput
  });

  //Play the round after click
  matchComputerChoice.textContent = imageArray[indexComputer];
  matchPlayerChoice.textContent = imageArray[indexPlayer];
  const result = playRound(this.value,computerInput);
  matchResult.textContent = result;
  playerScore.textContent = 'Player: ' + playerScoreNum;
  computerScore.textContent = 'Computer: ' + computerScoreNum;
  

  const indexResult = resultArray.findIndex(object => {
    return object === result
  });

  if(counterRun === 0){
      matchHistoryResult = mapArray[indexResult];
      document.getElementById("match-history-result").innerHTML = matchHistoryResult;

      matchHistoryPlayer = this.value;
      document.getElementById("match-history-player").innerHTML = matchHistoryPlayer;

      matchHistoryComputer = computerInput;
      document.getElementById("match-history-computer").innerHTML = matchHistoryComputer;

      matchRunning = playerScoreNum + ' - ' + computerScoreNum;
      document.getElementById("match-history-running").innerHTML = matchRunning;

      counterRun++;
  } else {
      matchHistoryResult = matchHistoryResult + "<br/>" +  mapArray[indexResult];
      document.getElementById("match-history-result").innerHTML = matchHistoryResult;

      matchHistoryPlayer = matchHistoryPlayer + "<br/>" +  this.value;
      document.getElementById("match-history-player").innerHTML = matchHistoryPlayer;

      matchHistoryComputer = matchHistoryComputer + "<br/>" +  computerInput;
      document.getElementById("match-history-computer").innerHTML = matchHistoryComputer;

      matchRunning = matchRunning + "<br/>" +  playerScoreNum + ' - ' + computerScoreNum;
      document.getElementById("match-history-running").innerHTML = matchRunning;
  }

  //Result of the whole match and resetting scores and disabling clicking of
  if(playerScoreNum === 5 || computerScoreNum === 5){
    if(playerScoreNum===5){
      finalResult.textContent = 'Congratulations! You Won!'
    } else {
      finalResult.textContent = 'You Lose.'
    };
    resetScore();
    items.removeEventListener('click',playMatch);
  } ;
}



//Setting up required variables
const matchResult = document.getElementById('matchResult');
const matchPlayerChoice = document.getElementById('matchPlayerChoice');
const matchComputerChoice = document.getElementById('matchComputerChoice');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const finalResult = document.getElementById('finalResult')
const btns = document.querySelectorAll('button');
const resultArray = ['You Win!', 'You Lose', 'Draw'];
const mapArray = ['Win', 'Lose', 'Draw'];
let matchHistoryResult = ''
let matchHistoryPlayer = '';
let matchHistoryComputer = '';
let matchRunning = '';
let counterRun = 0
let endMatch = false;
let computerScoreNum = 0;
let playerScoreNum = 0;
let matchIndic = 0;

//OnClick play the round
//while(!endMatch){
for(items of btns) {
  items.addEventListener('click',playMatch)
}