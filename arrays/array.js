function matrixSum(matrix1, matrix2) {
    var rows = matrix1.length;
    var column = matrix1[0].length;
    var result = [];
  
    for (var i = 0; i < rows; i++) {
      var row = [];
      for (var j = 0; j < column; j++) {
        row.push(matrix1[i][j] + matrix2[i][j]);
      }
      result.push(row);
    }
  
    return result;
  }
  
  var matrix1 = [];
  var matrix2 = [];
  
  // to enter the first matrix
  for (var i = 0; i < 2; i++) {
    var row = [];
    for (var j = 0; j < 2; j++) {
      row.push(parseFloat(prompt("Enter element [" + i + "][" + j + "] of the first matrix:")));
    }
    matrix1.push(row);
  }
  
  // to enter the second matrix
  for (var i = 0; i < 2; i++) {
    var row = [];
    for (var j = 0; j < 2; j++) {
      row.push(parseFloat(prompt("Enter element [" + i + "][" + j + "] of the second matrix:")));
    }
    matrix2.push(row);
  }
  
  var sumMatrix = matrixSum(matrix1, matrix2);
  
  alert("Sum of the matrices: " +sumMatrix );
