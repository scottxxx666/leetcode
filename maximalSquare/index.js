module.exports = (matrix) => {
  if (matrix.length === 0) {
    return 0;
  }
  const dp = new Array(matrix[0].length + 1).fill(0);

  let max = 0;
  for (let i = 1; i <= matrix.length; i++) {
    let prev = 0;
    for (let j = 1; j <= matrix[0].length; j++) {
      const temp = dp[j];
      if (matrix[i - 1][j - 1] === "1") {
        dp[j] = Math.min(dp[j], dp[j - 1], prev) + 1;
      } else {
        dp[j] = 0;
      }
      prev = temp;
    }
    max = Math.max(max, ...dp);
  }
  return max ** 2;
};
