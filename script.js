
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
  let switchPlayer = () => (currentPlayer == players.getPlayers()[0] ? currentPlayer = players.getPlayers()[1] : currentPlayer = players.getPlayers()[0])
  function playRound(position){
    gameBoard.markHere(position);
    console.log('TEST')
    switchPlayer()
  }
  
  return {playRound, getCurrentPlayer, gameBoard, switchPlayer}
})()


// let test = gameController.gameBoard.board[0][0]

// gameController.playRound(gameController.gameBoard.board[0][0])