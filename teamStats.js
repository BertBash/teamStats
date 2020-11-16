const team = {
    _players: [{
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
      },{
        firstName: 'Steven',
        lastName: 'Stone',
        age: 29
      },{
        firstName: 'Jim',
        lastName: 'Jimson',
        age: 12
      }],
    _games: [{
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },{
        opponent: 'Cowboys',
        teamPoints: 7,
        opponentPoints: 3
      },{
        opponent: 'Cheaters',
        teamPoints: 0,
        opponentPoints: 256
    }],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
  
      this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints){
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
  
      this.games.push(game);
    }
  };
  
  team.addGame("Cowboys", 13, 36);
  team.addGame("Oilers", 185, 0);
  team.addGame("Rockstars", 46, 58);
  
  console.log(team.games);