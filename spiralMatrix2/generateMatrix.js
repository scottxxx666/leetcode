function notValid(nextI, result, nextJ) {
  return nextI < 0 || nextI >= result.length || nextJ < 0 || nextJ >= result.length || result[nextI][nextJ] !== undefined;
}

module.exports = function generateMatrix(n) {
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = new Array(n);
  }
  const map = [
    { i: 0, j: 1 },
    { i: 1, j: 0 },
    { i: 0, j: -1 },
    { i: -1, j: 0 },
  ];
  let i = 0;
  let j = 0;
  let direct = 0;
  for (let k = 1; k <= n ** 2; k++) {
    result[i][j] = k;
    if (notValid(i + map[direct].i, result, j + map[direct].j)) {
      direct = (direct + 1) % 4;
    }
    i = i + map[direct].i;
    j = j + map[direct].j;
  }
  return result;
};