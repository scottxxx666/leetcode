module.exports = function spiralOrder(matrix) {
  if (matrix.length === 0) {
    return [];
  }
  let result = [];
  const step = [
    { i: 0, j: 1 },
    { i: 1, j: 0 },
    { i: 0, j: -1 },
    { i: -1, j: 0 },
  ];
  let i = 0;
  let j = 0;
  let direct = 0;
  for (let k = 0; k < matrix.length * matrix[0].length; k++) {
    result.push(matrix[i][j]);
    matrix[i][j] = null;
    let nextI = i + step[direct].i;
    let nextJ = j + step[direct].j;
    if (nextI < 0 || nextI >= matrix.length || nextJ < 0 || nextJ >= matrix[0].length || matrix[nextI][nextJ] === null) {
      direct = (direct + 1) % 4;
      i = i + step[direct].i;
      j = j + step[direct].j;
    } else {
      i = nextI;
      j = nextJ;
    }
  }
  return result;
};