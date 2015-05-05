var Game = function(){
  //what is the value of each square on the game board
  this.squares = [
    "","","",
    "","","",
    "","","",
  ]
  this.turn = "x"
  //who's turn is it

}

Game.prototype = {
  switchTurn: function(){
    this.turn = this.turn == "x" ? "o" : "x"
    //ternary operation: condition? true: false

    // if (this.turn == "x"){
    //   this.turn = "o"
    // } else {
    //     this.turn = "x"
    //   }
  }
}
//who wins the game
//reset functionality
