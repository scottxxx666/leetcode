function swap(matrix, a, b, i, j) {
  [matrix[i][j], matrix[a][b]] = [matrix[a][b], matrix[i][j]];
}

function rotate(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      swap(matrix, i, j, i, matrix.length - 1 - j);
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length - i; j++) {
      swap(matrix, i, j, matrix.length - 1 - j, matrix.length - 1 - i);
    }
  }
  return matrix;
}

module.exports = rotate;
