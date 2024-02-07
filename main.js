const team = {
  _players: [
  {firstName: 'JAMES', lastName: 'BOND', age: 22 },
  {firstName: 'PETER', lastName: 'PAN', age: 25 },{firstName: 'Harry', lastName: 'POTER', age: 20 }
  ],
  _games: [
    {opponent: 'madrid', teamPoints: '45', opponentPoints: '30'},
    {opponent: 'barcelone', teamPoints: '62', opponentPoints: '50'},{opponent: 'rome', teamPoints: '78', opponentPoints: '35'}
    ],

  get players () {  
       return this._players;   
  },

  get games () {
      return this._games;
  },
 
 addPlayer(newFirstName, newLastName, newAge){
let players = {
  firstName: newFirstName,
  lastName: newLastName,
  age: newAge
};
this.players.push(players);
 },
 addGame(newOpponent, newTeamPoints, newOpponentPoints){
let game = {
  opponent: newOpponent,
  teamPoints: newTeamPoints,
  opponentPoints: newOpponentPoints
};
this.games.push(game)
 } 
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players)
team.addGame('Titans',100 , 98)
console.log(team._games)
