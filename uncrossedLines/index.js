module.exports = (A, B) => {
  const dp = new Array(B.length + 1).fill(0);

  for (let i = 0; i < A.length; i++) {
    for (let j = B.length - 1; j >= 0; j--) {
      if (A[i] === B[j]) {
        dp[j + 1] = dp[j] + 1;
      }
    }
    for (let j = 0; j < B.length; j++) {
      dp[j + 1] = Math.max(dp[j], dp[j + 1]);
    }
  }
  return dp[dp.length - 1];
};
