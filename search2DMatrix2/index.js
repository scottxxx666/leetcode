function search(matrix, target, row) {
  let start = 0;
  let end = matrix[0].length;
  let index = start;
  while (start <= end) {
    index = Math.floor((start + end) / 2);
    let temp = matrix[row][index];
    if (temp === target) {
      return true;
    }
    if (temp > target) {
      end = index - 1;
    } else {
      start = index + 1;
    }
  }
  return false;
}

module.exports = (matrix, target) => {
  let result = false;
  for (let i = 0; i < matrix.length; i++) {
    result = result || search(matrix, target, i);
  }
  return result;
};
