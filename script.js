const gameBoardContainer = document.getElementById('game-board-container');
const resetBtn = document.getElementById('reset-button');
const submitBtn = document.getElementById('submit-button');

let boardArray;
let newCell; //This variable is global so it can be used within the functions and outside of them too

let playerOne;
let playerTwo;

let playerOneName;
let playerTwoName;

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
    }
    return {createBoard, resetBoard};
})();





resetBtn.addEventListener('click', () => {
    turn = 0;
    boardArray = newCell.returnArray(); 
    //need to get the array from the node list in "createCell" since thats where it was created
    gameBoard.resetBoard(boardArray);
 });





 submitBtn.addEventListener('click', () => {
    playerOneName = document.getElementById('player-one').value;
    playerTwoName = document.getElementById('player-two').value;

    if(playerOneName == '' || playerTwoName == ''){alert('Do not leave fields blank');}

    playerOne = createPlayer(playerOneName, 'X');
    playerTwo = createPlayer(playerTwoName, 'O');
});






const createCell = () => { //This function is called 9 times in the loop above for each square
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    gameBoardContainer.appendChild(newCell);

    const cellButton = () => {
        newCell.addEventListener('click', () => {
            newCell.textContent = gamePlay();
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


let turn = 0

const gamePlay = () => {
    if(turn === 9){return;}
    if(turn % 2 === 0){ turn++; return playerOne.playerMarker();}
    else {turn++; return playerTwo.playerMarker();}

    const winPositions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
}