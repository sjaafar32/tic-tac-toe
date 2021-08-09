const gameBoardContainer = document.getElementById('game-board-container');
const resetBtn = document.getElementById('reset-button');
const submitBtn = document.getElementById('submit-button');
const winnerDisplay = document.getElementById('winner-display');
const xBtn = document.getElementById('x-button');
const winnerText = document.getElementById('winner-text');

let boardArray;
let newCell; //This variable is global so it can be used within the functions and outside of them too

let playerOne;
let playerTwo;

let playerOneName;
let playerTwoName;

let counter = 0;

const createPlayer = (name, marker) => {
    const playerName = () => name;
    const playerMarker = () => marker;
    return {playerName, playerMarker}
}




const gameBoard = (() => {
    const createBoard = () => { 
        /* This function creates the board by sending it to the
        "createCell" function. The "cellButton" function creates
        an event listener */
        for(i=0; i<9; i++){
            newCell = createCell();
            newCell.cellButton();       
        }
    }
    const resetBoard = (arrayToDelete) => { 
        //This replaces whatever text is in the sqaures with an empty string
        for(i=0; i<9; i++) {
            arrayToDelete[i].textContent = '';
        }
        counter = 0;
    }
    return {createBoard, resetBoard};
})();





resetBtn.addEventListener('click', reset);

 function reset() {
    turn = 0;
    boardArray = newCell.returnArray(); 
    //need to get the array from the node list in "createCell" since thats where it was created
    document.getElementById('player-one').value = '';
    document.getElementById('player-two').value = '';
    gameBoard.resetBoard(boardArray);
 }





 submitBtn.addEventListener('click', () => {
    playerOneName = document.getElementById('player-one').value;
    playerTwoName = document.getElementById('player-two').value;

    if(playerOneName == '' || playerTwoName == ''){alert('Do not leave fields blank');}

    playerOne = createPlayer(playerOneName, 'X');
    playerTwo = createPlayer(playerTwoName, 'O');

    document.getElementById('player-one').value = '';
    document.getElementById('player-two').value = '';
});




xBtn.addEventListener('click', () => {
    document.documentElement.style.setProperty('--display', 'none');
});




const createCell = () => { //This function is called 9 times in the loop above for each square
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    gameBoardContainer.appendChild(newCell);

    const cellButton = () => {
        newCell.addEventListener('click', () => {
            if(newCell.textContent == ''){  //this if statement prevents a user from changing a marker that's already placed
                newCell.textContent = gamePlay(); 
                checkWinner();
            }
        });
    };

    const returnArray = () => { //Creates an array from node list. Then pushes empty strings so that it is not undefined
        const newArray = Array.from(gameBoardContainer.childNodes);
        for(i=0; i<9; i++){
            newArray.push('');
        }
        return newArray;
    }
    return{cellButton, returnArray};
};




gameBoard.createBoard();

const winPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


let turn = 0;

const gamePlay = () => {
    if(turn === 9){return;}
    if(turn % 2 === 0){ turn++; return playerOne.playerMarker();}
    else {turn++; return playerTwo.playerMarker();}

    }   

function checkWinner() {
        boardArray = newCell.returnArray();
        for(i = 0; i < 8; i++){
        if(boardArray[winPositions[i][0]].textContent == 'X' &&
        boardArray[winPositions[i][1]].textContent == 'X' &&
        boardArray[winPositions[i][2]].textContent == 'X')
        {winnerText.textContent = playerOne.playerName() + ' Wins!';
        document.documentElement.style.setProperty('--display', 'block');
        reset();
         return;}

        if(boardArray[winPositions[i][0]].textContent == 'O' &&
        boardArray[winPositions[i][1]].textContent == 'O' &&
        boardArray[winPositions[i][2]].textContent == 'O')
        {winnerText.textContent = playerTwo.playerName() + ' Wins!';
        document.documentElement.style.setProperty('--display', 'block');
        reset();
        return;}

        };
        counter = 0;
        for(i = 0; i < 9; i++){
            if(counter === 8){winnerText.textContent = `It's A Draw!`;
            document.documentElement.style.setProperty('--display', 'block');
            reset();
            }
            if(boardArray[i].textContent !== ''){
                counter++;
            }
        }
}