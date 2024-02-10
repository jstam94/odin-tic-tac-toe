
let players = (function(){
    let players = [];
    let playerSelection = function(playerOneName = 'Player 1', playerTwoName = 'Player 2'){
        createPlayer = (name, marker) =>{
            return {name, marker};
        }
      players[0] = (createPlayer(playerOneName, 'X'));
      players[1] = (createPlayer(playerTwoName, 'O'));
    }


    let getPlayers = () => players;
    return{getPlayers, playerSelection}
})()

let start = document.querySelector('#start-game');
let playerOneInput = document.querySelector('#playerOne')
let playerTwoInput = document.querySelector('#playerTwo')

start.addEventListener('click', () => {
  players.playerSelection(playerOneInput.value, playerTwoInput.value);
  screenController();
})






gameController = (function(){
  gameBoard = (function(){
    const rows = 3;
    const columns = 3;
    const board = [];
    function cell() {
        let value = null;
        const mark = () => {
            value = gameController.getCurrentPlayer().marker;
        };
        const getValue = () => value;
        return {
            mark,
            getValue
    }
    }
    
    
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
          board[i].push(cell());
        }
      }
      const getBoard = () => board;
      const markHere = (position) => {
        position.mark();
      }
      const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues);
      };
      return {board, markHere, printBoard }
})();

  players.playerSelection();
  let currentPlayer = players.getPlayers()[0];
  let getCurrentPlayer = () => currentPlayer;
  let switchPlayer = () => (currentPlayer == players.getPlayers()[0] ? currentPlayer = players.getPlayers()[1] : currentPlayer = players.getPlayers()[0]);
  function checkForWin(){
    let isWin = false;
    let currentMarker = gameController.getCurrentPlayer().marker
    let board = gameController.gameBoard.board;
    console.log('Running Check for Win!!!!')
    checkRows();
    checkColumns();
    checkDiagonals();
    function checkRows(){
      console.log('Checking Rows')
      board.forEach(row => {
        if (row[0].getValue() === currentMarker && row[1].getValue() === currentMarker  && row[1].getValue() === currentMarker){
          isWin = true
        } else return;
      });

    }
    function checkColumns(){
      console.log('Checking Columns')
      if(board[0][0].getValue() === currentMarker && board[1][0].getValue() === currentMarker && board[2][0].getValue() === currentMarker){
        isWin = true;
      } else if(board[0][1].getValue() === currentMarker && board[1][1].getValue() === currentMarker && board[2][1].getValue() === currentMarker){
        isWin = true;
      } else if(board[0][2].getValue() === currentMarker && board[1][2].getValue() === currentMarker && board[2][2].getValue() === currentMarker){
        isWin = true
      } else return;
      } ;
    function checkDiagonals(){
      if(board[0][0].getValue() === currentMarker && board[1][1].getValue() === currentMarker && board[2][2].getValue() === currentMarker){
        isWin = true;
      } else if(board[0][2].getValue() === currentMarker && board[1][1].getValue() === currentMarker && board[2][0].getValue() === currentMarker){
        isWin = true; 
      } else return;
    }
    isWin ? console.log(`Player ${gameController.getCurrentPlayer().marker} Wins`) : console.log('No Winner Yet')
  }

  function playRound(position){
    if(position.getValue()){ 
      return
    };

    gameBoard.markHere(position);
    checkForWin();
    switchPlayer()
  }
  
  return {playRound, getCurrentPlayer, gameBoard}
})()

function renderCurrentPlayer(){
  let playerScreen = document.querySelector('#currentPlayer');
playerScreen.textContent = `It is ${gameController.getCurrentPlayer().name}'s turn`
}

function screenController(){
  renderCurrentPlayer()
 cells = document.querySelectorAll('.cell')
 cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.innerText ==''){
      cell.innerText = gameController.getCurrentPlayer().marker;
    }
    let id = cell.getAttribute('id').split('')
    let column = id[1];
    let row = id[4];
    gameController.playRound(gameController.gameBoard.board[column][row])
    renderCurrentPlayer()
  })
  })
}

