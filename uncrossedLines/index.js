module.exports = (A, B) => {
  const dp = new Array(B.length + 1).fill(0);

  for (let i = 0; i < A.length; i++) {
    let last = 0;
    for (let j = 0; j < B.length; j++) {
      const temp = dp[j + 1];
      if (A[i] === B[j]) {
        dp[j + 1] = last + 1;
      } else {
        dp[j + 1] = Math.max(dp[j], dp[j + 1]);
      }
      last = temp;
    }
  }
  return dp[dp.length - 1];
};
