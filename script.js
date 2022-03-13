const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';


let roundNumbers = 5;


let computerPoints = 0;
let playerPoints = 0;

function computerPlay(){
const randomNumber = Math.random();

if (randomNumber <= 0.33) return  rock;
else if (randomNumber <= 0.66) return paper;
else return scissors;
}

function win(firstItem, secondItem){
    playerPoints++;
    return `You won! --- ${firstItem} beats ${secondItem}`;
}

function lose(firstItem, secondItem){
    computerPoints++;
    return `You lost! --- ${firstItem} beats ${secondItem}`;
}

function play(playerSelection){
const computerSelection = computerPlay();
const playerSelectionLowercased = playerSelection.toLowerCase();

if(playerSelectionLowercased === computerSelection) return 'It is draw!'
else return getOutput(computerSelection, playerSelectionLowercased);

}

function winOutput(computerSelection, playerSlection){
if(playerSlection === paper && computerSelection === rock) return win(paper, rock);
else if(playerSlection === scissors && computerSelection === paper) return win(scissors, paper);
else if(playerSlection === rock && computerSelection === scissors) return win(rock, scissors);
return null;
}
function lostOutput(computerSelection, playerSlection){
if(playerSlection === rock && computerSelection === paper) return lose(paper, rock);
else if(playerSlection === paper && computerSelection === scissors) return lose(scissors, paper);
else if(playerSlection === scissors && computerSelection === rock) return lose(rock, scissors);
return null;
}

function getOutput(computerSelection, playerSlection){
const win = winOutput(computerSelection, playerSlection);
const lose = lostOutput(computerSelection, playerSlection);
if(win !== null) return win;
else if( lose !== null) return lose;
else return 'Wrong input, insert rock, paper or scissors!';
}

function playRound(){
 const input = prompt('Choose rock, paper or scissors!')
 console.log(play(input));
}

function playGame(){
    for(let i = 0; i < roundNumbers; i++){
        playRound();
        console.log(`ROUND: ${i + 1} --- Player points: ${playerPoints}, Computer points: ${computerPoints}`)
    }

    if(playerPoints > computerPoints) console.log('Player wins!');
    else if (playerPoints < computerPoints) console.log('Compter wins!');
    else console.log('Draw.')
    playerPoints = 0;
    computerPoints = 0;
}

playGame();