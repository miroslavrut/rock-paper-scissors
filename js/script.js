const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const roundCount = document.querySelector('#round-count');
const message = document.querySelector('.message');
const newGameBtn = document.querySelector('#ng');
let round = 0;
let score = [0,0];


rock.addEventListener('click', ()=>{playRound('rock',computerPlay())});
paper.addEventListener('click', ()=>{playRound('paper',computerPlay())});
scissors.addEventListener('click', ()=>{playRound('scissors',computerPlay())});
newGameBtn.addEventListener('click',restart);
newGameBtn.style.display = 'none';

function computerPlay() {
	return randNum()==1 ? "rock" : randNum()==2 ? "paper" : "scissors";
}

function randNum() {
	return (Math.floor(Math.random() * 3) +1);
}

function playRound(playerChoice,computerChoice) {
	if (playerChoice === computerChoice){
	message.textContent = `Computer also played ${playerChoice}, TIE! `;		
	playerScore.textContent = `${score[0]}`;
	computerScore.textContent = `${score[1]}`;
}
	else if(playerChoice == "rock" && computerChoice=="scissors"
     || playerChoice == "paper" && computerChoice=="rock"
     || playerChoice =="scissors" && computerChoice=="paper"){
		message.textContent = `${playerChoice} beats ${computerChoice} You Win!`;
		++score[0];
		playerScore.textContent = `${score[0]}`;
		computerScore.textContent = `${score[1]}`;
    }
	else {
		message.textContent = `${computerChoice} beats ${playerChoice} You Loose!`;
		++score[1];
		playerScore.textContent = `${score[0]}`;
		computerScore.textContent = `${score[1]}`
	}  	
	++round;
	roundCount.textContent = `${round}`;
	if(round===5) newGame();
}

function newGame(){
	if(score[0]>score[1]) message.textContent = "YOU WIN THE GAME!";
	else if (score[0]<score[1]) message.textContent = "Game Over, NOOB!";
	else message.textContent = "It's a tie game!";
	newGameBtn.style.display = 'block';
	rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}



function restart(){
	score = [0,0];
	round = 0;
	playerScore.textContent = `${score[0]}`;
	computerScore.textContent = `${score[1]}`;
	roundCount.textContent = `${round}`;
	rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
	newGameBtn.style.display = 'none';
	message.textContent = "5 ROUNDS!";
}