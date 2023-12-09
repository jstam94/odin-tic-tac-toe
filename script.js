
let players = (function(){
    let players = [];
    let playerSelection = function(playerOneName = 'Player 1', playerTwoName = 'Player 2'){
        createPlayer = (name, marker) =>{
            return {name, marker};
        }
    players.push(createPlayer(playerOneName, 'X'));
    players.push(createPlayer(playerTwoName, 'O'));
    }


    let getPlayers = () => players;
    return{getPlayers, playerSelection}
})()



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
    console.log('Running Check for Win!!!!')
    checkRows();
    checkColumns();
    checkDiagonals();
    function checkRows(){
      console.log('Checking Rows')
      gameController.gameBoard.board.forEach(row => {
        if (row[0].getValue() === currentMarker && row[1].getValue() === currentMarker  && row[1].getValue() === currentMarker){
          isWin = true
        } else return;
      });

    }
    function checkColumns(){
      console.log('Checking Columns')
      let board = gameController.gameBoard.board;
      if(board[0][0].getValue() === currentMarker && board[1][0].getValue() === currentMarker && board[2][0].getValue() === currentMarker){
        isWin = true;
      } else if(board[0][1].getValue() === currentMarker && board[1][1].getValue() === currentMarker && board[2][1].getValue() === currentMarker){
        isWin = true;
      } else if(board[0][2].getValue() === currentMarker && board[1][2].getValue() === currentMarker && board[2][2].getValue() === currentMarker){
        isWin = true
      } else return;
      } ;
    function checkDiagonals(){
      console.log('Checking Diagonals')
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


// let test = gameController.gameBoard.board[0][0]

gameController.playRound(gameController.gameBoard.board[0][0])
gameController.playRound(gameController.gameBoard.board[0][1])
gameController.playRound(gameController.gameBoard.board[1][0])
gameController.playRound(gameController.gameBoard.board[1][1])
gameController.playRound(gameController.gameBoard.board[2][2])
gameController.playRound(gameController.gameBoard.board[2][1])

gameController.gameBoard.printBoard()