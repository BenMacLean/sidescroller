console.log("player.js");

var SPACE=32;



var player = {
  hello: function () {
    return "I'm a player";
  },
  color: "#09f",
  x: 4,
  y: 18,

  jump: function(){
    this.y++;
  }
}
