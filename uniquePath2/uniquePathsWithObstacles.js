module.exports = function divide(obstacleGrid) {
  const dp = new Array(obstacleGrid.length);
  for (let i = 0; i < obstacleGrid.length; i++) {
    dp[i] = new Array(obstacleGrid[0].length);
  }

  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
        continue;
      }
      if (i === 0 && j === 0) {
        dp[i][j] = 1;
        continue;
      }
      const left = j === 0 ? 0 : dp[i][j - 1];
      const up = i === 0 ? 0 : dp[i - 1][j];
      dp[i][j] = left + up;
    }
  }
  return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};
