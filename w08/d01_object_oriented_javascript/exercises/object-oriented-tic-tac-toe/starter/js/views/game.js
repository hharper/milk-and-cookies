var GameView = function(selector, model){
  this.el = document.querySelector(selector)
  this.model = model
  this.render()
}
//render the board
GameView.prototype ={
  render: function(){
    for (var i = 0; i<this.model.squares.length; i++){
    var square = this.model.squares[i]
    var el = document.createElement("div")
    el.className = "square"
    el.innerHTML = square
    gameElement.appendChild(el)
    }
  }
}
//handle click events (when player clicks on a square)
