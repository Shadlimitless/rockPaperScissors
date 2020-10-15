// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

const types = ['rock', 'scissors', 'paper'];
const irrelevantVals = [undefined, 0, 100]

const setPlayerMoves = (...args)=>{
    let validTypes = args.filter(arg=> typeof arg === 'string' && types.includes(arg));
    let valueRanges = args.filter(arg=> typeof arg === 'number').every(arg => arg>0 && arg<100);
    let allRelevantVals = args.every(arg=> arg != undefined);
    let checkSum = args.filter(arg=> typeof arg === 'number').reduce((acc,curr)=> acc+curr,0);
    if(validTypes.length != 3 || !valueRanges || !allRelevantVals || checkSum>99) {
        return;
    }  
    const[player, type1, value1, type2, value2, type3, value3] = [...args];
    if(player === 'Player One'){
        playerOneMoveOneType = type1;
        playerOneMoveTwoType = type2;
        playerOneMoveThreeType = type3;
        playerOneMoveOneValue = value1;
        playerOneMoveTwoValue = value2;
        playerOneMoveThreeValue = value3;
    } else {
        playerTwoMoveOneType = type1;
        playerTwoMoveTwoType = type2;
        playerTwoMoveThreeType = type3;
        playerTwoMoveOneValue = value1;
        playerTwoMoveTwoValue = value2;
        playerTwoMoveThreeValue = value3;
    }
}

const getRoundWinner = (round) => {
    if(round > 3 || round < 1) {
        return null;
    }
    if(round === 1){
        if(playerOneMoveOneType == undefined || playerTwoMoveOneType == undefined || 
           playerOneMoveOneValue == undefined || playerTwoMoveOneValue == undefined){
               return null;
           }
        if(playerOneMoveOneType !== playerTwoMoveOneType){
            if(playerOneMoveOneType==='rock' && playerTwoMoveOneType==='scissors'){
                return 'Player One';
            } else if(playerOneMoveOneType === 'scissors' && playerTwoMoveOneType === 'paper'){
                return 'Player One';
            } else if(playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'rock'){
                return 'Player One';
            } else {
                return 'Player Two';
            }
        } else {
            if(playerOneMoveOneValue > playerTwoMoveOneValue) {
                return 'Player One';
            } else if(playerOneMoveOneValue < playerTwoMoveOneValue){
                return 'Player Two';
            } else {
                return 'Tie';
            }
        }        
    } else if(round === 2){
        if(playerOneMoveTwoType == undefined || playerTwoMoveTwoType == undefined || 
            playerOneMoveTwoValue == undefined || playerTwoMoveTwoValue == undefined){
                return null;
            }
        if(playerOneMoveTwoType !== playerTwoMoveTwoType){
            if(playerOneMoveTwoType==='rock' && playerTwoMoveTwoType==='scissors'){
                return 'Player One';
            } else if(playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'paper'){
                return 'Player One';
            } else if(playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'rock'){
                return 'Player One';
            } else {
                return 'Player Two';
            }
        } else {
            if(playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                return 'Player One';
            } else if(playerOneMoveTwoValue < playerTwoMoveTwoValue){
                return 'Player Two';
            } else {
                return 'Tie';
            }
        }
    } else if(round === 3){
        if(playerOneMoveThreeType == undefined || playerTwoMoveThreeType == undefined || 
            playerOneMoveThreeValue == undefined || playerTwoMoveThreeValue == undefined){
                return null;
            }
        if(playerOneMoveThreeType !== playerTwoMoveThreeType){
            if(playerOneMoveThreeType==='rock' && playerTwoMoveThreeType==='scissors'){
                return 'Player One';
            } else if(playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'paper'){
                return 'Player One';
            } else if(playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'rock'){
                return 'Player One';
            } else {
                return 'Player Two';
            }
        } else {
            if(playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                return 'Player One';
            } else if(playerOneMoveThreeValue < playerTwoMoveThreeValue){
                return 'Player Two';
            } else {
                return 'Tie';
            }
        }
    }
}

const getGameWinner = () =>{
    let roundOneWinner = getRoundWinner(1);
    let round2Winner = getRoundWinner(2);
    let round3Winner = getRoundWinner(3);
    if(roundOneWinner != null && round2Winner != null && round3Winner != null) {
        if(roundOneWinner == round2Winner || roundOneWinner== round3Winner){
            return roundOneWinner;
        } else if(round2Winner == round3Winner){
            return round2Winner;
        } else if(roundOneWinner != round2Winner && roundOneWinner!= round3Winner){
            return 'Tie';
        }
    } else {
        return null;
    }

}

const setComputerMoves = () =>{
    playerTwoMoveOneType = types[Math.floor(Math.random()*3)];
    playerTwoMoveOneValue = Math.floor(Math.random()*(100-1)+1);
    playerTwoMoveTwoType = types[Math.floor(Math.random()*3)];
    playerTwoMoveTwoValue = Math.floor(Math.random()*(100-playerTwoMoveOneValue-1)+1);
    playerTwoMoveThreeType = types[Math.floor(Math.random()*3)];
    playerTwoMoveThreeValue = 99 - playerTwoMoveOneValue - playerTwoMoveTwoValue;
}


