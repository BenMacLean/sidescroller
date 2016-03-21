console.log("grid.js");


var grid = {
  hello: function () {
    return "I'm a grid";
  },

  numberOfColumns: 20,
  numberOfRows: 20,
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
  draw: function (x,y, canvas) {

  }

}
