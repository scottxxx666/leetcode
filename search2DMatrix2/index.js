module.exports = (matrix, target) => {
  let i = 0;
  let j = matrix[0] ? matrix[0].length - 1 : -1;
  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    }
    if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return false;
};
