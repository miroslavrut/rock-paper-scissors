const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const roundCount = document.querySelector('#round-count');
const message = document.querySelector('.message');
const newGameBtn = document.querySelector('#ng');
let round = 1;
let score = [0,0];


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
}



function restart(){
	playerScore = 0;
	compScore = 0;
	game();
}