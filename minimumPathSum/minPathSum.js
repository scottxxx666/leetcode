function minPathSum(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      let top = i === 0 ? Number.POSITIVE_INFINITY : grid[i - 1][j];
      let left = j === 0 ? Number.POSITIVE_INFINITY : grid[i][j - 1];
      grid[i][j] += Math.min(top, left);
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
}

module.exports = minPathSum;
