function countHiddenSingles(sudoku) {
    let count = 0;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (sudoku[i][j].length > 1) { // Nếu ô chưa điền
          let value = findHiddenSingle(sudoku, i, j);
          if (value !== null) { // Nếu ô đó có hidden single
            count++;
          }
        }
      }
    }
    return count;
  }
  
  function findHiddenSingle(sudoku, row, col) {
    let candidates = sudoku[row][col];
    // Kiểm tra hidden single trong hàng
    for (let k = 0; k < 9; k++) {
      if (k !== col && sudoku[row][k].includes(candidates[0])) {
        return null;
      }
    }
    // Kiểm tra hidden single trong cột
    for (let k = 0; k < 9; k++) {
      if (k !== row && sudoku[k][col].includes(candidates[0])) {
        return null;
      }
    }
    // Kiểm tra hidden single trong ô vuông 3x3
    let boxRow = Math.floor(row / 3) * 3;
    let boxCol = Math.floor(col / 3) * 3;
    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (i !== row && j !== col && sudoku[i][j].includes(candidates[0])) {
          return null;
        }
      }
    }
    return candidates[0]; // Trả về giá trị hidden single
  }
  