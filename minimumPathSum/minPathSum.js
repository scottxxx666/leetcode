function minPathSum(grid, m = 0, n = 0) {
  if (m === grid.length - 1 && n === grid[0].length - 1) {
    return grid[m][n];
  }
  let right = Number.POSITIVE_INFINITY;
  let down = Number.POSITIVE_INFINITY;
  if (m < grid.length - 1) {
    right = minPathSum(grid, m + 1, n);
  }
  if (n < grid[0].length - 1) {
    down = minPathSum(grid, m, n + 1);
  }
  return grid[m][n] + Math.min(right, down);
}

module.exports = minPathSum;
