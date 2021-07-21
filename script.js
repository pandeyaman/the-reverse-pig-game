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
const playerOneCardActive = document.querySelector(".player--1");
const playerTwoCardActive = document.querySelector(".player--2");

let playerOnePlays = true;
let playerTwoPlays = false;
let isActivePlayer,isActiveScore;

let activeCard = playerOneCardActive;



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
            activePlayerCard();   
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
    if(totalScore<=70){
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
        activePlayerCard();
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
    activePlayerCard();

}

function activePlayerCard(){
    if(playerOnePlays){
        console.log("ative 1");
        playerOneCardActive.style.boxShadow= "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
        playerOneCardActive.style.background = "#FFD523";
        playerTwoCardActive.style.background = "linear-gradient(rgba(255, 255, 255, 0.4),rgba(255,255,255,0.4))";
        playerTwoCardActive.style.transition = "0.8s";
        playerTwoCardActive.style.boxShadow = ""; 
    }
    else{
        console.log("ative 2");
        playerTwoCardActive.style.boxShadow= "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px";
        playerTwoCardActive.style.transition = "0.8s";
        playerTwoCardActive.style.background = "#FFD523";
        playerOneCardActive.style.background = "linear-gradient(rgba(255, 255, 255, 0.4),rgba(255,255,255,0.4))";
        playerOneCardActive.style.transition = "0.8s";

    }
}

activePlayerCard();
rollDice.addEventListener('click',playGame);
holdScore.addEventListener('click',holdAndReduce);
newGame.addEventListener("click",resetGame);






