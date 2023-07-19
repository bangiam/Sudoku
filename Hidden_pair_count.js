function countHiddenPairs(sudoku) {
    let count = 0;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (sudoku[i][j].length > 2) { // Nếu ô chưa điền và có ít nhất 3 số ứng cử viên
          let pairs = findHiddenPairs(sudoku, i, j);
          if (pairs.length > 0) { // Nếu ô đó có hidden pair
            count++;
          }
        }
      }
    }
    return count;
  }
  
  function findHiddenPairs(sudoku, row, col) {
    let candidates = sudoku[row][col];
    let pairs = [];
    // Kiểm tra hidden pair trong hàng
    for (let k = 0; k < 9; k++) {
      if (k !== col && arraysEqual(sudoku[row][k], candidates)) {
        pairs.push([row, col, row, k]);
      }
    }
    // Kiểm tra hidden pair trong cột
    for (let k = 0; k < 9; k++) {
      if (k !== row && arraysEqual(sudoku[k][col], candidates)) {
        pairs.push([row, col, k, col]);
      }
    }
    // Kiểm tra hidden pair trong ô vuông 3x3
    let boxRow = Math.floor(row / 3) * 3;
    let boxCol = Math.floor(col / 3) * 3;
    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (i !== row && j !== col && arraysEqual(sudoku[i][j], candidates)) {
          pairs.push([row, col, i, j]);
        }
      }
    }
    return pairs; // Trả về danh sách hidden pair
  }
  
  function arraysEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
  