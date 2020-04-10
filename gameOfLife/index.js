function countNext(board, i, j) {
  let neighbor = 0;
  const col = board[0].length;
  for (let k = i - 1; k <= i + 1; k++) {
    for (let l = j - 1; l <= j + 1; l++) {
      if (k < 0 || k >= board.length || l < 0 || l >= col || (k === i && l === j)) {
        continue;
      }
      if ([1, 3, 4].includes(board[k][l])) {
        neighbor++;
      }
    }
  }
  return neighbor;
}

module.exports = (board) => {
  const row = board.length;
  const col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let neighbor = countNext(board, i, j);
      if (board[i][j] === 1) {
        board[i][j] = neighbor > 3 || neighbor < 2 ? 4 : 3;
      } else {
        board[i][j] = neighbor === 3 ? 5 : 6;
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      board[i][j] %= 2;
    }
  }
};
