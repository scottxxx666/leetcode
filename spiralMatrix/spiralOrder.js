function isFailed(i, matrix, j) {
  return i < 0 || i >= matrix.length || j < 0 || j >= matrix[0].length || matrix[i][j] === null;
}

function spiral(matrix, i, j, result, direct) {
  result.push(matrix[i][j]);
  matrix[i][j] = null;
  const step = [
    { i: 0, j: 1 },
    { i: 1, j: 0 },
    { i: 0, j: -1 },
    { i: -1, j: 0 },
  ];
  let nextI = i + step[direct].i;
  let nextJ = j + step[direct].j;
  let count = 0;
  while (isFailed(nextI, matrix, nextJ)) {
    direct = (direct + 1) % 4;
    count++;
    nextI = i + step[direct].i;
    nextJ = j + step[direct].j;
    if (count >= 4) {
      return;
    }
  }
  spiral(matrix, nextI, nextJ, result, direct);
}

module.exports = function spiralOrder(matrix) {
  let i = 0;
  let j = 0;
  let result = [];
  if (matrix.length === 0) {
    return [];
  }
  spiral(matrix, i, j, result, 0);
  return result;
};