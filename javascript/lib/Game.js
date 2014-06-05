function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
};

Game.prototype.PAIRS = {
  rock: { scissors: "beats" },
  paper: { rock: "beats" },
  scissors: { paper: "beats" }
}

Game.prototype.winner = function() {
  if (this.draw()) return null;

  if(this.victory(this.player1.pick, this.player2.pick)) {
    return this.player1;
  }
  else {
    return this.player2;
  }
};

Game.prototype.victory = function(pick, opponentPick) {
  return this.PAIRS[pick][opponentPick];
}

Game.prototype.draw = function() {
  return this.player1.pick === this.player2.pick;
}