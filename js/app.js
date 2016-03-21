//testing sandbox

console.log("app.js");
console.log(grid.hello());

grid.init();
console.log(grid.map);
console.log(grid.map[3][6]);


// create and initiate the canvas element
canvas = document.createElement("canvas");
canvas.width = COLS * 20;
canvas.height = ROWS * 20;
ctx = canvas.getContext("2d");
// add the canvas element to the body of the document
document.body.appendChild(canvas);



//
//

// var EMPTY = 0;
// var GROUND = 1;
// var DUDE = 2;
// var OB = 3;
//
// var KEY_UP = 38;
//
// /**
// * Game objects
// */
//
// canvas,   /* HTMLCanvas */
// ctx,      /* CanvasRenderingContext2d */
// keystate, /* Object, used for keyboard inputs */
// frames,   /* number, used for animation */
// score;    /* number, keep track of the player score */
//
// grid = {
//
//   width: null,  /* number, the number of columns */
//   height: null, /* number, the number of rows */
//   _grid: null,  /* Array<any>, data representation */
//
//   init: function (d, c, r) {
//     this.width = c;
//     this.height = r;
//     this._grid = [];
//     for (var x = 0; x < c; x++) {
//       this._grid.push([]);
//       for (var y = 0; y < r; y++) {
//         this._grid[x].push(d);
//       }
//     }
//   },
//
//   set:function (val, x, y) {
//     this._grid[x][y] = val;
//   },
//
//   get: function (x, y) {
//     return this._grid[x][y];
//   },
// }
//
//
// /**
// * Starts the game
// */
//
// function init() {
// 	score = 0;
//
// 	grid.init(EMPTY, COLS, ROWS);
//
// /**
//  * The game loop function, used for game updates and rendering
//  */
//
// function loop() {
// 	update();
// 	draw();
// 	// When ready to redraw the canvas call the loop function
// 	// first. Runs about 60 frames a second
// 	window.requestAnimationFrame(loop, canvas);
// }
//
// /**
//  * Updates the game logic
//  */
// function update() {
// 	frames++;
