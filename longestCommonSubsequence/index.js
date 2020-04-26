module.exports = (text1, text2) => {
  const dp = new Array(text2.length + 1).fill(0);
  for (let i = 0; i < text1.length; i++) {
    let last = 0;
    for (let j = 0; j < text2.length; j++) {
      const result = text1[i] === text2[j] ? last + 1 : Math.max(dp[j + 1], dp[j]);
      last = dp[j + 1];
      dp[j + 1] = result;
    }
  }
  return dp[dp.length - 1];
};
