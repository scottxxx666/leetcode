module.exports = (matrix) => {
  if (matrix.length === 0) {
    return 0;
  }
  const dp = [];
  for (let i = 0; i < matrix.length; i++) {
    dp.push(new Array(matrix[0].length).fill(0));
  }

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === "1") {
      dp[i][0] = 1;
    }
  }
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === '1') {
      dp[0][i] = 1;
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === "0") {
        continue;
      }
      if (dp[i - 1][j] > 0 && dp[i][j - 1] > 0 && dp[i - 1][j - 1] > 0) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      } else {
        dp[i][j] = 1;
      }
    }
  }
  let max = 0;
  for (let i = 0; i < dp.length; i++) {
    max = Math.max(max, ...dp[i]);
  }
  return max ** 2;
};
