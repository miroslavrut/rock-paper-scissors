const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScore = document.querySelector('player-score');
const computerScore = document.querySelector('computer-score');
const roundCount = document.querySelector('round-count');

const newGameBtn = document.querySelector('#ng');

function playerInput(){
let playerSelection = prompt("Pick your weapon","").toUpperCase();
if(!(playerSelection == "ROCK" || playerSelection =="PAPER"
 || playerSelection =="SCISSORS")){
	alert("Invalid choice!");
	playerSelection= playerInput();
 }
	return playerSelection;
}

function computerPlay() {
	return randNum()==1 ? "ROCK" : randNum()==2 ? "PAPER" : "SCISSORS";
}

function randNum() {
	return (Math.floor(Math.random() * 3) +1);
}

function playRound() {
  let roundWinner;
  let playerChoice= playerInput();
  let computerChoice= computerPlay();
  if (playerChoice === computerChoice){
	  roundWinner = "draw";
      console.log("DRAW");
   }
  else if(playerChoice == "ROCK" && computerChoice=="SCISSORS"
     || playerChoice == "PAPER" && computerChoice=="ROCK"
     || playerChoice =="SCISSORS" && computerChoice=="PAPER"){
        roundWinner ="player";
        console.log("You won this round!");
     }
  else {
		roundWinner = "computer";
  		console.log("Computer won this round!");
  }
  		return roundWinner;
}

function score(){
	let winner=playRound();
	if(winner === "player") ++playerScore;
	else if(winner === "computer") ++compScore;
}

function game() {
	score();
	if(playerScore === 3)
    alert("Yeeey, you win!");
	else if (compScore === 3)
    alert("Noob, computer owned you!");
	else game();
}

function restart(){
	playerScore = 0;
	compScore = 0;
	game();
}