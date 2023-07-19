function countNakedPairs(sudoku) {
    let count = 0;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (sudoku[i][j].length === 2) { // Nếu ô có chính xác 2 số
          let pair = sudoku[i][j];
          // Kiểm tra xem có cặp số giống nhau nào khác trong cùng hàng hoặc cùng cột không
          for (let k = 0; k < 9; k++) {
            if (k !== j && sudoku[i][k] === pair) {
              count++;
              break;
            }
            if (k !== i && sudoku[k][j] === pair) {
              count++;
              break;
            }
          }
        }
      }
    }
    return count;
  }