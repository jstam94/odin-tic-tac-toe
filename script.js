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
