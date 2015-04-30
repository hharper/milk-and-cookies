var catImage = document.querySelector("img")
var animate
// var screenWidth = window.innerWidth;

function init(){
  var catImage = document.querySelector("img")
  catImage.style.position='relative'
  catImage.style.left='0px';
}

function walkingCat() {
  catImage.style.left = parseInt(catImage.style.left) + 10 + 'px';
  animate = setTimeout(walkingCat, 100);
}

catImage.addEventListener("click", function(event){
  walkingCat();
})

function stop() {
  clearTimeout(walkingCat)
  catImage.style.left = '0px'
}

window.addEventListener("click", function(event){
  stop(animate);
})

window.onload =init;
