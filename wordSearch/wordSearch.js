function search(board, word, i, j, wordIndex) {
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
    return false;
  }
  if (board[i][j] !== word[wordIndex]) {
    return false;
  }
  if (wordIndex === word.length - 1) {
    return true;
  }
  const temp = board[i][j];
  board[i][j] = '';
  const exist = search(board, word, i - 1, j, wordIndex + 1) ||
    search(board, word, i + 1, j, wordIndex + 1) ||
    search(board, word, i, j - 1, wordIndex + 1) ||
    search(board, word, i, j + 1, wordIndex + 1);
  board[i][j] = temp;
  return exist;
}

function wordSearch(board, word) {
  let result = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      result = result || search(board, word, i, j, 0);
    }
  }
  return result;
}

module.exports = wordSearch;
