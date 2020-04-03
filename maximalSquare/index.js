module.exports = (matrix) => {
  if (matrix.length === 0) {
    return 0;
  }
  const dp = new Array(matrix[0].length).fill(0);

  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    let prev = 0;
    for (let j = 0; j < matrix[0].length; j++) {
      const temp = dp[j];
      if (matrix[i][j] === "1") {
        if (dp[j] > 0 && (j === 1 || dp[j - 1]) > 0 && prev > 0) {
          dp[j] = Math.min(dp[j], dp[j - 1], prev) + 1;
        } else {
          dp[j] = 1;
        }
      } else {
        dp[j] = 0;
      }
      prev = temp;
    }
    max = Math.max(max, ...dp);
  }
  return max ** 2;
};
