function search(result, board, word, set, i, j, wordIndex) {
  if (result.find === true) {
    return;
  }
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
    return;
  }
  const key = [i, j].join(',');
  if (set.has(key)) {
    return;
  }
  if (board[i][j] !== word[wordIndex]) {
    return;
  }
  if (set.size === word.length - 1) {
    result.find = true;
    return;
  }
  set.add(key);
  search(result, board, word, set, i - 1, j, wordIndex + 1);
  search(result, board, word, set, i + 1, j, wordIndex + 1);
  search(result, board, word, set, i, j - 1, wordIndex + 1);
  search(result, board, word, set, i, j + 1, wordIndex + 1);
  set.delete(key);
}

function wordSearch(board, word) {
  let result = {'find': false};
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      search(result, board, word, new Set(), i, j, 0);
    }
  }
  return result.find;
}

module.exports = wordSearch;
