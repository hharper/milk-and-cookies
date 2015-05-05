var GameView = function( model){
  //this.el = document.querySelector(selector)
  this.model = model
  this.render()
}
//render the board
GameView.prototype = {
  render: function(){
    var gameElement = document.querySelector(".game")
    gameElement.innerHTML = ""
    for (var i = 0; i<this.model.squares.length; i++){
    var square = this.model.squares[i]
    var el = document.createElement("div")
    el.className = "square"
    el.innerHTML = square
    el.setAttribute('data-id', i)
    el.addEventListener("click", this.onClick.bind(this))
    gameElement.appendChild(el)
    }
  },
  //handle click events (when player clicks on a square)
  onClick: function (event){
    //display the current turn
    event.target.innerHTML = this.model.turn
    //udpate the model
    var id = event.target.getAttribute("data-id")
    this.model.squares[id] = this.model.turn
    //switch the turn
    this.model.switchTurn()
    //render the game
    this.render()
    //console.log("square was clicked")
  }
}
