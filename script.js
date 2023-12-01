let ticTacToe ={
    players: [],
    playerSelection : function(){
        function createPlayer(name, marker){
            return {name, marker};
        }
        let playerOneName = 'playerX';
        let markerChoice = 'X';
        let playerTwoName = 'playerO'
        let remainingMarker;
        markerChoice === 'X'? remainingMarker = 'O': remainingMarker = 'O';
        this.players.push(createPlayer(playerOneName, markerChoice));
        this.players.push(createPlayer(playerTwoName, remainingMarker));
    }
}

function cell() {
    let value = null;
    const markHere = (currentPlayer) => {
        value = currentPlayer.markerChoice;
    };
    const getValue = () => value;
    return {
        markHere,
        getValue
}
}



gameBoard = (function(){
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
          board[i].push(cell());
        }
      }
      const getBoard = () => board;
      const markHere = (position) => {
        position.markHere();
      }
      const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues);
      };
      return { getBoard, markHere, printBoard }
})();