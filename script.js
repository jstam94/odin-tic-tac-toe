function createPlayer(name, marker){
        return {name, marker};
    }

let players = [];

function playerSelection(){
    let playerOneName = 'playerX';
    let markerChoice = 'X';
    let playerTwoName = 'playerO'
    let remainingMarker;
    markerChoice === 'X'? remainingMarker = 'O': remainingMarker = 'O';
    players.push(createPlayer(playerOneName, markerChoice));
    players.push(createPlayer(playerTwoName, remainingMarker));
}



