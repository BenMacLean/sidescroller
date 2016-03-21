console.log("grid.js"); //is it loading


var grid = { //grid object
  hello: function () {
    return "I'm a grid";
  },

  numberOfColumns: 20,
  numberOfRows: 20,
  cellWidth: 20,


  map: [], //the 2d array of where cells are stored
  init: function () { //rebuilds the whole map with zeros as every element
    for (var columnIndex = 0; columnIndex < this.numberOfColumns; columnIndex++) {//iterate over all the colms
      var builtRow=[];//the array that we want to insert at this column index

      for (var rowIndex = 0; rowIndex < this.numberOfRows; rowIndex++) {//iterate over all the rows
        builtRow.push(0);//at each row, put the value zero in the builtRow array
      }
      this.map.push(builtRow)//add that built row to the map
    }
  },
  draw: function (obj, canvas) {
    	canvas.fillStyle = obj.color;
    canvas.fillRect(obj.x*this.cellWidth, obj.y*this.cellWidth, this.cellWidth, this.cellWidth);

  },
  clean: function (canvas){
     canvas.fillStyle = "#000";
     canvas.fillRect(0,0, 1000, 1000);
  }

}
