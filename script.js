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

function winMessage(firstItem, secondItem){
    return `You won! --- ${firstItem} beats ${secondItem}`;
}

function loseMessage(firstItem, secondItem){
    return `You lost! --- ${firstItem} beats ${secondItem}`;
}

function play(playerSelection){
const computerSelection = computerPlay();
const playerSelectionLowercased = playerSelection.toLowerCase();

if(playerSelectionLowercased === computerSelection) return 'It is draw!'
else return getOutput(computerSelection, playerSelectionLowercased);

}

function winOutput(computerSelection, playerSlection){
if(playerSlection === paper && computerSelection === rock) return winMessage(paper, rock);
else if(playerSlection === scissors && computerSelection === paper) return winMessage(scissors, paper);
else if(playerSlection === rock && computerSelection === scissors) return winMessage(rock, scissors);
return null;
}
function lostOutput(computerSelection, playerSlection){
if(playerSlection === rock && computerSelection === paper) return loseMessage(paper, rock);
else if(playerSlection === paper && computerSelection === scissors) return loseMessage(scissors, paper);
else if(playerSlection === scissors && computerSelection === rock) return loseMessage(rock, scissors);
return null;
}

function getOutput(computerSelection, playerSlection){
const win = winOutput(computerSelection, playerSlection);
const lose = lostOutput(computerSelection, playerSlection);
if(win !== null) return win;
else if( lose !== null) return lose;
else return 'Wrong input, insert rock, paper or scissors!';
}

function init(){
 const input = prompt('Choose rock, paper or scissors!')
 console.log(play(input));
}

init();