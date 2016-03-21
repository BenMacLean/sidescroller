//testing sandbox

console.log("app.js"); //is this file loading
console.log(grid.hello());//sanity for grid availability

//init
grid.init();



// create and initiate the canvas element
var cellWidth = 20; //how many pixles wide/high each block is on screen

var foundCanvas = document.getElementById('canvas');//get me the html canvas to be used in js
foundCanvas.width = grid.numberOfColumns * cellWidth;//how big canvas based on size of cellWidth and # of rows in grid
foundCanvas.height = grid.numberOfRows * cellWidth;//how big canvas ''
canvas = foundCanvas.getContext("2d");//tell canvas to be 2d

//loop
function loop() {//game refresh every frame
  grid.clean(canvas);//cleans canvas
  grid.draw(wall, canvas); //draws the wall on canvas
  grid.draw(player, canvas); //draws player on canvas

	// When ready to redraw the canvas call the loop function
	// first. Runs about 60 frames a second
	window.requestAnimationFrame(loop, canvas);
}

//register keylisteners

document.addEventListener("keydown", function(evt) { //when keydown, run this function
  if (evt.keyCode == 32) { //32 is spacebar
    player.jump();
  }
});

loop();//call the loop to start game
