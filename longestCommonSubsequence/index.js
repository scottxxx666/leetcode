module.exports = (text1, text2) => {
  const dp = new Array(text1.length + 1).fill(null);
  for (let i = 0; i < text1.length + 1; i++) {
    dp[i] = new Array(text2.length + 1).fill(0);
  }
  for (let i = 0; i < text1.length; i++) {
    for (let j = 0; j < text2.length; j++) {
      dp[i + 1][j + 1] = text1[i] === text2[j] ? dp[i][j] + 1 : Math.max(dp[i][j + 1], dp[i + 1][j]);
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
};
