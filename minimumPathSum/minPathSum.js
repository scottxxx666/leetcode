function minPathSum(grid) {
  let steps = new Array(grid[0].length).fill(Number.POSITIVE_INFINITY);
  steps[0] = 0;
  for (let i = 0; i < grid.length; i++) {
    steps[0] += grid[i][0];
    for (let j = 1; j < steps.length; j++) {
      steps[j] = grid[i][j] + Math.min(steps[j - 1], steps[j]);
    }
  }
  return steps[steps.length - 1];
}

module.exports = minPathSum;
