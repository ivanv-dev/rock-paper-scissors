const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';


let roundNumbers = 5;


let computerPoints = 0;
let playerPoints = 0;

const buttons = document.querySelectorAll('.choice');
const message = document.querySelector('.message');
const playButton = document.querySelector('#play');
const currentChoice = document.querySelector('.current-choice')
const result = document.querySelector('.result');
const currentRound = document.querySelector('.current-round');

let playerPick;
let isPicked = false;
let roundCount = 0;

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
if(!playerSelection) return 'Wrong input.';
const computerSelection = computerPlay();
const playerSelectionLowercased = playerSelection.toLowerCase();

if(playerSelectionLowercased === computerSelection) return 'Draw'
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
 const input = playerPick
 const playOutput = play(input);
 message.textContent = playOutput;
 return playOutput;
}

function playGame(){
 let textOutput;

   
    

    playButton.addEventListener('click', e => {
        currentRound.textContent = `Current round is ${roundCount + 1}`;


        textOutput = playRound();
        result.textContent = `Player: ${playerPoints} - Computer: ${computerPoints}`;

        if(textOutput !== 'Draw') roundCount++;

        if(roundCount === roundNumbers) {
            if(playerPoints > computerPoints) console.log('Player wins!');
            else if (playerPoints < computerPoints) console.log('Compter wins!');
            playerPoints = 0;
            computerPoints = 0;
            roundCount = 0;
        }
    })
}

function listForClickEvent(){
    buttons.forEach(btn => {
        console.log(btn)
        btn.addEventListener('click', e => {
            setChoice(e)
        })
    })
}

function setChoice(e){
    console.log('ok')
    playerPick = e.target.id;
    currentChoice.textContent = playerPick;
    isPicked = true;
}
listForClickEvent();
playGame();