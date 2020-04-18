function minPathSum(grid) {
  let steps = new Array(grid[0].length + 1).fill(Number.POSITIVE_INFINITY);
  steps[1] = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      steps[j + 1] = grid[i][j] + Math.min(steps[j], steps[j + 1]);
    }
  }
  return steps[steps.length - 1];
}

module.exports = minPathSum;
