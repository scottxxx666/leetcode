module.exports = function divide(obstacleGrid) {
  const dp = new Array(obstacleGrid[0].length).fill(0);
  dp[0] = 1;

  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[j] = 0;
      } else if (j !== 0) {
        dp[j] += dp[j - 1];
      }
    }
  }
  return dp[obstacleGrid[0].length - 1];
};
