module.exports = (coins, amount) => {
  const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
      }
    }
  }
  return dp[dp.length - 1] === Number.MAX_SAFE_INTEGER ? -1 : dp[dp.length - 1];
};
