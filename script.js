let randomNumber,currentScore;


const rollDice = document.querySelector(".btn-roll-dice");
const holdScore = document.querySelector(".btn-hold-score");
const newGame = document.querySelector(".btn-new-game");
const diceNumber = document.querySelector(".span-dice-number");
const scorePlayerOne = document.querySelector(".player--1--total--score"); 
const scorePlayerTwo = document.querySelector(".player--2--total--score"); 
const currentScorePlayerOne = document.querySelector(".player--1--current--score");
const currentScorePlayerTwo = document.querySelector(".player--2--current--score");   
const diceImage = document.querySelector(".img-dice");

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
    diceImage.src = `img/${number}.png`;
    diceImage.style.visibility = "visible";
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
    if(totalScore<=80){
        total.textContent = "WIN";
        rollDice.disabled = true;
        holdScore.disabled = true;
    }
    else{
        total.textContent = totalScore;
        current.textContent = "0";
        if(playerOnePlays)
            playerOnePlays = false;
        else
            playerOnePlays = true;
    }
}

function resetGame(){
    scorePlayerOne.textContent = '100';
    scorePlayerTwo.textContent = '100';
    currentScorePlayerOne.textContent = '0';
    currentScorePlayerTwo.textContent = '0';
    rollDice.disabled=false;
    holdScore.disabled = false;
    diceImage.style.visibility = "hidden";
    isActivePlayer = currentScorePlayerOne;
    isActiveScore = scorePlayerOne;
    playerOnePlays=true;
    playerTwoPlays=false;

}

rollDice.addEventListener('click',playGame);
holdScore.addEventListener('click',holdAndReduce);
newGame.addEventListener("click",resetGame);






