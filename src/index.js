module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
        if (matrix[row][col] === 0) {
          let s = suggest(row, col);
            for (var suggestion of s) {
                matrix[row][col] = suggestion;
                solveSudoku(matrix);
            }  
        }
    }
}
return matrix;
}

 function suggest(row,col) {
    let result = [];
    let zone = {
        row: Math.floor(row/3)*3,
        col: Math.floor(col/3)*3,
    };

    for (let i = 0; i < 9; i++) {
        result.push([matrix[row][i], matrix[i][col], matrix[zone.row + i % 3][zone.col + Math.floor(i / 3)]])
    }
    return result;
}
