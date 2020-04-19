module.exports = (matrix, k) => {
  let low = matrix[0][0];
  let high = matrix[matrix.length - 1][matrix[0].length - 1];

  while (low < high) {
    const target = Math.floor((low + high) / 2);
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
      let j = matrix[0].length - 1;
      while (j >= 0 && matrix[i][j] > target) {
        j--;
      }
      count += j + 1;
    }

    if (count >= k) {
      high = target;
    } else {
      low = target + 1;
    }
  }
  return low;
};
