function minPathSum(grid) {
  let steps = [...grid[0]];
  for (let i = 1; i < steps.length; i++) {
    steps[i] += steps[i - 1];
  }
  for (let i = 1; i < grid.length; i++) {
    steps[0] += grid[i][0];
    for (let j = 1; j < steps.length; j++) {
      steps[j] = grid[i][j] + Math.min(steps[j - 1], steps[j]);
    }
  }
  return steps[steps.length - 1];
}

module.exports = minPathSum;
