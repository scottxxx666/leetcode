module.exports = (A, B) => {
  const dp = [];
  for (let i = 0; i <= A.length; i++) {
    dp.push(new Array(B.length + 1).fill(0));
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      if (A[i] === B[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1]);
      }
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
};
