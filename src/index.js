module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
        if (matrix[row][col] === 0) {
          let s = count(row, col, matrix);
            for (let suggestion of s) {
                matrix[row][col] = suggestion;
                solveSudoku(matrix);
            }
        }
    }
}
return matrix;
}

function count(row,col,matrix) {
  let result = [];
  row = help(row)*3;
  col = help(col)*3;

  for (let i = 0; i < 9; i++) {
      result.push([matrix[row][i], matrix[i][col], matrix[row + i % 3][col + help(i)]])
  }
  return result;
}

function help(a){
    return Math.floor(a/3);
}
