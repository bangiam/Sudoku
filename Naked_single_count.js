function solveSudoku(board) {
  /**
   * Solve the Sudoku board using the naked single method.
   */
  let emptyCells = getEmptyCells(board);
  while (emptyCells.length > 0) {
    for (let i = 0; i < emptyCells.length; i++) {
      let [row, col] = emptyCells[i];
      let candidates = getCandidates(board, row, col);
      if (candidates.length === 1) {
        board[row][col] = candidates[0];
      }
    }
    emptyCells = getEmptyCells(board);
  }
}

function countNakedSingle(board) {
  /**
   * Count the number of times the naked single method is used to solve the Sudoku board.
   */
  let count = 0;
  let emptyCells = getEmptyCells(board);
  while (emptyCells.length > 0) {
    for (let i = 0; i < emptyCells.length; i++) {
      let [row, col] = emptyCells[i];
      let candidates = getCandidates(board, row, col);
      if (candidates.length === 1) {
        count += 1;
        board[row][col] = candidates[0];
      }
    }
    emptyCells = getEmptyCells(board);
  }
  return count;
}

// Example usage
let board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

solveSudoku(board);
let nakedSingleCount = countNakedSingle(board);

console.log("Sudoku solved using naked single method.");
console.log("Number of times naked single method used:", nakedSingleCount);