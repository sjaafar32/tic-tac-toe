const gameBoardContainer = document.getElementById('game-board-container');
const resetBtn = document.getElementById('reset-button');
const playerOneName = document.getElementById('player-one');
const playerTwoName = document.getElementById('player-two');
const submitBtn = document.getElementById('submit-button');

let boardArray;
let newCell; //This variable is global so it can be used within the functions and outside of them too

let playerOne;
let playerTwo;

const gamePlay = () => {
    const createPlayer = (name, marker) => {
        const playerName = () => {return name;}
        const playerMarker = () => {return marker;}
        return {playerName, playerMarker}
    }
    return {createPlayer}
};

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
    boardArray = newCell.returnArray(); 
    //need to get the array from the node list in "createCell" since thats where it was created
    gameBoard.resetBoard(boardArray);
 });

const createCell = () => { //This function is called 9 times in the loop above for each square
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    gameBoardContainer.appendChild(newCell);

    playerOne = gamePlay();
    playerOne.createPlayer('Player One', 'X');

    const cellButton = () => {
        newCell.addEventListener('click', () => {
            newCell.textContent = 'X';
            console.log(playerOne.playerMarker());
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


/* const gameBoardContainer = document.getElementById('game-board-container');
gameBoardContainer.classList.add('game-board-container');


const submitBtn = document.getElementById('submit-button');
const resetBtn = document.getElementById('reset-button');

const player = (name, playerMarker) => {
    const playerName = () => {return name;}
    const marker = () => {return playerMarker;}
    return {playerName, marker};
}

const gamePlay = (cell) => {
    let playerOne = player('Player One', 'X');
    let palyerTwo = player('Player Two', 'O');
    let turn = 1;
    let text = cell.innerText;
    cell.addEventListener('click', () => {
        cell.set
    });

    const marker = () => {
        
    }

    const playerTurn = () => {
        if(turn %2 === 0){ turn++; return 'O';}
        else{turn++; return 'X';}
    }
}

const gameBoard = (() => {
    const createBoard = () => {
    for(i=0; i<9; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gameBoardContainer.appendChild(cell);
        gamePlay(cell);
    };
};

    const resetBoard = () => {
        const gameBoardArray = Array.from(gameBoardContainer.childNodes)
        gameBoardArray.forEach((element) => {
            gameBoardContainer.removeChild(element);
        });
    };
    return {createBoard, resetBoard}
})();

gameBoard.createBoard();
let gameBoardArray = Array.from(gameBoardContainer.childNodes);
console.log(gameBoardArray);

resetBtn.addEventListener('click', () => { gameBoard.resetBoard(); gameBoard.createBoard();});

*/
//let playerOne;
//let playerTwo;

/*
const gamePlay = ((cell) => {
    submitBtn.addEventListener('click', () => {
        let playerOneName = document.getElementById('player-one');
        let playerTwoName = document.getElementById('player-two');
        playerOne = player(playerOneName.value, 'X');
        playerTwo = player(playerTwoName.value, 'O');
        console.log(playerTwo.playerName());
    });
    let turn = 1;
    
    const whosTurn = () => {
        if(turn % 2 === 0){ return 'X';}
        else{return 'O';}
        turn++;
    }

    for(i=0; i<9; i++){
        
    }
    
})();

*/