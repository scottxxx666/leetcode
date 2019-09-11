function search(result, board, word, i, j, wordIndex) {
  if (result.find === true) {
    return;
  }
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
    return;
  }
  if (board[i][j] !== word[wordIndex]) {
    return;
  }
  if (wordIndex === word.length - 1) {
    result.find = true;
    return;
  }
  const temp = board[i][j];
  board[i][j] = '';
  search(result, board, word, i - 1, j, wordIndex + 1);
  search(result, board, word, i + 1, j, wordIndex + 1);
  search(result, board, word, i, j - 1, wordIndex + 1);
  search(result, board, word, i, j + 1, wordIndex + 1);
  board[i][j] = temp;
}

function wordSearch(board, word) {
  let result = {'find': false};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      search(result, board, word, i, j, 0);
    }
  }
  return result.find;
}

module.exports = wordSearch;
