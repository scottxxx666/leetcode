module.exports = function (board) {
  const map = new Map();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const target = board[i][j];
      if (target === '.') {
        continue;
      }
      const rowKey = `${target}-row-${i}`;
      const colKey = `${target}-col-${j}`;
      const boxKey = `${target}-box-${Math.floor(i / 3)},${Math.floor(j / 3)}`;
      if (map.has(rowKey) || map.has(colKey) || map.has(boxKey)) {
        return false;
      }
      map.set(rowKey, true);
      map.set(colKey, true);
      map.set(boxKey, true);
    }
  }
  return true;
};

