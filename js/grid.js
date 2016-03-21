console.log("grid.js");


var grid = {
  hello: function () {
    return "I'm a grid";
  },

  numberOfColumns: 20,
  numberOfRows: 20,
  cellWidth: 20,


  map: [],
  init: function () {
    for (var columnIndex = 0; columnIndex < this.numberOfColumns; columnIndex++) {
      var builtRow=[];

      for (var rowIndex = 0; rowIndex < this.numberOfRows; rowIndex++) {
        builtRow.push(0);

      }
      this.map.push(builtRow)
    }
  },
  draw: function (obj, canvas) {
    	canvas.fillStyle = obj.color;
    canvas.fillRect(obj.x*this.cellWidth, obj.y*this.cellWidth, this.cellWidth, this.cellWidth);

  }

}
