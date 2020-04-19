module.exports = (matrix, k) => {
  let low = matrix[0][0];
  let high = matrix[matrix.length - 1][matrix[0].length - 1];

  while (low <= high) {
    const target = Math.floor((low + high) / 2);
    let smaller = 0;
    let same = 0;
    let firstBig = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] < target) {
          smaller++;
        } else if (matrix[i][j] === target) {
          same++;
        }
        if (matrix[i][j] >= target) {
          firstBig = Math.min(firstBig, matrix[i][j]);
        }
      }
    }

    if (smaller + 1 === k) {
      return firstBig;
    } else if (smaller < k && smaller + same >= k) {
      return firstBig;
    } else if (smaller >= k) {
      high = target - 1;
    } else {
      low = target + 1;
    }
  }
};
