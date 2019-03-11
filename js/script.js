const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScore = document.querySelector('player-score');
const computerScore = document.querySelector('computer-score');
const roundCount = document.querySelector('round-count');
const message = document.querySelector('.message');
const newGameBtn = document.querySelector('#ng');


rock.addEventListener('click', ()=>{playRound('rock',computerPlay())});
paper.addEventListener('click', ()=>{playRound('paper',computerPlay())});
scissors.addEventListener('click', ()=>{playRound('scissors',computerPlay())});
newGameBtn.addEventListener('click',restart);


function computerPlay() {
	return randNum()==1 ? "rock" : randNum()==2 ? "paper" : "scissors";
}

function randNum() {
	return (Math.floor(Math.random() * 3) +1);
}

function playRound(playerChoice,computerChoice) {

	if (playerChoice === computerChoice){
	message.textContent = `Computer also played ${playerChoice}, TIE! `;		
}
	else if(playerChoice == "rock" && computerChoice=="scissors"
     || playerChoice == "paper" && computerChoice=="rock"
     || playerChoice =="scissors" && computerChoice=="paper"){
		message.textContent = `${playerChoice} beats ${computerChoice} You Win!`;
    }
	else {
		message.textContent = `${computerChoice} beats ${playerChoice} You Loose!`;
    }
  	
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