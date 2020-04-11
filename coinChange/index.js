module.exports = (coins, amount) => {
  const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    const max = Math.floor(amount / coins[i]);
    for (let j = 1; j <= max; j++) {
      const key = coins[i] * j;
      dp[key] = Math.min(dp[key], j);
    }
  }
  for (let i = 1; i <= amount; i++) {
    for (let j = 1; j < i; j++) {
      if (dp[j] === Number.MAX_SAFE_INTEGER) {
        continue;
      }
      dp[i] = Math.min(dp[i - j] + dp[j], dp[i]);
    }
  }
  return dp[dp.length - 1] === Number.MAX_SAFE_INTEGER ? -1 : dp[dp.length - 1];
};
