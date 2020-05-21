module.exports = (matrix) => {
  const dp = new Array(matrix.length + 1).fill(null);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(matrix[0].length + 1).fill(0);
  }

  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        continue;
      }
      if (dp[i][j + 1] > 0 && dp[i + 1][j] > 0) {
        dp[i + 1][j + 1] = Math.min(dp[i][j], dp[i + 1][j], dp[i][j + 1]) + 1;
      } else {
        dp[i + 1][j + 1] = 1;
      }
      sum += dp[i + 1][j + 1];
    }
  }

  return sum;
};
