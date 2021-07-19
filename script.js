let randomNumber,currentScore;


const rollDice = document.querySelector(".btn-roll-dice");
const holdScore = document.querySelector(".btn-hold-score");
const diceNumber = document.querySelector(".span-dice-number");
const scorePlayerOne = document.querySelector(".player--1--total--score"); 
const scorePlayerTwo = document.querySelector(".player--2--total--score"); 
const currentScorePlayerOne = document.querySelector(".player--1--current--score");
const currentScorePlayerTwo = document.querySelector(".player--2--current--score");   

let playerOnePlays = true;
let playerTwoPlays = false;
let isActivePlayer,isActiveScore;

function diceNumberGenerator(){
    let randomNumber = Math.trunc(Math.random()*6+1);
    console.log(randomNumber);
    return randomNumber;
}

function playGame(){
    if(playerOnePlays){
        isActivePlayer = currentScorePlayerOne;
        isActiveScore = scorePlayerOne;
    }
    else{
        isActivePlayer = currentScorePlayerTwo;
        isActiveScore = scorePlayerTwo;
    }
    addScore(isActivePlayer,isActiveScore);
}

function holdAndReduce(){
    if(playerOnePlays){
        isActivePlayer = currentScorePlayerOne;
        isActiveScore = scorePlayerOne;
    }
    else{
        isActivePlayer = currentScorePlayerTwo;
        isActiveScore = scorePlayerTwo;
    }
    holdAndReduceScore(isActivePlayer,isActiveScore);
}

function addScore(current,total){
    let number = diceNumberGenerator(); 
    diceNumber.textContent=number;
    if(number==6){
        current.textContent="0";
        if(playerOnePlays){
            playerOnePlays = false;
        }
            else{
                playerOnePlays = true;
            }
            
    }
    else{
        currentScore = Number(current.textContent);
        currentScore += number;
        current.textContent = currentScore;
    }
}

function holdAndReduceScore(current,total){
    let score = Number(current.textContent); 
    let totalScore = Number(total.textContent);
    totalScore -= score;
    total.textContent = totalScore;
    current.textContent = "0";
    if(playerOnePlays)
        playerOnePlays = false;
    else
        playerOnePlays = true;
}

rollDice.addEventListener('click',playGame);
holdScore.addEventListener('click',holdAndReduce);






