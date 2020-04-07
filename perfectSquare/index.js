function generateSquares(n) {
  const result = [];
  for (let i = 1; i ** 2 <= n; i++) {
    result.push(i ** 2);
  }
  return result;
}

module.exports = (n) => {
  const squares = generateSquares(n);
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  for (let each of squares) {
    dp[each] = 1;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.min(dp[i], dp[j] + dp[i - j]);
    }
  }
  return dp[dp.length - 1];
};
