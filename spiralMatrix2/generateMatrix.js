function sprial(result, number, i, j, direct) {
  if (number > result.length ** 2) {
    return;
  }
  result[i][j] = number;
  const map = [
    { i: 0, j: 1 },
    { i: 1, j: 0 },
    { i: 0, j: -1 },
    { i: -1, j: 0 },
  ];
  let nextI = i + map[direct].i;
  let nextJ = j + map[direct].j;
  if (nextI < 0 || nextI >= result.length || nextJ < 0 || nextJ >= result.length || result[nextI][nextJ] !== undefined) {
    direct = (direct + 1) % 4;
    nextI = i + map[direct].i;
    nextJ = j + map[direct].j;
  }
  sprial(result, ++number, nextI, nextJ, direct);
}

module.exports = function generateMatrix(n) {
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = new Array(n);
  }
  sprial(result, 1, 0, 0, 0);
  return result;
};