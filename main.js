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
        { 
         return this._players
         }
    },
  
    get games () {
      {
        return this._games
      }
    }
  
  };
  
  
  